import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'white';
  id?: string;
  onClick?: (e: any) => void;
  key?: any;
}

export default function ThreeDCard({ 
  children, 
  className = "", 
  glowColor = "blue", 
  id, 
  onClick 
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse coords relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates on a scale between -0.5 and 0.5
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    // Multiply by max tilt angle
    const maxTilt = 12;
    setRotation({
      x: -normalizedY * maxTilt, // Tilting up/down based on Y
      y: normalizedX * maxTilt   // Tilting left/right based on X
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const getGlowStyle = () => {
    if (!isHovered) return {};
    switch (glowColor) {
      case 'blue':
        return { boxShadow: '0 10px 30px rgba(0, 243, 255, 0.25), inset 0 0 12px rgba(0, 243, 255, 0.1)' };
      case 'purple':
        return { boxShadow: '0 10px 30px rgba(157, 78, 223, 0.25), inset 0 0 12px rgba(157, 78, 223, 0.1)' };
      case 'white':
        return { boxShadow: '0 10px 30px rgba(255, 255, 255, 0.12), inset 0 0 12px rgba(255, 255, 255, 0.05)' };
    }
  };

  return (
    <motion.div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        scale: isHovered ? 1.03 : 1,
        z: isHovered ? 40 : 0
      }}
      style={{ 
        transformStyle: 'preserve-3d', 
        perspective: 1200,
        ...getGlowStyle()
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 220, 
        damping: 18,
        mass: 0.5
      }}
      className={`relative rounded-2xl cursor-pointer select-none overflow-hidden ${className}`}
    >
      {/* 3D Depth backing shine effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.08) 0%, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
