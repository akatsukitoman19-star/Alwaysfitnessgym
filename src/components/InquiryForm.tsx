import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, MessageSquare, AlertCircle, PhoneCall } from 'lucide-react';

export default function InquiryForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState('Apex Hypertrophy Protocol');
  const [timeSlot, setTimeSlot] = useState('Evening (4:00 PM - 9:00 PM)');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!name.trim()) {
      setValidationError('Please specify your name for the trainer logs.');
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setValidationError('Please input a valid contact phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate database record creation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset after some time
      setTimeout(() => {
        setSubmitSuccess(false);
        setName('');
        setPhone('');
        setMessage('');
      }, 5000);
    }, 1200);
  };

  const programs = [
    'Apex Hypertrophy Protocol',
    'Alpha Fat-Loss Architecture',
    'Elite Power & Strength Matrix',
    'Titan Functional Athleticism',
    'Foundational Iron Launchpad',
    'Apex Savage Conditioning'
  ];

  const timeSlots = [
    'Morning (6:00 AM - 9:00 AM)',
    'Mid-Day (10:00 AM - 3:00 PM)',
    'Evening (4:00 PM - 9:00 PM)',
    'Flexible Schedule'
  ];

  // Direct WhatsApp dynamic generation
  const buildWhatsAppConsultation = () => {
    const rawMsg = `Hello Always Fitness Gym Banswara! My name is ${name || 'Prospective Member'}. I would like to join the gym.\n\n` +
      `- *Target Program:* ${program}\n` +
      `- *Preferred Timings:* ${timeSlot}\n` +
      `- *Phone Number:* ${phone || 'Not specified'}\n` +
      `- *Message:* ${message || 'I am ready to transform!'}`;
    
    return `https://wa.me/917297801431?text=${encodeURIComponent(rawMsg)}`;
  };

  return (
    <div className="w-full bg-[#121217]/50 rounded-2xl border border-white/5 p-6 sm:p-8 relative overflow-hidden">
      {/* Decorative vertical glowing neon blue mesh accent thread */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-transparent to-neon-purple opacity-30" />

      <AnimatePresence mode="wait">
        {!submitSuccess ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleFormSubmit}
            className="space-y-4"
          >
            {validationError && (
              <div className="flex items-center gap-2.5 bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-lg text-xs font-mono">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            <div>
              <label htmlFor="inquiry-name" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-semibold">
                Your Full Name
              </label>
              <input
                type="text"
                id="inquiry-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Siddharth Sharma"
                className="w-full bg-[#0c0c0f] text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neon-blue placeholder-gray-600 transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="inquiry-phone" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="inquiry-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 072978 01431"
                  className="w-full bg-[#0c0c0f] text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neon-blue placeholder-gray-600 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="inquiry-program" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-semibold">
                  Desired Program Split
                </label>
                <select
                  id="inquiry-program"
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full bg-[#0c0c0f] text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neon-blue"
                >
                  {programs.map((prog, index) => (
                    <option key={index} value={prog}>{prog}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="inquiry-time" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-semibold">
                Preferred Batch Timing
              </label>
              <select
                id="inquiry-time"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full bg-[#0c0c0f] text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neon-blue"
              >
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="inquiry-message" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-semibold">
                Additional Fitness Context (Optional)
              </label>
              <textarea
                id="inquiry-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="What are your goals or current injuries we should know about?"
                className="w-full bg-[#0c0c0f] text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neon-blue placeholder-gray-600 transition-all resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="submit"
                id="inquiry-submit-form"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold uppercase tracking-wider text-xs transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5 text-black" />
                {isSubmitting ? 'Transmitting logs...' : 'Submit Inquiry'}
              </button>

              <a
                href={buildWhatsAppConsultation()}
                target="_blank"
                rel="noreferrer"
                id="inquiry-whatsapp-direct"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25d366]/10 hover:bg-[#25d366]/20 border border-[#25d366]/30 text-[#25d366] font-semibold uppercase tracking-wider text-xs transition-all duration-300"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-[#25d366] stroke-none" />
                Chat Direct Now
              </a>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-4 animate-bounce">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-display font-semibold text-white mb-2">
              Inquiry Transmission Complete!
            </h3>
            <p className="text-sm text-gray-400 max-w-sm mb-6">
              Thank you, {name}! Your biometric training goals have been transmitted to our coaching staff at College Road. We will call you at <span className="text-neon-blue">{phone}</span> shortly to schedule your trial!
            </p>
            <div className="flex gap-3">
              <a
                href={buildWhatsAppConsultation()}
                target="_blank"
                rel="noreferrer"
                id="inquiry-success-whatsapp"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25d366] hover:bg-[#25d366]/90 text-black font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                Instant WhatsApp Booking
              </a>
              <button
                type="button"
                onClick={() => setSubmitSuccess(false)}
                id="inquiry-back-form"
                className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold uppercase tracking-wider border border-white/5"
              >
                Back to Form
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
