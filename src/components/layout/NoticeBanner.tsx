import React from 'react';
import { Bell, ChevronRight } from 'lucide-react';
import { PinkLotusBlossom } from '../common/TempleDecorations';

interface NoticeBannerProps {
  title?: string;
  message?: string;
  buttonText?: string;
  onAction?: () => void;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({
  title = 'වැදගත් දැනුම්දීම',
  message = 'ලබන පෝය දිනයේ (2025 පෙබරවාරි 12) විහාරස්ථානයේ විශේෂ පෝය වැඩසටහන් පැවැත්වේ. සියලුම භක්තිකයන් ඔබට සහභාගි වන ලෙස කරුණාවෙන් දැනුම්දෙමු.',
  buttonText = 'සම්පූර්ණ විස්තරය',
  onAction,
}) => {
  return (
    <div className="relative overflow-visible bg-gradient-to-r from-[#6C1E27] via-[#842A35] to-[#6C1E27] text-white border-y border-[#C58D36]/50 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left badge & text */}
          <div className="flex items-center gap-3 md:gap-4 text-center md:text-left flex-1">
            <div className="flex items-center gap-2 shrink-0 bg-[#C58D36]/25 px-3 py-1.5 rounded-full border border-[#C58D36]/50 shadow-xs">
              <Bell className="w-4 h-4 text-[#FFF1D5] animate-bounce" />
              <span className="text-sm font-bold text-[#FFF1D5] tracking-wide font-['Abhaya_Libre',serif]">
                {title}
              </span>
            </div>

            <div className="hidden md:block w-[1px] h-6 bg-[#C58D36]/40"></div>

            <p className="text-xs sm:text-sm text-amber-50/95 leading-relaxed font-['Noto_Sans_Sinhala',sans-serif]">
              {message}
            </p>
          </div>

          {/* Right Button & Lotus Graphic */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onAction}
              className="inline-flex items-center gap-1 px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-[#842A35] text-white border border-[#FFFDF8]/70 hover:bg-[#FFFDF8] hover:text-[#842A35] transition-all duration-200 shadow-sm"
            >
              <span>{buttonText}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Glowing 3D Pink Lotus Flower */}
            <div className="hidden sm:block -my-3">
              <PinkLotusBlossom className="w-14 h-12" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
