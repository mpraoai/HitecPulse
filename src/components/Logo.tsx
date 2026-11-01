interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export function Logo({ className = '', isLight = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight select-none ${className}`}>
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#0F2A22] border border-[#163B30] shrink-0 shadow-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5 h-5 text-[#C8F26B]"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Stylized 'H' with active tech pulse signal */}
          <path d="M5 4v16" />
          <path d="M19 4v16" />
          <path d="M5 12h3l2-4 4 8 2-4h3" />
        </svg>
      </div>
      <span className={isLight ? 'text-white' : 'text-[#0F2A22]'}>
        HitecPulse
      </span>
    </div>
  );
}
