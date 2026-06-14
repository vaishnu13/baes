"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function About() {
  const values = [
    "Premium Dining Experience",
    "Family-Friendly Atmosphere",
    "Fresh, High-Quality Ingredients",
    "100% Customer Satisfaction"
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-[0.2em] mb-4">
              Our Story
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6 leading-tight">
              A Culinary Journey of <br/> <span className="text-gold-400 italic">Taste & Tradition</span>
            </h3>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              Bae’s Food Central was born out of a passion for authentic Indo-Arabic cuisine. We believe that food is not just about sustenance; it’s an experience that brings people together. 
              Our chefs use age-old recipes and the finest ingredients to craft dishes that transport you to a world of rich flavors and royal heritage right here in Gajuwaka.
            </p>
            
            <ul className="space-y-4 mb-10">
              {values.map((value, idx) => (
                <li key={idx} className="flex items-center gap-3 text-cream/90">
                  <CheckCircle className="text-gold-500 shrink-0" size={20} />
                  <span className="font-medium tracking-wide">{value}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-8 border-t border-white/5">
              <p className="font-serif italic text-xl text-cream/60">
                &quot;We don&apos;t just serve food, we serve memories.&quot;
              </p>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" 
                alt="Restaurant Ambience" 
                className="w-full h-80 object-cover rounded-tl-3xl rounded-br-3xl shadow-xl border border-white/5"
              />
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop" 
                alt="Premium Dishes" 
                className="w-full h-80 object-cover rounded-tr-3xl rounded-bl-3xl shadow-xl mt-12 border border-white/5"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold-500/20 blur-3xl rounded-full z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
