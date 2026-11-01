import { motion, useReducedMotion } from 'motion/react';
import { CalendarClock, Megaphone, ShieldCheck } from 'lucide-react';

const CARDS = [
  {
    icon: CalendarClock,
    title: 'Your firm stops going silent between project deliverables.',
    description:
      'We make your posts against a simple brief and post on schedule. Your page stays active every week while your engineers concentrate entirely on shipping client code.',
    highlight: 'The Quiet Page Fix'
  },
  {
    icon: Megaphone,
    title: 'Your pipeline stays warm without taking hours of your week.',
    description:
      'We write high-impact ad copy and organic updates targeted at enterprise technology leaders. You stay visible and top of mind across Hyderabad with zero writing effort on your part.',
    highlight: 'The Steady Posts and Ads Fix'
  },
  {
    icon: ShieldCheck,
    title: 'You check and approve the entire plan before it goes live.',
    description:
      'We write the first brief together with you and send clean previews to your phone. You review every word and give your sign-off before anything is published.',
    highlight: 'Brief & Approval System'
  }
];

export function WhatChanges() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="what-changes" className="py-20 md:py-28 bg-[#F4F2EC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0F2A22]/70 block mb-3">
            What changes for you
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2A22] leading-tight text-balance">
            How your online presence transforms when we step in.
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className="bg-white rounded-[24px] p-7 sm:p-8 border border-[#0F2A22]/5 shadow-sm flex flex-col justify-between transition-shadow hover:shadow-md"
              >
                <div>
                  {/* Highlight icon tile */}
                  <div className="w-14 h-14 rounded-2xl bg-[#C8F26B] flex items-center justify-center text-[#0F2A22] mb-6 shadow-sm">
                    <Icon className="w-7 h-7" strokeWidth={2.2} />
                  </div>

                  {/* Card heading naming problem starting with You or Your */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F2A22] mb-4 leading-snug">
                    {card.title}
                  </h3>

                  {/* What changes for you */}
                  <p className="text-sm sm:text-base text-[#0F2A22]/80 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#0F2A22]/8">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#F4F2EC] text-xs font-semibold text-[#0F2A22]">
                    {card.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
