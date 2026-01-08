'use client';
import { Sparkles, Zap, Shield, Cpu, Users, ArrowRight, CheckCircle, Star, Layers, Box, Settings } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section with 3D Printing Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#1e1b4b]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0\" style={{backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        </div>
        
        {/* Floating 3D Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* 3D Printer Illustration */}
        <div className="absolute right-10 top-1/4 hidden lg:block opacity-30">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-lg transform rotate-12"></div>
            <div className="absolute inset-4 border border-purple-500/30 rounded-lg transform -rotate-6"></div>
            <div className="absolute inset-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
              <Layers className="w-20 h-20 text-cyan-400/50 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-6 py-2 rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">AI-Powered 3D Printing Consultancy</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-white">Transform Your Ideas Into</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Reality with 3D Printing</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-400">
            Expert guidance in material selection, technology choices, and project management.
            Empowering India&apos;s additive manufacturing future with cutting-edge AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/services" className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition transform hover:scale-105 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/ai-tool" className="bg-white/5 border border-white/20 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition transform hover:scale-105 backdrop-blur-sm">
              Try AI Tool
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-4 text-white">Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span></h2>
            <p className="text-xl text-gray-400">Comprehensive AI-powered solutions for your 3D printing needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Material Selection</h3>
              <p className="text-gray-400 mb-6">
                AI-driven recommendations for perfect materials based on your project needs, performance requirements, and budget.
              </p>
              <Link href="/services" className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Technology Selection</h3>
              <p className="text-gray-400 mb-6">
                Choose the right 3D printing technology with our expert analysis, AI insights, and comprehensive comparisons.
              </p>
              <Link href="/services" className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Project Management</h3>
              <p className="text-gray-400 mb-6">
                End-to-end project management for successful 3D printing implementations with quality assurance.
              </p>
              <Link href="/services" className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Feature Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0f]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="font-semibold">AI Powered</span>
              </div>
              <h2 className="text-5xl font-extrabold mb-6 text-white">Intelligence Meets <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Innovation</span></h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Our cutting-edge AI algorithms analyze your requirements and provide personalized recommendations,
                making 3D printing accessible to everyone.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-white">Smart Material Matching</h4>
                    <p className="text-gray-400">AI analyzes 1000+ material properties instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-white">Predictive Analytics</h4>
                    <p className="text-gray-400">Forecast project outcomes with 95% accuracy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-white">Cost Optimization</h4>
                    <p className="text-gray-400">Reduce material waste by up to 40%</p>
                  </div>
                </div>
              </div>
              
              <Link href="/ai-tool" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition transform hover:scale-105">
                Try AI Recommendation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              {/* 3D Printing Visual */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-8 rounded-3xl">
                  <div className="aspect-square bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* 3D Printer Animation */}
                    <div className="absolute inset-4 border border-cyan-500/30 rounded-xl"></div>
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
                    
                    <div className="text-center">
                      <Box className="w-24 h-24 mx-auto text-cyan-400 mb-4 animate-pulse" />
                      <div className="text-white font-bold text-xl">AI Analysis</div>
                      <div className="text-cyan-400 text-sm mt-2">Processing...</div>
                    </div>
                    
                    {/* Layer Lines */}
                    <div className="absolute bottom-8 left-8 right-8 space-y-1">
                      <div className="h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent rounded"></div>
                      <div className="h-0.5 bg-gradient-to-r from-purple-500/40 to-transparent rounded"></div>
                      <div className="h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent rounded"></div>
                    </div>
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-2xl shadow-lg shadow-cyan-500/25">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-xs text-cyan-100">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-400 font-semibold">Projects Completed</div>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-400 font-semibold">Client Satisfaction</div>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-2">1000+</div>
              <div className="text-gray-400 font-semibold">Material Database</div>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-400 font-semibold">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[#0a0a0f]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-white">What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Clients Say</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-cyan-500/30 transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-300 mb-6 italic">&quot;Form3DAdvisory transformed our manufacturing process. Their AI recommendations saved us 40% in material costs!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">RK</div>
                <div>
                  <div className="font-semibold text-white">Rajesh Kumar</div>
                  <div className="text-sm text-gray-500">Manufacturing Director</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-500/30 transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-300 mb-6 italic">&quot;The best 3D printing consultancy in India. Their expertise is unmatched.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">PS</div>
                <div>
                  <div className="font-semibold text-white">Priya Sharma</div>
                  <div className="text-sm text-gray-500">Product Designer</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-blue-500/30 transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-300 mb-6 italic">&quot;Outstanding service! They helped us select the perfect printer and materials for our startup.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">AM</div>
                <div>
                  <div className="font-semibold text-white">Amit Mehta</div>
                  <div className="text-sm text-gray-500">Startup Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')"}}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Layers className="w-16 h-16 mx-auto text-white mb-6" />
          <h2 className="text-5xl font-extrabold mb-6 text-white">Ready to Transform Your 3D Printing?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join 500+ satisfied clients who trust Form3DAdvisory for expert consultancy and AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-2xl">
              Contact Us Now
            </Link>
            <Link href="/services" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/20 transition transform hover:scale-105">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
