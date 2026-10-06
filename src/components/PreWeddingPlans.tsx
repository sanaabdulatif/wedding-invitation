import { motion } from 'framer-motion';
import { weddingData } from '@/config/weddingData';
import { Calendar, Sparkles } from 'lucide-react';
import { OrnamentalBorder } from './OrnamentalBorder';

export function PreWeddingPlans() {
  return (
    <section className="relative min-h-[85vh] w-full flex flex-col items-center justify-center text-center px-4 py-20 paper-texture overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-[#B83A38]/30 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-6 sm:mb-8 shrink-0 relative z-10"
      >
        <span className="font-serif-heading text-xs tracking-[0.35em] text-[#C9A24A] uppercase font-semibold">
          ITINERARY OF EVENTS
        </span>
        <h2 className="font-serif-title text-3xl sm:text-5xl text-[#FFF8F2] mt-1.5 gold-gradient-text font-bold">
          Pre-Wedding Plans
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent mx-auto mt-3" />
      </motion.div>

      {/* Grid Layout of Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl w-full px-2 relative z-10">
        {weddingData.events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="relative p-7 rounded-2xl bg-gradient-to-b from-[#8B2625] to-[#5C1716] border border-[#C9A24A]/40 shadow-xl gold-border-glow text-left flex flex-col justify-between"
          >
            <OrnamentalBorder />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#C9A24A] text-[#4A1010] font-serif-heading text-[10px] tracking-widest font-bold uppercase">
                  {event.date.toUpperCase()}
                </span>
                <span className="text-xs font-sans-clean text-[#C9A24A] font-semibold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {event.time}
                </span>
              </div>

              <h3 className="font-serif-title text-2xl sm:text-3xl text-[#FFF8F2] font-bold gold-gradient-text">
                {event.title}
              </h3>

              <p className="font-serif-body italic text-sm text-[#F3E7C3]/90 mt-2 leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C9A24A]/20 flex items-center justify-between text-xs font-sans-clean text-[#F3E7C3]/70">
              <span className="truncate">📍 {event.location}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
