import { motion } from 'framer-motion';
import { weddingData } from '@/config/weddingData';
import { OrnamentalBorder } from './OrnamentalBorder';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 paper-texture overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-[#940327]/20 blur-3xl pointer-events-none" />

      {/* Frame Wrapper */}
      <div className="relative max-w-xl w-full p-8 sm:p-12 flex flex-col items-center justify-center my-auto">
        <OrnamentalBorder />

        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="font-serif-heading text-xs sm:text-sm tracking-[0.35em] text-[#C9A24A] uppercase font-semibold">
            TOGETHER WITH THEIR FAMILIES
          </span>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent mx-auto mt-2" />
          <span className="block mt-2 font-serif-body text-xs text-[#F3E7C3] tracking-[0.2em] uppercase">
            INVITE YOU TO CELEBRATE THE WEDDING OF
          </span>
        </motion.div>

        {/* Bride Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif-title text-5xl sm:text-7xl font-bold tracking-wide gold-gradient-text drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
        >
          {weddingData.brideName}
        </motion.h1>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="my-2 font-cursive text-4xl sm:text-5xl text-[#C9A24A] drop-shadow-md"
        >
          &
        </motion.div>

        {/* Groom Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif-title text-5xl sm:text-7xl font-bold tracking-wide gold-gradient-text drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
        >
          {weddingData.groomName}
        </motion.h1>

        {/* Date Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 pt-5 border-t border-[#C9A24A]/40 w-full flex flex-col items-center gap-1"
        >
          <span className="font-serif-body text-lg sm:text-xl text-[#F3E7C3] tracking-widest uppercase">
            {weddingData.weddingDateFormatted}
          </span>
          <span className="font-sans-clean text-xs text-[#C9A24A] tracking-widest uppercase font-medium">
            Kozhikode, Kerala
          </span>
        </motion.div>
      </div>
    </section>
  );
}
