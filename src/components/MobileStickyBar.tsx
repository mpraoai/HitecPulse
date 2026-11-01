import { ArrowUpRight } from 'lucide-react';

const BOOKING_URL = 'https://app.cal.com/links/1cEyNKTx9dSrC5ogbuJvag?tabName=confirmation';

export function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F2A22]/95 backdrop-blur-md px-4 py-3 border-t border-[#163B30] shadow-2xl safe-area-inset-bottom">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-12 flex items-center justify-center gap-2 px-5 text-sm font-semibold text-[#0F2A22] bg-[#C8F26B] rounded-full active:scale-95 transition-transform shadow-md"
      >
        <span>Book a free audit call</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
}
