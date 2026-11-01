import { Logo } from './Logo.tsx';

const BOOKING_URL = 'https://app.cal.com/links/1cEyNKTx9dSrC5ogbuJvag?tabName=confirmation';

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0F2A22]/90 backdrop-blur-md border-b border-[#163B30]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a href="#" className="whitespace-nowrap shrink-0 group">
          <Logo isLight={true} />
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#F4F2EC]/80">
          <a
            href="#what-changes"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            What changes
          </a>
          <a
            href="#sample-builds"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            Sample builds
          </a>
          <a
            href="#calculator"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            Cost calculator
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            How it works
          </a>
          <a
            href="#questions"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            Questions
          </a>
        </nav>

        {/* Zone 3: 1 primary action pill */}
        <div className="flex items-center shrink-0">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0F2A22] bg-[#C8F26B] rounded-full hover:bg-[#d4f87a] active:scale-95 transition-all shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8F26B]"
          >
            Free audit call
          </a>
        </div>
      </div>
    </header>
  );
}
