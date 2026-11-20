import React from 'react';

// Golden Stupa Emblem for Header & Logo
export const StupaIcon: React.FC<{ className?: string; size?: number }> = ({ className = 'w-10 h-10', size }) => (
  <svg 
    viewBox="0 0 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Spire / Kot Kærælla */}
    <path d="M32 4L32 18" stroke="#C58D36" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 6L34 6" stroke="#C58D36" strokeWidth="2" strokeLinecap="round" />
    <path d="M29 9L35 9" stroke="#C58D36" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 12L36 12" stroke="#C58D36" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M27 15L37 15" stroke="#C58D36" strokeWidth="2.5" strokeLinecap="round" />
    {/* Hataras Kotuwa (Square chamber) */}
    <rect x="26" y="18" width="12" height="6" rx="1" fill="#C58D36" stroke="#842A35" strokeWidth="1" />
    {/* Dome (Garbhaya) */}
    <path 
      d="M17 44C17 29.5 23.5 24 32 24C40.5 24 47 29.5 47 44H17Z" 
      fill="#FFFDF8" 
      stroke="#C58D36" 
      strokeWidth="2.5" 
    />
    <path 
      d="M21 44C21 32 26 27 32 27C38 27 43 32 43 44" 
      stroke="#E9DDCC" 
      strokeWidth="1.5" 
      strokeDasharray="2 2"
    />
    {/* Pesawa (Base rings) */}
    <rect x="14" y="44" width="36" height="4" rx="1.5" fill="#C58D36" />
    <rect x="11" y="48" width="42" height="4" rx="1.5" fill="#E5A94B" />
    <rect x="8" y="52" width="48" height="5" rx="2" fill="#842A35" />
    {/* Salapathala Maluwa (Terrace base) */}
    <path d="M4 59H60" stroke="#C58D36" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Traditional Buddhist Lotus Flower Motif
export const LotusIcon: React.FC<{ className?: string; size?: number; fill?: string }> = ({ 
  className = 'w-6 h-6', 
  size,
  fill = '#C58D36'
}) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Center petal */}
    <path 
      d="M24 8C21 16 20 22 24 32C28 22 27 16 24 8Z" 
      fill={fill} 
      opacity="0.9"
    />
    {/* Inner left petal */}
    <path 
      d="M24 15C17 19 14 26 18 33C21 33 23 28 24 23" 
      fill={fill} 
      opacity="0.8"
    />
    {/* Inner right petal */}
    <path 
      d="M24 15C31 19 34 26 30 33C27 33 25 28 24 23" 
      fill={fill} 
      opacity="0.8"
    />
    {/* Outer left petal */}
    <path 
      d="M22 22C13 23 9 29 11 36C15 37 19 35 23 32" 
      fill={fill} 
      opacity="0.7"
    />
    {/* Outer right petal */}
    <path 
      d="M26 22C35 23 39 29 37 36C33 37 29 35 25 32" 
      fill={fill} 
      opacity="0.7"
    />
    {/* Base pod & lily pads */}
    <path 
      d="M16 36C21 38 27 38 32 36C34 38 30 41 24 41C18 41 14 38 16 36Z" 
      fill={fill} 
    />
  </svg>
);

// Sacred Bodhi Leaf (බෝ පත)
export const BodhiLeafIcon: React.FC<{ className?: string; size?: number; color?: string }> = ({ 
  className = 'w-6 h-6', 
  size,
  color = '#587A4D'
}) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Heart-shaped leaf with slender drooping tip */}
    <path 
      d="M24 4C24 4 23 11 20 17C14 24 6 27 8 36C10 43 20 44 24 37C28 44 38 43 40 36C42 27 34 24 28 17C25 11 24 4 24 4Z" 
      fill={color}
      opacity="0.95"
    />
    {/* Central vein */}
    <path 
      d="M24 9V37" 
      stroke="#FFFDF8" 
      strokeWidth="1.75" 
      strokeLinecap="round" 
      opacity="0.8"
    />
    {/* Side veins */}
    <path d="M24 18C20 19 16 22 14 26" stroke="#FFFDF8" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
    <path d="M24 18C28 19 32 22 34 26" stroke="#FFFDF8" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
    <path d="M24 26C19 28 16 31 15 34" stroke="#FFFDF8" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
    <path d="M24 26C29 28 32 31 33 34" stroke="#FFFDF8" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

