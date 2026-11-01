import { useState, useId } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const BOOKING_URL = 'https://app.cal.com/links/1cEyNKTx9dSrC5ogbuJvag?tabName=confirmation';

export function Calculator() {
  const shouldReduceMotion = useReducedMotion();
  const clientsId = useId();
  const missRateId = useId();
  const avgBillId = useId();

  // Round example starting values
  const [callsPerMonth, setCallsPerMonth] = useState<number>(20);
  const [missRate, setMissRate] = useState<number>(25);
  const [avgBill, setAvgBill] = useState<number>(400000); // 4 Lakhs INR

  // Math: lost client discovery calls per month & annualized
  const missedCallsPerMonth = Math.round(callsPerMonth * (missRate / 100));
  const lostPerMonth = missedCallsPerMonth * avgBill;
  const lostPerYear = lostPerMonth * 12;

  // Format INR currency
  const formatINR = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-[#F4F2EC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header in my clients' words */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0F2A22]/70 block mb-3">
            Revenue impact
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2A22] leading-tight text-balance">
            What missed discovery calls cost you
          </h2>
          <p className="text-base sm:text-lg text-[#0F2A22]/75 mt-4 font-normal">
            When prospective software clients drop off or miss consultation calls, the lost revenue compounds quickly.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-[24px] p-6 sm:p-10 lg:p-12 border border-[#0F2A22]/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Sliders Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="pb-3 border-b border-[#0F2A22]/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0F2A22]/60">
                  Your numbers
                </span>
              </div>

              {/* Slider 1: Consultation calls a month */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label htmlFor={clientsId} className="text-sm sm:text-base font-semibold text-[#0F2A22]">
                    Prospective client calls booked a month
                  </label>
                  <span className="font-heading text-lg font-bold text-[#0F2A22] tabular-nums">
                    {callsPerMonth} calls
                  </span>
                </div>
                <input
                  id={clientsId}
                  type="range"
                  min={5}
                  max={60}
                  step={5}
                  value={callsPerMonth}
                  onChange={(e) => setCallsPerMonth(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#F4F2EC] rounded-lg appearance-none cursor-pointer accent-[#0F2A22]"
                />
                <div className="flex justify-between text-xs text-[#0F2A22]/50 mt-1">
                  <span>5 calls</span>
                  <span>60 calls</span>
                </div>
              </div>

              {/* Slider 2: Share who miss the appointment */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label htmlFor={missRateId} className="text-sm sm:text-base font-semibold text-[#0F2A22]">
                    Share who miss or cancel the call
                  </label>
                  <span className="font-heading text-lg font-bold text-[#0F2A22] tabular-nums">
                    {missRate}%
                  </span>
                </div>
                <input
                  id={missRateId}
                  type="range"
                  min={5}
                  max={50}
                  step={5}
                  value={missRate}
                  onChange={(e) => setMissRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#F4F2EC] rounded-lg appearance-none cursor-pointer accent-[#0F2A22]"
                />
                <div className="flex justify-between text-xs text-[#0F2A22]/50 mt-1">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Slider 3: Average contract or project bill */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label htmlFor={avgBillId} className="text-sm sm:text-base font-semibold text-[#0F2A22]">
                    Average contract or project bill
                  </label>
                  <span className="font-heading text-lg font-bold text-[#0F2A22] tabular-nums">
                    {formatINR(avgBill)}
                  </span>
                </div>
                <input
                  id={avgBillId}
                  type="range"
                  min={100000}
                  max={2000000}
                  step={50000}
                  value={avgBill}
                  onChange={(e) => setAvgBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#F4F2EC] rounded-lg appearance-none cursor-pointer accent-[#0F2A22]"
                />
                <div className="flex justify-between text-xs text-[#0F2A22]/50 mt-1">
                  <span>₹1,00,000</span>
                  <span>₹20,00,000</span>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 bg-[#0F2A22] rounded-[24px] p-6 sm:p-8 text-white flex flex-col justify-between border border-[#163B30]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C8F26B] block mb-2">
                  Estimated revenue slip
                </span>

                {/* Monthly Lost */}
                <div className="mb-6 pb-6 border-b border-[#163B30]">
                  <span className="text-xs text-[#F4F2EC]/70 block mb-1">
                    Money lost a month
                  </span>
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-white tabular-nums tracking-tight">
                    {formatINR(lostPerMonth)}
                  </div>
                </div>

                {/* Yearly Lost */}
                <div className="mb-6">
                  <span className="text-xs text-[#F4F2EC]/70 block mb-1">
                    Money lost a year
                  </span>
                  <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C8F26B] tabular-nums tracking-tight">
                    {formatINR(lostPerYear)}
                  </div>
                </div>

                {/* Mandatory Disclaimer */}
                <p className="text-xs text-[#F4F2EC]/70 leading-relaxed font-normal mb-8">
                  Your estimate. We go through it on the free audit call.
                </p>
              </div>

              {/* CTA Button */}
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-[#0F2A22] bg-[#C8F26B] rounded-full hover:bg-[#d4f87a] transition-all shadow-md text-center"
              >
                <span>Book a free audit call</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
