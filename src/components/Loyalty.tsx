"use client";

import { motion } from "framer-motion";
import { Crown, Gift, Percent, Clock, Sparkles } from "lucide-react";

export default function Loyalty() {
  const benefits = [
    { icon: <Gift size={24} />, title: "Birthday Rewards", desc: "Celebrate your special day with exclusive complimentary desserts and discounts." },
    { icon: <Percent size={24} />, title: "Exclusive Discounts", desc: "Unlock member-only pricing on signature dishes and platters." },
    { icon: <Sparkles size={24} />, title: "Special Weekend Offers", desc: "Get access to our limited-time weekend specials before anyone else." },
    { icon: <Clock size={24} />, title: "Early Access", desc: "Be the first to try our new menu additions and seasonal specials." }
  ];

  return (
    <section id="loyalty" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gold-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-brown-800 rounded-3xl p-8 md:p-16 border border-gold-500/20 shadow-2xl overflow-hidden relative">
          
          <div className="absolute -right-20 -top-20 text-gold-500/10 pointer-events-none">
            <Crown size={300} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 mb-6">
                  <Crown size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6 leading-tight">
                  Join Bas’s <br/> <span className="text-gold-400">Loyalty Club</span>
                </h2>
                <p className="text-cream/80 text-lg mb-8 leading-relaxed">
                  Elevate your dining experience. Earn points on every visit and unlock a world of premium rewards.
                </p>
                <a 
                  href="https://loyalty-form-alpha.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-10 py-4 bg-gold-600 hover:bg-gold-500 text-background rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                >
                  Join Now
                </a>
              </motion.div>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-background/40 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-colors"
                >
                  <div className="text-gold-400 mb-4 bg-gold-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-cream mb-2">{benefit.title}</h4>
                  <p className="text-cream/60">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
