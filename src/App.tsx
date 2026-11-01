/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopBar } from './components/TopBar.tsx';
import { Hero } from './components/Hero.tsx';
import { Marquee } from './components/Marquee.tsx';
import { WhatChanges } from './components/WhatChanges.tsx';
import { SampleBuilds } from './components/SampleBuilds.tsx';
import { Calculator } from './components/Calculator.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { Founder } from './components/Founder.tsx';
import { AuditPanel } from './components/AuditPanel.tsx';
import { Questions } from './components/Questions.tsx';
import { Closing } from './components/Closing.tsx';
import { MobileStickyBar } from './components/MobileStickyBar.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F2EC] text-[#0F2A22] flex flex-col font-body selection:bg-[#C8F26B] selection:text-[#0F2A22] pb-16 md:pb-0">
      {/* 1. Top bar */}
      <TopBar />

      <main className="flex-1">
        {/* 2. Hero on the dark colour with WhatsApp interactive demo phone */}
        <Hero />

        {/* 3. Marquee: two rows running in opposite directions */}
        <Marquee />

        {/* 4. What changes for you: 3 cards */}
        <WhatChanges />

        {/* 5. Sample builds: 3 rows with work-1, work-2, work-3 on alternating sides */}
        <SampleBuilds />

        {/* 6. Proof: Calculator for missed discovery calls in INR */}
        <Calculator />

        {/* 7. How it works: 3 steps with highlight drawing line */}
        <HowItWorks />

        {/* 8. Founder: 4:5 frame, exact photo link, fallback to logo mark */}
        <Founder />

        {/* 9. Free audit call: dark panel with 3 takeaways */}
        <AuditPanel />

        {/* 10. Questions: 4 accordions answered strictly from MY DETAILS */}
        <Questions />

        {/* 11. Closing: place.jpg under dark layer, CTA, and footer */}
        <Closing />
      </main>

      {/* Sticky phone CTA bar */}
      <MobileStickyBar />
    </div>
  );
}
