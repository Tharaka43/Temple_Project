import React from 'react';
import { 
  AlmsBowlIcon, 
  DharmachakraIcon, 
  BodhiLeafIcon, 
  BuddhaStatueIcon,
  ChivaraIcon,
  DharmaBookIcon,
  OilLampIcon,
  WaterPotIcon,
  FlowerOfferingIcon,
  StupaIcon,
  LotusIcon
} from '../icons/BuddhistIcons';
import { NoticeBanner } from '../layout/NoticeBanner';
import { Calendar, Clock, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { UPCOMING_EVENTS, TEMPLE_SERVICES, GALLERY_IMAGES } from '../../data/mockData';
import { BoLeavesTopLeft } from '../common/TempleDecorations';
import type { ScreenType } from '../../types';

interface HomePageProps {
  onNavigate: (screen: ScreenType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {

  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'alms-bowl': return <AlmsBowlIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#C58D36]" />;
      case 'chivara': return <ChivaraIcon className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'dharma-book': return <DharmaBookIcon className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'oil-lamp': return <OilLampIcon className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'flower': return <FlowerOfferingIcon className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'stupa': return <StupaIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#C58D36]" />;
      case 'bodhi': return <BodhiLeafIcon className="w-6 h-6 sm:w-7 sm:h-7" color="#587A4D" />;
      case 'water': return <WaterPotIcon className="w-6 h-6 sm:w-7 sm:h-7" />;
      default: return <AlmsBowlIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#C58D36]" />;
    }
  };

  return (
    <div className="bg-[#FFFDF8] min-h-screen relative overflow-x-hidden">
      
      {/* 🌿 Bo Leaves Branch on Top Left */}
      <BoLeavesTopLeft />

      {/* 1. Hero Section (Panoramic Stupa with Curved Cutout) */}
      <section className="relative overflow-hidden bg-[#F8F2E7]">
        
        {/* Background Image & Sunlight Warm Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85" 
            alt="Temple Courtyard & White Stupa" 
            className="w-full h-full object-cover object-[center_35%] filter brightness-[0.93] contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF8]/95 via-[#FFFDF8]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF8] via-transparent to-transparent opacity-90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 sm:pt-14 sm:pb-28 md:pt-20 md:pb-32">
          <div className="max-w-xl space-y-3 sm:space-y-4">
            
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Abhaya_Libre',serif] text-[#842A35] leading-[1.2] tracking-wide">
              ගම්පහ විහාරස්ථානයට <br />
              <span className="text-[#842A35]">සාදරයෙන් පිළිගනිමු</span>
            </h1>

            <p className="text-xs sm:text-base text-[#302D2B] leading-relaxed font-['Noto_Sans_Sinhala',sans-serif]">
              බුදුරජාණන් වහන්සේගේ පුණ්‍යාලිය අපරිමිත කරුණා සුවපත් වන, ශාන්ත හා පුණ්‍යානුභාවයෙන් පිරුණු පුණ්‍යාලිය විහාරස්ථානය.
            </p>

            <div className="pt-2 sm:pt-3">
              <button
                onClick={() => onNavigate('calendar')}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white font-semibold text-xs sm:text-base shadow-[0_4px_16px_rgba(132,42,53,0.35)] hover:shadow-[0_6px_22px_rgba(132,42,53,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <AlmsBowlIcon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-200" />
                <span>දානය වෙන්කරගන්න</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
              </button>
            </div>

          </div>
        </div>

        {/* Wavy bottom transition curve into white canvas */}
        <div className="absolute bottom-0 inset-x-0 z-10 leading-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-6 sm:h-12 text-[#FFFDF8] preserve-3d">
            <path d="M0 60 L1440 60 L1440 20 C1200 45 960 5 720 30 C480 50 240 10 0 35 Z" fill="#FFFDF8" />
          </svg>
        </div>
      </section>

      {/* 2. Quick Action Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 sm:-mt-8 relative z-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          
          {/* Card 1 */}
          <div 
            onClick={() => onNavigate('calendar')}
            className="flex items-center justify-between p-2.5 sm:p-4 bg-[#FFFDF8] border border-[#E9DDCC] rounded-full shadow-[0_4px_15px_rgba(197,141,54,0.08)] hover:shadow-md hover:border-[#C58D36] cursor-pointer transition-all group"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#F8F2E7] border border-[#E9DDCC] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <AlmsBowlIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C58D36]" />
              </div>
              <span className="text-xs sm:text-base font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                දානය වෙන්කරගන්න &gt;
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => {
              const el = document.getElementById('events');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center justify-between p-2.5 sm:p-4 bg-[#FFFDF8] border border-[#E9DDCC] rounded-full shadow-[0_4px_15px_rgba(197,141,54,0.08)] hover:shadow-md hover:border-[#C58D36] cursor-pointer transition-all group"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#F8F2E7] border border-[#E9DDCC] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <DharmachakraIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C58D36]" />
              </div>
              <span className="text-xs sm:text-base font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                පෝය වැඩසටහන් &gt;
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => onNavigate('calendar')}
            className="flex items-center justify-between p-2.5 sm:p-4 bg-[#FFFDF8] border border-[#E9DDCC] rounded-full shadow-[0_4px_15px_rgba(197,141,54,0.08)] hover:shadow-md hover:border-[#C58D36] cursor-pointer transition-all group"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#EDF7E7] border border-[#587A4D]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <BodhiLeafIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#587A4D]" />
              </div>
              <span className="text-xs sm:text-base font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                බෝධි පූජා &gt;
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div 
            onClick={() => {
              const el = document.getElementById('events');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center justify-between p-2.5 sm:p-4 bg-[#FFFDF8] border border-[#E9DDCC] rounded-full shadow-[0_4px_15px_rgba(197,141,54,0.08)] hover:shadow-md hover:border-[#C58D36] cursor-pointer transition-all group"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#F8F2E7] border border-[#E9DDCC] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <BuddhaStatueIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C58D36]" />
              </div>
              <span className="text-xs sm:text-base font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                බණ වැඩසටහන් &gt;
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Upcoming Events Section */}
      <section id="events" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 sm:pt-16 sm:pb-12">
        
        {/* Lotus Section Header */}
        <div className="text-center mb-5 sm:mb-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="h-[1px] w-12 sm:w-28 bg-[#C58D36]/60"></div>
            <LotusIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C58D36]" />
            <h2 className="text-lg sm:text-2xl font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
              ඉදිරි වැඩසටහන්
            </h2>
            <LotusIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C58D36]" />
            <div className="h-[1px] w-12 sm:w-28 bg-[#C58D36]/60"></div>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {UPCOMING_EVENTS.map((event) => (
            <div 
              key={event.id}
              className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative h-36 sm:h-44 overflow-hidden bg-[#F8F2E7]">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3">
                <div>
                  <h3 className="text-sm sm:text-lg font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                    {event.title}
                  </h3>
                  <p className="text-xs text-[#6B635B] mt-0.5">
                    {event.subtitle}
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#E9DDCC]/70 text-xs text-[#302D2B]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#C58D36]" />
                    <span>{event.dateStr}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C58D36]" />
                    <span>{event.timeStr}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-5 sm:mt-6">
          <button 
            onClick={() => onNavigate('calendar')}
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full border border-[#C58D36] text-xs sm:text-sm font-semibold text-[#842A35] hover:bg-[#F8F2E7] transition-colors"
          >
            <span>සියලු වැඩසටහන් බලන්න</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 4. Temple Services & Offerings (4 items per row on mobile, 8 on desktop) */}
      <section id="services" className="bg-[#FFFDF8] py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <div className="text-center mb-5 sm:mb-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="h-[1px] w-12 sm:w-28 bg-[#C58D36]/60"></div>
              <LotusIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C58D36]" />
              <h2 className="text-lg sm:text-2xl font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                විහාරස්ථානයේ සේවා හා දාන කටයුතු
              </h2>
              <LotusIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C58D36]" />
              <div className="h-[1px] w-12 sm:w-28 bg-[#C58D36]/60"></div>
            </div>
          </div>

          {/* 4 cols on mobile, 8 on desktop */}
          <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3.5">
            {TEMPLE_SERVICES.map((service) => (
              <div 
                key={service.id}
                onClick={() => onNavigate('calendar')}
                className="flex flex-col items-center text-center p-2 sm:p-3 bg-[#FFFDF8] border border-[#E9DDCC] rounded-xl hover:border-[#C58D36] hover:shadow-xs transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F8F2E7] flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  {renderServiceIcon(service.iconName)}
                </div>
                <h4 className="text-[10px] sm:text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35] leading-tight">
                  {service.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Special Notice Maroon Banner */}
      <div id="notices" className="my-4 sm:my-6">
        <NoticeBanner 
          title="වැදගත් දැනුම්දීම"
          message="ලබන පෝය දිනයේ (2025 පෙබරවාරි 12) විහාරස්ථානයේ විශේෂ පෝය වැඩසටහන් පැවැත්වේ. සියලුම භක්තිකයන් ඔබට සහභාගි වන ලෙස කරුණාවෙන් දැනුම්දෙමු."
          buttonText="සම්පූර්ණ විස්තරය"
          onAction={() => onNavigate('calendar')}
        />
      </div>

      {/* 6. Photo Gallery */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 sm:pt-8 sm:pb-16">
        
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <LotusIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C58D36]" />
            <h2 className="text-lg sm:text-2xl font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
              ඡායාරූප ගැලරිය
            </h2>
            <LotusIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C58D36]" />
          </div>

          <button className="inline-flex items-center gap-1 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs font-semibold rounded-full border border-[#C58D36] text-[#842A35] hover:bg-[#F8F2E7] transition-colors">
            <ImageIcon className="w-3.5 h-3.5 text-[#C58D36]" />
            <span className="hidden sm:inline">සියලු ඡායාරූප බලන්න &gt;</span>
            <span className="sm:hidden">සියල්ල &gt;</span>
          </button>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {GALLERY_IMAGES.map((img) => (
            <div 
              key={img.id}
              className="group relative h-24 sm:h-36 rounded-xl overflow-hidden border border-[#E9DDCC] shadow-2xs hover:shadow-sm cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
