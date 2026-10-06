import { motion } from 'framer-motion';
import { weddingData } from '@/config/weddingData';
import { Sparkles, Heart, Sun, Flame, Utensils } from 'lucide-react';

export function WeddingTimeline() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'haldi':
        return <Sun className="w-5 h-5 text-[#C9A24A]" />;
      case 'mehendi':
        return <Flame className="w-5 h-5 text-[#C9A24A]" />;
      case 'nikkah':
        return <Heart className="w-5 h-5 text-[#C9A24A]" />;
      case 'reception':
        return <Utensils className="w-5 h-5 text-[#C9A24A]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C9A24A]" />;
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 paper-texture overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="font-serif-heading text-xs tracking-[0.35em] text-[#C9A24A] uppercase font-semibold">
          SACRED CELEBRATIONS
        </span>
        <h2 className="font-serif-title text-3xl sm:text-5xl text-[#FFF8F2] mt-2">
          Wedding Program
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent mx-auto mt-4" />
      </motion.div>

      {/* Vertical Timeline Container */}
      <div className="relative max-w-3xl w-full mx-auto px-4">
        {/* Central Gold Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#C9A24A]/20 via-[#C9A24A] to-[#C9A24A]/20" />

        <div className="flex flex-col gap-12 sm:gap-16">
          {weddingData.events.map((event, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  isEven ? 'flex-row-reverse text-right' : 'flex-row text-left'
                }`}
              >
                {/* Content Box */}
                <div className="w-[calc(50%-2rem)] sm:w-[calc(50%-3rem)] p-5 sm:p-6 rounded-xl bg-gradient-to-b from-[#65081F] to-[#3A0614] border border-[#C9A24A]/40 shadow-xl gold-border-glow">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#C9A24A]/20 text-[#F3E7C3] font-sans-clean text-[10px] sm:text-xs tracking-widest font-semibold uppercase mb-2">
                    {event.tag}
                  </span>

                  <h3 className="font-serif-title text-2xl sm:text-3xl text-[#FFF8F2] font-bold gold-gradient-text">
                    {event.title}
                  </h3>

                  <div className="font-serif-body text-base sm:text-lg text-[#C9A24A] font-semibold mt-1">
                    {event.date} • {event.time}
                  </div>

                  <p className="font-serif-body italic text-sm text-[#FFF8F2]/80 mt-2 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-3 text-xs font-sans-clean text-[#F3E7C3]/60 uppercase tracking-wider">
                    📍 {event.location}
                  </div>
                </div>

                {/* Node Center Marker */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#3A0614] border-2 border-[#C9A24A] flex items-center justify-center shadow-lg z-10">
                  {getIcon(event.id)}
                </div>

                {/* Empty opposite side spacer */}
                <div className="w-[calc(50%-2rem)] sm:w-[calc(50%-3rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
