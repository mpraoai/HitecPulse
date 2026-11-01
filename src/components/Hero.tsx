import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Check, CheckCheck } from 'lucide-react';

const BOOKING_URL = 'https://app.cal.com/links/1cEyNKTx9dSrC5ogbuJvag?tabName=confirmation';

interface ChatMessage {
  sender: 'team' | 'client';
  text: string;
  time: string;
}

interface ChatTab {
  id: string;
  title: string;
  subtitle: string;
  messages: ChatMessage[];
}

const CHAT_TABS: ChatTab[] = [
  {
    id: 'quiet-page',
    title: 'The Quiet Page Fix',
    subtitle: 'Weekly organic posts',
    messages: [
      {
        sender: 'team',
        text: 'Here is your Tuesday tech post on legacy system migration. Crafted from your team delivery notes.',
        time: '09:41'
      },
      {
        sender: 'client',
        text: 'Checked. Looks sharp and accurate. Good to publish.',
        time: '09:44'
      },
      {
        sender: 'team',
        text: 'Scheduled for 10:30 AM. Your page stays active while your developers focus on shipping code.',
        time: '09:45'
      }
    ]
  },
  {
    id: 'steady-ads',
    title: 'The Steady Posts and Ads Fix',
    subtitle: 'Targeted ad copy',
    messages: [
      {
        sender: 'team',
        text: 'Your new B2B ad copy targeting enterprise CTOs in Hyderabad is ready for review.',
        time: '11:15'
      },
      {
        sender: 'client',
        text: 'Headline 2 directly addresses enterprise security concerns. Let us run that.',
        time: '11:18'
      },
      {
        sender: 'team',
        text: 'Campaign is live. We track every response and keep your pipeline fed.',
        time: '11:20'
      }
    ]
  },
  {
    id: 'rapid-brief',
    title: 'Brief and Approval',
    subtitle: 'Pre-live check',
    messages: [
      {
        sender: 'team',
        text: 'We wrote your first brief together. Here is the complete post calendar for the next two weeks.',
        time: '14:02'
      },
      {
        sender: 'client',
        text: 'Approved all six drafts. Clean and right on message.',
        time: '14:06'
      },
      {
        sender: 'team',
        text: 'You inspect and approve every single post before anything goes live.',
        time: '14:07'
      }
    ]
  }
];

export function Hero() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Auto-cycle tabs every 7 seconds until user interacts
  useEffect(() => {
    if (isUserInteracted || shouldReduceMotion) return;
    const timer = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % CHAT_TABS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isUserInteracted, shouldReduceMotion]);

  const activeTab = CHAT_TABS[activeTabIdx];

  const headlineWords = "Your page stops going quiet between pushes.".split(" ");

  return (
    <section className="relative overflow-hidden bg-[#0F2A22] text-[#F4F2EC] pt-12 pb-20 md:py-24 border-b border-[#163B30]">
      {/* Soft floating glow of highlight colour drifting behind hero */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#C8F26B]/15 blur-3xl pointer-events-none"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill: For [Who I help] in [City] */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163B30] border border-[#1E4D3F] text-xs font-medium text-[#C8F26B] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8F26B]" />
              <span>For IT services firms in Hyderabad</span>
            </motion.div>

            {/* Big headline that names the problem we fix, said to reader */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance leading-[1.08]">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="inline-block mr-2.5"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* One plain sentence under it */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-[#F4F2EC]/85 max-w-xl font-normal leading-relaxed mb-8"
            >
              We make your posts and ad copy against a simple brief and post them on schedule, so your page stops going quiet between pushes.
            </motion.p>

            {/* Main Action Button */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0F2A22] bg-[#C8F26B] rounded-full hover:bg-[#d4f87a] shadow-lg shadow-[#C8F26B]/10 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8F26B]"
              >
                <span>Book a free audit call</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* One small line under the buttons */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xs sm:text-sm text-[#F4F2EC]/70 mt-3 font-normal"
            >
              Free 1:1 call. You leave with a plan to grow your firm with AI.
            </motion.p>
          </div>

          {/* Right Column: Phone showing WhatsApp chat */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Phone Container */}
            <div className="w-full max-w-[340px] sm:max-w-[360px] rounded-[36px] bg-[#0A1C16] p-3 border-4 border-[#1E4D3F] shadow-2xl relative">
              {/* Phone Speaker Notch */}
              <div className="w-24 h-4 bg-[#0F2A22] rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#163B30] mr-2" />
                <div className="w-8 h-1 rounded-full bg-[#163B30]" />
              </div>

              {/* Chat Tabs: One tab per thing I set up */}
              <div className="flex gap-1 p-1 bg-[#0F2A22] rounded-2xl mb-3 border border-[#163B30]">
                {CHAT_TABS.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTabIdx(idx);
                      setIsUserInteracted(true);
                    }}
                    className={`flex-1 py-1.5 px-2 text-[11px] font-semibold rounded-xl transition-all whitespace-nowrap truncate text-center ${
                      activeTabIdx === idx
                        ? 'bg-[#C8F26B] text-[#0F2A22] shadow-sm'
                        : 'text-[#F4F2EC]/60 hover:text-white'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* WhatsApp Chat Body */}
              <div className="bg-[#0b1d16] rounded-2xl p-3 sm:p-4 min-h-[310px] flex flex-col justify-between border border-[#163B30]">
                {/* Chat Header */}
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#163B30]/80">
                  <div className="w-8 h-8 rounded-full bg-[#163B30] flex items-center justify-center text-[#C8F26B] font-bold text-xs">
                    HP
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-white truncate">
                      HitecPulse Updates
                    </div>
                    <div className="text-[10px] text-[#C8F26B]/90 font-medium">
                      Active
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-3 my-3">
                  {activeTab.messages.map((msg, mIdx) => {
                    const isTeam = msg.sender === 'team';
                    return (
                      <motion.div
                        key={`${activeTab.id}-${mIdx}`}
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: mIdx * 0.18 }}
                        className={`flex flex-col ${isTeam ? 'items-start' : 'items-end'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed shadow-sm ${
                            isTeam
                              ? 'bg-[#163B30] text-[#F4F2EC] rounded-tl-sm border border-[#1E4D3F]'
                              : 'bg-[#C8F26B] text-[#0F2A22] font-medium rounded-tr-sm'
                          }`}
                        >
                          <p>{msg.text}</p>
                          <div
                            className={`flex items-center justify-end gap-1 text-[9px] mt-1 ${
                              isTeam ? 'text-[#F4F2EC]/60' : 'text-[#0F2A22]/70'
                            }`}
                          >
                            <span>{msg.time}</span>
                            {isTeam ? (
                              <Check className="w-2.5 h-2.5 text-[#C8F26B]" />
                            ) : (
                              <CheckCheck className="w-2.5 h-2.5 text-[#0F2A22]" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Simulated Input Bar */}
                <div className="pt-2 border-t border-[#163B30]/60 flex items-center gap-2">
                  <div className="flex-1 bg-[#122820] rounded-full px-3 py-1.5 text-[11px] text-[#F4F2EC]/40 truncate">
                    Type a message...
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#C8F26B] flex items-center justify-center text-[#0F2A22]">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Small caption under it: "Example chat" */}
            <p className="text-xs text-[#F4F2EC]/50 mt-3 font-medium">
              Example chat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
