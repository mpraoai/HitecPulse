import { motion, useReducedMotion } from 'motion/react';
import { CalendarCheck, FileSpreadsheet, MessageCircle } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Book your free audit call',
    description:
      'Choose a convenient 20-minute slot on our calendar. We review your existing pages, ad copy, and client touchpoints before we speak.',
    icon: CalendarCheck
  },
  {
    number: '02',
    title: 'Get your plan',
    description:
      'On the call, you receive a tailored strategy identifying where your firm loses attention, what to automate first, and an exact price.',
    icon: FileSpreadsheet
  },
  {
    number: '03',
    title: 'We set it up on your WhatsApp',
    description:
      'We write the first brief with you, create your upcoming content calendar, and route all previews straight to your phone for approval.',
    icon: MessageCircle
  }
];

export function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F4F2EC] border-t border-[#0F2A22]/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0F2A22]/70 block mb-3">
            Simple 3-step process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2A22] leading-tight text-balance">
            How it works
          </h2>
          <p className="text-base sm:text-lg text-[#0F2A22]/75 mt-4 font-normal">
            No heavy onboarding or long contracts. We make it easy from day one.
          </p>
        </div>

        {/* Steps with connecting highlight line */}
        <div className="relative">
          {/* Highlight line connecting steps on desktop */}
          <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] -translate-y-8 h-1 bg-[#0F2A22]/10 z-0">
            <motion.div
              initial={shouldReduceMotion ? { width: '100%' } : { width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="h-full bg-[#C8F26B]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className="bg-white rounded-[24px] p-8 border border-[#0F2A22]/8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Header with step number and icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#C8F26B] flex items-center justify-center text-[#0F2A22] font-bold text-lg shadow-sm">
                        <Icon className="w-6 h-6" strokeWidth={2.2} />
                      </div>
                      <span className="font-heading text-2xl font-bold text-[#0F2A22]/30">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F2A22] mb-3 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#0F2A22]/80 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
