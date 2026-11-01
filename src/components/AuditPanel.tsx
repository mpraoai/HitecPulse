import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const BOOKING_URL = 'https://app.cal.com/links/1cEyNKTx9dSrC5ogbuJvag?tabName=confirmation';

const TAKEAWAYS = [
  'Where you lose customers today',
  'What to automate first',
  'A clear price for your business'
];

export function AuditPanel() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28 bg-[#F4F2EC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="bg-[#0F2A22] rounded-[24px] p-8 sm:p-14 lg:p-16 border border-[#163B30] text-white shadow-xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8F26B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C8F26B] block mb-3">
              Complimentary strategy session
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight text-balance">
              Get your AI growth plan in a free 1:1 call
            </h2>

            <p className="text-base sm:text-lg text-[#F4F2EC]/85 font-normal mb-8 leading-relaxed">
              We look directly at your current presence and build a step-by-step roadmap to make your firm consistently visible.
            </p>

            {/* The 3 things you leave with */}
            <div className="space-y-4 mb-10">
              {TAKEAWAYS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#C8F26B] flex items-center justify-center text-[#0F2A22] shrink-0">
                    <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                  <span className="text-base sm:text-lg font-medium text-[#F4F2EC]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#0F2A22] bg-[#C8F26B] rounded-full hover:bg-[#d4f87a] transition-all shadow-md"
            >
              <span>Book a free audit call</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
