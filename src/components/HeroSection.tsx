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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-serif-heading text-xs sm:text-sm tracking-[0.35em] text-[#C9A24A] uppercase font-semibold">
            WE'RE GETTING MARRIED
          </span>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent mx-auto mt-3" />
        </motion.div>

        {/* Bride Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-serif-title text-5xl sm:text-7xl font-bold tracking-wide text-[#FFF8F2] drop-shadow-lg"
        >
          {weddingData.brideName}
        </motion.h1>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="my-3 font-cursive text-4xl sm:text-5xl text-[#C9A24A]"
        >
          &
        </motion.div>

        {/* Groom Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1 }}
          className="font-serif-title text-5xl sm:text-7xl font-bold tracking-wide text-[#FFF8F2] drop-shadow-lg"
        >
          {weddingData.groomName}
        </motion.h1>

        {/* Date Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-8 pt-6 border-t border-[#C9A24A]/30 w-full flex flex-col items-center gap-1"
        >
          <span className="font-serif-body text-lg sm:text-xl text-[#F3E7C3] tracking-widest uppercase">
            {weddingData.weddingDateFormatted}
          </span>
          <span className="font-sans-clean text-xs text-[#C9A24A] tracking-widest uppercase">
            Kozhikode, Kerala
          </span>
        </motion.div>
      </div>
    </section>
  );
}
