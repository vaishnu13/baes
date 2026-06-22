"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";
import { menuCategories } from "../data/menuData";
import MenuBook from "./MenuBook";

interface FeaturedMenuProps {
  isExternalEntered?: boolean;
  onExternalEnter?: () => void;
}

export default function FeaturedMenu({ isExternalEntered, onExternalEnter }: FeaturedMenuProps = {}) {
  const [activeCategory, setActiveCategory] = useState("signatures");
  const [isInternalEntered, setIsInternalEntered] = useState(false);
  const [bookPage, setBookPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const isEntered = isExternalEntered !== undefined ? isExternalEntered : isInternalEntered;
  
  const handleEnter = () => {
    setIsInternalEntered(true);
    if (onExternalEnter) {
      onExternalEnter();
    }
  };

  // Track window width to toggle layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Map page back to category to highlight active tab
  const getCategoryForPage = (page: number): string => {
    if (page <= 4) return "signatures";
    if ((page >= 5 && page <= 7) || page === 11 || page === 12) return "starters";
    if (page === 8 || page === 9 || page === 10 || page === 13) return "mains-global";
    if (page >= 14 && page <= 17) return "mains-indian";
    return "drinks-desserts";
  };

  const handleBookPageChange = (page: number) => {
    setBookPage(page);
    const categoryId = getCategoryForPage(page);
    setActiveCategory(categoryId);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    let targetPage = 1;
    if (isMobile) {
      switch (categoryId) {
        case "signatures": targetPage = 4; break;
        case "starters": targetPage = 5; break;
        case "mains-global": targetPage = 8; break;
        case "mains-indian": targetPage = 14; break;
        case "drinks-desserts": targetPage = 18; break;
      }
    } else {
      switch (categoryId) {
        case "signatures": targetPage = 4; break; // Shows 4 & 5
        case "starters": targetPage = 6; break; // Shows 6 & 7
        case "mains-global": targetPage = 8; break; // Shows 8 & 9
        case "mains-indian": targetPage = 14; break; // Shows 14 & 15
        case "drinks-desserts": targetPage = 18; break; // Shows 18 & 19
      }
    }
    setBookPage(targetPage);
  };

  return (
    <section id="menu" className="py-24 bg-brown-900 relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(var(--gold-500) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold tracking-widest uppercase"
          >
            <Sparkles size={12} className="fill-gold-400" />
            <span>Premium Culinary Board</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6"
          >
            Explore Our Menu
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/70 text-lg font-light max-w-xl mx-auto"
          >
            Savor authentic Indo-Arabic delights, freshly prepared continental delicacies, and custom desserts directly from our kitchen.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex overflow-x-auto gap-3 pb-6 mb-12 scrollbar-none hide-scrollbar max-w-5xl mx-auto px-2 justify-start md:justify-center"
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-gold-600 to-gold-500 text-background border-gold-500 font-semibold shadow-[0_4px_15px_rgba(212,175,55,0.25)]"
                  : "bg-background/40 hover:bg-background/70 text-cream/75 border-white/5"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gated Entry Screen or Interactive Menu */}
        <AnimatePresence mode="wait">
          {!isEntered ? (
            /* ENTER BUTTON SCREEN */
            <motion.div
              key="gate-screen"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center py-12 max-w-lg mx-auto text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEnter}
                className="relative px-12 py-5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-background font-bold text-lg uppercase tracking-widest rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.25)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer"
              >
                Enter Menu
              </motion.button>
            </motion.div>
          ) : (
            /* DYNAMIC INTERACTIVE MENU */
            <motion.div
              key="menu-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Menu Book Component */}
              <MenuBook currentPage={bookPage} onPageChange={handleBookPageChange} />

              {/* View Full Menu PDF Fallback */}
              <div className="mt-16 text-center">
                <a 
                  href="/BaesFoodCentral_Menu_2026.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-transparent border-2 border-gold-600 hover:bg-gold-600 text-gold-400 hover:text-background rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-gold-500/10"
                >
                  <FileText size={18} />
                  View Full 19-Page Menu PDF
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
