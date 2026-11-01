import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface QuestionItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: QuestionItem[] = [
  {
    id: 'q1',
    question: 'Who is this for?',
    answer:
      'We help IT services firms in Hyderabad. If your firm provides software development, engineering consulting, or IT solutions, this is built for you.'
  },
  {
    id: 'q2',
    question: 'What does it cost?',
    answer:
      'It depends on your business. You get a clear plan and an exact price on the free audit call.'
  },
  {
    id: 'q3',
    question: 'What do we set up for you?',
    answer:
      'We set up The Quiet Page Fix and The Steady Posts and Ads Fix. We write your posts and ad copy against a simple brief and post them on schedule so your page stops going quiet. Bonus: we write the first brief with you. Bonus: you check the plan before it goes live.'
  },
  {
    id: 'q4',
    question: 'How do you start?',
    answer:
      'Book your free audit call. We review your current pages together and you leave with a clear plan to grow your firm with AI.'
  }
];

export function Questions() {
  const [openId, setOpenId] = useState<string | null>('q1');
  const shouldReduceMotion = useReducedMotion();

  const toggleQuestion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="questions" className="py-20 md:py-28 bg-[#F4F2EC] border-t border-[#0F2A22]/8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0F2A22]/70 block mb-3">
            Common questions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2A22] leading-tight text-balance">
            Questions you may have
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#0F2A22]/8 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#F4F2EC]/40 transition-colors"
                >
                  <span className="font-heading text-lg sm:text-xl font-bold text-[#0F2A22]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F4F2EC] flex items-center justify-center text-[#0F2A22] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#C8F26B]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#0F2A22]/80 leading-relaxed font-normal border-t border-[#0F2A22]/5">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
