import React, { useState } from 'react';
import { 
  AlmsBowlIcon, 
  RicePlateIcon, 
  MonkGroupIcon, 
  GilanpasaIcon, 
  LotusIcon
} from '../icons/BuddhistIcons';
import { NoticeBanner } from '../layout/NoticeBanner';
import { BoLeavesTopLeft } from '../common/TempleDecorations';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Users, 
  Ban, 
  Lock, 
  Phone, 
  Mail,
  CheckCircle2
} from 'lucide-react';
import { FEBRUARY_2025_DAYS } from '../../data/mockData';
import type { CalendarDaySlot, DanaCategory, ScreenType } from '../../types';

interface DanaCalendarProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectBookingDate?: (dateStr: string, danaType: string) => void;
}

export const DanaCalendar: React.FC<DanaCalendarProps> = ({ onNavigate, onSelectBookingDate }) => {
  const [selectedCategory, setSelectedCategory] = useState<DanaCategory>('heel');
  const [selectedDay, setSelectedDay] = useState<CalendarDaySlot>(
    FEBRUARY_2025_DAYS.find(d => d.date === 14 && d.isCurrentMonth) || FEBRUARY_2025_DAYS[19]
  );

  const danaTypeNames: Record<DanaCategory, string> = {
    heel: 'හීල් දානය',
    dawal: 'දවල් දානය',
    sanghika: 'සංඝික දානය',
    gilanpasa: 'ගිලන්පස',
  };

  const handleBookingProceed = () => {
    if (onSelectBookingDate) {
      onSelectBookingDate(
        `2025 පෙබරවාරි ${selectedDay.date}`,
        danaTypeNames[selectedCategory]
      );
    }
    onNavigate('booking');
  };

  const renderStatusBadge = (status?: string) => {
    switch (status) {
      case 'available':
        return (
          <span className="inline-flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#EDF7E7] text-[#587A4D] shrink-0" title="වෙන්කරගත හැක">
            <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
          </span>
        );
      case 'joint':
        return (
          <span className="inline-flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FFF1D5] text-[#C58D36] shrink-0" title="සමූහ දානය">
            <Users className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
          </span>
        );
      case 'booked':
        return (
          <span className="inline-flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FCE9E8] text-[#842A35] shrink-0" title="සම්පූර්ණයි">
            <Ban className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
          </span>
        );
      case 'blocked':
        return (
          <span className="inline-flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-stone-200 text-stone-600 shrink-0" title="අත්හිටුවා ඇත">
            <Lock className="w-1.5 h-1.5 sm:w-2 sm:h-2" />
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#FFFDF8] min-h-screen relative overflow-x-hidden">
      
      {/* 🌿 Bo Leaves Branch on Top Left */}
      <BoLeavesTopLeft />

      {/* 1. Header Banner */}
      <section className="relative overflow-hidden bg-[#F8F2E7] border-b border-[#E9DDCC]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=80" 
            alt="Temple Courtyard" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 sm:pt-10 sm:pb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Abhaya_Libre',serif] text-[#842A35]">
            දාන දින දර්ශනය
          </h1>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-1 px-4">
            <LotusIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C58D36] shrink-0" />
            <p className="text-xs sm:text-sm text-[#6B635B] font-['Noto_Sans_Sinhala',sans-serif] leading-tight">
              විහාරස්ථානයේ දානය පිළිබඳ වෙන්කරගැනීම සඳහා මාසික දින දර්ශනය හා දාන විස්තර බලන්න.
            </p>
            <LotusIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C58D36] shrink-0" />
          </div>

          {/* Dana Category Pills: 2x2 Grid on Mobile, Flex on Desktop */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mt-5 max-w-xl sm:max-w-none mx-auto">
            
            <button
              onClick={() => setSelectedCategory('heel')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                selectedCategory === 'heel'
                  ? 'bg-[#842A35] text-white shadow-[0_4px_12px_rgba(132,42,53,0.3)]'
                  : 'bg-[#FFFDF8] text-[#302D2B] border border-[#E9DDCC] hover:border-[#C58D36]'
              }`}
            >
              <AlmsBowlIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${selectedCategory === 'heel' ? 'text-amber-200' : 'text-[#C58D36]'}`} />
              <span className="whitespace-nowrap">හීල් දානය</span>
            </button>

            <button
              onClick={() => setSelectedCategory('dawal')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                selectedCategory === 'dawal'
                  ? 'bg-[#842A35] text-white shadow-[0_4px_12px_rgba(132,42,53,0.3)]'
                  : 'bg-[#FFFDF8] text-[#302D2B] border border-[#E9DDCC] hover:border-[#C58D36]'
              }`}
            >
              <RicePlateIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">දවල් දානය</span>
            </button>

            <button
              onClick={() => setSelectedCategory('sanghika')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                selectedCategory === 'sanghika'
                  ? 'bg-[#842A35] text-white shadow-[0_4px_12px_rgba(132,42,53,0.3)]'
                  : 'bg-[#FFFDF8] text-[#302D2B] border border-[#E9DDCC] hover:border-[#C58D36]'
              }`}
            >
              <MonkGroupIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${selectedCategory === 'sanghika' ? 'text-amber-200' : 'text-[#C58D36]'}`} />
              <span className="whitespace-nowrap">සංඝික දානය</span>
            </button>

            <button
              onClick={() => setSelectedCategory('gilanpasa')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                selectedCategory === 'gilanpasa'
                  ? 'bg-[#842A35] text-white shadow-[0_4px_12px_rgba(132,42,53,0.3)]'
                  : 'bg-[#FFFDF8] text-[#302D2B] border border-[#E9DDCC] hover:border-[#C58D36]'
              }`}
            >
              <GilanpasaIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${selectedCategory === 'gilanpasa' ? 'text-amber-200' : 'text-[#C58D36]'}`} />
              <span className="whitespace-nowrap">ගිලන්පස</span>
            </button>

          </div>
        </div>
      </section>

      {/* 2. Main Calendar Content */}
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* Left Column: Calendar (8 cols on lg) */}
          <div className="lg:col-span-8 bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl shadow-xs p-2.5 sm:p-5">
            
            {/* Month Navigation */}
            <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#E9DDCC] mb-2 sm:mb-3 px-1">
              <button className="p-1 sm:p-1.5 rounded-full border border-[#E9DDCC] hover:bg-[#F8F2E7] text-[#842A35] transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <CalendarIcon className="w-4 h-4 text-[#C58D36]" />
                <span className="text-base sm:text-lg font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  2025 පෙබරවාරි
                </span>
              </div>

              <button className="p-1 sm:p-1.5 rounded-full border border-[#E9DDCC] hover:bg-[#F8F2E7] text-[#842A35] transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Weekday Header: Single letter on mobile (<sm), Full word on desktop (sm+) */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35] mb-1.5 sm:mb-2 bg-[#F8F2E7] py-1.5 sm:py-2 rounded-lg border border-[#E9DDCC]/70 select-none">
              <div>
                <span className="sm:hidden">ඉ</span>
                <span className="hidden sm:inline">ඉරිදා</span>
              </div>
              <div>
                <span className="sm:hidden">ස</span>
                <span className="hidden sm:inline">සඳුදා</span>
              </div>
              <div>
                <span className="sm:hidden">අ</span>
                <span className="hidden sm:inline">අඟහරුවාදා</span>
              </div>
              <div>
                <span className="sm:hidden">බ</span>
                <span className="hidden sm:inline">බදාදා</span>
              </div>
              <div>
                <span className="sm:hidden">බ්‍ර</span>
                <span className="hidden sm:inline">බ්‍රහස්පතින්දා</span>
              </div>
              <div>
                <span className="sm:hidden">සි</span>
                <span className="hidden sm:inline">සිකුරාදා</span>
              </div>
              <div>
                <span className="sm:hidden">සෙ</span>
                <span className="hidden sm:inline">සෙනසුරාදා</span>
              </div>
            </div>

            {/* Calendar Cells Grid */}
            <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
              {FEBRUARY_2025_DAYS.map((slot, index) => {
                const isSelected = selectedDay.fullDate === slot.fullDate && slot.isCurrentMonth;
                const isPoya = slot.isSpecialDay;
                const isBlocked = slot.heelStatus === 'blocked';

                if (!slot.isCurrentMonth) {
                  return (
                    <div 
                      key={`overflow-${index}`} 
                      className="min-h-[62px] sm:min-h-[92px] p-1 sm:p-1.5 bg-[#F8F2E7]/30 rounded-lg text-stone-300 text-[10px] sm:text-xs select-none"
                    >
                      <span>{slot.date}</span>
                    </div>
                  );
                }

                return (
                  <div
                    key={slot.fullDate}
                    onClick={() => {
                      setSelectedDay(slot);
                    }}
                    className={`min-h-[62px] sm:min-h-[92px] p-1 sm:p-1.5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#842A35] bg-[#FFF1D5]/50 ring-2 ring-[#842A35]/40 shadow-xs'
                        : isPoya
                        ? 'border-[#C58D36] bg-[#FFFDF8] hover:bg-[#F8F2E7]'
                        : 'border-[#E9DDCC] bg-[#FFFDF8] hover:border-[#C58D36] hover:bg-[#F8F2E7]/40'
                    }`}
                  >
                    {/* Top Row: Date Number & Poya Badge */}
                    <div className="flex items-center justify-between leading-none">
                      <span className={`text-[11px] sm:text-xs font-bold ${
                        isSelected ? 'text-[#842A35]' : 'text-[#302D2B]'
                      }`}>
                        {slot.date}
                      </span>
                      {isPoya && (
                        <LotusIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C58D36] shrink-0" fill="#C58D36" />
                      )}
                    </div>

                    {/* Poya Day Pill */}
                    {isPoya && (
                      <div className="my-0.5 px-0.5 sm:px-1 py-0.5 rounded bg-[#F8F2E7] text-[9px] sm:text-[11px] font-semibold text-[#842A35] leading-tight text-center truncate">
                        <span className="sm:hidden">පෝය</span>
                        <span className="hidden sm:inline">{slot.poyaTitle}</span>
                      </div>
                    )}

                    {/* Blocked Day Pill */}
                    {isBlocked && (
                      <div className="my-0.5 px-0.5 sm:px-1 py-0.5 rounded bg-stone-100 text-[8px] sm:text-[10px] text-stone-600 leading-tight text-center flex items-center justify-center gap-0.5">
                        <Lock className="w-2.5 h-2.5 shrink-0" />
                        <span className="hidden sm:inline truncate">වෙන්කිරීම් නොහැක</span>
                      </div>
                    )}

                    {/* Slots for Heel and Dawal (Zero wrapping, perfectly side-by-side) */}
                    {!isBlocked && (
                      <div className="space-y-0.5 mt-0.5 text-[9px] sm:text-[11px]">
                        
                        {/* Heel Slot */}
                        <div className="flex items-center justify-between px-1 py-0.5 rounded bg-[#F8F2E7]/80 leading-none">
                          <span className="text-[#6B635B] font-medium whitespace-nowrap">
                            <span className="hidden sm:inline mr-0.5">🍲</span>හීල්
                          </span>
                          {renderStatusBadge(slot.heelStatus)}
                        </div>

                        {/* Dawal Slot */}
                        <div className="flex items-center justify-between px-1 py-0.5 rounded bg-[#F8F2E7]/80 leading-none">
                          <span className="text-[#6B635B] font-medium whitespace-nowrap">
                            <span className="hidden sm:inline mr-0.5">🍲</span>දවල්
                          </span>
                          {renderStatusBadge(slot.dawalStatus)}
                        </div>

                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Legend Bar: Perfectly aligned 2-column grid on mobile, flex on desktop */}
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#E9DDCC]">
              <div className="text-[11px] font-bold text-[#842A35] font-['Abhaya_Libre',serif] mb-2 sm:mb-0 sm:inline-block sm:mr-3">
                වර්ණ සංකේත (දින තත්වය) :
              </div>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-[#302D2B] mt-1.5">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#EDF7E7] text-[#587A4D] flex items-center justify-center shrink-0">
                    <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
                  </span>
                  <span>වෙන්කරගත හැක</span>
                </div>

                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FFF1D5] text-[#C58D36] flex items-center justify-center shrink-0">
                    <Users className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                  </span>
                  <span>සීමිත ආසන ඇත</span>
                </div>

                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FCE9E8] text-[#842A35] flex items-center justify-center shrink-0">
                    <Ban className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                  </span>
                  <span>සම්පූර්ණයි</span>
                </div>

                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center shrink-0">
                    <Lock className="w-2 h-2" />
                  </span>
                  <span>අත්හිටුවා ඇත</span>
                </div>

                <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1 whitespace-nowrap">
                  <LotusIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C58D36] shrink-0" />
                  <span>පොහොය / විශේෂ දිනය</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Selected Dana Details & Guidelines (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            
            {/* Card 1: Selected Dana Details */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 border-b border-[#E9DDCC] pb-2.5">
                <CalendarIcon className="w-4 h-4 text-[#C58D36]" />
                <h3 className="text-sm sm:text-base font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  තෝරාගත් දාන විස්තර
                </h3>
              </div>

              {/* Photo */}
              <div className="h-28 sm:h-32 rounded-xl overflow-hidden border border-[#E9DDCC]">
                <img 
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80" 
                  alt="Dana Offering Feast"
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Information Rows */}
              <div className="space-y-1.5 text-xs sm:text-[13px] text-[#302D2B]">
                <div className="flex items-center justify-between py-1 border-b border-[#E9DDCC]/50">
                  <span className="text-[#6B635B] flex items-center gap-1">
                    <CalendarIcon className="w-3 h-3 text-[#C58D36]" />
                    <span>දානය දිනය :</span>
                  </span>
                  <span className="font-bold text-[#842A35]">
                    2025 පෙබරවාරි {selectedDay.date} ({
                      ['ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'][selectedDay.dayOfWeek]
                    })
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-[#E9DDCC]/50">
                  <span className="text-[#6B635B] flex items-center gap-1">
                    <AlmsBowlIcon className="w-3 h-3 text-[#C58D36]" />
                    <span>දාන වර්ගය :</span>
                  </span>
                  <span className="font-semibold">{danaTypeNames[selectedCategory]}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-[#E9DDCC]/50">
                  <span className="text-[#6B635B] flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#C58D36]" />
                    <span>ලබා ගත හැකි ආසන :</span>
                  </span>
                  <span className="font-semibold text-[#587A4D]">12</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-[#E9DDCC]/50">
                  <span className="text-[#6B635B] flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#C58D36]" />
                    <span>විහාරස්ථාන දුරකථන :</span>
                  </span>
                  <span className="font-medium">+94 37 223 4567</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-[#6B635B] flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#C58D36]" />
                    <span>විද්‍යුත් තැපැල :</span>
                  </span>
                  <span className="font-medium text-xs">info@sumangalarama.lk</span>
                </div>
              </div>

              {/* Big CTA Button */}
              <button
                onClick={handleBookingProceed}
                className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white font-semibold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
              >
                <AlmsBowlIcon className="w-4 h-4 text-amber-200" />
                <span>දානය වෙන්කරගන්න</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Card 2: Upcoming Special Days */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-xs space-y-2.5">
              <div className="flex items-center gap-2 border-b border-[#E9DDCC] pb-2">
                <CalendarIcon className="w-4 h-4 text-[#C58D36]" />
                <h3 className="text-xs sm:text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  එළඹෙන විශේෂ දින
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2.5 p-1.5 rounded-xl bg-[#F8F2E7]/70 border border-[#E9DDCC]">
                  <img 
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=150&q=80" 
                    alt="Poya Day" 
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                      මහ සුළුවාම් පොහොය දිනය
                    </h4>
                    <span className="text-[10px] text-[#C58D36] font-semibold">2025 පෙබ. 08 (සෙනසුරාදා)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-1.5 rounded-xl bg-[#F8F2E7]/70 border border-[#E9DDCC]">
                  <img 
                    src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=150&q=80" 
                    alt="Navam Poya" 
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                      නවම් පොහොය දිනය
                    </h4>
                    <span className="text-[10px] text-[#C58D36] font-semibold">2025 පෙබ. 22 (සෙනසුරාදා)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-1.5 rounded-xl bg-[#F8F2E7]/70 border border-[#E9DDCC]">
                  <img 
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=150&q=80" 
                    alt="Seela Festival" 
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                      මහා සීල වන්දනා උත්සවය
                    </h4>
                    <span className="text-[10px] text-[#C58D36] font-semibold">2025 මාර්. 01 (සෙනසුරාදා)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Guidelines */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-xs space-y-2">
              <div className="flex items-center gap-1.5 border-b border-[#E9DDCC] pb-2">
                <CheckCircle2 className="w-4 h-4 text-[#587A4D]" />
                <h3 className="text-xs sm:text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  දානය වෙන්කර ගැනීමේ මාර්ගෝපදේශ
                </h3>
              </div>

              <ul className="space-y-1.5 text-[11px] sm:text-xs text-[#302D2B]">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#587A4D] shrink-0 mt-0.5" />
                  <span>දානය අවම දින 3කට පෙර වෙන්කරගැනීම නිර්දේශ කෙරේ.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#587A4D] shrink-0 mt-0.5" />
                  <span>හීල් දානය, දවල් දානය, සංඝික දානය සහ ගිලන්පස වෙන්කරගත හැක.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#587A4D] shrink-0 mt-0.5" />
                  <span>එක් දිනක හීල් හා දවල් දෙකම වෙන්කරගැනීමේ හැකියාව ඇත.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#587A4D] shrink-0 mt-0.5" />
                  <span>පොහොය හා විශේෂ දිනවල දාන කටයුතු විහාරස්ථානය විසින් සංවිධානය කරනු ලබයි.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Bottom Notice Banner */}
      <div className="mt-2 sm:mt-4">
        <NoticeBanner 
          title="විශේෂ දැනුම්දීම"
          message="මහ සුළුවාම් පොහොය දිනය (2025 පෙබරවාරි 08) විශේෂ වැඩසටහන් හා සංඝික දානය සඳහා ස්ථාන සීමිත බැවින්, ඉක්මනින් වෙන්කරගැනීම අනිවාර්යයි."
          buttonText="වැඩිදුර විස්තර"
          onAction={handleBookingProceed}
        />
      </div>

    </div>
  );
};
