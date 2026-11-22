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
  CheckCircle2,
  Utensils,
  Coins,
  Sparkles,
  Info
} from 'lucide-react';
import { FEBRUARY_2025_DAYS, TEMPLE_INFO } from '../../data/mockData';
import type { CalendarDaySlot, DanaCategory, ScreenType, ContributionType } from '../../types';

interface DanaCalendarProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectBookingDate?: (dateStr: string, danaType: string, contributionType?: ContributionType) => void;
}

export const DanaCalendar: React.FC<DanaCalendarProps> = ({ onNavigate, onSelectBookingDate }) => {
  const [selectedCategory, setSelectedCategory] = useState<DanaCategory>('heel');
  const [selectedDay, setSelectedDay] = useState<CalendarDaySlot>(
    FEBRUARY_2025_DAYS.find(d => d.date === 14 && d.isCurrentMonth) || FEBRUARY_2025_DAYS[19]
  );
  // Active meal tab within selected day card ('heel' or 'dawal')
  const [activeMealTab, setActiveMealTab] = useState<'heel' | 'dawal'>('heel');

  const danaTypeNames: Record<DanaCategory, string> = {
    heel: 'හීල් දානය',
    dawal: 'දවල් දානය',
    sanghika: 'සංඝික දානය',
    gilanpasa: 'ගිලන්පස',
  };

  const weekdayNames = ['ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'];

  const currentMealSlots = activeMealTab === 'heel' ? selectedDay.heelSlots : selectedDay.dawalSlots;
  const maxCapacity = currentMealSlots?.maxCapacity || 4;
  const currentBooked = currentMealSlots?.currentBooked || 0;
  const availableSlots = Math.max(0, maxCapacity - currentBooked);
  const hasPrep = currentMealSlots?.hasPreparation || false;
  const hasFin = currentMealSlots?.hasFinancial || false;
  const isFullyBooked = availableSlots === 0;

  const handleBookingProceed = (contributionType: ContributionType = 'preparation') => {
    const mealTitle = activeMealTab === 'heel' ? 'හීල් දානය' : 'දවල් දානය';
    if (onSelectBookingDate) {
      onSelectBookingDate(
        `2025 පෙබරවාරි ${selectedDay.date} (${weekdayNames[selectedDay.dayOfWeek]})`,
        mealTitle,
        contributionType
      );
    }
    onNavigate('booking');
  };

  const renderStatusBadge = (status?: string) => {
    switch (status) {
      case 'available':
        return (
          <span className="inline-flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#587A4D] text-white shrink-0 shadow-2xs" title="වෙන්කරගත හැක">
            <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
          </span>
        );
      case 'joint':
        return (
          <span className="inline-flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#C58D36] text-white shrink-0 shadow-2xs" title="සමූහ දානය">
            <Users className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
          </span>
        );
      case 'booked':
        return (
          <span className="inline-flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FCE9E8] text-[#842A35] border border-[#842A35]/40 shrink-0" title="සම්පූර්ණයි">
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

  const getCellSurfaceClasses = (slot: CalendarDaySlot, isSelected: boolean) => {
    if (isSelected) {
      return 'border-[#842A35] bg-[#FFF1D5]/90 ring-2 ring-[#842A35]/45 shadow-sm scale-[1.01] z-10';
    }
    if (slot.isSpecialDay) {
      return 'border-[#C58D36] bg-[#F8F0FC]/70 hover:bg-[#F8F0FC]';
    }
    if (slot.heelStatus === 'blocked') {
      return 'border-stone-200 bg-stone-100/80 text-stone-500';
    }
    if (slot.heelStatus === 'booked' && slot.dawalStatus === 'booked') {
      return 'border-[#842A35]/20 bg-[#FCE9E8]/75 hover:border-[#842A35]/40';
    }
    if (slot.heelStatus === 'joint' || slot.dawalStatus === 'joint') {
      return 'border-[#C58D36]/40 bg-[#FFF1D5]/40 hover:bg-[#FFF1D5]/70';
    }
    return 'border-[#E9DDCC] bg-[#FFFDF8] hover:border-[#C58D36]/60 hover:bg-[#F8F2E7]/40';
  };

  return (
    <div className="bg-[#FFFDF8] min-h-screen relative overflow-x-hidden font-['Noto_Sans_Sinhala',sans-serif]">
      
      {/* 🌿 Bo Leaves Branch on Top Left */}
      <BoLeavesTopLeft />

      {/* 1. Category Switcher Tabs */}
      <section className="bg-[#F8F2E7] border-b border-[#E9DDCC] pt-5 sm:pt-6 pb-3">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-[#C58D36] tracking-wider uppercase">
                {TEMPLE_INFO.name} • {TEMPLE_INFO.subtitle}
              </span>
              <h1 className="text-xl sm:text-3xl font-extrabold font-['Abhaya_Libre',serif] text-[#842A35]">
                දාන දින දර්ශනය හා සමූහ දාන වෙන්කිරීම
              </h1>
            </div>
            <LotusIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#C58D36] shrink-0" />
          </div>

          {/* 4 Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-3 overflow-x-auto pb-1 scrollbar-none">
            
            <button
              onClick={() => { setSelectedCategory('heel'); setActiveMealTab('heel'); }}
              className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                selectedCategory === 'heel'
                  ? 'bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white shadow-[0_4px_12px_rgba(132,42,53,0.3)] border border-[#C58D36]/50'
                  : 'bg-[#FFFDF8] text-[#302D2B] border border-[#E9DDCC] hover:border-[#C58D36]'
              }`}
            >
              <AlmsBowlIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${selectedCategory === 'heel' ? 'text-amber-200' : 'text-[#C58D36]'}`} />
              <span className="whitespace-nowrap">හීල් දානය</span>
            </button>

            <button
              onClick={() => { setSelectedCategory('dawal'); setActiveMealTab('dawal'); }}
              className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                selectedCategory === 'dawal'
                  ? 'bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white shadow-[0_4px_12px_rgba(132,42,53,0.3)] border border-[#C58D36]/50'
                  : 'bg-[#FFFDF8] text-[#302D2B] border border-[#E9DDCC] hover:border-[#C58D36]'
              }`}
            >
              <RicePlateIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">දවල් දානය</span>
            </button>

            <button
              onClick={() => setSelectedCategory('sanghika')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                selectedCategory === 'sanghika'
                  ? 'bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white shadow-[0_4px_12px_rgba(132,42,53,0.3)] border border-[#C58D36]/50'
                  : 'bg-[#FFFDF8] text-[#302D2B] border border-[#E9DDCC] hover:border-[#C58D36]'
              }`}
            >
              <MonkGroupIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${selectedCategory === 'sanghika' ? 'text-amber-200' : 'text-[#C58D36]'}`} />
              <span className="whitespace-nowrap">සංඝික දානය</span>
            </button>

            <button
              onClick={() => setSelectedCategory('gilanpasa')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                selectedCategory === 'gilanpasa'
                  ? 'bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white shadow-[0_4px_12px_rgba(132,42,53,0.3)] border border-[#C58D36]/50'
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
      <section className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          
          {/* Left Column: Calendar Grid (7 cols on lg) */}
          <div className="lg:col-span-7 bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl shadow-[0_4px_20px_rgba(132,42,53,0.05)] p-2.5 sm:p-5">
            
            {/* Month Navigation */}
            <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#E9DDCC] mb-2 sm:mb-3 px-1">
              <button className="p-1.5 rounded-full bg-[#F8F2E7] border border-[#E9DDCC] hover:border-[#C58D36] text-[#842A35] transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <CalendarIcon className="w-4 h-4 text-[#C58D36]" />
                <span className="text-base sm:text-xl font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  2025 පෙබරවාරි
                </span>
              </div>

              <button className="p-1.5 rounded-full bg-[#F8F2E7] border border-[#E9DDCC] hover:border-[#C58D36] text-[#842A35] transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Weekday Header: Single letter on mobile (<sm), Full word on desktop (sm+) */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35] mb-1.5 sm:mb-2 bg-[#F8F2E7] py-1.5 sm:py-2 rounded-xl border border-[#E9DDCC]/80 select-none">
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
                      className="min-h-[64px] sm:min-h-[92px] p-1 sm:p-1.5 bg-[#F8F2E7]/35 border border-[#E9DDCC]/40 rounded-lg text-stone-400 text-[10px] sm:text-xs select-none"
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
                    className={`min-h-[64px] sm:min-h-[92px] p-1 sm:p-1.5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between overflow-hidden ${getCellSurfaceClasses(slot, isSelected)}`}
                  >
                    {/* Top Row: Date Number & Poya Badge */}
                    <div className="flex items-center justify-between leading-none">
                      <span className={`text-[11px] sm:text-xs font-extrabold ${
                        isSelected ? 'text-[#842A35]' : 'text-[#302D2B]'
                      }`}>
                        {slot.date}
                      </span>
                      {isPoya && (
                        <LotusIcon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#C58D36] shrink-0" fill="#C58D36" />
                      )}
                    </div>

                    {/* Poya Day Pill */}
                    {isPoya && (
                      <div className="my-0.5 px-0.5 sm:px-1 py-0.5 rounded bg-[#842A35]/10 text-[8.5px] sm:text-[10px] font-bold text-[#842A35] leading-tight text-center truncate">
                        <span className="sm:hidden">පෝය</span>
                        <span className="hidden sm:inline">{slot.poyaTitle}</span>
                      </div>
                    )}

                    {/* Blocked Day Pill */}
                    {isBlocked && (
                      <div className="my-auto px-0.5 sm:px-1 py-1 rounded bg-stone-200/70 text-[8px] sm:text-[10px] text-stone-600 leading-tight text-center flex flex-col items-center justify-center gap-0.5">
                        <Lock className="w-3 h-3 shrink-0 text-stone-500" />
                        <span className="hidden sm:inline truncate">වෙන්කිරීම් නොහැක</span>
                      </div>
                    )}

                    {/* Slots for Heel and Dawal */}
                    {!isBlocked && (
                      <div className="space-y-0.5 mt-0.5 text-[9px] sm:text-[11px]">
                        
                        {/* Heel Slot */}
                        <div className="flex items-center justify-between px-0.5 sm:px-1 py-0.5 rounded bg-[#FFFDF8]/85 border border-black/5 leading-none">
                          <span className="text-[#302D2B] font-semibold whitespace-nowrap">
                            <span className="hidden sm:inline mr-0.5">🍲</span>හීල්
                          </span>
                          {renderStatusBadge(slot.heelStatus)}
                        </div>

                        {/* Dawal Slot */}
                        <div className="flex items-center justify-between px-0.5 sm:px-1 py-0.5 rounded bg-[#FFFDF8]/85 border border-black/5 leading-none">
                          <span className="text-[#302D2B] font-semibold whitespace-nowrap">
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

            {/* Mobile Quick-Book Bar right below calendar grid */}
            <div className="lg:hidden mt-3.5 p-3 rounded-xl bg-gradient-to-r from-[#FFF1D5] via-[#F8F2E7] to-[#FFF1D5] border border-[#C58D36]/60 flex items-center justify-between gap-2 shadow-2xs">
              <div className="min-w-0">
                <span className="text-[10px] text-[#6B635B] font-semibold block">තෝරාගත් දාන දිනය:</span>
                <span className="text-xs font-extrabold text-[#842A35] truncate block">
                  2025 පෙබරවාරි {selectedDay.date} • {activeMealTab === 'heel' ? 'හීල් දානය' : 'දවල් දානය'}
                </span>
              </div>
              <button
                onClick={() => handleBookingProceed('preparation')}
                className="px-3.5 py-2 rounded-full bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white text-xs font-semibold flex items-center gap-1 shrink-0 shadow-xs active:scale-95 transition-transform"
              >
                <span>වෙන්කරගන්න</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Legend Bar: Perfectly aligned 2-column grid on mobile, flex on desktop */}
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#E9DDCC]">
              <div className="text-[11px] font-bold text-[#842A35] font-['Abhaya_Libre',serif] mb-2 sm:mb-0 sm:inline-block sm:mr-3">
                වර්ණ සංකේත (දින තත්වය) :
              </div>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-4 text-[10.5px] sm:text-xs text-[#302D2B] mt-1.5">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#587A4D] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
                  </span>
                  <span>වෙන්කරගත හැක</span>
                </div>

                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#C58D36] text-white flex items-center justify-center shrink-0">
                    <Users className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                  </span>
                  <span>සමූහ දානය (හවුල්)</span>
                </div>

                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FCE9E8] text-[#842A35] border border-[#842A35]/40 flex items-center justify-center shrink-0">
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
                  <LotusIcon className="w-3.5 h-3.5 text-[#C58D36] shrink-0" />
                  <span>පොහොය / විශේෂ දිනය</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Selected Dana Details & Split Allocation Hub (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            
            {/* Card 1: Selected Dana & Multi-Devotee Split Hub */}
            <div className="bg-[#FFFDF8] border-2 border-[#C58D36]/40 rounded-2xl p-4 sm:p-5 shadow-[0_6px_25px_rgba(132,42,53,0.07)] space-y-3.5">
              
              {/* Header with Date */}
              <div className="flex items-center justify-between border-b border-[#E9DDCC] pb-2.5">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-[#C58D36]" />
                  <h3 className="text-sm sm:text-base font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                    තෝරාගත් දින දාන විස්තර
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFF1D5] text-[#842A35] text-[11px] font-bold border border-[#C58D36]/40">
                  පෙබ. {selectedDay.date} ({weekdayNames[selectedDay.dayOfWeek]})
                </span>
              </div>

              {/* Meal Selector Tabs (හීල් vs දවල්) */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#F8F2E7] rounded-xl border border-[#E9DDCC]">
                <button
                  type="button"
                  onClick={() => setActiveMealTab('heel')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    activeMealTab === 'heel'
                      ? 'bg-[#842A35] text-white shadow-xs'
                      : 'text-[#6B635B] hover:text-[#842A35]'
                  }`}
                >
                  <AlmsBowlIcon className={`w-3.5 h-3.5 ${activeMealTab === 'heel' ? 'text-amber-200' : 'text-[#C58D36]'}`} />
                  <span>හීල් දානය (පෙ.ව. 06.30)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMealTab('dawal')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    activeMealTab === 'dawal'
                      ? 'bg-[#842A35] text-white shadow-xs'
                      : 'text-[#6B635B] hover:text-[#842A35]'
                  }`}
                >
                  <RicePlateIcon className={`w-3.5 h-3.5 ${activeMealTab === 'dawal' ? 'text-amber-200' : 'text-[#C58D36]'}`} />
                  <span>දවල් දානය (පෙ.ව. 11.00)</span>
                </button>
              </div>

              {/* Multi-Devotee Capacity Progress Card */}
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#FFFDF8] via-[#F8F2E7]/60 to-[#FFF1D5]/40 border border-[#E9DDCC] space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#842A35]" />
                    <span className="font-bold text-[#842A35]">දායකත්ව ධාරිතාව (සමූහ දාන):</span>
                  </div>
                  <span className={`font-extrabold px-2 py-0.5 rounded-full text-[10px] ${
                    isFullyBooked 
                      ? 'bg-rose-100 text-rose-800 border border-rose-300' 
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  }`}>
                    {currentBooked} / {maxCapacity} භාරගෙන ඇත ({availableSlots} ක් ඉතිරියි)
                  </span>
                </div>

                {/* Progress Bar (Visual Slots) */}
                <div className="grid grid-cols-4 gap-1.5">
                  {Array.from({ length: maxCapacity }).map((_, idx) => {
                    const isTaken = idx < currentBooked;
                    return (
                      <div 
                        key={idx} 
                        className={`h-2.5 rounded-full transition-all ${
                          isTaken 
                            ? 'bg-gradient-to-r from-[#C58D36] to-[#842A35]' 
                            : 'bg-stone-200/90 border border-stone-300'
                        }`}
                        title={isTaken ? `කොටස ${idx + 1}: භාරගෙන ඇත` : `කොටස ${idx + 1}: විවෘතයි`}
                      />
                    );
                  })}
                </div>

                {/* Existing Allocations List (Who booked what) */}
                <div className="pt-2 border-t border-[#E9DDCC]/70 space-y-1.5 text-xs">
                  <span className="text-[10px] font-bold text-[#6B635B] uppercase tracking-wider block">
                    දැනට ලියාපදිංචි දායකත්වයන්:
                  </span>

                  {currentMealSlots?.allocations && currentMealSlots.allocations.length > 0 ? (
                    currentMealSlots.allocations.map((alloc, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-2 rounded-lg bg-[#FFFDF8] border border-[#E9DDCC]"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {alloc.type === 'preparation' ? (
                            <span className="w-6 h-6 rounded-md bg-[#EDF7E7] text-[#587A4D] flex items-center justify-center shrink-0 border border-[#587A4D]/30" title="සම්පාදනය">
                              <Utensils className="w-3.5 h-3.5" />
                            </span>
                          ) : alloc.type === 'financial' ? (
                            <span className="w-6 h-6 rounded-md bg-[#FFF1D5] text-[#C58D36] flex items-center justify-center shrink-0 border border-[#C58D36]/40" title="බරපැන">
                              <Coins className="w-3.5 h-3.5" />
                            </span>
                          ) : (
                            <span className="w-6 h-6 rounded-md bg-[#FCE9E8] text-[#842A35] flex items-center justify-center shrink-0 border border-[#842A35]/30" title="සම්පූර්ණ">
                              <Sparkles className="w-3.5 h-3.5" />
                            </span>
                          )}
                          <div className="min-w-0">
                            <span className="font-bold text-[#302D2B] truncate block text-[11px] sm:text-xs">
                              {alloc.devoteeName}
                            </span>
                            <span className="text-[9.5px] text-[#6B635B]">
                              {alloc.type === 'preparation' 
                                ? '🍲 ආහාර සම්පාදනය (පිස රැගෙන ඒම)' 
                                : alloc.type === 'financial' 
                                  ? '💰 බරපැන දැරීම (මූල්‍ය/වියදම්)' 
                                  : '🌟 සම්පූර්ණ දානය (තනිව)'}
                            </span>
                          </div>
                        </div>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold shrink-0">
                          තහවුරුයි
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="p-2 rounded-lg bg-[#EDF7E7]/60 border border-[#587A4D]/20 text-[#587A4D] text-[11px] flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>මෙම දාන වේලාව සඳහා තවම කිසිවෙකු ලියාපදිංචි වී නැත. සියලු අවස්ථා විවෘතයි!</span>
                    </div>
                  )}

                  {/* Open Slot indicators if not full */}
                  {!isFullyBooked && (
                    <div className="p-2 rounded-lg bg-[#FFF1D5]/40 border border-[#C58D36]/30 text-[10.5px] text-[#842A35] flex items-center justify-between">
                      <span>
                        තව දායකයන් <strong>{availableSlots}</strong> දෙනෙකුට (සම්පාදනය හෝ බරපැන) භාරගත හැක.
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#C58D36] animate-pulse"></span>
                    </div>
                  )}
                </div>
              </div>

              {/* 3 Action Buttons to Split Dana: සම්පාදනය / බරපැන / සම්පූර්ණ */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-bold text-[#842A35] font-['Abhaya_Libre',serif]">
                  ඔබ කැමති දායකත්ව ආකාරය තෝරා වෙන්කරගන්න:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  
                  {/* Option 1: සම්පාදනය (Food Preparation) */}
                  <button
                    type="button"
                    onClick={() => handleBookingProceed('preparation')}
                    disabled={isFullyBooked}
                    className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isFullyBooked
                        ? 'opacity-50 cursor-not-allowed bg-stone-100 border-stone-200'
                        : hasPrep
                          ? 'border-[#C58D36] bg-[#FFF1D5]/50 hover:bg-[#FFF1D5]'
                          : 'border-[#587A4D]/40 bg-[#EDF7E7]/70 hover:bg-[#EDF7E7] hover:border-[#587A4D]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#302D2B] flex items-center gap-1">
                        <Utensils className="w-3.5 h-3.5 text-[#587A4D]" />
                        <span>ආහාර සම්පාදනය</span>
                      </span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-white border border-[#587A4D]/30 text-[#587A4D] font-bold">
                        {hasPrep ? 'හවුල්' : 'විවෘතයි'}
                      </span>
                    </div>
                    <p className="text-[9.5px] text-[#6B635B] leading-tight">
                      ආහාර පිස නියමිත වේලාවට විහාරස්ථානයට රැගෙන ඒම.
                    </p>
                  </button>

                  {/* Option 2: බරපැන (Financial Sponsorship) */}
                  <button
                    type="button"
                    onClick={() => handleBookingProceed('financial')}
                    disabled={isFullyBooked}
                    className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isFullyBooked
                        ? 'opacity-50 cursor-not-allowed bg-stone-100 border-stone-200'
                        : 'border-[#C58D36]/50 bg-[#FFF1D5]/60 hover:bg-[#FFF1D5] hover:border-[#C58D36]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#842A35] flex items-center gap-1">
                        <Coins className="w-3.5 h-3.5 text-[#C58D36]" />
                        <span>බරපැන දැරීම</span>
                      </span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-white border border-[#C58D36]/40 text-[#842A35] font-bold">
                        විවෘතයි
                      </span>
                    </div>
                    <p className="text-[9.5px] text-[#6B635B] leading-tight">
                      දානයේ වියදම්, පිරිවැය හෝ අවශ්‍ය ද්‍රව්‍ය දැරීම.
                    </p>
                  </button>

                </div>

                {/* Option 3: Full Sole Dana Button */}
                {currentBooked === 0 && (
                  <button
                    type="button"
                    onClick={() => handleBookingProceed('full')}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    <span>සම්පූර්ණ දානයම තනිව භාරගන්න (සම්පාදනය + බරපැන)</span>
                  </button>
                )}
              </div>

              {/* Devotee Notification & Coordination Notice */}
              <div className="p-2.5 rounded-xl bg-[#F8F2E7] border border-[#E9DDCC] text-[10.5px] text-[#6B635B] flex items-start gap-2">
                <Info className="w-4 h-4 text-[#C58D36] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-[#842A35]">දායකයන් දැනුවත් කිරීම:</strong> දානය භාරගත් පසු සම්පාදනය කරන සහ බරපැන දරන සියලුම දායකයන් සහ විහාරස්ථානය අතර SMS & WhatsApp මඟින් තොරතුරු සම්බන්ධීකරණය කරනු ලැබේ.
                </p>
              </div>

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
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F8F2E7]/70 border border-[#E9DDCC]">
                  <img 
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=150&q=80" 
                    alt="Poya Day" 
                    className="w-11 h-11 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35] truncate">
                      මහ සුළුවාම් පොහොය දිනය
                    </h4>
                    <span className="text-[10px] text-[#C58D36] font-semibold">2025 පෙබ. 08 (සෙනසුරාදා)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F8F2E7]/70 border border-[#E9DDCC]">
                  <img 
                    src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=150&q=80" 
                    alt="Navam Poya" 
                    className="w-11 h-11 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35] truncate">
                      නවම් පොහොය දිනය
                    </h4>
                    <span className="text-[10px] text-[#C58D36] font-semibold">2025 පෙබ. 22 (සෙනසුරාදා)</span>
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
                  <span>එක් දාන වේලාවකට (හීල්/දවල්) උපරිම 4-5 දෙනෙකුට සමූහව එක්විය හැක.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#587A4D] shrink-0 mt-0.5" />
                  <span>ආහාර සම්පාදනය හෝ බරපැන දැරීම තනිව හෝ හවුලේ භාරගත හැක.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#587A4D] shrink-0 mt-0.5" />
                  <span>හීල් දානය පෙ.ව. 06.30 ට පෙර සහ දවල් දානය පෙ.ව. 11.00 ට පෙර ගෙන ආ යුතුය.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#587A4D] shrink-0 mt-0.5" />
                  <span>විමසීම් සඳහා: {TEMPLE_INFO.phone}</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Bottom Notice Banner */}
      <div className="mt-2 sm:mt-4">
        <NoticeBanner 
          title="විශේෂ දැනුම්දීම - සමූහ දාන සහභාගීත්වය"
          message="ශ්‍රී සුදර්ශන ධර්ම නිකේතනයේ දානමය පින්කම් සඳහා තනිව මෙන්ම පවුල් කිහිපයක් එක්ව සම්පාදනය හෝ බරපැන දරමින් හවුලේ දානය භාරගැනීමේ පහසුකම සලසා ඇත."
          buttonText="දානයක් වෙන්කරගන්න"
          onAction={() => handleBookingProceed('preparation')}
        />
      </div>

    </div>
  );
};
