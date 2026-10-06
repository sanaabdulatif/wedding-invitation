import { motion } from 'framer-motion';
import { weddingData } from '@/config/weddingData';
import { OrnamentalBorder } from './OrnamentalBorder';

export function ParentsSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-[#6E1C1B] via-[#5C1716] to-[#6E1C1B]">
      {/* Decorative Golden Line SVG Ornament Top */}
      <div className="w-32 sm:w-48 mb-8 text-[#C9A24A] opacity-70">
        <svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10H80M120 10H200" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="10" r="4" fill="currentColor" />
          <path d="M90 10L100 0L110 10L100 20L90 10Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative max-w-2xl w-full p-8 sm:p-14 my-auto">
        <OrnamentalBorder />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="font-serif-body italic text-lg sm:text-xl text-[#F3E7C3]">
            With the graceful presence & blessings of
          </span>
          <h2 className="font-serif-heading text-xl sm:text-2xl tracking-[0.2em] text-[#C9A24A] uppercase mt-2 font-semibold">
            OUR BELOVED PARENTS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8 items-start relative z-10">
          {/* Bride's Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif-title text-2xl sm:text-3xl text-[#FFF8F2] tracking-wider">
              {weddingData.brideName}
            </span>
            <span className="font-serif-body italic text-sm sm:text-base text-[#C9A24A] my-2">
              Daughter of
            </span>
            <div className="font-serif-heading text-lg sm:text-xl text-[#F3E7C3] font-medium tracking-wide">
              {weddingData.brideParents.father}
            </div>
            <div className="font-cursive text-2xl text-[#C9A24A] my-0.5">&</div>
            <div className="font-serif-heading text-lg sm:text-xl text-[#F3E7C3] font-medium tracking-wide">
              {weddingData.brideParents.mother}
            </div>
          </motion.div>

          {/* Groom's Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif-title text-2xl sm:text-3xl text-[#FFF8F2] tracking-wider">
              {weddingData.groomName}
            </span>
            <span className="font-serif-body italic text-sm sm:text-base text-[#C9A24A] my-2">
              Son of
            </span>
            <div className="font-serif-heading text-lg sm:text-xl text-[#F3E7C3] font-medium tracking-wide">
              {weddingData.groomParents.father}
            </div>
            <div className="font-cursive text-2xl text-[#C9A24A] my-0.5">&</div>
            <div className="font-serif-heading text-lg sm:text-xl text-[#F3E7C3] font-medium tracking-wide">
              {weddingData.groomParents.mother}
            </div>
          </motion.div>
        </div>

        {/* Bottom Gold Emblem */}
        <div className="mt-12 flex justify-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent" />
        </div>
      </div>
    </section>
  );
}
