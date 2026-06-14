"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Award, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium tracking-widest uppercase"
        >
          <Star size={16} className="fill-gold-400" />
          <span>Top Rated in Gajuwaka</span>
          <Star size={16} className="fill-gold-400" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[6.5vw] sm:text-5xl md:text-7xl lg:text-8xl font-jurassic tracking-wider mb-6 leading-tight select-none filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.85)] whitespace-nowrap"
        >
          <span className="text-cream">Bae&apos;s</span>{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFFBD0] to-[#C59B27] bg-clip-text text-transparent font-normal">
            Food Central
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gold-400 mb-10 max-w-2xl mx-auto font-semibold tracking-[0.2em] uppercase drop-shadow-md whitespace-pre-line leading-relaxed"
        >
          INDIAN | CHINESE | TANDOORI{"\n"}CONTINENTAL | BEVERAGES
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full sm:w-auto"
        >
          <Link 
            href="#order"
            className="w-full sm:w-auto px-8 py-4 bg-gold-600 hover:bg-gold-500 text-background rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-1"
          >
            Order Now
          </Link>
          <a 
            href="https://loyalty-form-alpha.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gold-500 text-gold-400 hover:bg-gold-500/10 rounded-full font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-1"
          >
            Join Loyalty Club
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-500 mb-2">
              <Star size={24} className="fill-gold-500" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-cream">4.0</h3>
            <p className="text-xs uppercase tracking-widest text-cream/60">Google Rating</p>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-500 mb-2">
              <Award size={24} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-cream">4+</h3>
            <p className="text-xs uppercase tracking-widest text-cream/60">Years of Service</p>
          </div>
          
          <div className="col-span-2 md:col-span-1 flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-500 mb-2">
              <Users size={24} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-cream">50k+</h3>
            <p className="text-xs uppercase tracking-widest text-cream/60">Happy Customers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
