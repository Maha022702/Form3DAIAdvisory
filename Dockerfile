# Build stage
FROM node:20-slim as builder

WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build Next.js
RUN npm run build

# Runtime stage - Use Python-based image with better library support
FROM python:3.11-slim

WORKDIR /app

# Install Node.js for Next.js runtime and 3D processing dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    gnupg \
    ca-certificates \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y --no-install-recommends \
    nodejs \
    && rm -rf /var/lib/apt/lists/*

# Install Python packages for 3D file processing
RUN pip install --no-cache-dir trimesh numpy

# Copy from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install production dependencies only
RUN npm ci --only=production

# Expose port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', r => r.statusCode === 200 ? process.exit(0) : process.exit(1))"

# Start application
CMD ["npm", "run", "start"]
