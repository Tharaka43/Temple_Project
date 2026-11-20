import React, { useState } from 'react';
import { StupaIcon } from '../icons/BuddhistIcons';
import { Search, ChevronDown, Menu, X, Home } from 'lucide-react';
import type { ScreenType } from '../../types';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="relative z-40 bg-[#FFFDF8] border-b border-[#E9DDCC]/70 shadow-[0_2px_8px_rgba(132,42,53,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Temple Logo & Name (Strictly Single Line, No Wrapping) */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="p-1.5 bg-[#F8F2E7] border border-[#C58D36]/40 rounded-full group-hover:scale-105 transition-transform shadow-2xs shrink-0">
              <StupaIcon className="w-10 h-10 text-[#C58D36]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-[22px] font-bold font-['Abhaya_Libre',serif] text-[#842A35] tracking-wide whitespace-nowrap leading-tight group-hover:text-[#6C1E27] transition-colors">
                ශ්‍රී සුමංගලාරාම විහාරස්ථානය
              </span>
              <div className="flex items-center justify-center gap-2 mt-0.5">
                <span className="h-[1px] w-5 bg-[#C58D36]/50"></span>
                <span className="text-[11px] sm:text-xs text-[#C58D36] font-medium tracking-wider whitespace-nowrap">
                  පැලමඩ, කුරුණෑගල
                </span>
                <span className="h-[1px] w-5 bg-[#C58D36]/50"></span>
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

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onNavigate('admin')}
              className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[#842A35] text-white"
            >
              Admin
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#842A35] hover:bg-[#F8F2E7] rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Search Bar Dropdown */}
        {searchOpen && (
          <div className="py-2.5 px-4 bg-[#F8F2E7] border-t border-[#E9DDCC] flex items-center gap-2 animate-fadeIn">
            <Search className="w-4 h-4 text-[#C58D36]" />
            <input 
              type="text" 
              placeholder="විහාරස්ථානයේ තොරතුරු, දාන දින, වැඩසටහන් සොයන්න..."
              className="w-full bg-transparent border-none text-xs sm:text-sm text-[#302D2B] focus:outline-none placeholder-[#6B635B]"
              autoFocus
            />
            <button 
              onClick={() => setSearchOpen(false)}
              className="text-xs text-[#842A35] hover:underline"
            >
              වසන්න
            </button>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-[#E9DDCC] space-y-1.5 text-sm font-medium text-[#302D2B]">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F8F2E7] hover:text-[#842A35] flex items-center gap-2"
            >
              <Home className="w-4 h-4 text-[#C58D36]" />
              මුල් පිටුව
            </button>
            <button
              onClick={() => { onNavigate('calendar'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F8F2E7] hover:text-[#842A35]"
            >
              දාන දින දර්ශනය
            </button>
            <button
              onClick={() => { onNavigate('booking'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F8F2E7] hover:text-[#842A35]"
            >
              දානය වෙන්කරවා ගැනීම
            </button>
            <button
              onClick={() => { onNavigate('admin'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg bg-[#F8F2E7] text-[#842A35] font-semibold"
            >
              පරිපාලන පුවරුව (Admin)
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
