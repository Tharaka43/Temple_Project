import React, { useState } from 'react';
import { StupaIcon, AlmsBowlIcon, LotusIcon } from '../icons/BuddhistIcons';
import { Search, ChevronDown, Menu, X, Home, Calendar, FileEdit, ShieldCheck, Phone, MapPin } from 'lucide-react';
import type { ScreenType } from '../../types';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF8]/95 backdrop-blur-md border-b border-[#E9DDCC] shadow-[0_2px_12px_rgba(132,42,53,0.05)]">
      {/* Subtle Top Gold Sacred Accent Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#E9DDCC] via-[#C58D36] to-[#E9DDCC] opacity-70"></div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Temple Logo & Name (Strictly Single Line, No Wrapping) */}
          <div 
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} 
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
          >
            <div className="p-1 sm:p-1.5 bg-gradient-to-b from-[#FFFDF8] to-[#F8F2E7] border border-[#C58D36]/50 rounded-full group-hover:scale-105 transition-transform shadow-xs shrink-0">
              <StupaIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#C58D36]" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-[20px] font-bold font-['Abhaya_Libre',serif] text-[#842A35] tracking-wide whitespace-nowrap leading-tight group-hover:text-[#6C1E27] transition-colors">
                ශ්‍රී සුදර්ශන ධර්ම නිකේතනය
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5">
                <span className="h-[1px] w-3.5 sm:w-5 bg-[#C58D36]/60"></span>
                <span className="text-[10px] sm:text-xs text-[#C58D36] font-semibold tracking-wider whitespace-nowrap">
                  හෙට්ටියාදෙණිය, ගම්පහ
                </span>
                <span className="h-[1px] w-3.5 sm:w-5 bg-[#C58D36]/60"></span>
              </div>
            </div>
          </div>

          {/* Center/Right: Desktop Navigation (Strictly Single Line, whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-[14px] xl:text-[15px] font-medium text-[#302D2B] whitespace-nowrap">
            
            {/* Active Home Pill */}
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all shrink-0 ${
                currentScreen === 'home'
                  ? 'bg-[#F8F2E7] text-[#842A35] font-semibold border border-[#E9DDCC] shadow-2xs'
                  : 'hover:text-[#842A35] hover:bg-[#F8F2E7]/70'
              }`}
            >
              <Home className="w-4 h-4 text-[#C58D36] shrink-0" />
              <span className="whitespace-nowrap">මුල් පිටුව</span>
            </button>

            {/* විහාරස්ථානය Dropdown */}
            <div className="relative group shrink-0">
              <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-full hover:text-[#842A35] hover:bg-[#F8F2E7]/60 transition-all whitespace-nowrap">
                <span>විහාරස්ථානය</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#C58D36] shrink-0" />
              </button>
            </div>

            {/* වැඩසටහන් Dropdown */}
            <div className="relative group shrink-0">
              <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-full hover:text-[#842A35] hover:bg-[#F8F2E7]/60 transition-all whitespace-nowrap">
                <span>වැඩසටහන්</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#C58D36] shrink-0" />
              </button>
            </div>

            {/* දාන සහ සේවා */}
            <button
              onClick={() => onNavigate('calendar')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all shrink-0 whitespace-nowrap ${
                currentScreen === 'calendar' || currentScreen === 'booking'
                  ? 'bg-[#F8F2E7] text-[#842A35] font-semibold border border-[#E9DDCC] shadow-2xs'
                  : 'hover:text-[#842A35] hover:bg-[#F8F2E7]/60'
              }`}
            >
              <span>දාන සහ සේවා</span>
            </button>

            {/* ඡායාරූප */}
            <a href="#gallery" className="px-2.5 py-1.5 rounded-full hover:text-[#842A35] hover:bg-[#F8F2E7]/60 transition-all shrink-0 whitespace-nowrap">
              ඡායාරූප
            </a>

            {/* දැන්වීම් */}
            <a href="#notices" className="px-2.5 py-1.5 rounded-full hover:text-[#842A35] hover:bg-[#F8F2E7]/60 transition-all shrink-0 whitespace-nowrap">
              දැන්වීම්
            </a>

            {/* අප හා සම්බන්ධ වන්න */}
            <a href="#contact" className="px-2.5 py-1.5 rounded-full hover:text-[#842A35] hover:bg-[#F8F2E7]/60 transition-all shrink-0 whitespace-nowrap">
              අප හා සම්බන්ධ වන්න
            </a>

            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#6B635B] hover:text-[#842A35] hover:bg-[#F8F2E7] rounded-full transition-colors shrink-0"
              title="සොයන්න"
            >
              <Search className="w-4 h-4" />
            </button>

          </nav>

          {/* Mobile Actions: Quick Book + Search + Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#842A35] bg-[#F8F2E7]/80 hover:bg-[#F8F2E7] border border-[#E9DDCC] rounded-full transition-colors"
              aria-label="සොයන්න"
            >
              <Search className="w-4 h-4 text-[#C58D36]" />
            </button>

            <button
              onClick={() => { onNavigate('calendar'); setMobileMenuOpen(false); }}
              className="px-2.5 py-1.5 text-[11px] font-semibold rounded-full bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white shadow-2xs flex items-center gap-1"
            >
              <AlmsBowlIcon className="w-3.5 h-3.5 text-amber-200" />
              <span>දාන</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#842A35] bg-[#F8F2E7] border border-[#E9DDCC] hover:border-[#C58D36] rounded-xl transition-all"
              aria-label="මෙනුව"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Search Bar Dropdown */}
        {searchOpen && (
          <div className="py-2.5 px-3.5 mb-2 bg-[#F8F2E7] border border-[#E9DDCC] rounded-xl flex items-center gap-2 shadow-xs">
            <Search className="w-4 h-4 text-[#C58D36] shrink-0" />
            <input 
              type="text" 
              placeholder="විහාරස්ථානයේ තොරතුරු, දාන දින, වැඩසටහන් සොයන්න..."
              className="w-full bg-transparent border-none text-xs sm:text-sm text-[#302D2B] focus:outline-none placeholder-[#6B635B]"
              autoFocus
            />
            <button 
              onClick={() => setSearchOpen(false)}
              className="text-xs font-semibold text-[#842A35] px-2 py-0.5 rounded-md hover:bg-[#E9DDCC]/50 shrink-0"
            >
              වසන්න
            </button>
          </div>
        )}

        {/* Premium Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 px-2 border-t border-[#E9DDCC] bg-[#FFFDF8] space-y-3 rounded-b-2xl shadow-lg">
            <div className="grid grid-cols-1 gap-1.5 text-sm font-medium text-[#302D2B]">
              <button
                onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-all ${
                  currentScreen === 'home'
                    ? 'bg-[#F8F2E7] text-[#842A35] font-bold border border-[#C58D36]/40 shadow-2xs'
                    : 'hover:bg-[#F8F2E7]/60'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Home className="w-4 h-4 text-[#C58D36]" />
                  <span>මුල් පිටුව</span>
                </span>
                {currentScreen === 'home' && <LotusIcon className="w-3.5 h-3.5 text-[#C58D36]" />}
              </button>

              <button
                onClick={() => { onNavigate('calendar'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-all ${
                  currentScreen === 'calendar'
                    ? 'bg-[#F8F2E7] text-[#842A35] font-bold border border-[#C58D36]/40 shadow-2xs'
                    : 'hover:bg-[#F8F2E7]/60'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#C58D36]" />
                  <span>දාන දින දර්ශනය</span>
                </span>
                {currentScreen === 'calendar' && <LotusIcon className="w-3.5 h-3.5 text-[#C58D36]" />}
              </button>

              <button
                onClick={() => { onNavigate('booking'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-all ${
                  currentScreen === 'booking'
                    ? 'bg-[#F8F2E7] text-[#842A35] font-bold border border-[#C58D36]/40 shadow-2xs'
                    : 'hover:bg-[#F8F2E7]/60'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <FileEdit className="w-4 h-4 text-[#C58D36]" />
                  <span>දානය වෙන්කරවා ගැනීම</span>
                </span>
                {currentScreen === 'booking' && <LotusIcon className="w-3.5 h-3.5 text-[#C58D36]" />}
              </button>

              <button
                onClick={() => { onNavigate('admin'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3.5 py-2.5 rounded-xl bg-[#FFF1D5]/60 border border-[#C58D36]/30 text-[#842A35] font-semibold flex items-center justify-between"
              >
                <span className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#842A35]" />
                  <span>පරිපාලන පුවරුව (Admin)</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#842A35] text-white">කළමනාකරණ</span>
              </button>
            </div>

            {/* Mobile Drawer Contact Strip & Primary CTA */}
            <div className="pt-2.5 border-t border-[#E9DDCC] flex flex-col gap-2.5 px-1">
              <div className="flex items-center justify-between text-xs text-[#6B635B]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#842A35]" />
                  <span>හෙට්ටියාදෙණිය, ගම්පහ</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium text-[#842A35]">
                  <Phone className="w-3.5 h-3.5 text-[#C58D36]" />
                  <span>+94 33 222 4567</span>
                </span>
              </div>

              <button
                onClick={() => { onNavigate('booking'); setMobileMenuOpen(false); }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <AlmsBowlIcon className="w-4 h-4 text-amber-200" />
                <span>අදම දානයක් වෙන්කරවා ගන්න</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
