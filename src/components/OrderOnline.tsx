"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function OrderOnline() {
  return (
    <section id="order" className="py-24 bg-brown-900 relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-sm font-bold text-gold-500 uppercase tracking-[0.2em] mb-4">
          Cravings Delivered
        </h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-16">
          Order Online
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          
          {/* Swiggy */}
          <motion.a
            href="https://www.swiggy.com/city/vizag/baes-food-central-chaitanya-nagar-gajuwaka-rest902575"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-background p-10 rounded-3xl border border-white/5 hover:border-[#fc8019] transition-all duration-300 overflow-hidden flex flex-col items-center justify-center gap-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#fc8019]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <motion.div 
              animate={{ 
                scale: [1, 1.06, 1],
                opacity: [0.85, 1, 0.85],
                boxShadow: ["0 0 0 rgba(252, 128, 25, 0)", "0 0 20px rgba(252, 128, 25, 0.5)", "0 0 0 rgba(252, 128, 25, 0)"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300"
            >
              <img src="/swiggy-logo.jpg" alt="Swiggy" className="w-full h-full object-cover" />
            </motion.div>
            <span className="text-2xl font-bold text-cream group-hover:text-[#fc8019] transition-colors flex items-center gap-2">
              Order on Swiggy <ExternalLink size={20} />
            </span>
          </motion.a>

          {/* Zomato */}
          <motion.a
            href="https://www.zomato.com/visakhapatnam/baes-food-central-1-gajuwaka-vizag/order"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-background p-10 rounded-3xl border border-white/5 hover:border-[#E23744] transition-all duration-300 overflow-hidden flex flex-col items-center justify-center gap-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E23744]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <motion.div 
              animate={{ 
                scale: [1, 1.06, 1],
                opacity: [0.85, 1, 0.85],
                boxShadow: ["0 0 0 rgba(226, 55, 68, 0)", "0 0 20px rgba(226, 55, 68, 0.5)", "0 0 0 rgba(226, 55, 68, 0)"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="w-24 h-24 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300"
            >
              <img src="/zomato-logo.png" alt="Zomato" className="w-full h-full object-cover" />
            </motion.div>
            <span className="text-2xl font-bold text-cream group-hover:text-[#E23744] transition-colors flex items-center gap-2">
              Order on Zomato <ExternalLink size={20} />
            </span>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
