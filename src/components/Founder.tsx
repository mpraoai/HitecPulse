import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo.tsx';

const BOOKING_URL = 'https://app.cal.com/links/1cEyNKTx9dSrC5ogbuJvag?tabName=confirmation';
const FOUNDER_PHOTO_URL = 'https://dashboard.freedomwithai.com/api/hk/site-photo/gNO-uJmpysLj_0giYs50RrMd.webp';

export function Founder() {
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28 bg-[#F4F2EC] border-t border-[#0F2A22]/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-[24px] p-8 sm:p-12 lg:p-16 border border-[#0F2A22]/10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Founder Photo: 4:5 frame with rounded corners */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="md:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-[320px] aspect-[4/5] rounded-[24px] overflow-hidden bg-[#0F2A22] border-2 border-[#0F2A22]/10 shadow-md relative flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={FOUNDER_PHOTO_URL}
                    alt="Paddmharao MOOTA, Founder of HitecPulse"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#0F2A22] p-8 text-center">
                    <Logo isLight={true} className="mb-4" />
                    <span className="text-xs text-[#F4F2EC]/60">
                      Paddmharao MOOTA
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Founder Details */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="md:col-span-7 flex flex-col items-start"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0F2A22]/60 block mb-2">
                Leadership
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F2A22] mb-1">
                Paddmharao MOOTA
              </h2>

              <p className="text-base font-semibold text-[#0F2A22]/70 mb-6">
                Founder, HitecPulse
              </p>

              {/* One plain line about who we help */}
              <p className="text-base sm:text-lg text-[#0F2A22]/85 leading-relaxed font-normal mb-8">
                We help IT services firms in Hyderabad stay consistent with regular, high-impact posts and ad copy so your pages never go quiet.
              </p>

              {/* CTA button: Book a free call with Paddmharao */}
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm sm:text-base font-semibold text-[#0F2A22] bg-[#C8F26B] rounded-full hover:bg-[#d4f87a] transition-all shadow-sm"
              >
                <span>Book a free call with Paddmharao</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
