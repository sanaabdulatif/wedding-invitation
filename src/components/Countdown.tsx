import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '@/config/weddingData';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(weddingData.weddingDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-[#6E1C1B] via-[#5C1716] to-[#6E1C1B] overflow-hidden">
      {/* Background Decorative Crest */}
      <div className="absolute w-72 h-72 rounded-full bg-[#C9A24A]/10 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <div className="flex items-center justify-center gap-2 text-[#C9A24A] mb-2">
          <Clock className="w-4 h-4" />
          <span className="font-serif-heading text-xs tracking-[0.35em] uppercase font-semibold">
            COUNTING DOWN TO FOREVER
          </span>
        </div>
        <h2 className="font-serif-title text-3xl sm:text-4xl text-[#FFF8F2]">
          Until We Say "I Do"
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent mx-auto mt-3" />
      </motion.div>

      {/* Countdown Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl w-full px-2 z-10">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-b from-[#8B2625] to-[#5C1716] border border-[#C9A24A]/40 shadow-xl gold-border-glow"
          >
            <span className="font-serif-title text-4xl sm:text-6xl font-bold text-[#F3E7C3] gold-gradient-text tracking-tight">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="mt-2 font-sans-clean text-xs tracking-[0.25em] text-[#C9A24A] uppercase font-semibold">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-10 font-serif-body italic text-lg text-[#F3E7C3]/80"
      >
        {weddingData.weddingDateFormatted} — Kozhikode, Kerala
      </motion.p>
    </section>
  );
}
