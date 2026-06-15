"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 md:w-12 md:h-12 relative filter drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] group-hover:scale-105 transition-transform duration-300">
            <img src="/logo.png" alt="Bae's Food Central Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <div className="text-xl md:text-2xl font-serif font-bold text-gold-500 tracking-widest leading-none">
              Bae&apos;s
            </div>
            <div className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-cream/70 mt-1">
              Food Central
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider font-medium text-cream/80">
          <Link href="#menu" className="hover:text-gold-400 transition-colors">Menu</Link>
          <Link href="#loyalty" className="hover:text-gold-400 transition-colors">Loyalty</Link>
          <Link href="#reviews" className="hover:text-gold-400 transition-colors">Reviews</Link>
          
          <Link 
            href="#order"
            className="px-6 py-2.5 text-background rounded-full transition-all duration-300 font-semibold uppercase tracking-wider animate-order-glow"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gold-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-white/5 shadow-2xl py-6 flex flex-col items-center gap-6"
        >
          <Link onClick={() => setMobileMenuOpen(false)} href="#menu" className="text-cream hover:text-gold-400 uppercase tracking-widest">Menu</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="#loyalty" className="text-cream hover:text-gold-400 uppercase tracking-widest">Loyalty</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="#reviews" className="text-cream hover:text-gold-400 uppercase tracking-widest">Reviews</Link>
          <Link 
            onClick={() => setMobileMenuOpen(false)}
            href="#order"
            className="px-8 py-3 text-background rounded-full font-semibold uppercase tracking-widest w-10/12 text-center animate-order-glow"
          >
            Order Now
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
