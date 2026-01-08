'use client';
import Link from 'next/link';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-black/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition">
          <Sparkles className="w-8 h-8 text-cyan-400" />
          Form3DAIAdvisory
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-cyan-400 font-medium transition">Home</Link>
          <Link href="/services" className="text-gray-300 hover:text-cyan-400 font-medium transition">Services</Link>
          <Link href="/ai-tool" className="text-gray-300 hover:text-cyan-400 font-medium transition">AI Tool</Link>
          <Link href="/about" className="text-gray-300 hover:text-cyan-400 font-medium transition">About</Link>
          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition transform hover:scale-105">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/ai-tool" className="text-gray-300 hover:text-cyan-400 font-medium" onClick={() => setMobileMenuOpen(false)}>AI Tool</Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold text-center" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}