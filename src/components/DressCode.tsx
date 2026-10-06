import { motion } from 'framer-motion';
import { weddingData } from '@/config/weddingData';
import { OrnamentalBorder } from './OrnamentalBorder';

export function DressCode() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-[#3A0614] via-[#4A0718] to-[#3A0614]">
      {/* Subtle Background Glow */}
      <div className="absolute w-80 h-80 rounded-full bg-[#C9A24A]/10 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <span className="font-serif-heading text-xs tracking-[0.35em] text-[#C9A24A] uppercase font-semibold">
          ELEGANCE & HARMONY
        </span>
        <h2 className="font-serif-title text-3xl sm:text-5xl text-[#FFF8F2] mt-2">
          Dress Code
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent mx-auto mt-4" />
        <p className="font-serif-body italic text-[#F3E7C3] text-base mt-2">
          {weddingData.dressCode.description}
        </p>
      </motion.div>

      {/* Dress Code Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl w-full px-4 relative z-10">
        {/* Men's Dress Code */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative p-8 rounded-2xl bg-gradient-to-b from-[#65081F] to-[#3A0614] border border-[#C9A24A]/40 shadow-2xl gold-border-glow flex flex-col items-center"
        >
          <OrnamentalBorder />

          {/* Tuxedo/Suit Minimal Line Art SVG */}
          <div className="w-24 h-24 rounded-full bg-[#1A0309] border border-[#C9A24A]/40 flex items-center justify-center mb-4 shadow-inner">
            <svg
              className="w-14 h-14 text-[#C9A24A]"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {/* Suit Collar & Lapel Line Art */}
              <path d="M16 12L32 28L48 12V52H16V12Z" strokeWidth="1.5" />
              <path d="M32 28V52" strokeWidth="1" strokeDasharray="2 2" />
              <path d="M26 12L32 20L38 12" fill="currentColor" fillOpacity="0.2" />
              {/* Bowtie / Tie Accent */}
              <polygon points="32,20 28,16 36,16" fill="currentColor" />
            </svg>
          </div>

          <span className="font-serif-heading text-xs tracking-[0.3em] text-[#C9A24A] uppercase font-semibold">
            GENTLEMEN
          </span>

          <h3 className="font-serif-title text-2xl sm:text-3xl text-[#FFF8F2] font-bold mt-1 gold-gradient-text">
            {weddingData.dressCode.men}
          </h3>

          <div className="mt-3 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#1E3A8A] border border-[#C9A24A]" />
            <div className="w-4 h-4 rounded-full bg-[#172554] border border-[#C9A24A]" />
            <div className="w-4 h-4 rounded-full bg-[#1D4ED8] border border-[#C9A24A]" />
          </div>

          <span className="font-sans-clean text-[11px] text-[#F3E7C3]/70 tracking-wider uppercase mt-2">
            Royal / Navy Blue Suits & Tuxedos
          </span>
        </motion.div>

        {/* Women's Dress Code */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative p-8 rounded-2xl bg-gradient-to-b from-[#65081F] to-[#3A0614] border border-[#C9A24A]/40 shadow-2xl gold-border-glow flex flex-col items-center"
        >
          <OrnamentalBorder />

          {/* Evening Gown Minimal Line Art SVG */}
          <div className="w-24 h-24 rounded-full bg-[#1A0309] border border-[#C9A24A]/40 flex items-center justify-center mb-4 shadow-inner">
            <svg
              className="w-14 h-14 text-[#C9A24A]"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {/* Elegant Dress Silhouette Line Art */}
              <path d="M26 12C26 12 32 18 38 12L44 32L50 52H14L20 32L26 12Z" strokeWidth="1.5" />
              <path d="M26 12H38" strokeWidth="1" />
              <path d="M28 24C32 26 32 26 36 24" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
          </div>

          <span className="font-serif-heading text-xs tracking-[0.3em] text-[#C9A24A] uppercase font-semibold">
            LADIES
          </span>

          <h3 className="font-serif-title text-2xl sm:text-3xl text-[#FFF8F2] font-bold mt-1 gold-gradient-text">
            {weddingData.dressCode.women}
          </h3>

          <div className="mt-3 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#1E3A8A] border border-[#C9A24A]" />
            <div className="w-4 h-4 rounded-full bg-[#2563EB] border border-[#C9A24A]" />
            <div className="w-4 h-4 rounded-full bg-[#3B82F6] border border-[#C9A24A]" />
          </div>

          <span className="font-sans-clean text-[11px] text-[#F3E7C3]/70 tracking-wider uppercase mt-2">
            Blue Evening Gowns, Sarees & Lehengas
          </span>
        </motion.div>
      </div>
    </section>
  );
}
