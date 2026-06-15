"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote, ExternalLink } from "lucide-react";

const platformStats = [
  {
    name: "Google",
    rating: "4.0",
    reviewsCount: "500+ Reviews",
    color: "hover:border-gold-500/40",
    brandColor: "text-gold-400",
    url: "https://search.google.com/local/reviews?placeid=YOUR_PLACE_ID",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.526 0-6.38-2.854-6.38-6.38s2.854-6.38 6.38-6.38c1.714 0 3.267.68 4.402 1.776L21.3 4.77C19.1 2.7 15.9 1.5 12.24 1.5c-6 0-10.8 4.8-10.8 10.8s4.8 10.8 10.8 10.8c5.45 0 9.85-3.86 9.85-10.8 0-.6-.05-1.2-.16-1.815H12.24z"/>
      </svg>
    )
  },
  {
    name: "Swiggy",
    rating: "4.1",
    reviewsCount: "100+ Ratings",
    color: "hover:border-[#fc8019]/40",
    brandColor: "text-[#fc8019]",
    url: "https://www.swiggy.com/city/vizag/baes-food-central-chaitanya-nagar-gajuwaka-rest902575",
    icon: (
      <img src="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg" alt="Swiggy" className="w-4 h-4 object-contain brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
    )
  },
  {
    name: "Zomato",
    rating: "4.0",
    reviewsCount: "150+ Ratings",
    color: "hover:border-[#E23744]/40",
    brandColor: "text-[#E23744]",
    url: "https://www.zomato.com/visakhapatnam/baes-food-central-1-gajuwaka-vizag/order",
    icon: (
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/cb/Zomato_logo.svg" alt="Zomato" className="w-4 h-4 object-contain brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
    )
  }
];

const reviews = [
  {
    name: "Sneha Reddy",
    rating: 5,
    source: "swiggy",
    text: "The Mandi here is cooked to absolute perfection. The spices are authentic and the chicken is incredibly tender. Ordered on Swiggy and the delivery was super fast!",
  },
  {
    name: "Rahul Verma",
    rating: 4,
    source: "google",
    text: "Excellent dining experience. The premium Indo-Arabic atmosphere in Gajuwaka is unmatched. Great place for a family dinner. Highly recommend the Arabian Royal Platter.",
  },
  {
    name: "Mohammed Tariq",
    rating: 5,
    source: "zomato",
    text: "Hands down some of the best food I’ve ordered recently! The food arrived piping hot, the packaging was extremely neat, and the flavors were perfectly balanced. The portion size was great, and it offered great value for money. Highly recommend!",
  },
  {
    name: "Priya K.",
    rating: 5,
    source: "swiggy",
    text: "Hands down the best shawarma in town! The garlic sauce is spot on. Very hygienic, excellent portion size, and great value.",
  }
];

const sourceMeta: Record<string, { label: string; colorClass: string; icon: string }> = {
  swiggy: {
    label: "Swiggy Review",
    colorClass: "bg-[#fc8019]/10 text-[#fc8019] border-[#fc8019]/20",
    icon: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg"
  },
  zomato: {
    label: "Zomato Review",
    colorClass: "bg-[#E23744]/10 text-[#E23744] border-[#E23744]/20",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/cb/Zomato_logo.svg"
  },
  google: {
    label: "Google Review",
    colorClass: "bg-gold-500/10 text-gold-400 border-gold-500/20",
    icon: ""
  }
};

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-brown-900 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Left Column: Title & Platform Ratings */}
          <div className="lg:sticky lg:top-28">
            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-[0.2em] mb-4">
              Ratings & Reviews
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-8 leading-tight">
              Loved by Foodies <br />
              <span className="text-gold-400 italic">Across Platforms</span>
            </h3>


            {/* Platform Stats Grid */}
            <div className="flex flex-col gap-4">
              {platformStats.map((platform, idx) => (
                <a
                  key={idx}
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-between p-3.5 px-4 rounded-xl bg-background border border-white/5 transition-all duration-300 ${platform.color} group`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cream group-hover:scale-105 transition-transform">
                      {platform.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-cream group-hover:text-gold-400 transition-colors">{platform.name}</h4>
                      <p className="text-[10px] text-cream/50 uppercase tracking-wider mt-0.5">{platform.reviewsCount}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-lg font-serif font-bold ${platform.brandColor}`}>{platform.rating}</span>
                    <Star size={14} className={`fill-current ${platform.brandColor}`} />
                    <ExternalLink size={12} className="text-cream/30 group-hover:text-cream/70 transition-colors ml-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Reviews Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {reviews.map((review, idx) => {
              const meta = sourceMeta[review.source];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
                  className="bg-background p-8 rounded-3xl border border-white/5 relative flex flex-col justify-between hover:border-gold-500/20 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6 gap-2">
                      <div className="flex text-gold-500">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < review.rating ? "fill-gold-500" : "text-white/10"} 
                          />
                        ))}
                      </div>
                      
                      {/* Platform Badge */}
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${meta.colorClass}`}>
                        {meta.icon ? (
                          <img src={meta.icon} alt={review.source} className="w-3.5 h-3.5 object-contain brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                        )}
                        {meta.label}
                      </span>
                    </div>

                    <MessageSquareQuote size={36} className="text-gold-500/10 absolute top-20 right-6 pointer-events-none" />

                    <p className="text-cream/80 leading-relaxed mb-6 italic relative z-10 font-serif">
                      &quot;{review.text}&quot;
                    </p>
                  </div>

                  <div className="font-bold text-cream uppercase tracking-widest text-xs mt-auto flex items-center gap-2">
                    <span className="w-6 h-[1px] bg-gold-500/40"></span>
                    {review.name}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
