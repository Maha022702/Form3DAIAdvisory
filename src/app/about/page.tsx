'use client';
import { Target, Eye, Award, Users, Sparkles, CheckCircle, TrendingUp, Layers, Box } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] py-16">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-6 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">About Us</span>
          </div>
          <h1 className="text-6xl font-extrabold mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Form3DAI</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pioneering India&apos;s 3D printing revolution with cutting-edge AI technology and world-class expertise
          </p>
        </div>

        {/* Hero Visual */}
        <div className="mb-20 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl opacity-20 blur-2xl"></div>
          <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-16 overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
            
            <div className="flex items-center justify-center h-64 relative z-10">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl opacity-30 animate-pulse"></div>
                  <div className="absolute inset-2 bg-[#0f172a] rounded-xl flex items-center justify-center">
                    <Layers className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white">Innovating 3D Printing in India</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition"></div>
            <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-10">
              <Target className="w-12 h-12 text-cyan-400 mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                At Form3DAI, we&apos;re on a mission to democratize additive manufacturing in India.
                We believe that 3D printing has the potential to revolutionize industries and empower
                individuals, yet its potential remains largely untapped in our country. Our AI-powered
                consultancy bridges this gap by providing expert guidance accessible to everyone,
                from industrial giants to curious hobbyists.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition"></div>
            <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-10">
              <Eye className="w-12 h-12 text-purple-400 mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                We envision a future where 3D printing is as common as traditional manufacturing
                in India. By combining cutting-edge AI technology with deep domain expertise,
                we&apos;re working to make additive manufacturing accessible, affordable, and
                innovative for businesses and individuals across the country.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Why <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Choose Us?</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">AI-Powered Insights</h3>
              <p className="text-gray-400">
                Our proprietary AI algorithms analyze vast amounts of data to provide
                personalized recommendations for material selection and technology choices.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">3D Print Expertise</h3>
              <p className="text-gray-400">
                Specializing in 3D printing technologies, we offer deep expertise
                in SLA, DLP, LCD, FDM, and SLS printing methods.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Local Market Understanding</h3>
              <p className="text-gray-400">
                With a deep understanding of the Indian market, we provide contextually relevant
                solutions that consider local challenges and opportunities.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">End-to-End Support</h3>
              <p className="text-gray-400">
                From initial consultation to project completion, we provide comprehensive
                support throughout your 3D printing journey.
              </p>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">What Sets Us <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Apart</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
              <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2 text-white">Industry-Leading AI Technology</h4>
                <p className="text-gray-400">Our proprietary AI engine processes over 1000+ material properties and printer specifications to deliver 95% accurate recommendations.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
              <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2 text-white">Proven Track Record</h4>
                <p className="text-gray-400">Over 500 successful projects completed across industries including automotive, healthcare, jewelry, and consumer products.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
              <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2 text-white">Cost Optimization</h4>
                <p className="text-gray-400">Our clients save an average of 40% on material costs and reduce production time by 30% through our optimized workflows.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2 text-white">Continuous Innovation</h4>
                <p className="text-gray-400">We stay ahead of the curve with regular updates to our AI models and partnerships with leading material and printer manufacturers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="relative z-10 p-12 text-center">
            <Box className="w-16 h-16 mx-auto text-white mb-6" />
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your 3D Printing Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
              Contact us today to discuss how we can help you harness the power of additive manufacturing
              with our AI-powered consultancy services.
            </p>
            <a href="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}