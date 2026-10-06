interface OrnamentalBorderProps {
  className?: string;
}

export function OrnamentalBorder({ className = '' }: OrnamentalBorderProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 p-3 sm:p-5 ${className}`}>
      {/* Outer Border */}
      <div className="h-full w-full rounded-lg border border-[#C9A24A]/40 relative">
        {/* Inner Thin Border */}
        <div className="absolute inset-1.5 rounded border border-[#C9A24A]/20" />

        {/* Top Left Corner Ornament */}
        <svg
          className="absolute -top-1 -left-1 w-8 h-8 text-[#C9A24A]"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M2 38V12C2 6.47715 6.47715 2 12 2H38"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M6 34V14C6 9.58172 9.58172 6 14 6H34"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="2 2"
          />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>

        {/* Top Right Corner Ornament */}
        <svg
          className="absolute -top-1 -right-1 w-8 h-8 text-[#C9A24A]"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M38 38V12C38 6.47715 33.5228 2 28 2H2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M34 34V14C34 9.58172 30.4183 6 26 6H6"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="2 2"
          />
          <circle cx="28" cy="12" r="2.5" fill="currentColor" />
        </svg>

        {/* Bottom Left Corner Ornament */}
        <svg
          className="absolute -bottom-1 -left-1 w-8 h-8 text-[#C9A24A]"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M2 2V28C2 33.5228 6.47715 38 12 38H38"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M6 6V26C6 30.4183 9.58172 34 14 34H34"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="2 2"
          />
          <circle cx="12" cy="28" r="2.5" fill="currentColor" />
        </svg>

        {/* Bottom Right Corner Ornament */}
        <svg
          className="absolute -bottom-1 -right-1 w-8 h-8 text-[#C9A24A]"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M38 2V28C38 33.5228 33.5228 38 28 38H2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M34 6V26C34 30.4183 30.4183 34 26 34H6"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="2 2"
          />
          <circle cx="28" cy="28" r="2.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
