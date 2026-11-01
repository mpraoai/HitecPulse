import { useReducedMotion } from 'motion/react';

interface MarqueeProps {
  className?: string;
}

export function Marquee({ className = '' }: MarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  const row1Items = [
    'The Quiet Page Fix',
    'The Steady Posts and Ads Fix',
    'The Collaborative Brief and Approval System',
  ];

  const row2Items = [
    'For IT services firms',
    'Hyderabad',
    'Runs on your WhatsApp',
  ];

  // Repeat items for seamless infinite loop
  const repeatedRow1 = [...row1Items, ...row1Items, ...row1Items, ...row1Items];
  const repeatedRow2 = [...row2Items, ...row2Items, ...row2Items, ...row2Items, ...row2Items, ...row2Items];

  return (
    <div
      className={`w-full overflow-hidden bg-[#0A1C16] border-b border-[#163B30] py-6 marquee-container select-none ${className}`}
      aria-label="Services and credentials marquee"
    >
      {/* Row 1: Big and bold in white, heading font, moves left */}
      <div className="relative w-full overflow-hidden mb-4">
        <div className={shouldReduceMotion ? 'flex flex-wrap items-center justify-center gap-6 px-4' : 'animate-marquee-left flex items-center'}>
          {repeatedRow1.map((item, idx) => (
            <div key={`r1-${idx}`} className="flex items-center shrink-0">
              <span className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight px-4 sm:px-6">
                {item}
              </span>
              <span
                className="w-2.5 h-2.5 rounded-full bg-[#C8F26B] shrink-0"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Half size, uppercase, wide letter spacing, off-white at 60% opacity, moves right */}
      <div className="relative w-full overflow-hidden">
        <div className={shouldReduceMotion ? 'flex flex-wrap items-center justify-center gap-6 px-4' : 'animate-marquee-right flex items-center'}>
          {repeatedRow2.map((item, idx) => (
            <div key={`r2-${idx}`} className="flex items-center shrink-0">
              <span className="font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#F4F2EC]/60 px-5 sm:px-8">
                {item}
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#C8F26B] shrink-0 opacity-80"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
