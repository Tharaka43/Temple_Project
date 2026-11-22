import React from 'react';
import { StupaAndTreeSketch } from '../common/TempleDecorations';
import { LotusIcon } from '../icons/BuddhistIcons';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import type { ScreenType } from '../../types';

interface FooterProps {
  onNavigate?: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#F8F2E7] border-t border-[#E9DDCC] text-[#302D2B] pt-12 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#E9DDCC]">
          
          {/* Column 1: Stupa & Bo Tree Sketch + Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start gap-4">
            <div className="shrink-0 -mt-2">
              <StupaAndTreeSketch className="w-28 h-24 text-[#C58D36]" />
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  ශ්‍රී සුදර්ශන ධර්ම නිකේතනය
                </h3>
                <p className="text-xs text-[#C58D36] font-medium">හෙට්ටියාදෙණිය, ගම්පහ</p>
              </div>

              <ul className="space-y-2 text-xs sm:text-[13px] text-[#6B635B]">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#842A35] shrink-0 mt-0.5" />
                  <span>ශ්‍රී සුදර්ශන ධර්ම නිකේතනය, හෙට්ටියාදෙණිය, ගම්පහ</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#842A35] shrink-0" />
                  <span>+94 33 222 4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#842A35] shrink-0" />
                  <span>info@gampahaviharaya.lk</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 sm:pl-4">
            <h4 className="text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35] border-b border-[#C58D36]/30 pb-1.5 mb-3">
              ඉක්මන් සබඳතා
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#6B635B]">
              <li>
                <button 
                  onClick={() => onNavigate?.('calendar')}
                  className="flex items-center gap-1.5 hover:text-[#842A35] hover:translate-x-1 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C58D36]" />
                  <span>දානය වෙන්කරගැනීම</span>
                </button>
              </li>
              <li>
                <a href="#events" className="flex items-center gap-1.5 hover:text-[#842A35] hover:translate-x-1 transition-all">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C58D36]" />
                  <span>ඉදිරි වැඩසටහන්</span>
                </a>
              </li>
              <li>
                <a href="#notices" className="flex items-center gap-1.5 hover:text-[#842A35] hover:translate-x-1 transition-all">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C58D36]" />
                  <span>දැන්වීම්</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: More Info (2.5 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35] border-b border-[#C58D36]/30 pb-1.5 mb-3">
              වැඩිදුර
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#6B635B]">
              <li>
                <a href="#about" className="flex items-center gap-1.5 hover:text-[#842A35] hover:translate-x-1 transition-all">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C58D36]" />
                  <span>විහාරස්ථානය පිළිබඳ</span>
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center gap-1.5 hover:text-[#842A35] hover:translate-x-1 transition-all">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C58D36]" />
                  <span>සේවා හා දාන කටයුතු</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center gap-1.5 hover:text-[#842A35] hover:translate-x-1 transition-all">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C58D36]" />
                  <span>අප හා සම්බන්ධ වන්න</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Sacred Blessing (2 cols) */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center text-center">
            <span className="text-xl sm:text-2xl font-bold font-['Abhaya_Libre',serif] text-[#842A35] tracking-wide leading-relaxed">
              “ධර්මෝ රක්ෂති රක්ෂිතස්ස”
            </span>
            <div className="mt-2 text-[#C58D36]">
              <LotusIcon className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B635B] gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} ශ්‍රී සුදර්ශන ධර්ම නිකේතනය - හෙට්ටියාදෙණිය, ගම්පහ. සියලු හිමිකම් ඇවිරිණි.</p>
          <p className="text-[#C58D36]">Sacred Serenity — Modern Sri Lankan Buddhist Temple Experience</p>
        </div>
      </div>
    </footer>
  );
};
