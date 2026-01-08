'use client';
import { useState } from 'react';
import { Sparkles, Cpu, Zap, CheckCircle, ArrowRight, Box } from 'lucide-react';

export default function AITool() {
  const [formData, setFormData] = useState({
    projectType: '',
    material: '',
    budget: '',
    quantity: '',
    strength: '',
    detail: ''
  });
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-16">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 px-6 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">AI-Powered Recommendation Engine</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-6">
            <span className="text-white">3D Printing </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Material & Technology Advisor</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get instant AI-powered recommendations for the perfect material and technology for your 3D printing project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Panel */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Project Details</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-cyan-500 focus:outline-none transition text-white"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  required
                >
                  <option value="" className="bg-gray-900">Select project type</option>
                  <option value="prototype" className="bg-gray-900">Prototype</option>
                  <option value="production" className="bg-gray-900">Production Part</option>
                  <option value="jewelry" className="bg-gray-900">Jewelry</option>
                  <option value="dental" className="bg-gray-900">Dental</option>
                  <option value="miniature" className="bg-gray-900">Miniature/Model</option>
                  <option value="engineering" className="bg-gray-900">Engineering</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Preferred Material Type
                </label>
                <select
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-cyan-500 focus:outline-none transition text-white"
                  value={formData.material}
                  onChange={(e) => setFormData({...formData, material: e.target.value})}
                  required
                >
                  <option value="" className="bg-gray-900">Select material preference</option>
                  <option value="standard" className="bg-gray-900">Standard</option>
                  <option value="tough" className="bg-gray-900">Tough/Engineering</option>
                  <option value="flexible" className="bg-gray-900">Flexible</option>
                  <option value="castable" className="bg-gray-900">Castable</option>
                  <option value="dental" className="bg-gray-900">Dental Grade</option>
                  <option value="transparent" className="bg-gray-900">Transparent</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Budget Range (INR)
                </label>
                <select
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-cyan-500 focus:outline-none transition text-white"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  required
                >
                  <option value="" className="bg-gray-900">Select budget range</option>
                  <option value="low" className="bg-gray-900">Under ₹50,000</option>
                  <option value="medium" className="bg-gray-900">₹50,000 - ₹2,00,000</option>
                  <option value="high" className="bg-gray-900">₹2,00,000 - ₹5,00,000</option>
                  <option value="premium" className="bg-gray-900">Above ₹5,00,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Production Quantity
                </label>
                <select
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-cyan-500 focus:outline-none transition text-white"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  required
                >
                  <option value="" className="bg-gray-900">Select quantity</option>
                  <option value="single" className="bg-gray-900">1-10 pieces</option>
                  <option value="small" className="bg-gray-900">11-50 pieces</option>
                  <option value="medium" className="bg-gray-900">51-200 pieces</option>
                  <option value="large" className="bg-gray-900">200+ pieces</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Strength Required
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-cyan-500 focus:outline-none transition text-white"
                    value={formData.strength}
                    onChange={(e) => setFormData({...formData, strength: e.target.value})}
                    required
                  >
                    <option value="" className="bg-gray-900">Select</option>
                    <option value="low" className="bg-gray-900">Low</option>
                    <option value="medium" className="bg-gray-900">Medium</option>
                    <option value="high" className="bg-gray-900">High</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Detail Level
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-cyan-500 focus:outline-none transition text-white"
                    value={formData.detail}
                    onChange={(e) => setFormData({...formData, detail: e.target.value})}
                    required
                  >
                    <option value="" className="bg-gray-900">Select</option>
                    <option value="low" className="bg-gray-900">Low</option>
                    <option value="medium" className="bg-gray-900">Medium</option>
                    <option value="high" className="bg-gray-900">High</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Get AI Recommendations
              </button>
            </form>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            {!showResults ? (
              <div className="relative bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full flex flex-col justify-center items-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-2 bg-[#0a0a0f] rounded-full flex items-center justify-center">
                      <Box className="w-10 h-10 text-purple-400 animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">AI Analysis Ready</h3>
                  <p className="text-gray-400 text-lg max-w-md">
                    Fill in your project details and our AI will analyze thousands of material properties
                    and printer specifications to provide you with the perfect recommendations.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-cyan-400" />
                    <h2 className="text-2xl font-bold text-white">Recommended Material</h2>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 mb-4">
                    <h3 className="text-xl font-bold mb-2 text-cyan-400">Standard Tough Material</h3>
                    <p className="text-gray-400 mb-4">Perfect balance of strength, detail, and cost-effectiveness for your project</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-3 rounded-lg">
                        <div className="text-sm text-gray-500">Tensile Strength</div>
                        <div className="font-semibold text-white">65 MPa</div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg">
                        <div className="text-sm text-gray-500">Elongation</div>
                        <div className="font-semibold text-white">12%</div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg">
                        <div className="text-sm text-gray-500">Cost/kg</div>
                        <div className="font-semibold text-white">₹8,500</div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg">
                        <div className="text-sm text-gray-500">Match Score</div>
                        <div className="font-semibold text-cyan-400">95%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Cpu className="w-8 h-8 text-purple-400" />
                    <h2 className="text-2xl font-bold text-white">Recommended Technologies</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-2 text-purple-400">SLA (Stereolithography)</h3>
                      <p className="text-gray-400 mb-4">Best for high-detail production with excellent surface finish</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">Layer resolution: 25-100 microns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">Excellent surface finish</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">Wide material compatibility</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-2 text-blue-400">FDM (Fused Deposition Modeling)</h3>
                      <p className="text-gray-400 mb-4">Ideal for functional prototypes and cost-effective production</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">Layer resolution: 100-300 microns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">Strong mechanical properties</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">Cost-effective for large parts</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-2 text-green-400">SLS (Selective Laser Sintering)</h3>
                      <p className="text-gray-400 mb-4">Perfect for complex geometries and functional parts</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">No support structures needed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">Excellent mechanical properties</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">Complex geometries possible</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition transform hover:scale-105 flex items-center justify-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}