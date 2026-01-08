'use client';
import { Zap, Cpu, Shield, Sparkles, GraduationCap, Wrench, ArrowRight, CheckCircle, Layers } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "Material Selection",
      description: "Our AI analyzes your project requirements to recommend the best materials, considering factors like strength, flexibility, temperature resistance, and cost.",
      features: ["Material recommendations", "Performance analysis", "Cost optimization", "Material database access"],
      color: "from-cyan-500 to-blue-600",
      accent: "cyan"
    },
    {
      icon: Cpu,
      title: "Technology Selection",
      description: "Choose the right 3D printing technology for your needs. We provide expert guidance on SLA, DLP, LCD, FDM, and SLS technologies.",
      features: ["Printer comparison", "Workflow optimization", "Scalability assessment", "Technology roadmap"],
      color: "from-purple-500 to-pink-600",
      accent: "purple"
    },
    {
      icon: Shield,
      title: "Project Management",
      description: "End-to-end project management for your 3D printing initiatives, from concept to production, ensuring timely delivery and quality results.",
      features: ["Timeline planning", "Quality control", "Risk management", "Delivery tracking"],
      color: "from-blue-500 to-indigo-600",
      accent: "blue"
    },
    {
      icon: Sparkles,
      title: "AI Consulting",
      description: "Leverage our AI-powered tools for predictive analytics, design optimization, and automated quality checks in your 3D printing processes.",
      features: ["Predictive maintenance", "Design optimization", "Quality assurance", "AI integration"],
      color: "from-indigo-500 to-purple-600",
      accent: "indigo"
    },
    {
      icon: GraduationCap,
      title: "Training & Education",
      description: "Educate your team on additive manufacturing best practices. We offer workshops and training programs tailored for industrial and individual users in India.",
      features: ["Hands-on workshops", "Certification programs", "Knowledge transfer", "Ongoing support"],
      color: "from-green-500 to-cyan-600",
      accent: "green"
    },
    {
      icon: Wrench,
      title: "Custom Solutions",
      description: "Bespoke consultancy services for unique challenges in 3D printing, including R&D support and innovative application development.",
      features: ["R&D collaboration", "Custom tooling", "Innovation consulting", "Prototype development"],
      color: "from-orange-500 to-red-600",
      accent: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-16">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-6 py-2 rounded-full mb-6">
            <Layers className="w-5 h-5" />
            <span className="font-semibold">Expert Consultancy Services</span>
          </div>
          <h1 className="text-6xl font-extrabold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI-powered consultancy services for all your 3D printing needs. 
            From material selection to project completion, we&apos;ve got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="relative group">
                    <div className={`absolute -inset-4 bg-gradient-to-r ${service.color} rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}></div>
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                      <div className={`w-full h-80 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
                        <Icon className={`w-32 h-32 text-${service.accent}-400 relative z-10`} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={isEven ? '' : 'lg:order-1'}>
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} p-4 rounded-2xl mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 text-white">{service.title}</h2>
                  <p className="text-lg text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/5">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/contact" className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-${service.accent}-500/25 transition transform hover:scale-105`}>
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-24 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="relative z-10 p-12 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
              Let&apos;s discuss how our services can transform your 3D printing projects. 
              Get in touch with our experts today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
                Contact Us
              </Link>
              <Link href="/ai-tool" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/20 transition transform hover:scale-105">
                Try AI Tool
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}