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
            animate={{ 
              borderColor: ["rgba(255, 255, 255, 0.05)", "rgba(252, 128, 25, 0.4)", "rgba(255, 255, 255, 0.05)"],
              boxShadow: ["0 10px 30px rgba(0,0,0,0.3)", "0 10px 45px rgba(252, 128, 25, 0.15)", "0 10px 30px rgba(0,0,0,0.3)"]
            }}
            transition={{
              borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.6 },
              y: { duration: 0.6 }
            }}
            className="group relative bg-background p-10 rounded-3xl border border-white/5 hover:border-[#fc8019] transition-all duration-300 overflow-hidden flex flex-col items-center justify-center gap-6"
          >
            {/* Premium Shimmer Shine Sweep */}
            <motion.div
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 pointer-events-none"
              animate={{
                x: ["-100%", "250%"]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 3.5,
                ease: "easeInOut"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#fc8019]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Bobbing content wrapper */}
            <motion.div
              animate={{ 
                y: [0, -6, 0] 
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full flex flex-col items-center justify-center gap-6 z-10"
            >
              {/* Logo with breathing glow & hover spin */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.08, 1],
                  opacity: [0.9, 1, 0.9],
                  boxShadow: ["0 0 10px rgba(252, 128, 25, 0.2)", "0 0 35px rgba(252, 128, 25, 0.8)", "0 0 10px rgba(252, 128, 25, 0.2)"]
                }}
                whileHover={{ rotate: 360, scale: 1.12 }}
                transition={{ 
                  scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                  boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 0.8, ease: "easeInOut" }
                }}
                className="w-24 h-24 rounded-full overflow-hidden transition-transform duration-300"
              >
                <img src="/swiggy-logo.jpg" alt="Swiggy" className="w-full h-full object-cover" />
              </motion.div>
              <span className="text-2xl font-bold text-cream group-hover:text-[#fc8019] transition-colors flex items-center gap-2">
                Order on Swiggy <ExternalLink size={20} />
              </span>
            </motion.div>
          </motion.a>

          {/* Zomato */}
          <motion.a
            href="https://www.zomato.com/visakhapatnam/baes-food-central-1-gajuwaka-vizag/order"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{ 
              borderColor: ["rgba(255, 255, 255, 0.05)", "rgba(226, 55, 68, 0.4)", "rgba(255, 255, 255, 0.05)"],
              boxShadow: ["0 10px 30px rgba(0,0,0,0.3)", "0 10px 45px rgba(226, 55, 68, 0.15)", "0 10px 30px rgba(0,0,0,0.3)"]
            }}
            transition={{
              borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
              opacity: { duration: 0.6, delay: 0.1 },
              y: { duration: 0.6, delay: 0.1 }
            }}
            className="group relative bg-background p-10 rounded-3xl border border-white/5 hover:border-[#E23744] transition-all duration-300 overflow-hidden flex flex-col items-center justify-center gap-6"
          >
            {/* Premium Shimmer Shine Sweep */}
            <motion.div
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 pointer-events-none"
              animate={{
                x: ["-100%", "250%"]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 3.5,
                ease: "easeInOut",
                delay: 1.2
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#E23744]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Bobbing content wrapper */}
            <motion.div
              animate={{ 
                y: [0, -6, 0] 
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8 // Alternating float bobbing
              }}
              className="w-full flex flex-col items-center justify-center gap-6 z-10"
            >
              {/* Logo with breathing glow & hover spin */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.08, 1],
                  opacity: [0.9, 1, 0.9],
                  boxShadow: ["0 0 10px rgba(226, 55, 68, 0.2)", "0 0 35px rgba(226, 55, 68, 0.8)", "0 0 10px rgba(226, 55, 68, 0.2)"]
                }}
                whileHover={{ rotate: 360, scale: 1.12 }}
                transition={{ 
                  scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.25 },
                  opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.25 },
                  boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.25 },
                  rotate: { duration: 0.8, ease: "easeInOut" }
                }}
                className="w-24 h-24 rounded-full overflow-hidden transition-transform duration-300"
              >
                <img src="/zomato-logo.png" alt="Zomato" className="w-full h-full object-cover" />
              </motion.div>
              <span className="text-2xl font-bold text-cream group-hover:text-[#E23744] transition-colors flex items-center gap-2">
                Order on Zomato <ExternalLink size={20} />
              </span>
            </motion.div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
