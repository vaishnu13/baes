"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, Play } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  src: string;
  aspect: string;
}

const mediaItems: MediaItem[] = [
  { type: "image", src: "/WhatsApp Image 2026-06-12 at 22.25.56.jpeg", aspect: "aspect-[3/4]" },
  { type: "video", src: "/Video-342.mp4", aspect: "aspect-[9/16]" },
  { type: "image", src: "/WhatsApp Image 2026-06-12 at 22.37.37.jpeg", aspect: "aspect-[3/4]" },
  { type: "video", src: "/Video-605.mp4", aspect: "aspect-[9/16]" },
  { type: "image", src: "/WhatsApp Image 2026-06-12 at 22.37.37 (1).jpeg", aspect: "aspect-[3/4]" }
];

// Duplicate items to ensure a seamless infinite scroll loop
const duplicatedItems = [...mediaItems, ...mediaItems, ...mediaItems];

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-[0.2em] mb-4">
            Visual Experience
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6">
            Our Gallery
          </h3>
          <p className="text-cream/70 text-lg font-light">
            A glimpse into the premium ambience, authentic kitchen craft, and vibrant dining experiences at Bae&apos;s Food Central.
          </p>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Marquee Container */}
      <div className="w-full py-4 relative group/marquee">
        {/* Shadow overlays for smooth edge fading */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee animate-marquee-hover-pause flex gap-6 items-center">
          {duplicatedItems.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl cursor-pointer overflow-hidden h-[250px] md:h-[380px] ${item.aspect} flex-shrink-0 group/item border border-white/5 shadow-2xl bg-black`}
              onClick={() => setSelectedMedia(item)}
            >
              {/* Overlay with Zoom Indicator */}
              <div className="absolute inset-0 bg-black/55 opacity-0 group-hover/item:opacity-100 transition-all duration-300 z-10 flex items-center justify-center gap-3">
                <div className="p-3 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 transform scale-50 group-hover/item:scale-100 transition-all duration-300">
                  <ZoomIn size={24} />
                </div>
                {item.type === "video" && (
                  <div className="p-3 rounded-full bg-cream/10 border border-cream/20 text-cream transform scale-50 group-hover/item:scale-100 transition-all duration-300">
                    <Play size={24} className="fill-cream" />
                  </div>
                )}
              </div>

              {/* Rendering media based on type */}
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Bae's Food Central Gallery Image ${idx}`}
                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={item.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle video indicator badge */}
                  <span className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-cream px-2.5 py-1.5 rounded-md border border-white/10 z-20">
                    Video
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Media Viewer Overlay */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white transition-all hover:bg-white/10"
            onClick={() => setSelectedMedia(null)}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-4xl w-full max-h-[85vh] flex items-center justify-center"
          >
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt="Enlarged gallery view"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border border-white/10 bg-black"
              />
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
