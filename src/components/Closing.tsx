import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Logo } from './Logo.tsx';

const BOOKING_URL = 'https://app.cal.com/links/1cEyNKTx9dSrC5ogbuJvag?tabName=confirmation';

export function Closing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="w-full bg-[#0F2A22] text-[#F4F2EC] relative overflow-hidden">
      {/* Hero-like Call to Action using place.jpg under dark color layer */}
      <div className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden border-b border-[#163B30]">
        {/* Background Image: place.jpg */}
        <div className="absolute inset-0 z-0">
          <img
            src="/place.jpg"
            alt="Interior view of a modern IT services consultancy in Hyderabad"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* Dark colour layer overlay with deep green tint */}
          <div className="absolute inset-0 bg-[#0F2A22]/90 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C16] via-[#0F2A22]/80 to-[#0F2A22]/90" />
        </div>

        {/* Closing Headline & CTA */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance leading-tight"
          >
            Stop your IT firm from going quiet between project pushes.
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-xl text-[#F4F2EC]/85 max-w-2xl mx-auto font-normal leading-relaxed mb-10"
          >
            We set up your posts and ad copy, draft your briefs, and post on schedule.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <motion.a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="inline-flex items-center gap-2 px-9 py-4 text-base font-semibold text-[#0F2A22] bg-[#C8F26B] rounded-full hover:bg-[#d4f87a] transition-all shadow-xl"
            >
              <span>Book a free audit call</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer Details: logo, City (Hyderabad), quiet links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#163B30]">
          {/* Logo */}
          <Logo isLight={true} />

          {/* City */}
          <div className="flex items-center gap-2 text-sm text-[#F4F2EC]/80 font-medium">
            <MapPin className="w-4 h-4 text-[#C8F26B]" />
            <span>Hyderabad</span>
          </div>

          {/* Quick Anchor Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#F4F2EC]/70">
            <a href="#what-changes" className="hover:text-white transition-colors">
              What changes
            </a>
            <a href="#sample-builds" className="hover:text-white transition-colors">
              Sample builds
            </a>
            <a href="#calculator" className="hover:text-white transition-colors">
              Calculator
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How it works
            </a>
            <a href="#questions" className="hover:text-white transition-colors">
              Questions
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4F2EC]/50 font-normal">
          <p>© {new Date().getFullYear()} HitecPulse. All rights reserved.</p>
          <p>Built for IT services firms in Hyderabad.</p>
        </div>
      </div>
    </footer>
  );
}
