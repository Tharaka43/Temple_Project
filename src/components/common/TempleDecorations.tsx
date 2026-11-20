import React from 'react';

// Bo Leaves Branch Draping from Top-Left Corner (Responsive sizing)
export const BoLeavesTopLeft: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute top-0 left-0 pointer-events-none z-20 select-none overflow-hidden ${className}`}>
    <svg 
      viewBox="0 0 220 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-28 h-24 sm:w-44 sm:h-36 md:w-56 md:h-48 drop-shadow-sm opacity-90 transition-all"
    >
      {/* Main Branch Stem */}
      <path d="M-10 -10 C30 20 70 40 120 30 C150 24 175 45 190 60" stroke="#4A3525" strokeWidth="4" strokeLinecap="round" />
      <path d="M70 40 C95 65 110 95 125 130" stroke="#4A3525" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M120 30 C140 50 160 85 170 110" stroke="#4A3525" strokeWidth="2" strokeLinecap="round" />

      {/* Primary Bodhi Leaf 1 (Top Left) */}
      <g transform="translate(45, 15) rotate(25)">
        <path d="M0 0 C-15 20 -35 35 -30 65 C-25 90 0 95 10 75 C20 95 45 90 50 65 C55 35 35 20 20 0 C15 -10 5 -10 0 0Z" fill="url(#leafGrad1)" />
        <path d="M10 10 L10 75" stroke="#9FD983" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <path d="M10 30 Q-5 40 -15 50" stroke="#9FD983" strokeWidth="1" opacity="0.6" />
        <path d="M10 30 Q25 40 35 50" stroke="#9FD983" strokeWidth="1" opacity="0.6" />
        <path d="M10 50 Q-5 58 -18 64" stroke="#9FD983" strokeWidth="1" opacity="0.6" />
        <path d="M10 50 Q25 58 38 64" stroke="#9FD983" strokeWidth="1" opacity="0.6" />
      </g>

      {/* Primary Bodhi Leaf 2 (Center Large) */}
      <g transform="translate(100, 35) rotate(45)">
        <path d="M0 0 C-18 25 -40 42 -35 78 C-30 105 0 110 12 88 C24 110 54 105 60 78 C65 42 42 25 24 0 C18 -12 6 -12 0 0Z" fill="url(#leafGrad2)" />
        <path d="M12 10 L12 88" stroke="#B4EAA0" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
        <path d="M12 35 Q-8 48 -20 60" stroke="#B4EAA0" strokeWidth="1.2" opacity="0.65" />
        <path d="M12 35 Q32 48 44 60" stroke="#B4EAA0" strokeWidth="1.2" opacity="0.65" />
        <path d="M12 58 Q-6 68 -22 75" stroke="#B4EAA0" strokeWidth="1.2" opacity="0.65" />
        <path d="M12 58 Q30 68 46 75" stroke="#B4EAA0" strokeWidth="1.2" opacity="0.65" />
      </g>

      {/* Primary Bodhi Leaf 3 (Right Drooping) */}
      <g transform="translate(155, 55) rotate(65)">
        <path d="M0 0 C-14 18 -30 32 -26 60 C-22 80 0 85 9 68 C18 85 40 80 44 60 C48 32 32 18 18 0 C14 -8 4 -8 0 0Z" fill="url(#leafGrad3)" />
        <path d="M9 8 L9 68" stroke="#9FD983" strokeWidth="1.4" opacity="0.8" />
        <path d="M9 28 Q-4 38 -14 46" stroke="#9FD983" strokeWidth="1" opacity="0.6" />
        <path d="M9 28 Q22 38 32 46" stroke="#9FD983" strokeWidth="1" opacity="0.6" />
      </g>

      {/* Small Tendril Leaves */}
      <g transform="translate(110, 115) rotate(80)">
        <path d="M0 0 C-10 12 -22 22 -18 42 C-15 56 0 60 6 48 C12 60 27 56 30 42 C33 22 22 12 12 0 Z" fill="url(#leafGrad1)" />
      </g>

      {/* Gradients */}
      <defs>
        <linearGradient id="leafGrad1" x1="-30" y1="0" x2="50" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7EBA45" />
          <stop offset="50%" stopColor="#558C2E" />
          <stop offset="100%" stopColor="#3B651D" />
        </linearGradient>
        <linearGradient id="leafGrad2" x1="-35" y1="0" x2="60" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8DCB4E" />
          <stop offset="40%" stopColor="#64A335" />
          <stop offset="100%" stopColor="#437220" />
        </linearGradient>
        <linearGradient id="leafGrad3" x1="-26" y1="0" x2="44" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#72AB3C" />
          <stop offset="60%" stopColor="#508329" />
          <stop offset="100%" stopColor="#355C19" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Blooming 3D Pink Lotus Flower with Green Lily Pad
export const PinkLotusBlossom: React.FC<{ className?: string; size?: number }> = ({ className = 'w-16 h-14', size }) => (
  <svg 
    viewBox="0 0 100 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} filter drop-shadow-md`}
    style={size ? { width: size, height: size * 0.8 } : undefined}
  >
    {/* Green Lily Pad Base */}
    <ellipse cx="50" cy="68" rx="46" ry="10" fill="url(#padGrad)" />
    <path d="M50 68 L6 65" stroke="#376620" strokeWidth="1" opacity="0.6" />
    <path d="M50 68 L94 65" stroke="#376620" strokeWidth="1" opacity="0.6" />
    <path d="M50 68 L26 74" stroke="#376620" strokeWidth="1" opacity="0.6" />
    <path d="M50 68 L74 74" stroke="#376620" strokeWidth="1" opacity="0.6" />

    {/* Outer Pink Petals */}
    <path d="M22 62 C10 52 14 36 30 38 C40 40 44 55 46 62 Z" fill="url(#petalOuterLeft)" />
    <path d="M78 62 C90 52 86 36 70 38 C60 40 56 55 54 62 Z" fill="url(#petalOuterRight)" />

    {/* Mid Pink Petals */}
    <path d="M30 63 C18 45 25 24 40 28 C48 30 50 50 48 63 Z" fill="url(#petalMidLeft)" />
    <path d="M70 63 C82 45 75 24 60 28 C52 30 50 50 52 63 Z" fill="url(#petalMidRight)" />

    {/* Center High Petals */}
    <path d="M40 64 C30 35 40 10 50 8 C60 10 70 35 60 64 Z" fill="url(#petalCenter)" />
    <path d="M36 64 C28 40 38 18 46 16 C52 18 54 45 50 64 Z" fill="url(#petalCenterLeft)" opacity="0.9" />
    <path d="M64 64 C72 40 62 18 54 16 C48 18 46 45 50 64 Z" fill="url(#petalCenterRight)" opacity="0.9" />

    {/* Golden Anther in Center */}
    <ellipse cx="50" cy="46" rx="8" ry="4" fill="#FFDC69" opacity="0.9" />
    <circle cx="47" cy="45" r="1" fill="#C58D36" />
    <circle cx="50" cy="45" r="1" fill="#C58D36" />
    <circle cx="53" cy="45" r="1" fill="#C58D36" />

    <defs>
      <linearGradient id="padGrad" x1="4" y1="68" x2="96" y2="68" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4A822D" />
        <stop offset="50%" stopColor="#67AC3E" />
        <stop offset="100%" stopColor="#437728" />
      </linearGradient>
      <linearGradient id="petalOuterLeft" x1="15" y1="36" x2="40" y2="62" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF99B8" />
        <stop offset="50%" stopColor="#F06292" />
        <stop offset="100%" stopColor="#C2185B" />
      </linearGradient>
      <linearGradient id="petalOuterRight" x1="85" y1="36" x2="60" y2="62" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF99B8" />
        <stop offset="50%" stopColor="#F06292" />
        <stop offset="100%" stopColor="#C2185B" />
      </linearGradient>
      <linearGradient id="petalMidLeft" x1="22" y1="24" x2="48" y2="63" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFC1D3" />
        <stop offset="60%" stopColor="#F48FB1" />
        <stop offset="100%" stopColor="#D81B60" />
      </linearGradient>
      <linearGradient id="petalMidRight" x1="78" y1="24" x2="52" y2="63" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFC1D3" />
        <stop offset="60%" stopColor="#F48FB1" />
        <stop offset="100%" stopColor="#D81B60" />
      </linearGradient>
      <linearGradient id="petalCenter" x1="50" y1="8" x2="50" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF0F5" />
        <stop offset="30%" stopColor="#FFB2C8" />
        <stop offset="70%" stopColor="#F06292" />
        <stop offset="100%" stopColor="#AD1457" />
      </linearGradient>
      <linearGradient id="petalCenterLeft" x1="36" y1="16" x2="50" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="50%" stopColor="#FF80AB" />
        <stop offset="100%" stopColor="#C2185B" />
      </linearGradient>
      <linearGradient id="petalCenterRight" x1="64" y1="16" x2="50" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="50%" stopColor="#FF80AB" />
        <stop offset="100%" stopColor="#C2185B" />
      </linearGradient>
    </defs>
  </svg>
);