// Dharmachakra / 8-Spoked Dharma Wheel (ධර්ම චක්‍රය)
export const DharmachakraIcon: React.FC<{ className?: string; size?: number; color?: string }> = ({ 
  className = 'w-6 h-6', 
  size,
  color = '#C58D36'
}) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Outer Rim */}
    <circle cx="24" cy="24" r="20" stroke={color} strokeWidth="3" fill="none" />
    <circle cx="24" cy="24" r="16.5" stroke={color} strokeWidth="1" strokeDasharray="2 2" fill="none" />
    {/* Center Hub */}
    <circle cx="24" cy="24" r="6" fill={color} />
    <circle cx="24" cy="24" r="3" fill="#FFFDF8" />
    {/* 8 Spokes */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line 
        key={angle}
        x1="24" 
        y1="24" 
        x2="24" 
        y2="5" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round"
        transform={`rotate(${angle} 24 24)`}
      />
    ))}
    {/* Rim knobs */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <circle 
        key={`k-${angle}`}
        cx="24" 
        cy="4" 
        r="2" 
        fill={color} 
        transform={`rotate(${angle} 24 24)`}
      />
    ))}
  </svg>
);

// Meditating Buddha Silhouette (බුද්ධ ප්‍රතිමා වහන්සේ)
export const BuddhaStatueIcon: React.FC<{ className?: string; size?: number; color?: string }> = ({ 
  className = 'w-6 h-6', 
  size,
  color = '#C58D36'
}) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Ushnisha flame / Siraspata */}
    <path d="M24 4C24 6 25 7 24 9" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    {/* Head & Halo */}
    <circle cx="24" cy="14" r="5" fill={color} />
    <circle cx="24" cy="14" r="9" stroke={color} strokeWidth="1" opacity="0.4" />
    {/* Shoulders & Torso in robe */}
    <path 
      d="M15 25C15 21 19 20 24 20C29 20 33 21 33 25L35 34H13L15 25Z" 
      fill={color} 
      opacity="0.9"
    />
    {/* Folded legs (Dhyana Asana) */}
    <ellipse cx="24" cy="37" rx="14" ry="5" fill={color} />
    {/* Lotus pedestal base */}
    <path d="M12 43H36" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Alms Bowl with Steam (හීල් දානය / පාත්‍රය)
export const AlmsBowlIcon: React.FC<{ className?: string; size?: number; color?: string }> = ({ 
  className = 'w-6 h-6', 
  size,
  color = '#C58D36'
}) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Steam curls */}
    <path d="M18 10C16 12 18 14 17 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 7C22 10 24 13 23 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M30 10C28 12 30 14 29 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    {/* Bowl rim */}
    <ellipse cx="24" cy="20" rx="15" ry="4" fill="#E5A94B" stroke={color} strokeWidth="1.5" />
    {/* Bowl body */}
    <path 
      d="M9 20C9 32 16 37 24 37C32 37 39 32 39 20" 
      fill={color} 
      stroke={color} 
      strokeWidth="2" 
    />
    {/* Bowl base ring */}
    <ellipse cx="24" cy="37" rx="7" ry="2.5" fill="#842A35" />
  </svg>
);

// Rice Bowl (දවල් දානය / භෝජන බඳුන)
export const RicePlateIcon: React.FC<{ className?: string; size?: number }> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Heaped rice */}
    <path d="M14 24C14 16 20 12 24 12C28 12 34 16 34 24H14Z" fill="#FFFDF8" stroke="#E9DDCC" strokeWidth="1.5"/>
    {/* Golden rice garnish */}
    <circle cx="24" cy="14" r="1.5" fill="#587A4D" />
    {/* Dish / Plate */}
    <ellipse cx="24" cy="26" rx="18" ry="6" fill="#C58D36" />
    <ellipse cx="24" cy="25" rx="16" ry="4.5" fill="#FFFDF8" stroke="#C58D36" strokeWidth="1.5"/>
    <path d="M12 29C14 34 34 34 36 29" stroke="#842A35" strokeWidth="2" fill="none"/>
  </svg>
);

