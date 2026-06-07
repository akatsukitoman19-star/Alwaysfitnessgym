import { motion } from 'motion/react';
import { Dumbbell, Flame, Zap, Target } from 'lucide-react';

export default function Floating3DAssets() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      
      {/* 1. LAYERED 3D WEIGHT PLATE (Styled purely in CSS 3D Space) */}
      <motion.div
        className="absolute top-20 right-[15%] w-44 h-44 hidden md:block preserve-3d"
        style={{ perspective: 1200 }}
        initial={{ y: 0 }}
        animate={{ 
          y: [-15, 15, -15],
          rotateX: [15, 30, 15],
          rotateY: [10, -25, 10],
          rotateZ: [0, 360, 720]
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 8, ease: "easeInOut" },
          rotateX: { repeat: Infinity, duration: 12, ease: "easeInOut" },
          rotateY: { repeat: Infinity, duration: 15, ease: "easeInOut" },
          rotateZ: { repeat: Infinity, duration: 32, ease: "linear" }
        }}
      >
        {/* Core Plate circle with bevel shadow and hole */}
        <div className="absolute inset-0 rounded-full bg-neutral-900 border-[10px] border-neutral-800 shadow-[0_0_40px_rgba(0,243,255,0.2),inset_0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center transform preserve-3d">
          
          {/* Inner Depth Ridge (Translates forward on Z and has custom plate writing) */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-neutral-950 border-4 border-neutral-800 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] transform translate-z-8">
            <span className="text-[10px] font-mono tracking-[0.25em] font-extrabold text-neutral-600 select-none select-none">
              ALWAYS FIT • 20 KG
            </span>
          </div>

          {/* Center Hub Outer Ring */}
          <div className="absolute w-[35%] h-[35%] rounded-full bg-neutral-800 border-2 border-neutral-700 shadow-md transform translate-z-16" />
          
          {/* Center Hole (Drilled empty look) */}
          <div className="absolute w-[20%] h-[20%] rounded-full bg-[#030305] border-2 border-neutral-950 shadow-[inset_0_0_15px_rgba(0,0,0,1)] transform translate-z-20" />
        </div>
      </motion.div>

      {/* 2. CHROME STYLE 3D FLOATING DUMBBELL */}
      <motion.div
        className="absolute bottom-28 left-[8%] w-48 h-20 hidden lg:block preserve-3d"
        style={{ perspective: 1000 }}
        initial={{ y: 0 }}
        animate={{ 
          y: [20, -20, 20],
          rotateX: [25, 50, 25],
          rotateY: [-45, -15, -45],
          rotateZ: [120, 135, 120]
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 7, ease: "easeInOut" },
          rotateX: { repeat: Infinity, duration: 11, ease: "easeInOut" },
          rotateY: { repeat: Infinity, duration: 16, ease: "easeInOut" },
          rotateZ: { repeat: Infinity, duration: 10, ease: "easeInOut" }
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          {/* Handle Shaft */}
          <div className="absolute w-28 h-3.5 bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-200 rounded-full border border-neutral-300 shadow-inner transform translate-z-0" />
          
          {/* Left Large Weights Block (Multiple slices back to back with translateZ) */}
          <div className="absolute left-6 w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 shadow-lg transform -translate-x-1 translate-z-4 flex items-center justify-center" />
          <div className="absolute left-4 w-14 h-14 rounded-xl bg-neutral-900 border-2 border-neutral-800 shadow-xl transform -translate-x-2 translate-z-8" />
          
          {/* Right Large Weights Block */}
          <div className="absolute right-6 w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 shadow-lg transform translate-x-1 translate-z-4" />
          <div className="absolute right-4 w-14 h-14 rounded-xl bg-neutral-900 border-2 border-neutral-800 shadow-xl transform translate-x-2 translate-z-8" />
          
          {/* Dumbbell center accent collar rings */}
          <div className="absolute left-10 w-6 h-6 bg-yellow-500/85 rounded-full border border-yellow-600 transform translate-z-10" />
          <div className="absolute right-10 w-6 h-6 bg-yellow-500/85 rounded-full border border-yellow-600 transform translate-z-10" />
        </div>
      </motion.div>

      {/* 3. ROTATING GLOWING EMBLAMATIC ICONS ORBITING BACKGROUND */}
      {/* Icon: Flame */}
      <motion.div
        className="absolute top-[35%] left-[12%] p-3.5 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-transparent border border-neon-purple/30 text-neon-purple hidden md:block"
        style={{ filter: "drop-shadow(0 0 15px rgba(157, 78, 223, 0.45))" }}
        animate={{ 
          y: [-12, 12, -12],
          rotateY: [0, 360],
          scale: [0.95, 1.05, 0.95]
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          rotateY: { repeat: Infinity, duration: 14, ease: "linear" },
          scale: { repeat: Infinity, duration: 4, ease: "easeInOut" }
        }}
      >
        <Flame className="w-5.5 h-5.5" />
      </motion.div>

      {/* Icon: Zap */}
      <motion.div
        className="absolute top-[25%] right-[28%] p-3.5 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-transparent border border-neon-blue/30 text-neon-blue hidden sm:block"
        style={{ filter: "drop-shadow(0 0 15px rgba(0, 243, 255, 0.45))" }}
        animate={{ 
          y: [10, -10, 10],
          rotateX: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
          rotateX: { repeat: Infinity, duration: 12, ease: "linear" },
          scale: { repeat: Infinity, duration: 5, ease: "easeInOut" }
        }}
      >
        <Zap className="w-5 h-5" />
      </motion.div>

      {/* Icon: Target */}
      <motion.div
        className="absolute bottom-[20%] right-[14%] p-3.5 rounded-2xl bg-gradient-to-br from-[#00f3ff]/10 to-transparent border border-[#00f3ff]/20 text-[#00f3ff] hidden md:block"
        style={{ filter: "drop-shadow(0 0 15px rgba(0, 243, 255, 0.3))" }}
        animate={{ 
          y: [-15, 15, -15],
          rotateZ: [0, -360],
          scale: [0.9, 1.02, 0.9]
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 7, ease: "easeInOut" },
          rotateZ: { repeat: Infinity, duration: 18, ease: "linear" },
          scale: { repeat: Infinity, duration: 6, ease: "easeInOut" }
        }}
      >
        <Target className="w-5.5 h-5.5" />
      </motion.div>
    </div>
  );
}
