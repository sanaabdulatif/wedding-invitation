import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Calendar, Crown, RotateCcw, Eye, MapPin } from 'lucide-react';

export function ScratchHeart() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);
  const isDrawingRef = useRef(false);

  // Initialize Canvas Scratch Top Surface Layer (Royal Circular Seal)
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    ctx.save();

    // Pure Circular Clipping Path
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, 145, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    // Fill with rich luxury brick red & gold metallic gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#B83A38');
    grad.addColorStop(0.35, '#8B2625');
    grad.addColorStop(0.75, '#6E1C1B');
    grad.addColorStop(1, '#4A1010');

    ctx.fillStyle = grad;
    ctx.fill();

    // Add gold dust texture specks inside shape
    ctx.fillStyle = 'rgba(201, 162, 74, 0.18)';
    for (let i = 0; i < 80; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      const r = Math.random() * 2 + 0.5;
      ctx.beginPath();
      ctx.arc(rx, ry, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Outer double gold filigree rings
    ctx.strokeStyle = '#C9A24A';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, 143, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = '#F3E7C3';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, 136, 0, Math.PI * 2);
    ctx.stroke();

    // Ornate Royal Medallion Inner Ring
    ctx.strokeStyle = '#C9A24A';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, 128, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    const cy = height / 2;

    // Diamond emblem top
    ctx.font = '14px serif';
    ctx.fillStyle = '#C9A24A';
    ctx.textAlign = 'center';
    ctx.fillText('✦  ✦  ✦', width / 2, cy - 14);

    // Primary Instruction Text
    ctx.font = 'bold 15px "Cinzel", serif';
    ctx.fillStyle = '#FFF8F2';
    ctx.letterSpacing = '2px';
    ctx.fillText('SCRATCH TO REVEAL', width / 2, cy + 10);

    ctx.restore();
  }, []);

  useEffect(() => {
    setScratchProgress(0);
    setIsRevealed(false);
    initCanvas();
  }, [initCanvas]);

  // Handle Scratching Action
  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    checkScratchProgress();
  };

  const checkScratchProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }

    const percentage = Math.min(100, Math.round((transparentPixels / (pixels.length / 4)) * 140));
    setScratchProgress(percentage);

    if (percentage > 35 && !isRevealed) {
      triggerReveal();
    }
  };

  const triggerReveal = () => {
    setIsRevealed(true);
    setScratchProgress(100);

    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#C9A24A', '#F3E7C3', '#940327', '#FFF8F2'],
    });
  };

  const handleReset = () => {
    setIsRevealed(false);
    setScratchProgress(0);
    initCanvas();
  };

  // Touch & Mouse Listeners
  const handleMouseDown = (e: React.MouseEvent) => {
    isDrawingRef.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDrawingRef.current) {
      scratch(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    isDrawingRef.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDrawingRef.current = true;
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDrawingRef.current && e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 paper-texture overflow-hidden select-none">
      {/* Ambient Radial Luxury Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-[#B83A38]/30 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-6 max-w-md mx-auto"
      >
        <span className="font-serif-heading text-xs tracking-[0.4em] text-[#C9A24A] uppercase font-semibold">
          SPECIAL INTERACTIVE MOMENT
        </span>
        <h2 className="font-serif-title text-3xl sm:text-4xl text-[#FFF8F2] mt-2 gold-gradient-text">
          A Secret Awaits You
        </h2>
      </motion.div>

      {/* Interactive Royal Seal Scratch Container - Exact 320x320 Circle */}
      <div className="relative w-[320px] h-[320px] my-4 flex items-center justify-center filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)]">
        
        {/* Hidden Revealed Content Layer (Underneath Canvas - Exact Circle Seal) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-[#B83A38] via-[#8B2625] to-[#4A1010] rounded-full border-4 border-[#C9A24A] shadow-2xl gold-border-glow">
          {/* Ornate Top Emblem */}
          <Crown className="w-8 h-8 text-[#C9A24A] mb-1 animate-pulse" />
          
          <span className="font-serif-heading text-xs tracking-[0.35em] text-[#C9A24A] uppercase font-semibold">
            SAVE THE DATE
          </span>
          
          <h3 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#FFF8F2] my-1 gold-gradient-text tracking-wide">
            OCTOBER 3
          </h3>
          
          <span className="font-serif-body text-xl sm:text-2xl text-[#F3E7C3] italic">
            2026
          </span>

          <p className="font-serif-body text-sm text-[#F3E7C3]/90 italic mt-0.5">
            Saturday Evening
          </p>

          <div className="mt-2.5 flex items-center gap-1.5 text-xs font-sans-clean text-[#C9A24A] bg-[#5C1716]/80 px-3.5 py-1 rounded-full border border-[#C9A24A]/40 shadow-inner">
            <MapPin className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Kozhikode, Kerala</span>
          </div>
        </div>

        {/* Top Canvas Scratch Surface Layer */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            width={320}
            height={320}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            className="absolute inset-0 cursor-pointer touch-none z-20 rounded-full"
          />
        )}
      </div>

      {/* Scratch Progress & Controls */}
      <div className="mt-4 flex flex-col items-center gap-3">
        {isRevealed ? (
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#C9A24A]/20 border border-[#C9A24A] text-[#F3E7C3] font-serif-heading text-xs tracking-wider">
              <Sparkles className="w-4 h-4 text-[#C9A24A]" />
              <span>DATE REVEALED! MARK YOUR CALENDAR</span>
              <Sparkles className="w-4 h-4 text-[#C9A24A]" />
            </div>

            <button
              onClick={handleReset}
              className="mt-1 flex items-center gap-1.5 text-xs font-serif-heading text-[#C9A24A] hover:text-[#FFF8F2] underline underline-offset-4 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Scratch Again</span>
            </button>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            {scratchProgress > 0 && (
              <div className="text-xs font-sans-clean text-[#F3E7C3]/80 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#C9A24A]" />
                <span>{`Scratching... ${scratchProgress}%`}</span>
              </div>
            )}

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-3 mt-1">
              <button
                onClick={triggerReveal}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C9A24A]/15 border border-[#C9A24A]/50 text-[#F3E7C3] text-xs font-serif-heading hover:bg-[#C9A24A]/30 transition-all shadow-sm"
              >
                <Eye className="w-3.5 h-3.5 text-[#C9A24A]" />
                <span>Instant Reveal</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


