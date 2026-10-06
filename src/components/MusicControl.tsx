import { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingData } from '@/config/weddingData';

interface MusicControlProps {
  autoStartTrigger?: boolean;
}

export function MusicControl({ autoStartTrigger }: MusicControlProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthAudioCtxRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<number | null>(null);

  // Fallback Web Audio API Synthetic Harp/Piano Chords
  const startSynthMelody = useCallback(() => {
    try {
      if (!synthAudioCtxRef.current) {
        synthAudioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }

      const ctx = synthAudioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const notes = [185.0, 207.65, 233.08, 277.18, 311.13, 369.99, 415.3, 466.16];
      let noteIndex = 0;

      const playTone = () => {
        if (!ctx || ctx.state !== 'running') return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        const freq = notes[noteIndex % notes.length];
        noteIndex = (noteIndex + 1) % notes.length;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 2.6);
      };

      playTone();
      synthIntervalRef.current = window.setInterval(playTone, 1800);
    } catch {
      // Ignore fallback errors
    }
  }, []);

  const stopSynthMelody = useCallback(() => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (synthAudioCtxRef.current) {
      synthAudioCtxRef.current.suspend();
    }
  }, []);

  const playAudio = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true; // Ensure continuous looping
      audio.volume = 0.65;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Autoplay policy prevented audio play or audio missing:", err);
          startSynthMelody();
          setIsPlaying(true);
        });
    } else {
      startSynthMelody();
      setIsPlaying(true);
    }
  }, [startSynthMelody]);

  const pauseAudio = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
    }
    stopSynthMelody();
    setIsPlaying(false);
  }, [stopSynthMelody]);

  const toggleMusic = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  // Trigger audio playback automatically on curtain open / user interaction
  useEffect(() => {
    if (autoStartTrigger && !isPlaying) {
      playAudio();
    }
  }, [autoStartTrigger, isPlaying, playAudio]);

  // First interaction listener fallback for mobile browser policies
  useEffect(() => {
    const handleFirstUserGesture = () => {
      if (!isPlaying && audioRef.current && audioRef.current.paused) {
        playAudio();
      }
      window.removeEventListener('click', handleFirstUserGesture);
      window.removeEventListener('touchstart', handleFirstUserGesture);
    };

    window.addEventListener('click', handleFirstUserGesture);
    window.addEventListener('touchstart', handleFirstUserGesture);

    return () => {
      window.removeEventListener('click', handleFirstUserGesture);
      window.removeEventListener('touchstart', handleFirstUserGesture);
    };
  }, [isPlaying, playAudio]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* Audio element for public/audio/invitation-song.mp3 with continuous looping */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={() => {
          // Extra safety fallback to restart immediately when song finishes
          playAudio();
        }}
      >
        <source src="/audio/invitation-song.mp3" type="audio/mpeg" />
        <source src={weddingData.audioUrl} type="audio/mpeg" />
      </audio>

      {/* Floating Action Button */}
      <button
        onClick={toggleMusic}
        aria-label="Toggle Wedding Background Music"
        title={isPlaying ? "Pause Music" : "Play Music"}
        className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#8B2625] to-[#B83A38] border-2 border-[#C9A24A] text-[#F3E7C3] flex items-center justify-center shadow-2xl gold-border-glow transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-5 h-5 text-[#C9A24A] animate-pulse" />
            
            {/* Equalizer Soundwave Animation */}
            <span className="absolute -top-1 -right-1 flex gap-0.5 items-end h-3 px-1 rounded bg-[#5C1716] border border-[#C9A24A]/40 shadow-sm">
              <span className="w-0.5 h-full bg-[#C9A24A] animate-bounce" style={{ animationDuration: '0.6s' }} />
              <span className="w-0.5 h-2/3 bg-[#C9A24A] animate-bounce" style={{ animationDuration: '0.9s' }} />
              <span className="w-0.5 h-4/5 bg-[#C9A24A] animate-bounce" style={{ animationDuration: '0.7s' }} />
            </span>
          </>
        ) : (
          <div className="relative flex items-center justify-center">
            <VolumeX className="w-5 h-5 text-[#F3E7C3]/60" />
            <Music className="w-2.5 h-2.5 text-[#C9A24A] absolute -bottom-1 -right-1 opacity-70" />
          </div>
        )}

        {/* Hover Tooltip Label */}
        <span className="absolute right-14 whitespace-nowrap px-3 py-1 rounded-full bg-[#5C1716]/95 border border-[#C9A24A]/40 text-[11px] font-sans-clean text-[#F3E7C3] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          {isPlaying ? 'Pause Music' : 'Play Music'}
        </span>
      </button>
    </div>
  );
}


