import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Activity, ShieldCheck, Dumbbell, Zap, Flame, MoveRight, HelpCircle, MessageSquare } from 'lucide-react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

// Icon Helper
const getIcon = (name: string) => {
  switch (name) {
    case 'Zap': return <Zap className="w-6 h-6 text-neon-blue" />;
    case 'Flame': return <Flame className="w-6 h-6 text-neon-blue" />;
    case 'Music': return <Activity className="w-6 h-6 text-neon-blue" />;
    case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-neon-blue" />;
    case 'Compass': return <CompassIcon className="w-6 h-6 text-neon-blue" />;
    case 'Apple': return <Activity className="w-6 h-6 text-neon-blue" />; // simplified or Apple
    case 'Bike': return <Activity className="w-6 h-6 text-neon-blue" />; // simplified or Bike
    case 'Sparkles': return <Flame className="w-6 h-6 text-neon-blue" />; // simplified or Sparkles
    default: return <Dumbbell className="w-6 h-6 text-neon-blue" />;
  }
};

// Simple compass/yoga icon since Lucide compass is standard
function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  const whatsappNumber = '917297801431'; // Country code + 10 digits
  const messageText = encodeURIComponent(
    `Hello Always Fitness Gym Banswara! I am interested in joining the "${service.title}" class. Please let me know the batch timings and membership details.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0f] text-white shadow-2xl z-10"
        >
          {/* Header Image Accent */}
          <div className="relative h-48 sm:h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f] via-transparent to-black/40 z-10" />
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover filter brightness-90 saturate-125"
            />
            {/* Close button */}
            <button
              onClick={onClose}
              id={`close-modal-${service.id}`}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors duration-200 border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Glowing Category Pill */}
            <div className="absolute bottom-4 left-6 z-20 flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-black/60 text-neon-blue border border-neon-blue/30 backdrop-blur-sm">
                BIOMETRICS: {service.intensity.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-[10px] font-mono tracking-[0.2em] text-neon-blue font-bold uppercase block mb-1">
                  Gym Program Spotlight
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Program Biometrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 border-y border-white/5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center p-2 rounded-lg bg-white/5">
                  <Clock className="w-4 h-4 text-neon-blue" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase">Duration</p>
                  <p className="text-sm font-semibold text-white">{service.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center p-2 rounded-lg bg-white/5">
                  <Activity className="w-4 h-4 text-neon-blue" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase">Intensity</p>
                  <p className="text-sm font-semibold text-white">{service.intensity}</p>
                </div>
              </div>

              <div className="col-span-2 md:col-span-1 flex items-center gap-3">
                <div className="flex items-center justify-center p-2 rounded-lg bg-white/5">
                  <ShieldCheck className="w-4 h-4 text-neon-blue" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase">Clean Status</p>
                  <p className="text-sm font-semibold text-green-400">100% Certified</p>
                </div>
              </div>
            </div>

            {/* Benefits list */}
            <div className="mb-8">
              <h4 className="text-xs font-mono font-bold uppercase text-gray-400 tracking-wider mb-3">
                Key Performance Benefits
              </h4>
              <ul className="space-y-2.5">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-neon-blue" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                id={`modal-whatsapp-${service.id}`}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-black font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                Book Timing on WhatsApp
              </a>
              <button
                onClick={onClose}
                id={`modal-close-btn-${service.id}`}
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-200 text-sm font-medium border border-white/5"
              >
                Close Spotlight
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
