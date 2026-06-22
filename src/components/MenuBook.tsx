"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X, Download, HelpCircle } from "lucide-react";

interface MenuBookProps {
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export default function MenuBook({ currentPage: controlledPage, onPageChange }: MenuBookProps = {}) {
  const [internalPage, setInternalPage] = useState(1); // 1-indexed (1 to 19)
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPage, setZoomPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const totalPages = 19;

  const currentPage = controlledPage !== undefined ? controlledPage : internalPage;

  const setCurrentPage = (newPage: number | ((prev: number) => number)) => {
    const resolvedPage = typeof newPage === "function" ? newPage(currentPage) : newPage;
    if (onPageChange) {
      onPageChange(resolvedPage);
    } else {
      setInternalPage(resolvedPage);
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

  // Go to next page/spread
  const handleNext = () => {
    if (isMobile) {
      if (currentPage < totalPages) {
        setCurrentPage((prev) => prev + 1);
      }
    } else {
      if (currentPage === 1) {
        setCurrentPage(2);
      } else if (currentPage + 2 <= totalPages) {
        setCurrentPage((prev) => prev + 2);
      } else if (currentPage + 1 === totalPages) {
        setCurrentPage(totalPages);
      }
    }
  };

  // Go to previous page/spread
  const handlePrev = () => {
    if (isMobile) {
      if (currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
      }
    } else {
      if (currentPage === totalPages && totalPages % 2 === 1) {
        setCurrentPage(totalPages - 1);
      } else if (currentPage > 2) {
        setCurrentPage((prev) => prev - 2);
      } else {
        setCurrentPage(1);
      }
    }
  };

  // Open zoom modal
  const openZoom = (pageNum: number) => {
    setZoomPage(pageNum);
    setIsZoomed(true);
  };

  // Next page in zoom view
  const nextZoom = () => {
    if (zoomPage < totalPages) {
      setZoomPage((prev) => prev + 1);
    }
  };

  // Prev page in zoom view
  const prevZoom = () => {
    if (zoomPage > 1) {
      setZoomPage((prev) => prev - 1);
    }
  };

  // Sync main page view when closing zoom
  const handleCloseZoom = () => {
    setIsZoomed(false);
    // Align current page spread with closed zoom page
    if (isMobile) {
      setCurrentPage(zoomPage);
    } else {
      if (zoomPage === 1) {
        setCurrentPage(1);
      } else {
        // Find the start of the double page spread
        setCurrentPage(zoomPage % 2 === 0 ? zoomPage : zoomPage - 1);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (isZoomed) nextZoom();
        else handleNext();
      } else if (e.key === "ArrowLeft") {
        if (isZoomed) prevZoom();
        else handlePrev();
      } else if (e.key === "Escape") {
        if (isZoomed) handleCloseZoom();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, isMobile, isZoomed, zoomPage]);

  // Determine pages to display for double page desktop view
  const leftPage = currentPage === 1 ? null : currentPage;
  const rightPage = currentPage === 1 ? 1 : (currentPage + 1 <= totalPages ? currentPage + 1 : null);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      {/* Tip Banner */}
      <div className="mb-6 flex items-center gap-2 text-gold-400/80 text-xs tracking-wider uppercase font-light">
        <HelpCircle size={14} />
        <span>Click on any page to open fullscreen zoom</span>
      </div>

      {/* Book Area Container */}
      <div className="relative w-full flex items-center justify-center min-h-[400px] md:min-h-[550px] px-4 md:px-12 select-none">
        
        {/* Navigation Buttons (Floating Outside Book) */}
        <button
          onClick={handlePrev}
          disabled={isMobile ? currentPage === 1 : currentPage === 1}
          className={`absolute left-0 z-20 w-12 h-12 rounded-full bg-background/80 border border-gold-500/30 text-gold-400 flex items-center justify-center hover:bg-gold-500/10 hover:border-gold-500 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none shadow-lg`}
          aria-label="Previous Page"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          disabled={isMobile ? currentPage === totalPages : (currentPage === totalPages || (currentPage + 1 === totalPages && totalPages % 2 === 0))}
          className={`absolute right-0 z-20 w-12 h-12 rounded-full bg-background/80 border border-gold-500/30 text-gold-400 flex items-center justify-center hover:bg-gold-500/10 hover:border-gold-500 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none shadow-lg`}
          aria-label="Next Page"
        >
          <ChevronRight size={24} />
        </button>

        {/* The Book Container */}
        <div className="w-full max-w-5xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-2xl bg-brown-900/10 p-2 md:p-4 border border-white/5 relative overflow-hidden backdrop-blur-sm">
          
          {/* Mobile Single Page View */}
          {isMobile ? (
            <div className="relative w-full aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-xl border border-white/10 shadow-inner bg-black/40 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative cursor-zoom-in"
                  onClick={() => openZoom(currentPage)}
                >
                  <img
                    src={`/menu-pages/page-${currentPage}.webp`}
                    alt={`Bae's Menu Page ${currentPage}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-4 right-4 bg-background/80 p-2 rounded-full text-gold-400 border border-gold-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={16} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            /* Desktop Double Page Spread View */
            <div className="relative w-full aspect-[4/3] flex justify-center bg-black/30 rounded-xl overflow-hidden border border-white/10 group">
              
              {/* Left Page (Hidden on Spread 0 / Cover) */}
              <div className="w-1/2 h-full border-r border-black/40 relative flex items-center justify-end bg-gradient-to-r from-black/10 to-transparent">
                {leftPage ? (
                  <div 
                    className="w-full h-full relative p-2 cursor-zoom-in overflow-hidden"
                    onClick={() => openZoom(leftPage)}
                  >
                    <img
                      src={`/menu-pages/page-${leftPage}.webp`}
                      alt={`Bae's Menu Page ${leftPage}`}
                      className="w-full h-full object-contain object-right"
                    />
                    {/* Shadow crease overlay */}
                    <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black/25 via-black/5 to-transparent pointer-events-none"></div>
                  </div>
                ) : (
                  /* Blank/back page cover placeholder */
                  <div className="w-full h-full bg-[#130d07] opacity-60"></div>
                )}
              </div>

              {/* Right Page */}
              <div className="w-1/2 h-full relative flex items-center justify-start bg-gradient-to-l from-black/10 to-transparent">
                {rightPage ? (
                  <div 
                    className="w-full h-full relative p-2 cursor-zoom-in overflow-hidden"
                    onClick={() => openZoom(rightPage)}
                  >
                    <img
                      src={`/menu-pages/page-${rightPage}.webp`}
                      alt={`Bae's Menu Page ${rightPage}`}
                      className="w-full h-full object-contain object-left"
                    />
                    {/* Shadow crease overlay */}
                    <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/25 via-black/5 to-transparent pointer-events-none"></div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-[#130d07] opacity-60"></div>
                )}
              </div>

              {/* Central Spine/Crease shadow line */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-[1px] w-[2px] bg-black/60 shadow-[0_0_10px_rgba(0,0,0,0.8)] pointer-events-none"></div>

              {/* Maximize Icon Overlay */}
              <div className="absolute top-4 right-4 bg-background/80 p-2.5 rounded-full text-gold-400 border border-gold-500/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <Maximize2 size={18} />
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Pagination Controls Footer */}
      <div className="mt-8 flex flex-col items-center gap-4 w-full px-4">
        {/* Page status */}
        <div className="text-cream/80 text-sm tracking-wider uppercase font-medium">
          {isMobile ? (
            <span>Page {currentPage} of {totalPages}</span>
          ) : (
            <span>
              {currentPage === 1 ? (
                "Front Cover (Page 1)"
              ) : (
                `Pages ${currentPage} - ${Math.min(currentPage + 1, totalPages)} of {totalPages}`
              )}
            </span>
          )}
        </div>

        {/* Page Slider Selector */}
        <div className="w-full max-w-md flex items-center gap-4">
          <input
            type="range"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (isMobile) {
                setCurrentPage(val);
              } else {
                if (val === 1) setCurrentPage(1);
                else setCurrentPage(val % 2 === 0 ? val : val - 1);
              }
            }}
            className="w-full accent-gold-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* LIGHTBOX ZOOM MODAL */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col justify-between p-4 md:p-6"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center w-full max-w-6xl mx-auto border-b border-white/5 pb-4">
              <div className="text-gold-400 font-serif font-bold text-lg md:text-xl uppercase tracking-widest">
                Menu Zoom View — Page {zoomPage} of {totalPages}
              </div>
              <button
                onClick={handleCloseZoom}
                className="text-cream/70 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-full border border-white/10 transition-all duration-300"
                aria-label="Close Zoom View"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image View Area */}
            <div className="relative flex-1 flex items-center justify-center py-4 w-full max-w-4xl mx-auto">
              
              {/* Left Arrow inside zoom */}
              <button
                onClick={prevZoom}
                disabled={zoomPage === 1}
                className="absolute left-0 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/70 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all disabled:opacity-20 disabled:pointer-events-none"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Zoom Image */}
              <motion.div
                key={zoomPage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="max-w-full max-h-[70vh] md:max-h-[75vh] overflow-auto hide-scrollbar rounded-lg"
              >
                <img
                  src={`/menu-pages/page-${zoomPage}.webp`}
                  alt={`Bae's Menu Zoom Page ${zoomPage}`}
                  className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain shadow-2xl"
                />
              </motion.div>

              {/* Right Arrow inside zoom */}
              <button
                onClick={nextZoom}
                disabled={zoomPage === totalPages}
                className="absolute right-0 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/70 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all disabled:opacity-20 disabled:pointer-events-none"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Modal Footer Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full max-w-6xl mx-auto border-t border-white/5 pt-4">
              <span className="text-xs text-cream/50 tracking-wider">
                Tip: You can use Left/Right keyboard arrows to flip pages.
              </span>
              <a
                href="/BaesFoodCentral_Menu_2026.pdf"
                download
                className="flex items-center gap-2 px-6 py-2.5 bg-gold-600 hover:bg-gold-500 text-background rounded-full font-bold uppercase text-xs tracking-wider transition-colors"
              >
                <Download size={14} /> Download PDF
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
