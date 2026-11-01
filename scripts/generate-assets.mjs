import fs from 'node:fs';
import { execSync } from 'node:child_process';

const scenes = {
  'work-1': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#182c23" />
      <stop offset="40%" stop-color="#233a30" />
      <stop offset="100%" stop-color="#14241d" />
    </linearGradient>
    <linearGradient id="windowLight" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#eaf3ee" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#cbe0d5" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#20362b" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f5ede0" />
      <stop offset="40%" stop-color="#dfd2be" />
      <stop offset="100%" stop-color="#a6947c" />
    </linearGradient>
    <linearGradient id="woodSlats" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2c1d11" />
      <stop offset="50%" stop-color="#4a321e" />
      <stop offset="100%" stop-color="#24170d" />
    </linearGradient>
    <radialGradient id="sunGlow" cx="20%" cy="25%" r="60%">
      <stop offset="0%" stop-color="#fff8ed" stop-opacity="0.7" />
      <stop offset="60%" stop-color="#d6e8dd" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#14241d" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="skinGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c68a5c" />
      <stop offset="100%" stop-color="#935732" />
    </linearGradient>
    <linearGradient id="shirtGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3c5e50" />
      <stop offset="100%" stop-color="#1c352a" />
    </linearGradient>
    <linearGradient id="phoneGlow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#111827" />
      <stop offset="100%" stop-color="#030712" />
    </linearGradient>
    <filter id="softBlur">
      <feGaussianBlur stdDeviation="12" />
    </filter>
  </defs>

  <!-- Background interior wall & architecture -->
  <rect width="1200" height="800" fill="url(#bg)" />

  <!-- Floor-to-ceiling glass window on left letting in natural Hyderabad morning daylight -->
  <polygon points="0,0 480,0 360,800 0,800" fill="url(#windowLight)" />
  <rect x="0" y="0" width="1200" height="800" fill="url(#sunGlow)" />

  <!-- Acoustic fluted timber wall on the right -->
  <g opacity="0.35">
    ${Array.from({ length: 30 })
      .map(
        (_, i) =>
          `<rect x="${680 + i * 18}" y="0" width="9" height="520" fill="url(#woodSlats)" />`
      )
      .join('\n')}
  </g>

  <!-- Indoor tropical planter -->
  <path d="M 280,520 Q 240,400 180,360 Q 220,440 290,540 Z" fill="#2d523e" />
  <path d="M 290,520 Q 320,380 390,340 Q 340,430 300,540 Z" fill="#3b6b52" />
  <path d="M 300,530 Q 260,330 200,280 Q 250,380 310,540 Z" fill="#203d2e" />

  <!-- Natural stone / marble reception desk -->
  <polygon points="320,530 1140,490 1200,800 240,800" fill="url(#deskGrad)" />
  <polygon points="320,530 1140,490 1150,515 310,555" fill="#f8f4ee" opacity="0.8" />

  <!-- Person (Front desk IT team member) smiling at their smartphone -->
  <!-- Body / Torso -->
  <path d="M 580,480 C 580,410 630,370 720,370 C 810,370 860,410 860,480 L 890,560 L 550,560 Z" fill="url(#shirtGrad)" />
  <!-- Collar / neck -->
  <path d="M 685,380 L 720,420 L 755,380 Z" fill="#f4f2ec" opacity="0.9" />
  <path d="M 700,340 L 740,340 L 735,385 L 705,385 Z" fill="url(#skinGrad)" />
  <!-- Head tilted gently down with warm smile -->
  <ellipse cx="720" cy="275" rx="55" ry="68" fill="url(#skinGrad)" />
  <!-- Hair style -->
  <path d="M 660,270 C 655,200 700,185 750,195 C 785,205 790,250 780,285 C 765,240 740,215 700,225 C 670,235 665,255 660,270 Z" fill="#151210" />
  <!-- Facial features (natural smile) -->
  <path d="M 698,285 Q 710,295 725,287" stroke="#603418" stroke-width="3" fill="none" stroke-linecap="round" />
  <path d="M 685,260 Q 695,265 705,262" stroke="#603418" stroke-width="2.5" fill="none" stroke-linecap="round" />
  <path d="M 718,262 Q 728,267 738,264" stroke="#603418" stroke-width="2.5" fill="none" stroke-linecap="round" />
  <!-- Arms & Hands holding smartphone -->
  <path d="M 620,470 Q 660,490 690,510 L 705,485 Q 670,455 635,445 Z" fill="url(#skinGrad)" />
  <path d="M 810,470 Q 770,495 745,510 L 730,485 Q 765,455 795,445 Z" fill="url(#skinGrad)" />
  <!-- Smartphone in hand (clean, no text, plain minimalist device) -->
  <rect x="690" y="470" width="55" height="85" rx="8" fill="url(#phoneGlow)" transform="rotate(-6 717 512)" />
  <rect x="693" y="473" width="49" height="79" rx="6" fill="#1e293b" opacity="0.85" transform="rotate(-6 717 512)" />

  <!-- Warm depth vignette -->
  <rect width="1200" height="800" fill="none" stroke="#000" stroke-width="1" />
</svg>
`,

  'work-2': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#dfece5" />
      <stop offset="50%" stop-color="#b8d3c5" />
      <stop offset="100%" stop-color="#8ba898" />
    </linearGradient>
    <linearGradient id="roomGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#14261f" />
      <stop offset="70%" stop-color="#0d1b15" />
      <stop offset="100%" stop-color="#08120e" />
    </linearGradient>
    <linearGradient id="suitGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2d3748" />
      <stop offset="100%" stop-color="#1a202c" />
    </linearGradient>
    <linearGradient id="skin2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c98a58" />
      <stop offset="100%" stop-color="#995831" />
    </linearGradient>
  </defs>

  <!-- Deep interior office room -->
  <rect width="1200" height="800" fill="url(#roomGrad)" />

  <!-- Huge panoramic architectural window showing Hyderabad skyline bokeh and soft daylight -->
  <rect x="80" y="40" width="680" height="720" rx="4" fill="url(#skyGrad)" />
  <!-- Window mullions -->
  <line x1="320" y1="40" x2="320" y2="760" stroke="#253a30" stroke-width="12" />
  <line x1="540" y1="40" x2="540" y2="760" stroke="#253a30" stroke-width="12" />
  <line x1="80" y1="380" x2="760" y2="380" stroke="#253a30" stroke-width="12" />

  <!-- Distant tech park greenery and architecture silhouette (clean, no logos) -->
  <path d="M 80,480 L 140,460 L 220,490 L 310,430 L 400,450 L 520,400 L 620,440 L 760,420 L 760,760 L 80,760 Z" fill="#9dbba9" opacity="0.6" />
  <path d="M 80,550 Q 240,510 400,560 T 760,530 L 760,760 L 80,760 Z" fill="#698f79" opacity="0.7" />

  <!-- Modern executive desk foreground on right -->
  <polygon points="720,540 1200,460 1200,800 640,800" fill="#1b2a22" />
  <polygon points="720,540 1200,460 1200,475 715,555" fill="#30493c" />

  <!-- Modern architectural pendant lamp -->
  <line x1="940" y1="0" x2="940" y2="220" stroke="#a3b899" stroke-width="2" />
  <ellipse cx="940" cy="225" rx="45" ry="12" fill="#c8f26b" opacity="0.8" />

  <!-- The Business Owner / Executive standing confidently between client meetings, looking at phone -->
  <!-- Body in tailored business blazer -->
  <path d="M 440,320 C 420,290 460,250 510,240 C 560,240 600,290 580,320 L 610,640 L 410,640 Z" fill="url(#suitGrad)" />
  <path d="M 480,245 L 510,310 L 540,245 Z" fill="#f4f2ec" />
  <!-- Neck -->
  <rect x="495" y="200" width="30" height="48" rx="6" fill="url(#skin2)" />
  <!-- Head & profile glancing thoughtfully toward the smartphone -->
  <ellipse cx="510" cy="160" rx="46" ry="54" fill="url(#skin2)" />
  <!-- Groomed hair -->
  <path d="M 465,155 C 460,110 500,95 540,105 C 565,115 565,145 555,170 C 545,130 520,115 490,125 Z" fill="#181512" />
  <!-- Glasses / profile details -->
  <path d="M 480,155 Q 495,158 508,155" stroke="#334155" stroke-width="2.5" fill="none" />

  <!-- Arms holding smartphone at chest height -->
  <path d="M 430,340 Q 470,390 500,410 L 515,395 Q 480,350 450,330 Z" fill="url(#suitGrad)" />
  <path d="M 590,340 Q 550,390 525,410 L 510,395 Q 540,350 570,330 Z" fill="url(#suitGrad)" />
  <!-- Hands -->
  <ellipse cx="512" cy="415" rx="18" ry="12" fill="url(#skin2)" />
  <!-- Clean phone device -->
  <rect x="492" y="380" width="42" height="68" rx="6" fill="#0f172a" />
  <rect x="495" y="383" width="36" height="62" rx="4" fill="#334155" opacity="0.6" />
</svg>
`,

  'work-3': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="lobbyLight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fdfbf7" />
      <stop offset="60%" stop-color="#ebe5da" />
      <stop offset="100%" stop-color="#c8c0b0" />
    </linearGradient>
    <linearGradient id="glassWall" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#d9ebe2" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#f0f7f3" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#c1ddd0" stop-opacity="0.8" />
    </linearGradient>
    <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#b0a899" />
      <stop offset="100%" stop-color="#4a4237" />
    </linearGradient>
    <linearGradient id="outfitGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1b4332" />
      <stop offset="100%" stop-color="#0f2a22" />
    </linearGradient>
    <linearGradient id="skin3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d49463" />
      <stop offset="100%" stop-color="#9a5a32" />
    </linearGradient>
  </defs>

  <!-- High-ceiling modern glass lobby of Hyderabad IT complex -->
  <rect width="1200" height="800" fill="url(#lobbyLight)" />
  <rect x="180" y="0" width="840" height="520" fill="url(#glassWall)" />

  <!-- Slender architectural steel pillars -->
  <rect x="260" y="0" width="28" height="520" fill="#64748b" opacity="0.4" />
  <rect x="600" y="0" width="28" height="520" fill="#64748b" opacity="0.4" />
  <rect x="920" y="0" width="28" height="520" fill="#64748b" opacity="0.4" />

  <!-- Polished granite reflective lobby floor -->
  <polygon points="0,520 1200,520 1200,800 0,800" fill="url(#floorGrad)" />
  <!-- Floor reflection sheen -->
  <polygon points="400,520 800,520 950,800 250,800" fill="#fdfbf7" opacity="0.25" />

  <!-- Happy IT client leaving after successful partnership meeting, walking out with phone in hand -->
  <!-- Floor shadow -->
  <ellipse cx="580" cy="720" rx="90" ry="18" fill="#1e1810" opacity="0.4" />

  <!-- Trousers & Legs in motion -->
  <path d="M 540,510 L 525,700 L 565,700 L 575,540 Z" fill="#1f2937" />
  <path d="M 575,510 L 615,690 L 655,690 L 605,530 Z" fill="#111827" />

  <!-- Smart tailored jacket -->
  <path d="M 510,310 C 490,260 540,230 585,230 C 630,230 675,260 655,310 L 640,520 L 520,520 Z" fill="url(#outfitGrad)" />

  <!-- Head & pleased warm expression -->
  <rect x="570" y="195" width="26" height="38" rx="4" fill="url(#skin3)" />
  <ellipse cx="583" cy="155" rx="44" ry="52" fill="url(#skin3)" />
  <!-- Hair -->
  <path d="M 540,150 C 535,100 580,90 620,100 C 640,115 635,145 625,165 C 610,125 580,115 555,128 Z" fill="#17120e" />

  <!-- Gentle smile -->
  <path d="M 575,168 Q 585,176 598,170" stroke="#5a2e12" stroke-width="2.5" fill="none" stroke-linecap="round" />

  <!-- Arm holding phone comfortably at hip level as walking -->
  <path d="M 645,310 Q 675,390 680,450 L 655,460 Q 640,400 620,330 Z" fill="url(#outfitGrad)" />
  <ellipse cx="678" cy="470" rx="15" ry="18" fill="url(#skin3)" />
  <!-- Smartphone in hand -->
  <rect x="670" y="445" width="28" height="52" rx="5" fill="#0f172a" transform="rotate(15 684 471)" />
  <rect x="672" y="447" width="24" height="48" rx="4" fill="#38bdf8" opacity="0.3" transform="rotate(15 684 471)" />
</svg>
`,

  'place': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="placeCeiling" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#14261f" />
      <stop offset="100%" stop-color="#0f1c17" />
    </linearGradient>
    <linearGradient id="placeGlass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e2eee8" />
      <stop offset="50%" stop-color="#c1d9cc" />
      <stop offset="100%" stop-color="#93b8a4" />
    </linearGradient>
    <linearGradient id="placeFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3d4e44" />
      <stop offset="40%" stop-color="#1f2c25" />
      <stop offset="100%" stop-color="#101814" />
    </linearGradient>
    <linearGradient id="teakWood" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#54361e" />
      <stop offset="50%" stop-color="#78502f" />
      <stop offset="100%" stop-color="#4a2e18" />
    </linearGradient>
  </defs>

  <!-- Ceiling with architectural recessed acoustic baffles -->
  <rect width="1200" height="800" fill="url(#placeCeiling)" />
  <g opacity="0.25">
    ${Array.from({ length: 18 })
      .map(
        (_, i) =>
          `<polygon points="${i * 70},0 ${i * 70 + 40},0 ${i * 70 - 20},180 ${i * 70 - 60},180" fill="#2a4537" />`
      )
      .join('\n')}
  </g>

  <!-- Expansive curved panoramic floor-to-ceiling glass wall on left showing lush green Hyderabad IT park views -->
  <polygon points="0,120 720,180 720,600 0,680" fill="url(#placeGlass)" />
  <!-- Glass frames -->
  <line x1="180" y1="135" x2="180" y2="660" stroke="#233a2f" stroke-width="8" />
  <line x1="360" y1="150" x2="360" y2="640" stroke="#233a2f" stroke-width="8" />
  <line x1="540" y1="165" x2="540" y2="620" stroke="#233a2f" stroke-width="8" />

  <!-- Calm interior floor with polished dark terrazzo and soft warm reflections -->
  <polygon points="0,680 720,600 1200,600 1200,800 0,800" fill="url(#placeFloor)" />
  <!-- Reflection highlights -->
  <polygon points="120,680 600,600 900,800 0,800" fill="#719b84" opacity="0.12" />

  <!-- Teak architectural wall and meeting pod on the right -->
  <polygon points="720,180 1200,100 1200,600 720,600" fill="url(#teakWood)" />
  <g opacity="0.3">
    ${Array.from({ length: 24 })
      .map(
        (_, i) =>
          `<line x1="${720 + i * 20}" y1="180" x2="${720 + i * 20}" y2="600" stroke="#24170d" stroke-width="3" />`
      )
      .join('\n')}
  </g>

  <!-- Large indoor planters with fiddle-leaf fig & monstera plants creating calm oasis -->
  <ellipse cx="640" cy="590" rx="70" ry="18" fill="#122019" />
  <path d="M 600,590 Q 560,450 510,400 Q 570,490 620,590 Z" fill="#2d5540" />
  <path d="M 640,590 Q 630,420 680,360 Q 670,480 650,590 Z" fill="#3f7559" />
  <path d="M 660,590 Q 720,460 760,410 Q 700,500 670,590 Z" fill="#224232" />

  <!-- Minimalist collaboration seating & teak table in center right (calm, empty, ready for team) -->
  <ellipse cx="880" cy="670" rx="160" ry="40" fill="#0d1612" opacity="0.6" />
  <polygon points="780,630 1020,610 1060,650 750,670" fill="#322214" />
  <polygon points="780,630 1020,610 1020,622 780,642" fill="#583c24" />

  <!-- Soft warm architectural linear light -->
  <line x1="720" y1="182" x2="1200" y2="102" stroke="#c8f26b" stroke-width="3" opacity="0.8" />
</svg>
`
};

for (const [name, svgContent] of Object.entries(scenes)) {
  const svgPath = `/tmp/${name}.svg`;
  const jpgPath = `/app/applet/public/${name}.jpg`;
  fs.writeFileSync(svgPath, svgContent.trim());
  console.log(`Converting ${svgPath} -> ${jpgPath}`);
  execSync(`ffmpeg -y -i ${svgPath} -q:v 2 ${jpgPath}`);
}
console.log('All 4 images generated in public directory successfully!');
