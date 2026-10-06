import { motion } from 'framer-motion';
import { weddingData } from '@/config/weddingData';
import { MapPin, Navigation, Compass, Map as MapIcon } from 'lucide-react';
import { OrnamentalBorder } from './OrnamentalBorder';

export function LocationSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 paper-texture overflow-hidden">
      {/* Background Soft Lighting */}
      <div className="absolute w-80 h-80 rounded-full bg-[#8F2945]/20 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <span className="font-serif-heading text-xs tracking-[0.35em] text-[#C9A24A] uppercase font-semibold">
          LOCATION INTERACTION
        </span>
        <h2 className="font-serif-title text-3xl sm:text-4xl text-[#FFF8F2] mt-2">
          Find Your Way to Our Joy
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent mx-auto mt-3" />
      </motion.div>

      {/* Styled Luxury Location Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative max-w-xl w-full p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#8B2625] to-[#5C1716] border border-[#C9A24A]/40 shadow-2xl gold-border-glow overflow-hidden"
      >
        <OrnamentalBorder />

        {/* Map Blueprint Visual Frame */}
        <div className="relative w-full h-48 sm:h-56 rounded-xl border border-[#C9A24A]/30 overflow-hidden mb-6 flex flex-col items-center justify-center bg-[#4A1010] paper-texture">
          {/* Subtle Grid Map Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#C9A24A10_1px,transparent_1px),linear-gradient(to_bottom,#C9A24A10_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Animated Radar Pulse at Center */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-20 h-20 rounded-full border border-[#C9A24A]/40 animate-ping" />
            <div className="absolute w-32 h-32 rounded-full border border-[#C9A24A]/20" />
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#B83A38] to-[#C9A24A] flex items-center justify-center shadow-lg border-2 border-[#FFF8F2] z-10">
              <MapPin className="w-7 h-7 text-[#FFF8F2] animate-bounce" />
            </div>
          </div>

          <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-[#5C1716]/90 border border-[#C9A24A]/30 flex items-center justify-between text-xs font-sans-clean text-[#F3E7C3]">
            <div className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#C9A24A]" />
              <span>{weddingData.venue.mapCoordinates.lat}° N, {weddingData.venue.mapCoordinates.lng}° E</span>
            </div>
            <span className="text-[#C9A24A] font-semibold">Calicut, Kerala</span>
          </div>
        </div>

        {/* Location Details */}
        <h3 className="font-serif-title text-2xl text-[#FFF8F2] font-bold">
          {weddingData.venue.name}
        </h3>
        <p className="font-serif-body text-base text-[#F3E7C3]/80 mt-1">
          {weddingData.venue.address}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={weddingData.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C9A24A] hover:bg-[#E6C575] text-[#4A1010] font-serif-heading text-xs tracking-widest font-bold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <MapIcon className="w-4 h-4" />
            <span>VIEW LOCATION</span>
          </a>

          <a
            href={weddingData.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-transparent hover:bg-[#8B2625] text-[#F3E7C3] border border-[#C9A24A] font-serif-heading text-xs tracking-widest font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#C9A24A]" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
