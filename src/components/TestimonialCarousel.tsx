import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import ThreeDCard from './ThreeDCard';

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Autoplay function
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleManualInteraction = () => {
    setIsAutoPlaying(false);
    // Restart autoplay after 10s of inactivity
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8 overflow-hidden select-none">
      
      {/* 3D CAROUSEL CONTAINER */}
      <div className="relative h-[480px] sm:h-[420px] flex items-center justify-center space-perspective">
        
        <AnimatePresence mode="popLayout">
          {TESTIMONIALS.map((t, idx) => {
            // Determine relative position inside cylindrical projection
            let position = idx - activeIndex;
            
            // Handle loop offset
            if (position < -1) position += TESTIMONIALS.length;
            if (position > 1) position -= TESTIMONIALS.length;

            const isCenter = position === 0;
            const isLeft = position === -1;
            const isRight = position === 1;
            const isVisible = isCenter || isLeft || isRight;

            if (!isVisible) return null;

            // Compute cinematic 3D transform metrics
            let rotateYValue = 0;
            let translateXValue = "0%";
            let scaleValue = 0.82;
            let zValue = -150;
            let opacityValue = 0.35;

            if (isCenter) {
              rotateYValue = 0;
              translateXValue = "0%";
              scaleValue = 1;
              zValue = 50;
              opacityValue = 1;
            } else if (isLeft) {
              rotateYValue = 35; // Angle inwards
              translateXValue = "-75%"; // Push outwards to the left
              scaleValue = 0.85;
              zValue = -80;
              opacityValue = 0.5;
            } else if (isRight) {
              rotateYValue = -35; // Angle inwards
              translateXValue = "75%"; // Push outwards to the right
              scaleValue = 0.85;
              zValue = -80;
              opacityValue = 0.5;
            }

            return (
              <motion.div
                key={t.id}
                style={{ 
                  transformStyle: "preserve-3d",
                  position: "absolute",
                  zIndex: isCenter ? 20 : 10,
                  width: "100%",
                  maxWidth: "450px"
                }}
                initial={{ opacity: 0, scale: 0.7, z: -200 }}
                animate={{
                  opacity: opacityValue,
                  scale: scaleValue,
                  x: translateXValue,
                  rotateY: rotateYValue,
                  z: zValue,
                }}
                exit={{ opacity: 0, scale: 0.7, z: -200 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 180, 
                  damping: 20, 
                  mass: 0.8 
                }}
                className="w-full"
              >
                <div 
                  className={`p-6 sm:p-8 rounded-3xl backdrop-blur-md border flex flex-col justify-between h-[360px] relative text-left transition-all duration-300 ${
                    isCenter 
                      ? 'bg-[#121217]/95 border-neon-blue/30 shadow-[0_15px_40px_rgba(0,243,255,0.15)]' 
                      : 'bg-[#121217]/60 border-white/5 opacity-50 cursor-pointer pointer-events-none sm:pointer-events-auto'
                  }`}
                  onClick={() => {
                    if (!isCenter) {
                      handleManualInteraction();
                      setActiveIndex(idx);
                    }
                  }}
                >
                  {/* Absolute subtle background quotes */}
                  <Quote className="absolute right-6 top-6 w-16 h-16 text-white/5 pointer-events-none" />

                  {/* Stars Section */}
                  <div className="flex gap-1 text-yellow-400 z-10">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote Paragraph */}
                  <p className="text-gray-200 text-sm md:text-sm leading-relaxed italic z-10 flex-grow mt-4">
                    {t.quote}
                  </p>

                  <div className="space-y-4 mt-4">
                    {/* Transformation Badge */}
                    {t.beforeImg && (
                      <div className="bg-neon-blue/5 border border-neon-blue/20 rounded-xl p-2.5 flex justify-between items-center text-xs">
                        <div>
                          <span className="text-[8px] font-mono text-neon-blue uppercase font-bold tracking-wider">Transformation Status</span>
                          <p className="text-white font-medium mt-0.5 text-[11px]">{t.transformation}</p>
                        </div>
                      </div>
                    )}

                    {/* Member Profile info footer */}
                    <div className="flex items-center gap-3 pt-3 border-t border-white/5 z-10">
                      <img 
                        src={t.avatar} 
                        alt={t.name} 
                        className="w-11 h-11 rounded-full object-cover border border-white/10"
                      />
                      <div>
                        <h4 className="text-xs font-semibold text-white">{t.name}</h4>
                        <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Manual Arrow Controls (Wrapped in small layout spacing) */}
      <div className="flex items-center justify-center gap-6 mt-2 relative z-25">
        <button
          onClick={() => {
            handleManualInteraction();
            handlePrev();
          }}
          id="testimonial-carousel-prev"
          className="p-3.5 rounded-full bg-white/5 hover:bg-neon-blue/10 border border-white/10 hover:border-neon-blue/40 text-gray-400 hover:text-neon-blue transition-all duration-300 transform active:scale-90"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Carousel indicator dots */}
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                handleManualInteraction();
                setActiveIndex(idx);
              }}
              id={`testimonial-dot-${idx}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? 'w-6 bg-gradient-to-r from-neon-blue to-neon-purple' 
                  : 'w-1.5 bg-neutral-700'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            handleManualInteraction();
            handleNext();
          }}
          id="testimonial-carousel-next"
          className="p-3.5 rounded-full bg-white/5 hover:bg-neon-blue/10 border border-white/10 hover:border-neon-blue/40 text-gray-400 hover:text-neon-blue transition-all duration-300 transform active:scale-90"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
