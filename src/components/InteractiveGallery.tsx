import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Grid } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import ThreeDCard from './ThreeDCard';

export default function InteractiveGallery() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = ['All', 'Interior', 'Equipment', 'Group Classes', 'Personal Training'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    const originalIndex = GALLERY_ITEMS.findIndex(x => x.id === item.id);
    setSelectedItemIndex(originalIndex);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <div className="w-full">
      {/* Category Pills Header */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 overflow-x-auto py-2 px-1 hide-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            id={`gallery-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => setActiveFilter(category)}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium uppercase tracking-wider transition-all duration-300 ${
              activeFilter === category
                ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold shadow-lg shadow-neon-blue/20'
                : 'bg-[#121217]/60 text-gray-400 hover:text-white hover:bg-white/5 border border-white/5'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <ThreeDCard
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => openLightbox(item)}
              glowColor="blue"
              className="group relative h-72 sm:h-80 overflow-hidden bg-[#121217] border border-white/5"
            >
              {/* Blur Shadow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              
              {/* Actual Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 saturate-110"
              />

              {/* Hover Neon Blue Rim and Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 backdrop-blur-[2px] border border-neon-blue/20 rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider bg-neon-blue/10 text-neon-blue uppercase">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-full bg-white/10 text-white hover:text-neon-blue hover:bg-neon-blue/20 transition-all duration-200">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <h4 className="text-lg font-display font-medium text-white mb-2 flex items-center gap-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    {item.tag}
                  </p>
                </div>
              </div>

              {/* Static visual representation when not hovering */}
              <div className="absolute bottom-6 left-6 right-6 z-10 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-[10px] font-mono tracking-widest text-neon-blue uppercase font-bold block mb-1">
                  {item.category}
                </span>
                <h4 className="text-lg font-display text-white font-medium">
                  {item.title}
                </h4>
              </div>
            </ThreeDCard>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Full-Screen Lightbox Overlay */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            {/* Header / Info bar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-white p-2">
              <div className="flex items-center gap-2">
                <Grid className="w-4 h-4 text-neon-blue" />
                <span className="text-xs font-mono tracking-wider uppercase text-gray-400">
                  Always Fitness Suite ({selectedItemIndex + 1} / {GALLERY_ITEMS.length})
                </span>
              </div>
              <button
                onClick={closeLightbox}
                id="close-lightbox"
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-white hover:text-neon-blue transition-colors border border-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Main Frame */}
            <div className="relative w-full max-w-4xl max-h-[70vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              
              {/* Prev Button */}
              <button
                onClick={showPrev}
                id="lightbox-prev"
                className="absolute left-2 md:-left-16 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-neon-blue transition-all border border-white/5"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Motion Image */}
              <motion.div
                key={selectedItemIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black"
              >
                <img
                  src={GALLERY_ITEMS[selectedItemIndex].image}
                  alt={GALLERY_ITEMS[selectedItemIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl saturate-110"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={showNext}
                id="lightbox-next"
                className="absolute right-2 md:-right-16 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-neon-blue transition-all border border-white/5"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Footer captions */}
            <div className="mt-6 text-center max-w-xl px-4" onClick={(e) => e.stopPropagation()}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium tracking-widest bg-[#121217] text-neon-blue border border-neon-blue/30 mb-2 uppercase">
                {GALLERY_ITEMS[selectedItemIndex].category}
              </span>
              <h3 className="text-xl font-display font-semibold text-white">
                {GALLERY_ITEMS[selectedItemIndex].title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                {GALLERY_ITEMS[selectedItemIndex].tag}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
