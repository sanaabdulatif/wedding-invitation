import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '@/config/weddingData';
import { OrnamentalBorder } from './OrnamentalBorder';

interface CurtainIntroProps {
  onOpen: () => void;
  isOpen: boolean;
  onStartMusic?: () => void;
}

export function CurtainIntro({ onOpen, isOpen, onStartMusic }: CurtainIntroProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // 1. Immediately trigger music on card click
    if (onStartMusic) {
      onStartMusic();
    }

    // 2. Allow the card to open slowly (3.5s) and showcase the names grandly before unlocking scroll
    setTimeout(() => {
      onOpen();
    }, 3600);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <div
          onClick={handleOpenClick}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#2A0610] cursor-pointer select-none perspective-[1400px]"
        >
          {/* Inner Reveal Stage: Names & Date emerge as doors part */}
          <div className="absolute inset-0 z-10 flex items-center justify-center p-4 bg-[#2A0610] paper-texture">
            {/* Soft Radial Gold Spotlight Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-gradient-radial from-[#C9A24A]/25 via-[#940327]/15 to-transparent blur-3xl pointer-events-none" />

            {/* Central Royal Name Card Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{
                opacity: isOpening ? 1 : 0.4,
                scale: isOpening ? 1 : 0.95,
              }}
              transition={{ duration: 1.2, delay: isOpening ? 0.3 : 0 }}
              className="relative max-w-xl w-full p-8 sm:p-12 flex flex-col items-center justify-center text-center"
            >
              <OrnamentalBorder />

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: isOpening ? 1 : 0, y: isOpening ? 0 : 15 }}
                transition={{ duration: 0.9, delay: 0.5 }}
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

              {/* Bride Name - Rinsha */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.85, y: 25 }}
                animate={{ opacity: isOpening ? 1 : 0, scale: isOpening ? 1 : 0.85, y: isOpening ? 0 : 25 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif-title text-5xl sm:text-7xl font-bold tracking-wide gold-gradient-text drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
              >
                {weddingData.brideName}
              </motion.h1>

              {/* Ampersand */}
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: isOpening ? 1 : 0, scale: isOpening ? 1 : 0.4 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="my-2 font-cursive text-4xl sm:text-5xl text-[#C9A24A] drop-shadow-md"
              >
                &
              </motion.div>

              {/* Groom Name - Salman */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.85, y: 25 }}
                animate={{ opacity: isOpening ? 1 : 0, scale: isOpening ? 1 : 0.85, y: isOpening ? 0 : 25 }}
                transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif-title text-5xl sm:text-7xl font-bold tracking-wide gold-gradient-text drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
              >
                {weddingData.groomName}
              </motion.h1>

              {/* Date & Venue Footer */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: isOpening ? 1 : 0, y: isOpening ? 0 : 15 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="mt-6 pt-5 border-t border-[#C9A24A]/40 w-full flex flex-col items-center gap-1"
              >
                <span className="font-serif-body text-lg sm:text-xl text-[#F3E7C3] tracking-widest uppercase">
                  {weddingData.weddingDateFormatted}
                </span>
                <span className="font-sans-clean text-xs text-[#C9A24A] tracking-widest uppercase font-medium">
                  Kozhikode, Kerala
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Left Royal Gatefold Card Door */}
          <motion.div
            initial={{ x: 0, rotateY: 0 }}
            animate={{
              x: isOpening ? '-100%' : '0%',
              rotateY: isOpening ? -20 : 0,
            }}
            transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 bottom-0 w-1/2 h-full z-20 overflow-hidden border-r-2 border-[#C9A24A] shadow-[20px_0_45px_rgba(0,0,0,0.9)] origin-left"
          >
            {/* Left Half of Full-Bleed Card Cover */}
            <div
              className="absolute top-0 bottom-0 left-0 w-[200%] h-full bg-cover bg-[left_center]"
              style={{ backgroundImage: `url('/royal_card_cover.jpg')` }}
            />
            {/* Luxury Gold Edge Bevel */}
            <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C9A24A] via-[#F3E7C3] to-[#9B7829] shadow-lg opacity-95" />
          </motion.div>

          {/* Right Royal Gatefold Card Door */}
          <motion.div
            initial={{ x: 0, rotateY: 0 }}
            animate={{
              x: isOpening ? '100%' : '0%',
              rotateY: isOpening ? 20 : 0,
            }}
            transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 bottom-0 w-1/2 h-full z-20 overflow-hidden border-l-2 border-[#C9A24A] shadow-[-20px_0_45px_rgba(0,0,0,0.9)] origin-right"
          >
            {/* Right Half of Full-Bleed Card Cover */}
            <div
              className="absolute top-0 bottom-0 right-0 w-[200%] h-full bg-cover bg-[right_center]"
              style={{ backgroundImage: `url('/royal_card_cover.jpg')` }}
            />
            {/* Luxury Gold Edge Bevel */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C9A24A] via-[#F3E7C3] to-[#9B7829] shadow-lg opacity-95" />
          </motion.div>

          {/* Double Gold Center Trim Seam Line */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isOpening ? 0 : 1 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-[#C9A24A] via-[#F3E7C3] to-[#9B7829] shadow-2xl z-25 pointer-events-none"
          />

          {/* Symmetrical Royal Rose Brooch Latch + Prominent Tap Prompt */}
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              scale: isOpening ? 1.35 : 1,
              opacity: isOpening ? 0 : 1,
            }}
            transition={{ duration: 0.7 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center cursor-pointer group"
          >
            {/* Outer Pulsing Golden Aura Glow */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-[#C9A24A] via-[#F3E7C3] to-[#C9A24A] opacity-45 blur-2xl animate-pulse pointer-events-none" />

            {/* Symmetrical Royal Rose Brooch Frame - Pure Refined Gold Lock Only */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center transition-all duration-300 drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)]"
            >
              <img
                src="/symmetrical_brooch.jpg"
                alt="Royal Rose Brooch Lock"
                style={{
                  mixBlendMode: 'screen',
                  clipPath: 'circle(45% at 50% 50%)',
                }}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

