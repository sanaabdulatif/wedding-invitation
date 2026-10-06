import { motion } from 'framer-motion';
import { weddingData } from '@/config/weddingData';

export function CoupleFinalAnimation() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20 paper-texture overflow-hidden">
      {/* Background Lighting & Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-t from-[#C9A24A]/20 via-[#B83A38]/35 to-transparent blur-3xl pointer-events-none" />

      {/* Decorative Gold Arch Outer Frame */}
      <div className="absolute inset-x-6 top-8 bottom-8 border border-[#C9A24A]/25 rounded-t-[100px] pointer-events-none" />

      {/* Main Luxury Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-xl w-full flex flex-col items-center text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#8B2625]/90 to-[#4A1010]/95 border border-[#C9A24A]/40 shadow-2xl gold-border-glow"
      >
        {/* Top Royal Monogram Emblem */}
        <div className="w-16 h-16 rounded-full bg-[#C9A24A]/10 border border-[#C9A24A] flex items-center justify-center mb-4 shadow-lg">
          <span className="font-serif-title text-xl text-[#C9A24A] font-bold">R & S</span>
        </div>

        <h2 className="font-serif-title text-3xl sm:text-4xl text-[#FFF8F2] font-bold mt-2 gold-gradient-text tracking-wide">
          AND SO, OUR FOREVER BEGINS...
        </h2>

        <div className="font-cursive text-4xl sm:text-5xl text-[#C9A24A] my-4">
          {weddingData.brideName} &amp; {weddingData.groomName}
        </div>

        <p className="font-serif-heading text-sm text-[#F3E7C3] uppercase tracking-[0.25em] font-semibold bg-[#5C1716]/90 px-6 py-2 rounded-full border border-[#C9A24A]/30">
          {weddingData.weddingDateFormatted}
        </p>

        <p className="mt-6 font-serif-body italic text-base text-[#FFF8F2]/90 max-w-md border-t border-[#C9A24A]/30 pt-4 leading-relaxed">
          Thank you for being a cherished part of our special journey. Your love and blessings mean the world to us.
        </p>

        <div className="mt-6 text-xs font-serif-heading text-[#C9A24A] tracking-widest uppercase">
          ✦ KOZHIKODE, KERALA ✦
        </div>
      </motion.div>
    </section>
  );
}

