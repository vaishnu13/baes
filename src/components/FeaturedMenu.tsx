"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Flame, Award, FileText, Sparkles, ChevronRight } from "lucide-react";
import { menuCategories } from "../data/menuData";

interface FeaturedMenuProps {
  isExternalEntered?: boolean;
  onExternalEnter?: () => void;
}

export default function FeaturedMenu({ isExternalEntered, onExternalEnter }: FeaturedMenuProps = {}) {
  const [activeCategory, setActiveCategory] = useState("signatures");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "nonveg">("all");
  const [isInternalEntered, setIsInternalEntered] = useState(false);

  const isEntered = isExternalEntered !== undefined ? isExternalEntered : isInternalEntered;
  const handleEnter = () => {
    setIsInternalEntered(true);
    if (onExternalEnter) {
      onExternalEnter();
    }
  };

  // Get selected category
  const selectedCategory = useMemo(() => {
    return menuCategories.find((cat) => cat.id === activeCategory);
  }, [activeCategory]);

  // Filter items in each subcategory based on search query and diet
  const filteredSubcategories = useMemo(() => {
    if (!selectedCategory) return [];

    return selectedCategory.subcategories.map((sub) => {
      const filteredItems = sub.items.filter((item) => {
        // 1. Search filter
        const matchesSearch = 
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

        // 2. Diet filter
        const matchesDiet = 
          dietFilter === "all" ||
          (dietFilter === "veg" && item.isVeg) ||
          (dietFilter === "nonveg" && !item.isVeg);

        return matchesSearch && matchesDiet;
      });

      return {
        ...sub,
        items: filteredItems
      };
    }).filter(sub => sub.items.length > 0); // Only return subcategories that have items matching filters
  }, [selectedCategory, searchQuery, dietFilter]);

  // Total count of matching items in the active category
  const totalItemsCount = useMemo(() => {
    return filteredSubcategories.reduce((acc, sub) => acc + sub.items.length, 0);
  }, [filteredSubcategories]);

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
              onClick={() => {
                setActiveCategory(category.id);
                setSearchQuery(""); // Clear search when switching tabs
              }}
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
              {/* Interactive Controls (Search & Diet Filters) */}
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center bg-background/50 border border-white/5 backdrop-blur-md p-4 rounded-2xl">
                {/* Search bar */}
                <div className="relative w-full md:max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/40" size={18} />
                  <input 
                    type="text" 
                    placeholder={`Search in ${selectedCategory?.name}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-brown-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-cream placeholder-cream/40 focus:outline-none focus:border-gold-500/40 text-sm transition-colors"
                  />
                </div>

                {/* Diet filters (All / Veg / Non-Veg) */}
                <div className="flex gap-2 p-1 bg-brown-900/50 border border-white/10 rounded-xl w-full md:w-auto">
                  <button
                    onClick={() => setDietFilter("all")}
                    className={`flex-1 md:flex-none px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                      dietFilter === "all" 
                        ? "bg-gold-600 text-background shadow-lg shadow-gold-600/10" 
                        : "text-cream/70 hover:text-cream"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setDietFilter("veg")}
                    className={`flex-1 md:flex-none px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 ${
                      dietFilter === "veg" 
                        ? "bg-green-600/90 text-white shadow-lg shadow-green-600/10" 
                        : "text-cream/70 hover:text-cream"
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-white/20 inline-block"></span>
                    Veg Only
                  </button>
                  <button
                    onClick={() => setDietFilter("nonveg")}
                    className={`flex-1 md:flex-none px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 ${
                      dietFilter === "nonveg" 
                        ? "bg-red-600/90 text-white shadow-lg shadow-red-600/10" 
                        : "text-cream/70 hover:text-cream"
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 border border-white/20 inline-block"></span>
                    Non-Veg
                  </button>
                </div>
              </div>

              {/* Menu Items Container */}
              <div className="max-w-5xl mx-auto min-h-[300px] space-y-16">
                {filteredSubcategories.map((sub, sIdx) => (
                  <div key={sub.name} className="space-y-6">
                    {/* Subcategory title */}
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-gold-400 flex items-center gap-2">
                        <ChevronRight className="text-gold-500/60" size={20} />
                        {sub.name}
                      </h3>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-gold-500/20 to-transparent"></div>
                    </div>

                    {/* Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {sub.items.map((item, idx) => (
                        <div
                          key={`${sub.name}-${item.name}-${idx}`}
                          className="bg-background/40 border border-white/5 hover:border-gold-500/20 p-6 md:p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group hover:bg-background/60 shadow-xl"
                        >
                          <div>
                            {/* Item Title & Icons */}
                            <div className="flex justify-between items-start gap-4 mb-3">
                              <h4 className="text-lg md:text-xl font-serif font-bold text-cream group-hover:text-gold-400 transition-colors">
                                {item.name}
                              </h4>
                              <div className="flex items-center gap-2 shrink-0">
                                {/* Diet Dot */}
                                <span 
                                  className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center border ${
                                    item.isVeg ? "border-green-500" : "border-red-500"
                                  }`}
                                  title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? "bg-green-500" : "bg-red-500"}`}></span>
                                </span>

                                {/* Spicy Badge */}
                                {item.isSpicy && (
                                  <span className="text-red-400" title="Spicy">
                                    <Flame size={16} className="fill-red-400/25" />
                                  </span>
                                )}

                                {/* Signature Gold Star */}
                                {item.isSignature && (
                                  <span className="text-gold-500" title="Bae's Signature">
                                    <Award size={16} className="fill-gold-500/25" />
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Description */}
                            {item.description && (
                              <p className="text-cream/60 leading-relaxed text-sm font-light mb-6">
                                {item.description}
                              </p>
                            )}
                          </div>

                          {/* Price & Badges */}
                          <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                            <span className="text-xl font-serif font-bold bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
                              ₹{item.price}
                            </span>

                            {item.isSignature && (
                              <span className="text-[10px] uppercase font-semibold tracking-wider text-gold-400 bg-gold-500/10 border border-gold-500/20 px-2.5 py-0.5 rounded-md">
                                Signature
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Empty State */}
                {totalItemsCount === 0 && (
                  <div className="py-16 text-center text-cream/50 font-light">
                    No dishes found matching your criteria in this category. Try searching for something else!
                  </div>
                )}
              </div>

              {/* View Full Menu PDF */}
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