// Monastic Robe / Chivara (සිවුරු දානය)
export const ChivaraIcon: React.FC<{ className?: string; size?: number }> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Folded Saffron Robe */}
    <rect x="10" y="14" width="28" height="24" rx="4" fill="#C58D36" stroke="#842A35" strokeWidth="2"/>
    <path d="M10 22H38" stroke="#E5A94B" strokeWidth="2"/>
    <path d="M10 30H38" stroke="#E5A94B" strokeWidth="2"/>
    <path d="M24 14V38" stroke="#842A35" strokeWidth="1.5" strokeDasharray="2 2"/>
    <circle cx="24" cy="26" r="3" fill="#842A35"/>
  </svg>
);

// Dharma Scripture Book (ධර්ම පොත් දානය)
export const DharmaBookIcon: React.FC<{ className?: string; size?: number }> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Palm leaf Ola leaf stack style */}
    <rect x="8" y="13" width="32" height="7" rx="2" fill="#E5A94B" stroke="#842A35" strokeWidth="1.5"/>
    <rect x="8" y="21" width="32" height="7" rx="2" fill="#FFFDF8" stroke="#C58D36" strokeWidth="1.5"/>
    <rect x="8" y="29" width="32" height="7" rx="2" fill="#842A35" stroke="#C58D36" strokeWidth="1.5"/>
    {/* Center tying cord / string */}
    <line x1="20" y1="11" x2="20" y2="38" stroke="#C58D36" strokeWidth="2"/>
    <circle cx="20" cy="24.5" r="2.5" fill="#FFFDF8" stroke="#842A35" strokeWidth="1"/>
  </svg>
);

// Traditional Clay Oil Lamp with Flame (පහන් දානය)
export const OilLampIcon: React.FC<{ className?: string; size?: number }> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Golden Flame */}
    <path 
      d="M24 6C24 6 20 12 20 16C20 18.5 21.8 20 24 20C26.2 20 28 18.5 28 16C28 12 24 6 24 6Z" 
      fill="#C58D36" 
    />
    <path 
      d="M24 10C24 10 22 13 22 16C22 17 22.8 18 24 18C25.2 18 26 17 26 16C26 13 24 10 24 10Z" 
      fill="#FFF1D5" 
    />
    {/* Traditional Clay Lamp Body */}
    <path 
      d="M10 25C14 23 20 23 24 23C28 23 34 23 38 25C38 31 31 34 24 34C17 34 10 31 10 25Z" 
      fill="#842A35" 
      stroke="#C58D36" 
      strokeWidth="1.5"
    />
    {/* Stand / Base */}
    <path d="M22 34V40H26V34" fill="#C58D36"/>
    <ellipse cx="24" cy="41" rx="8" ry="2.5" fill="#842A35" stroke="#C58D36" strokeWidth="1"/>
  </svg>
);

// Sacred Water Urn / Kalasa (පානීය ජල දානය)
export const WaterPotIcon: React.FC<{ className?: string; size?: number }> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <ellipse cx="24" cy="12" rx="6" ry="2" fill="#E5A94B" stroke="#842A35" strokeWidth="1.5"/>
    <path 
      d="M19 13C15 19 12 24 12 30C12 37 17 41 24 41C31 41 36 37 36 30C36 24 33 19 29 13H19Z" 
      fill="#C58D36" 
      stroke="#842A35" 
      strokeWidth="1.5"
    />
    <path d="M15 28C19 31 29 31 33 28" stroke="#FFFDF8" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Devotees & Sangha Group (සංඝික දානය / Joint Dana)
export const MonkGroupIcon: React.FC<{ className?: string; size?: number; color?: string }> = ({ 
  className = 'w-6 h-6', 
  size,
  color = '#C58D36'
}) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Center figure */}
    <circle cx="24" cy="14" r="5" fill={color} />
    <path d="M17 33C17 26 20 23 24 23C28 23 31 26 31 33H17Z" fill={color} />
    {/* Left figure */}
    <circle cx="12" cy="17" r="4" fill={color} opacity="0.8" />
    <path d="M6 34C6 29 9 26 13 26C14.5 26 16 26.5 17 27.5C16.5 29 16.5 31 16.5 34H6Z" fill={color} opacity="0.8" />
    {/* Right figure */}
    <circle cx="36" cy="17" r="4" fill={color} opacity="0.8" />
    <path d="M42 34C42 29 39 26 35 26C33.5 26 32 26.5 31 27.5C31.5 29 31.5 31 31.5 34H42Z" fill={color} opacity="0.8" />
    <path d="M4 38H44" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Gilanpasa / Medicinal Offerings (ගිලන්පස)