// Delicate Stupa and Bodhi Tree Sketch for Footer Left
export const StupaAndTreeSketch: React.FC<{ className?: string }> = ({ className = 'w-28 h-24' }) => (
  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Bodhi Tree on Left */}
    <path d="M35 85 C35 60 20 50 15 35 C10 20 25 10 38 15 C50 5 65 15 60 30 C58 40 45 55 45 85 Z" fill="#EADBC8" opacity="0.6" />
    <path d="M40 85 V50 M40 60 L28 45 M40 55 L52 42" stroke="#B3997A" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Stupa on Right */}
    <line x1="95" y1="15" x2="95" y2="38" stroke="#B3997A" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="91" y1="20" x2="99" y2="20" stroke="#B3997A" strokeWidth="1.2" />
    <line x1="90" y1="25" x2="100" y2="25" stroke="#B3997A" strokeWidth="1.2" />
    <line x1="89" y1="30" x2="101" y2="30" stroke="#B3997A" strokeWidth="1.5" />
    <rect x="88" y="38" width="14" height="8" stroke="#B3997A" strokeWidth="1.2" fill="#FFFDF8" />
    <path d="M72 75 C72 50 82 46 95 46 C108 46 118 50 118 75 Z" stroke="#B3997A" strokeWidth="1.5" fill="#FFFDF8" />
    <rect x="68" y="75" width="54" height="4" stroke="#B3997A" strokeWidth="1" fill="#EADBC8" />
    <rect x="64" y="79" width="62" height="4" stroke="#B3997A" strokeWidth="1" fill="#B3997A" />
    <line x1="10" y1="87" x2="135" y2="87" stroke="#B3997A" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
