import { motion, useReducedMotion } from 'motion/react';
import { Bell, CheckCircle2, MessageSquare } from 'lucide-react';

const BUILDS = [
  {
    id: 'build-1',
    label: 'Sample build',
    title: 'The Quiet Page Fix',
    image: '/work-1.jpg',
    imageAlt: 'Front desk of a software services firm in Hyderabad with staff member smiling at phone',
    reverse: false,
    badge: {
      icon: Bell,
      text: 'Scheduled for Tuesday 10:30 AM',
      subtext: 'Weekly organic tech post locked in'
    },
    whatYouGet:
      'A steady schedule of technical insights, client project milestones, and engineering updates created directly from your short brief.',
    whatChanges:
      'Your page stops going quiet during busy client delivery sprints. Your firm looks consistently active, credible, and modern.'
  },
  {
    id: 'build-2',
    label: 'Sample build',
    title: 'The Steady Posts and Ads Fix',
    image: '/work-2.jpg',
    imageAlt: 'Software firm business leader in Hyderabad office glancing at phone between meetings',
    reverse: true,
    badge: {
      icon: MessageSquare,
      text: 'Ad Copy Delivered • 3 Angles',
      subtext: 'Tailored for enterprise CTOs'
    },
    whatYouGet:
      'Targeted ad copy and authority-building posts crafted to speak directly to IT decision-makers and prospective corporate clients.',
    whatChanges:
      'Your firm stays front of mind with regional buyers. You keep inbound inquiries warm without spending your evenings writing marketing copy.'
  },
  {
    id: 'build-3',
    label: 'Sample build',
    title: 'The Collaborative Brief & Approval System',
    image: '/work-3.jpg',
    imageAlt: 'Corporate client leaving a Hyderabad technology consultancy lobby with phone in hand',
    reverse: false,
    badge: {
      icon: CheckCircle2,
      text: '1-Click WhatsApp Sign-off',
      subtext: 'You inspect the plan before launch'
    },
    whatYouGet:
      'We write the first brief together with you. We draft the entire monthly calendar and deliver high-fidelity previews straight to your phone.',
    whatChanges:
      'You check the plan before it ever goes live. You keep complete creative control with zero tedious back-and-forth email chains.'
  }
];

export function SampleBuilds() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="sample-builds" className="py-20 md:py-28 bg-[#F4F2EC] border-t border-[#0F2A22]/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0F2A22]/70 block mb-3">
            Sample builds
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2A22] leading-tight text-balance">
            Real systems we build and run for software firms.
          </h2>
        </div>

        {/* Rows */}
        <div className="space-y-20 md:space-y-28">
          {BUILDS.map((item, index) => {
            const BadgeIcon = item.badge.icon;
            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  item.reverse ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Photo Column */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 relative ${item.reverse ? 'lg:col-start-7' : ''}`}
                >
                  <div className="relative rounded-[24px] overflow-hidden shadow-lg border border-[#0F2A22]/10 bg-[#0F2A22] aspect-[3/2]">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />

                    {/* Overlapping notification / chat bubble badge */}
                    <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#0F2A22]/95 backdrop-blur-md rounded-2xl p-3 border border-[#163B30] shadow-xl text-white flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#C8F26B] flex items-center justify-center text-[#0F2A22] shrink-0">
                        <BadgeIcon className="w-5 h-5" strokeWidth={2.4} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-white truncate">
                          {item.badge.text}
                        </p>
                        <p className="text-[11px] text-[#F4F2EC]/70 truncate">
                          {item.badge.subtext}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text Content Column */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className={`lg:col-span-6 ${item.reverse ? 'lg:col-start-1' : ''}`}
                >
                  <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#0F2A22]/10 text-xs font-semibold text-[#0F2A22] mb-3">
                    {item.label}
                  </span>

                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2A22] mb-8 leading-snug">
                    {item.title}
                  </h3>

                  <div className="space-y-6">
                    {/* What you get */}
                    <div className="bg-white rounded-2xl p-5 border border-[#0F2A22]/6">
                      <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#0F2A22] mb-2">
                        What you get
                      </h4>
                      <p className="text-sm sm:text-base text-[#0F2A22]/80 leading-relaxed font-normal">
                        {item.whatYouGet}
                      </p>
                    </div>

                    {/* What changes for you */}
                    <div className="bg-white rounded-2xl p-5 border border-[#0F2A22]/6">
                      <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#0F2A22] mb-2">
                        What changes for you
                      </h4>
                      <p className="text-sm sm:text-base text-[#0F2A22]/80 leading-relaxed font-normal">
                        {item.whatChanges}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