export const GilanpasaIcon: React.FC<{ className?: string; size?: number; color?: string }> = ({ 
  className = 'w-6 h-6', 
  size,
  color = '#C58D36'
}) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Herbal Tea Vessel & Fruit Cup */}
    <path d="M12 20H28L26 34H14L12 20Z" fill={color} stroke="#842A35" strokeWidth="1.5" />
    <path d="M28 24C32 24 33 30 28 30" stroke="#842A35" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Steaming warm vapor */}
    <path d="M17 11C16 13 18 15 17 17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M23 10C22 13 24 15 23 17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Small plate with herbal medicines / honey cup */}
    <ellipse cx="33" cy="33" rx="8" ry="3" fill="#E5A94B" stroke="#842A35" strokeWidth="1"/>
    <circle cx="33" cy="30" r="2.5" fill="#842A35"/>
  </svg>
);

// Flower Offering (මල් පූජා දානය)
export const FlowerOfferingIcon: React.FC<{ className?: string; size?: number }> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <circle cx="24" cy="20" r="4" fill="#C58D36" />
    <path d="M24 10C26 14 26 16 24 16C22 16 22 14 24 10Z" fill="#E5A94B" />
    <path d="M34 20C30 22 28 22 28 20C28 18 30 18 34 20Z" fill="#E5A94B" />
    <path d="M24 30C22 26 22 24 24 24C26 24 26 26 24 30Z" fill="#E5A94B" />
    <path d="M14 20C18 18 20 18 20 20C20 22 18 22 14 20Z" fill="#E5A94B" />
    <path d="M10 36C16 40 32 40 38 36" stroke="#842A35" strokeWidth="2.5" strokeLinecap="round"/>
    <ellipse cx="24" cy="35" rx="14" ry="4" fill="#FFFDF8" stroke="#C58D36" strokeWidth="1.5"/>
  </svg>
);

// Sri Lankan Flag Mini Icon
export const SriLankaFlag: React.FC<{ className?: string }> = ({ className = 'w-5 h-3.5' }) => (
  <svg 
    viewBox="0 0 600 300" 
    className={`${className} inline-block rounded-[2px] shadow-sm`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="600" height="300" fill="#FFBE29"/>
    <rect x="25" y="25" width="550" height="250" fill="#FFBE29"/>
    <rect x="35" y="35" width="85" height="230" fill="#005B43"/>
    <rect x="125" y="35" width="85" height="230" fill="#EB7B22"/>
    <rect x="225" y="35" width="340" height="230" fill="#842A35"/>
    <circle cx="250" cy="55" r="10" fill="#FFBE29"/>
    <circle cx="540" cy="55" r="10" fill="#FFBE29"/>
    <circle cx="250" cy="245" r="10" fill="#FFBE29"/>
    <circle cx="540" cy="245" r="10" fill="#FFBE29"/>
    {/* Stylized lion outline */}
    <path d="M380 120C400 110 420 125 430 150C430 170 410 185 390 180H350L340 190V160L360 140Z" fill="#FFBE29"/>
    <path d="M410 135L445 115" stroke="#FFBE29" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

// Center Lotus Section Divider
export const LotusDivider: React.FC<{ title?: string; subtitle?: string; className?: string }> = ({ 
  title, 
  subtitle,
  className = 'my-8'
}) => (
  <div className={`text-center ${className}`}>
    <div className="flex items-center justify-center gap-4">
      <div className="h-[1px] w-20 md:w-36 bg-gradient-to-r from-transparent via-[#C58D36]/60 to-[#C58D36]"></div>
      <div className="flex items-center gap-1.5 text-[#C58D36]">
        <LotusIcon className="w-6 h-6 animate-pulse" />
      </div>
      <div className="h-[1px] w-20 md:w-36 bg-gradient-to-l from-transparent via-[#C58D36]/60 to-[#C58D36]"></div>
    </div>
    {title && (
      <h2 className="mt-3 text-2xl md:text-3xl font-bold font-['Abhaya_Libre',serif] text-[#842A35] tracking-wide">
        {title}
      </h2>
    )}
    {subtitle && (
      <p className="mt-1 text-sm md:text-base text-[#6B635B] max-w-xl mx-auto font-['Noto_Sans_Sinhala',sans-serif]">
        {subtitle}
      </p>
    )}
  </div>
);
