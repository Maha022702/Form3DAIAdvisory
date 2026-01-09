import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Form3DAI</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-Powered 3D Printing Consultancy transforming India&apos;s manufacturing future.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-cyan-400 transition">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-cyan-400 transition">Services</Link></li>
              <li><Link href="/ai-tool" className="text-gray-400 hover:text-cyan-400 transition">AI Tool</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Material Selection</li>
              <li className="text-gray-400">Technology Selection</li>
              <li className="text-gray-400">Project Management</li>
              <li className="text-gray-400">AI Consulting</li>
              <li className="text-gray-400">Training & Education</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-cyan-400" />
                <span>info@form3dai.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-cyan-400" />
                <span>+91 9787949512</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-cyan-400" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">&copy; 2026 Form3DAI. All rights reserved.</p>
          <p className="text-gray-500 mt-2">Empowering India&apos;s Additive Manufacturing Revolution</p>
        </div>
      </div>
    </footer>
  );
}