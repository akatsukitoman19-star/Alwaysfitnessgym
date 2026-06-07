import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  speedX: number;
  speedY: number;
  density: number;
  color: string;
  alpha: number;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 35 : 75;

    // Set dimensions
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const colors = ['rgba(0, 243, 255, ', 'rgba(157, 78, 223, ', 'rgba(255, 255, 255, '];
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2.5 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push({
          x,
          y,
          size,
          baseX: x,
          baseY: y,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4 - 0.2, // tend to float slowly drifting upwards
          density: Math.random() * 20 + 2,
          color: colorPrefix,
          alpha: Math.random() * 0.4 + 0.1,
        });
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        setMouse({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    const handleMouseLeave = () => {
      setMouse({ x: -1000, y: -1000 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Track energy wave angle
    let angle = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background network glow lines
      const maxDistance = 140;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.08;
            ctx.strokeStyle = `rgba(0, 243, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      // Draw horizontal sleek glowing energy sine waves (cinematic sci-fi theme)
      angle += 0.003;
      const drawEnergyWave = (offsetY: number, amplitude: number, frequency: number, speed: number, strokeColor: string) => {
        ctx.beginPath();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1;
        
        for (let x = 0; x < canvas.width; x += 4) {
          const y = offsetY + Math.sin(x * frequency + angle * speed) * amplitude + Math.cos(x * 0.002 + angle * 0.5) * 15;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      };

      // Draw two gorgeous atmospheric energy ribbons
      drawEnergyWave(canvas.height * 0.35, 12, 0.0015, 1.2, 'rgba(0, 243, 255, 0.03)');
      drawEnergyWave(canvas.height * 0.65, 18, 0.002, 0.8, 'rgba(157, 78, 223, 0.03)');

      // Draw and update active particles with mouse avoidance/physics
      particles.forEach((p) => {
        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around borders
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Interactive mouse avoidance (repel force)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceRadius = 120;

        if (distance < forceRadius) {
          const force = (forceRadius - distance) / forceRadius;
          const directionX = dx / distance;
          const directionY = dy / distance;
          
          // Push away from mouse
          p.x -= directionX * force * 3;
          p.y -= directionY * force * 3;
        }

        // Draw particle with outer bloom
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.closePath();
        ctx.fill();

        // Extra bloom on larger particles
        if (p.size > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha * 0.35})`;
          ctx.closePath();
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouse]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-screen h-screen"
    />
  );
}
