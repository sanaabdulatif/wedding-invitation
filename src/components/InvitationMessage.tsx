import { motion } from 'framer-motion';
import { weddingData } from '@/config/weddingData';
import { Quote } from 'lucide-react';

export function InvitationMessage() {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-20 paper-texture overflow-hidden">
      {/* Soft Romantic Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-[#8F2945]/20 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-[#C9A24A]/60"
      >
        <Quote className="w-10 h-10 mx-auto transform -rotate-12" />
      </motion.div>

      <div className="max-w-2xl w-full flex flex-col items-center gap-6 relative z-10">
        {weddingData.invitationPoem.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 * index }}
            className="font-serif-body text-xl sm:text-3xl text-[#FFF8F2] leading-relaxed italic font-light px-2"
          >
            "{line}"
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '120px' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent mt-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-serif-heading text-xs tracking-[0.3em] text-[#C9A24A] uppercase mt-2"
        >
          JOIN OUR CELEBRATION OF ETERNAL LOVE
        </motion.p>
      </div>
    </section>
  );
}
