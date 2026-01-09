# Form3DAI - AI-Powered 3D Printing Consultancy

A world-class, stunning, and innovative website for Form3DAI, an AI-based 3D printing consultancy company specializing in material selection, technology selection, services, and project management. We focus on resin-based printers and serve industrial clients to common users in India, where additive manufacturing potential is yet to be fully recognized.

## 🚀 Features

### 🎨 **Stunning Visual Design**
- Modern gradient backgrounds and color schemes
- Professional hero sections with background images
- Smooth animations and transitions
- Custom scrollbar design
- Responsive design for all devices
- Interactive hover effects and transforms

### 🤖 **AI-Powered Tools**
- **Live AI Analyzer**: Real-time streaming chat with AI consultant for instant 3D printing advice
- Interactive AI Recommendation Engine with multiple technology options (SLA, FDM, SLS)
- Real-time material and technology suggestions
- Smart form-based project analysis
- Context-aware AI responses based on user project details

### 📄 **Comprehensive Pages**
1. **Home** - Hero section, services overview, AI features, statistics, testimonials, and CTAs
2. **Services** - Detailed service descriptions with stunning image panels
3. **AI Tool** - Interactive recommendation engine with dual-panel interface
4. **About** - Mission, vision, team values, and company highlights
5. **Contact** - Professional contact form with business information

### 🎯 **Key Services**
- Material Selection (AI-driven resin recommendations)
- Technology Selection (SLA, DLP, LCD expertise)
- Project Management (End-to-end support)
- AI Consulting (Predictive analytics)
- Training & Education (Workshops and certifications)
- Custom Solutions (Bespoke consultancy)

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion (installed but ready for implementation)
- **AI Integration**: OpenAI API with streaming responses
- **Images**: Next.js Image optimization with Unsplash integration
- **Build**: Turbopack for fast development

## 🔑 API Setup

### OpenAI API Configuration

1. **Get your OpenAI API key**:
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create a new API key
   - Copy the key (keep it secure!)

2. **Configure environment variables**:
   ```bash
   # Create .env.local file in project root
   echo "OPENAI_API_KEY=your_actual_api_key_here" > .env.local
   ```

3. **API Features**:
   - **Live AI Analyzer**: Real-time streaming chat for 3D printing consultation
   - **Context-aware responses**: Uses form data to provide personalized advice
   - **Multiple technology recommendations**: SLA, FDM, SLS suggestions
   - **Cost-effective model**: Uses GPT-4o-mini for fast, affordable responses

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

The development server runs at: **http://localhost:3000**

All pages are pre-rendered as static content for optimal performance.

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home page with hero, services, AI section, stats, testimonials
│   ├── services/
│   │   └── page.tsx       # Detailed services with image panels
│   ├── ai-tool/
│   │   └── page.tsx       # Interactive AI recommendation engine
│   ├── about/
│   │   └── page.tsx       # About us with mission, vision, values
│   ├── contact/
│   │   └── page.tsx       # Contact form and information
│   ├── layout.tsx         # Root layout with Header and Footer
│   └── globals.css        # Global styles and animations
└── components/
    ├── Header.tsx         # Sticky header with navigation
    └── Footer.tsx         # Professional footer with links
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradients (#2563eb to #9333ea)
- **Secondary**: Purple and Pink gradients
- **Accent**: Green for success states
- **Background**: Soft gradient from gray-50 via blue-50 to purple-50

### Typography
- **Headings**: Extrabold with gradient text effects
- **Body**: Clear, readable with proper line-height
- **CTAs**: Bold with rounded pill buttons

### Interactive Elements
- Hover scale and shadow effects
- Smooth color transitions
- Animated icons and badges
- Gradient backgrounds on cards
- Professional form styling

## 🚀 Deployment

Deploy easily on Vercel, Netlify, or any platform supporting Next.js.

```bash
# Build for production
npm run build
```

## 📈 Future Enhancements

- Real AI/ML model integration
- Live chat support
- 3D model viewer
- Project gallery
- Client portal
- Payment integration
- Blog section
- Multi-language support

## 📞 Contact

- **Email**: info@form3dai.com
- **Website**: Form3DAI
- **Location**: India

---

**© 2026 Form3DAI. All rights reserved.**

Empowering India's Additive Manufacturing Revolution 🚀
