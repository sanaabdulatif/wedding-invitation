import { useState, useEffect } from 'react';
import { PetalParticles } from '@/components/PetalParticles';
import { CurtainIntro } from '@/components/CurtainIntro';
import { HeroSection } from '@/components/HeroSection';
import { ParentsSection } from '@/components/ParentsSection';
import { InvitationMessage } from '@/components/InvitationMessage';
import { ScratchHeart } from '@/components/ScratchHeart';
import { Countdown } from '@/components/Countdown';
import { VenueSection } from '@/components/VenueSection';
import { PreWeddingPlans } from '@/components/PreWeddingPlans';
import { CoupleFinalAnimation } from '@/components/CoupleFinalAnimation';
import { MusicControl } from '@/components/MusicControl';

export function App() {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleStartMusic = () => {
    setShouldPlayMusic(true);
  };

  const handleCurtainOpen = () => {
    setIsCurtainOpen(true);
    setShouldPlayMusic(true);
  };

  // Mouse Parallax movement tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setParallax({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative min-h-screen w-screen bg-[#6E1C1B] text-[#FFF8F2] font-serif-body antialiased selection:bg-[#C9A24A] selection:text-[#6E1C1B] ${isCurtainOpen ? 'overflow-y-auto' : 'overflow-hidden'} select-none`}>
      {/* Falling Hearts & Sparkles Background Particles */}
      <PetalParticles />

      {/* Shining Golden Background Flares with Parallax Drift */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
        }}
      >
        <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-gradient-radial from-[#C9A24A]/30 via-[#B83A38]/20 to-transparent blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-radial from-[#F3E7C3]/20 via-[#8B2625]/30 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-[#C9A24A]/15 blur-3xl pointer-events-none" />
      </div>

      {/* Section 1: Cinematic Curtain Opening */}
      <CurtainIntro isOpen={isCurtainOpen} onOpen={handleCurtainOpen} onStartMusic={handleStartMusic} />

      {/* Continuous Vertical Scroll Container */}
      {isCurtainOpen && (
        <main className="relative z-10 w-full flex flex-col items-center overflow-x-hidden scroll-smooth">
          <HeroSection />
          <ParentsSection />
          <InvitationMessage />
          <ScratchHeart />
          <Countdown />
          <VenueSection />
          <PreWeddingPlans />
          <CoupleFinalAnimation />
        </main>
      )}

      {/* Background Music Player */}
      <MusicControl autoStartTrigger={shouldPlayMusic} />
    </div>
  );
}

export default App;
