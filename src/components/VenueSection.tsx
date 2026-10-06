import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar as CalendarIcon, ExternalLink } from 'lucide-react';
import { weddingData } from '@/config/weddingData';
import { OrnamentalBorder } from './OrnamentalBorder';

export function VenueSection() {
  const handleAddToCalendar = () => {
    // Generate Google Calendar Link
    const startTime = new Date(weddingData.weddingDate).toISOString().replace(/-|:|\.\d\d\d/g, '');
    // End 4 hours later
    const endTime = new Date(new Date(weddingData.weddingDate).getTime() + 4 * 3600 * 1000)
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, '');

    const details = encodeURIComponent(
      `Wedding celebration of ${weddingData.brideName} & ${weddingData.groomName}`
    );
    const location = encodeURIComponent(`${weddingData.venue.name}, ${weddingData.venue.address}`);
    const title = encodeURIComponent(`${weddingData.brideName} & ${weddingData.groomName} Wedding`);

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;

    window.open(gcalUrl, '_blank');
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-[#6E1C1B] via-[#5C1716] to-[#6E1C1B]">
      {/* Background Lighting */}
      <div className="absolute w-96 h-96 rounded-full bg-[#B83A38]/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl w-full p-8 sm:p-14 my-auto">
        <OrnamentalBorder />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 text-[#C9A24A] mb-2">
            <MapPin className="w-4 h-4" />
            <span className="font-serif-heading text-xs tracking-[0.35em] uppercase font-semibold">
              HONOUR US WITH YOUR PRESENCE
            </span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl text-[#FFF8F2] mt-2">
            Wedding Venue
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Venue Information */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center gap-4 my-6"
        >
          <h3 className="font-serif-title text-2xl sm:text-3xl text-[#F3E7C3] gold-gradient-text font-bold">
            {weddingData.venue.name}
          </h3>

          <p className="font-serif-body text-lg sm:text-xl text-[#FFF8F2]/90 max-w-md leading-relaxed">
            {weddingData.venue.address}
          </p>

          <span className="font-sans-clean text-xs tracking-widest text-[#C9A24A] uppercase font-semibold">
            {weddingData.venue.city}, {weddingData.venue.state}
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20"
        >
          <a
            href={weddingData.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full gold-shimmer-btn text-[#FFF8F2] font-serif-heading tracking-widest text-xs font-semibold shadow-xl flex items-center justify-center gap-2 border border-[#F3E7C3]/40 cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#F3E7C3]" />
            <span>GET DIRECTIONS</span>
          </a>

          <button
            onClick={handleAddToCalendar}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#5C1716] hover:bg-[#8B2625] text-[#F3E7C3] font-serif-heading tracking-widest text-xs font-semibold border border-[#C9A24A] shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <CalendarIcon className="w-4 h-4 text-[#C9A24A]" />
            <span>ADD TO CALENDAR</span>
            <ExternalLink className="w-3 h-3 text-[#C9A24A]/60" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
