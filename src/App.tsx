import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, Flame, Dumbbell, Award, Cpu, Target, Heart, ShieldCheck, 
  CalendarRange, Phone, MapPin, Clock, MessageSquare, Menu, X, Star,
  Shield, Check, ArrowRight, Instagram, Facebook, Youtube, Play, ArrowUpRight, Eye
} from 'lucide-react';
import { SERVICES, WHY_CHOOSE_US, TRAINING_PROGRAMS, TESTIMONIALS } from './data';
import { Service } from './types';
import ServiceModal from './components/ServiceModal';
import InteractiveGallery from './components/InteractiveGallery';
import GymCalculator from './components/GymCalculator';
import InquiryForm from './components/InquiryForm';

// Cinematic 3D Animation Systems
import FloatingParticles from './components/FloatingParticles';
import Floating3DAssets from './components/Floating3DAssets';
import Counter from './components/Counter';
import Magnetic from './components/Magnetic';
import ThreeDCard from './components/ThreeDCard';
import TestimonialCarousel from './components/TestimonialCarousel';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Cinematic 3D Orbiting Hero Camera State
  const [heroRotate, setHeroRotate] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Smooth micro camera bounds: -5deg to 5deg
    const rotateX = -((clientY / height) - 0.5) * 10;
    const rotateY = ((clientX / width) - 0.5) * 12;
    setHeroRotate({ x: rotateX, y: rotateY });
  };

  const handleHeroMouseLeave = () => {
    setHeroRotate({ x: 0, y: 0 });
  };

  // Custom contact details
  const phoneNumber = '07297801431';
  const displayPhone = '072978 01431';
  const whatsappUrl = 'https://wa.me/917297801431?text=Hello%20Always%20Fitness%20Gym%20Banswara!%20I%3Fm%20visiting%20your%20website%20and%20would%20love%20to%20get%20started%20with%20a%20free%20trial.';

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'benefits', 'programs', 'calculator', 'gallery', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  // Icon chooser helper for dynamic lists
  const renderIcon = (name: string, className = "w-6 h-6 text-neon-blue") => {
    switch (name) {
      case 'Award': return <Award className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Target': return <Target className={className} />;
      case 'Heart': return <Heart className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'CalendarRange': return <CalendarRange className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Dumbbell': return <Dumbbell className={className} />;
      default: return <Dumbbell className={className} />;
    }
  };

  return (
    <div className="mesh-bg text-white min-h-screen font-sans selection:bg-neon-blue selection:text-black overflow-x-hidden relative">
      
      {/* CINEMATIC BACKGROUND RENDERING SERVICES */}
      <FloatingParticles />
      
      {/* GLOWING AMBIENT HEADLIGHT NODES */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-neon-blue/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[35%] right-0 w-[400px] h-[400px] bg-neon-purple/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[500px] h-[550px] bg-neon-blue/5 blur-[160px] rounded-full pointer-events-none" />

      {/* FLOAT WHATSAPP ICON BUTTON */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        id="floating-whatsapp"
        title="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-45 flex items-center justify-center p-4 rounded-full bg-[#25d366] text-black shadow-lg hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 shadow-green-500/30 group"
      >
        <MessageSquare className="w-6 h-6 fill-black stroke-none" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out font-mono text-xs font-bold uppercase tracking-wider pl-0 group-hover:pl-2">
          Chat With Us
        </span>
      </a>

      {/* FIXED HEADER / NAVIGATION BAR */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          hasScrolled 
            ? 'bg-black/85 backdrop-blur-md py-4 border-white/5' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Name */}
          <button 
            onClick={() => scrollToId('home')}
            className="flex items-center gap-2.5 text-left cursor-pointer group"
          >
            <div className="relative p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-neon-blue/40 transition-colors duration-300">
              <Dumbbell className="w-6 h-6 text-neon-blue transform group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-lg bg-neon-blue/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <span className="text-sm font-mono tracking-widest font-black uppercase text-neon-blue leading-none block">
                ALWAYS
              </span>
              <span className="text-sm font-display font-black tracking-tight text-white uppercase leading-none block">
                FITNESS GYM
              </span>
              <span className="text-[9px] font-mono font-medium tracking-widest text-gray-500 block uppercase">
                BANSWARA
              </span>
            </div>
          </button>

          {/* Nav Anchors - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'benefits', label: 'Benefits' },
              { id: 'programs', label: 'Programs' },
              { id: 'calculator', label: 'Body Blueprint' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'testimonials', label: 'Stories' },
              { id: 'contact', label: 'Contact' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToId(link.id)}
                id={`nav-link-${link.id}`}
                className={`text-xs font-mono font-bold uppercase tracking-wider transition-colors relative py-1 cursor-pointer ${
                  activeSection === link.id ? 'text-neon-blue' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="activeUnderline" 
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Header Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 text-xs font-mono text-gray-300 hover:text-neon-blue transition-colors py-2"
              id="header-call-btn"
            >
              <Phone className="w-3.5 h-3.5" />
              {displayPhone}
            </a>
            <Magnetic>
              <button 
                onClick={() => scrollToId('contact')}
                id="header-join-btn"
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-black font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-neon-blue/15 hover:shadow-neon-blue/20 cursor-pointer"
              >
                Join Today
              </button>
            </Magnetic>
          </div>

          {/* Toggle Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-drawer-toggle"
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[75px] z-30 lg:hidden glassmorphism border-y border-white/10 p-6 flex flex-col gap-4 text-center shadow-2xl"
          >
            {[
              { id: 'about', label: 'About Services' },
              { id: 'services', label: 'Workout Offerings' },
              { id: 'benefits', label: 'Why Choose Us' },
              { id: 'programs', label: 'Lifting Matrices' },
              { id: 'calculator', label: 'Biometrics Utility' },
              { id: 'gallery', label: 'Gym Interior Gallery' },
              { id: 'testimonials', label: 'Success Testimonials' },
              { id: 'contact', label: 'Contact Details' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToId(link.id)}
                id={`mobile-nav-link-${link.id}`}
                className={`py-2 text-sm font-mono font-medium tracking-wide uppercase transition-colors ${
                  activeSection === link.id ? 'text-neon-blue font-bold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="h-[1px] bg-white/5 my-2" />
            <div className="flex flex-col gap-3">
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2 text-sm font-mono text-gray-300 py-2 border border-white/5 rounded-xl bg-white/5"
                id="mobile-call-link"
              >
                <Phone className="w-4 h-4 text-neon-blue" />
                {displayPhone}
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                id="mobile-whatsapp-cta"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-black font-semibold text-sm transition-transform"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                WhatsApp Quick Join
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* 1. HERO SECTION (With gorgeous parallax grids and micro badges) */}
      <section 
        id="home" 
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative min-h-screen pt-28 sm:pt-36 flex items-center justify-center overflow-hidden pb-16 px-4"
      >
        {/* Full-size dark high-spec athletic environment photo overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop" 
            alt="Always Fitness Gym Interior" 
            className="w-full h-full object-cover filter brightness-75 scale-105 saturate-75 opacity-50 contrast-125"
          />
        </div>

        {/* 3D FLOATING DUMBBELLS AND OTHER ASSETS */}
        <Floating3DAssets />

        {/* Animated spotlight effects in hero */}
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-neon-blue/15 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] bg-neon-purple/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none animate-pulse-slow" />

        <div 
          className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 transition-transform duration-300 ease-out"
          style={{ 
            transform: `perspective(1200px) rotateX(${heroRotate.x}deg) rotateY(${heroRotate.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          
          {/* Hero Left: Headlines */}
          <div className="lg:col-span-7 space-y-6 text-left" style={{ transform: 'translateZ(30px)' }}>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-neon-blue animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-300 font-bold">
                Banswara’s Premier Fitness Landmark
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-tight text-white leading-none">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple neon-glow">Body</span>.<br />
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d4edf] to-[#00f3ff] neon-glow-purple">Life</span>.
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
              Experience "Always Fitness Gym Banswara", a luxuriously styled physical development center designed with next-generation heavy training systems, high-intensity classes, and bespoke elite metabolic counseling.
            </p>

            {/* CTA list */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Magnetic>
                <button 
                  onClick={() => scrollToId('contact')}
                  id="hero-join-now"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple hover:scale-[1.02] text-black font-mono text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-neon-blue/20 cursor-pointer"
                >
                  Join Today
                </button>
              </Magnetic>
              
              <Magnetic>
                <button 
                  onClick={() => scrollToId('calculator')}
                  id="hero-free-trial"
                  className="px-6 py-4 rounded-xl bg-[#121217]/80 hover:bg-[#1f1f2a] hover:border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider border border-white/5 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                >
                  Free Biometric Report
                </button>
              </Magnetic>

              <Magnetic>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-whatsapp-consult"
                  className="px-6 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-green-500/10 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  WhatsApp Us
                </a>
              </Magnetic>
            </div>

            {/* Live Stats Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/5">
              {[
                { number: 10, suffix: '+', label: 'Elite Programs' },
                { number: 6, suffix: '+', label: 'Certified Coaches' },
                { number: 450, suffix: '+', label: 'Active Members' },
                { number: 100, suffix: '%', label: 'Results Formula' }
              ].map((stat, i) => (
                <div key={i} className="text-left">
                  <h3 className="text-2xl sm:text-3xl font-display font-black leading-none">
                    <Counter end={stat.number} suffix={stat.suffix} />
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right: 3D biometric card stack */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center p-4">
            
            {/* Ambient backing circle glow */}
            <div className="absolute w-[300px] h-[300px] bg-neon-blue/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Core 3D visual wrapper */}
            <motion.div 
              initial={{ rotateY: 15, rotateX: 10, scale: 0.95 }}
              animate={{ rotateY: 5, rotateX: 5, scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="relative w-full max-w-sm h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-[#121217]/90 p-4 shadow-2xl preserve-3d group hover:border-neon-blue/30 transition-all duration-500"
            >
              
              {/* Internal abstract metal/neon frame */}
              <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 via-transparent to-black" />
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop" 
                alt="Olympic Lifting"
                className="w-full h-64 object-cover rounded-2xl transform scale-100 group-hover:scale-102 transition-transform duration-500 brightness-90 saturate-125"
              />

              {/* Float Badge 1 (Physical Metric) */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 border border-neon-blue/30 backdrop-blur-sm shadow-xl">
                <Flame className="w-4 h-4 text-neon-blue animate-pulse" />
                <span className="text-[10px] font-mono text-white font-bold tracking-wider">ALWAYS ACTIVE</span>
              </div>

              {/* Float Badge 2 (Interactive Floating Telemetry Widget inside Hero) */}
              <div className="absolute bottom-24 right-4 max-w-[190px] border border-white/5 bg-black/90 p-3 rounded-xl shadow-2xl backdrop-blur-sm z-20">
                <p className="text-[9px] font-mono text-gray-500 uppercase">NEXT SESSIONS</p>
                <div className="h-[2px] bg-neon-blue w-1/2 my-1" />
                <h5 className="text-xs font-semibold text-white">Compound Lift Split</h5>
                <p className="text-[9px] font-mono text-neon-blue">Starts in 12 min</p>
              </div>

              {/* Bottom text inside the cards */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[9px] font-mono tracking-widest text-[#9d4edf] uppercase font-bold block mb-1">
                  Biomechanical Focus
                </span>
                <h4 className="text-xl font-display font-black text-white uppercase tracking-tight">
                  High-Spec Equipment
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Fitted with premium biometric heavy racks for safe hypertrophic progression.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 2. ABOUT US SECTION (Pristine background story & values) */}
      <section id="about" className="py-24 border-t border-white/5 relative bg-[#060608]/40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* About left picture frames */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop" 
                  alt="Certified Personal Trainers Rajasthan" 
                  className="w-full h-[450px] object-cover filter saturate-110 brightness-90 transform hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              {/* Floated Overlapping Coaching Badge */}
              <div className="absolute -bottom-6 -right-4 bg-black/95 border border-white/10 rounded-2xl p-4 shadow-2xl max-w-xs backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-neon-blue/15 text-neon-blue">
                    <Award className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">REPS India Certified</h5>
                    <p className="text-xs text-gray-400 leading-normal">Full postural correction training</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About right text block */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[11px] font-mono tracking-[0.3em] text-neon-blue font-bold uppercase block">
                The Heritage Story
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase">
                Welcome to Banswara’s Ultimate Power Citadel
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                At **Always Fitness Gym Banswara**, we do not operate standard, run-of-the-mill workout rows. We built a premium luxury fitness center that inspires maximum physical commitment the minute you cross our threshold. Our goal is simple: to make world-class physical coaching, premium plate-loaded logistics, and science-backed body alignment accessible to every citizen on College Road.
              </p>

              {/* Mini Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { text: 'Biomechanical compound support racks', desc: 'Saves your lumbar column' },
                  { text: 'Continuous physical medical support', desc: 'Expert physical evaluation' },
                  { text: 'Dedicated modern ventilation setup', desc: 'Breathe clean, oxygenated air' },
                  { text: 'Certified clinical wellness experts', desc: 'No dangerous internet diet routines' }
                ].map((pt, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-neon-blue/10 text-neon-blue">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{pt.text}</h4>
                      <p className="text-xs text-gray-500">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Small Action Signoff */}
              <div className="pt-6 flex flex-wrap gap-4 items-center border-t border-white/5">
                <div>
                  <h5 className="font-display font-medium text-white text-lg">Always Fitness Gym</h5>
                  <p className="text-xs text-gray-500 font-mono">EST. BANSWARA, RAJASTHAN</p>
                </div>
                <button 
                  onClick={() => scrollToId('contact')}
                  id="about-cta-visit"
                  className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white hover:text-neon-blue text-xs font-mono font-bold uppercase tracking-wider border border-white/5 transition-all duration-300 group cursor-pointer"
                >
                  Schedule Site Tour
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 3. SERVICES SECTION (Premium Spotlights cards with popup spotlights) */}
      <section id="services" className="py-24 border-t border-white/5 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-[11px] font-mono tracking-[0.3em] text-neon-blue font-bold uppercase block mb-3">
            Elite Classes & Workouts
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase mb-4">
            Master Every Physical Discipline
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
            Click target workout cells to explore advanced details, class durations, biological intensities, and customizable nutritional splits.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {SERVICES.map((srv) => (
              <ThreeDCard 
                key={srv.id}
                id={`service-card-${srv.id}`}
                glowColor="blue"
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#121217]/50 border border-white/5 focus-within:ring-1 focus-within:ring-neon-blue cursor-pointer"
                onClick={() => setSelectedService(srv)}
              >
                {/* Micro Ambient Glow in Card backing */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-neon-blue/5 rounded-full blur-2xl group-hover:bg-neon-blue/10 transition-all pointer-events-none" />
                
                <div>
                  {/* Icon Spot */}
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 text-neon-blue mb-6 group-hover:bg-neon-blue/10 group-hover:text-neon-blue transition-colors">
                    {renderIcon(srv.iconName)}
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2 uppercase group-hover:text-neon-blue transition-colors">
                    {srv.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {srv.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex gap-4">
                    <div>
                      <p className="text-[9px] font-mono text-gray-600 uppercase">Duration</p>
                      <p className="text-xs font-semibold text-white">{srv.duration}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-mono text-gray-600 uppercase">Intensity</p>
                      <p className="text-xs font-semibold text-white">{srv.intensity}</p>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(srv);
                    }}
                    id={`service-info-btn-${srv.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-neon-blue font-bold tracking-wider hover:text-white uppercase transition-colors"
                  >
                    Learn More
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>


      {/* 4. WHY CHOOSE US SECTION (Modern Grid details) */}
      <section id="benefits" className="py-24 border-t border-white/5 relative bg-[#060608]/50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-[11px] font-mono tracking-[0.3em] text-neon-blue font-bold uppercase block mb-3">
            Physiological Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase mb-16">
            Engineered For Absolute Progression
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {WHY_CHOOSE_US.map((point) => (
              <div 
                key={point.id}
                id={`why-choose-${point.id}`}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#121217] to-transparent border border-white/5 flex gap-5 items-start relative hover:border-white/10 transition-colors duration-300"
              >
                <div className="p-3 rounded-xl bg-neon-purple/5 border border-neon-purple/20 text-neon-purple flex-shrink-0">
                  {renderIcon(point.iconName, "w-6 h-6 text-neon-purple")}
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-white uppercase tracking-tight mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Sub CTA */}
          <div className="mt-16 bg-[#121217]/60 border border-white/5 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-lg font-display font-semibold text-white">Experience Always Fitness Banswara for yourself</h4>
              <p className="text-sm text-gray-400 mt-1">Request a zero-commitment complimentary training pass on us.</p>
            </div>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              id="benefits-claim-trial"
              className="px-6 py-3.5 rounded-xl bg-neon-blue text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors duration-300"
            >
              Get Free 1-Day Trial
            </a>
          </div>
        </div>
      </section>


      {/* 5. TRAINING PROGRAMS SECTION (Heavy Compound Blocks) */}
      <section id="programs" className="py-24 border-t border-white/5 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-[11px] font-mono tracking-[0.3em] text-neon-blue font-bold uppercase block mb-3">
            Elite Lifting Frameworks
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase mb-4 animate-pulse-slow">
            Periodization Blueprints
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
            Select standard, meticulously designed progression sequences designed by certified powerlifters and biomechanical scientists.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {TRAINING_PROGRAMS.map((prog) => (
              <ThreeDCard 
                key={prog.id}
                id={`program-card-${prog.id}`}
                glowColor="purple"
                className="group relative rounded-3xl overflow-hidden bg-[#121217]/50 border border-white/15 flex flex-col justify-between h-[420px] shadow-lg hover:border-neon-purple/40 cursor-pointer"
              >
                {/* Program image backdrop */}
                <div className="absolute inset-0 z-0 opacity-45 group-hover:opacity-30 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent z-10" />
                  <img 
                    src={prog.image} 
                    alt={prog.title} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Tag headers */}
                <div className="relative z-10 p-6 flex justify-between items-center">
                  <span className="px-3 py-1 rounded bg-black/80 font-mono text-[9px] uppercase tracking-widest text-[#00f3ff] border border-white/10">
                    {prog.durationWeeks} WEEKS
                  </span>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-neon-purple uppercase bg-black/80 px-2 py-1 rounded border border-white/10">
                    {prog.intensity}
                  </span>
                </div>

                {/* Info blocks at bottom */}
                <div className="relative z-10 p-6 space-y-4">
                  <div>
                    <p className="text-[10px] font-mono uppercase text-neon-purple font-black tracking-wider mb-1">
                      {prog.tagline}
                    </p>
                    <h3 className="text-xl font-display font-black text-white uppercase tracking-tight">
                      {prog.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed font-sans line-clamp-3">
                    {prog.description}
                  </p>

                  <div className="pt-3 border-t border-white/5 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[9px] font-mono text-gray-500 uppercase">BATCH SCHEDULE</p>
                      <p className="text-xs font-semibold text-white">{prog.frequency}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-mono text-gray-500 uppercase">PRIMARY FOCUS</p>
                      <p className="text-xs font-semibold text-white truncate">{prog.focus[0]}</p>
                    </div>
                  </div>

                  {/* Button trigger */}
                  <a 
                    href={`https://wa.me/917297801431?text=Hello%20Always%20Fitness%20Gym%20Banswara!%20I%3Fm%20very%20interested%20in%20the%20"${encodeURIComponent(prog.title)}"%20program.%20Please%20share%20the%20cost%20and%20timings.`}
                    target="_blank"
                    rel="noreferrer"
                    id={`program-join-${prog.id}`}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-neon-purple hover:bg-neon-blue text-black text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-300"
                  >
                    Select Program
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>


      {/* 6. BIOMETRIC CALCULATOR SECTION */}
      <section id="calculator" className="py-24 border-t border-white/5 relative bg-[#060608]/40">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#9d4edf] font-bold uppercase block mb-3">
              Anatomical Analytics
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase mb-4">
              Real-Time Body Metric Engine
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Input variables to capture BMR ratios, structural TDEE targets, recommended macro-nutrient splits, and tailored program matrices instantly.
            </p>
          </div>

          <GymCalculator />
        </div>
      </section>


      {/* 7. GALLERY SECTION */}
      <section id="gallery" className="py-24 border-t border-white/5 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-[11px] font-mono tracking-[0.3em] text-neon-blue font-bold uppercase block mb-3">
            Physical Sanctuary
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase mb-4">
            Inspect our elite facilities
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
            Take a physical walk-through. Real hardware, pristine clean zones, custom metabolic recovery, and professional spacing.
          </p>

          <InteractiveGallery />
        </div>
      </section>


      {/* 8. MEMBER TESTIMONIALS (Realistic transformations) */}
      <section id="testimonials" className="py-24 border-t border-white/5 relative bg-[#060608]/50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-[11px] font-mono tracking-[0.3em] text-neon-blue font-bold uppercase block mb-3">
            Verified Transformations
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase mb-16">
            Member success stories
          </h2>

          <TestimonialCarousel />
        </div>
      </section>


      {/* 9. CONTACT & INQUIRY SECTION (With Google maps frame) */}
      <section id="contact" className="py-24 border-t border-white/5 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-[11px] font-mono tracking-[0.3em] text-neon-blue font-bold uppercase block mb-3">
              Establish Connection
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase">
              Schedule Your Free Test Drive
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact left details + Google Maps */}
            <div className="lg:col-span-5 space-y-8 text-left">
              
              <div className="space-y-4">
                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white">
                  Location Credentials
                </h3>
                
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-white/5 border border-white/5 text-neon-blue">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase">HQ Physical Address</p>
                      <p className="text-sm font-medium text-white max-w-sm leading-relaxed mt-1">
                        HDFC Bank, College Road, Near Pehnava Cloth Store, Bhagat Singh Colony, Banswara, Rajasthan 327001
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-white/5 border border-white/5 text-neon-blue">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase">Trainer Line</p>
                      <a 
                        href={`tel:${phoneNumber}`} 
                        className="text-lg font-bold text-white hover:text-neon-blue transition-colors mt-1 block"
                        id="contact-call-link"
                      >
                        {displayPhone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-white/5 border border-white/5 text-neon-blue">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase">CITADEL WORKING HOURS</p>
                      <p className="text-sm font-medium text-white leading-relaxed mt-1">
                        Monday – Saturday: <span className="text-neon-blue font-mono font-semibold">5:00 AM – 10:00 PM</span>
                      </p>
                      <p className="text-xs text-red-500 font-mono mt-0.5">Sunday: REST DAY CLOSED</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* STYLIZED DARK-MODE COMPATIBLE GOOGLE MAP EMBED */}
              <div className="rounded-2xl overflow-hidden border border-white/10 h-64 shadow-2xl relative">
                {/* Gradient Rim */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
                <iframe 
                  title="Always Fitness Gym Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m4!2s0x39682bd789c67ebf%!3sm0x39682bd789c67ebf%!5s0x0!8m2!3d23.5413009!4d74.4443901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39682b13c7fa6899%3A0xc07a391cbdeaf5ef!2sAlways%20fitness%20gym!5e0!3m2!1sen!2sin!4v1717730000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter invert-[90%] hue-rotate-[180deg] saturate-[60%] brightness-[70%] contrast-[110%]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact right: Submission inquiry board */}
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>

          </div>
        </div>
      </section>


      {/* 10. FOOTER */}
      <footer className="bg-[#030305] border-t border-white/5 py-12 text-gray-500 relative overflow-hidden text-sm">
        
        {/* Subtle backing mesh highlights */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-purple/5 blur-[100px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand details */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2 text-left">
              <div className="p-2 rounded bg-white/5 border border-white/10 text-neon-blue">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest font-black uppercase text-neon-blue leading-none block">ALWAYS</span>
                <span className="text-xs font-display font-black tracking-tight text-white uppercase leading-none block">FITNESS GYM</span>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-sans mt-2">
              Banswara’s high-end elite luxury strength citadel on College Road. Expert coaches, plate-loaded bio-racks, and guaranteed physical alignment.
            </p>

            <div className="flex items-center gap-3.5 pt-2">
              {[
                { icon: <Instagram className="w-4 h-4" />, link: 'https://instagram.com' },
                { icon: <Facebook className="w-4 h-4" />, link: 'https://facebook.com' },
                { icon: <Youtube className="w-4 h-4" />, link: 'https://youtube.com' }
              ].map((sc, i) => (
                <a 
                  key={i} 
                  href={sc.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-neon-blue hover:bg-neon-blue/10 transition-all duration-200"
                >
                  {sc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services Quick links */}
          <div className="space-y-4 text-left">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Classes & Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              {['HIIT Exercise Classes', 'CrossFit Stadium', 'Zumba & Aerobics', 'Weight Hypertrophy', 'Gentle Vinyasa Yoga', 'Indoor Cycling Stadium'].map((srvTitle) => (
                <li key={srvTitle}>
                  <button 
                    onClick={() => scrollToId('services')}
                    className="hover:text-white transition-colors"
                  >
                    {srvTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs quick selection */}
          <div className="space-y-4 text-left">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Lifting Frameworks
            </h4>
            <ul className="space-y-2 text-xs">
              {['Fat-Loss Architecture', 'Hypertrophy Protocol', 'Compound Strength Complex', 'Functional Athleticism', 'Iron Launchpad Phase 1'].map((pt) => (
                <li key={pt}>
                  <button 
                    onClick={() => scrollToId('programs')}
                    className="hover:text-white transition-colors animate-pulse-slow"
                  >
                    {pt}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Rapid Contact specifics */}
          <div className="space-y-4 text-left">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Citadel Location
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              HDFC Bank, College Road,<br />
              Near Pehnava Cloth Store, Bhagat Singh Colony,<br />
              Banswara, Rajasthan 327001
            </p>
            <div className="pt-2 text-xs font-mono space-y-1">
              <p className="text-gray-400">SUPPORT LINE:</p>
              <a href={`tel:${phoneNumber}`} className="text-white hover:text-neon-blue font-bold tracking-wider">
                {displayPhone}
              </a>
            </div>
          </div>

        </div>

        {/* Legal Signoff credit container */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-center sm:text-left">
          <p id="footer-copyright">© 2026 Always Fitness Gym Banswara. All rights reserved.</p>
          <div className="flex gap-4">
            <button onClick={() => scrollToId('home')} className="hover:text-white transition-colors">Back to Top</button>
            <span>•</span>
            <span className="text-[10px] font-mono text-neon-blue uppercase">Always Fitness Ultimate Performance Core</span>
          </div>
        </div>

      </footer>

      {/* POPUP SPOTLIGHT MODAL FOR SERVICES DRAWER */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />

    </div>
  );
}
