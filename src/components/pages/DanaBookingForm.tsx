import React, { useState } from 'react';
import { 
  AlmsBowlIcon, 
  LotusIcon, 
  SriLankaFlag,
  RicePlateIcon 
} from '../icons/BuddhistIcons';
import { BoLeavesTopLeft } from '../common/TempleDecorations';
import { 
  User, 
  Calendar as CalendarIcon, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  ExternalLink,
  PhoneCall,
  Clock,
  Users,
  Utensils,
  Coins,
  Sparkles,
  Info,
  ShieldCheck,
  Send
} from 'lucide-react';
import type { BookingRecord, ScreenType, ContributionType } from '../../types';
import { TEMPLE_INFO } from '../../data/mockData';

interface DanaBookingFormProps {
  onNavigate: (screen: ScreenType) => void;
  onBookingSubmitted?: (booking: BookingRecord) => void;
  initialDate?: string;
  initialDanaType?: string;
  initialContributionType?: ContributionType;
}

export const DanaBookingForm: React.FC<DanaBookingFormProps> = ({ 
  onNavigate, 
  onBookingSubmitted,
  initialDate = '2025 පෙබරවාරි 14 (සිකුරාදා)',
  initialDanaType = 'හීල් දානය',
  initialContributionType = 'preparation'
}) => {
  const [step, setStep] = useState<number>(2);
  const [fullName, setFullName] = useState('කසුන් මධුසේන විජේසිංහ');
  const [phone, setPhone] = useState('77 223 4567');
  const [email, setEmail] = useState('kasun.vijesinghe@gmail.com');
  const [address, setAddress] = useState('අංක 128/4, විහාර මාවත, හෙට්ටියාදෙණිය, ගම්පහ.');
  const [danaType, setDanaType] = useState(initialDanaType);
  const [bookingDate, setBookingDate] = useState(initialDate);
  const [contributionType, setContributionType] = useState<ContributionType>(initialContributionType);
  const [familyCount, setFamilyCount] = useState<number>(8);
  const [foodArrangement, setFoodArrangement] = useState<'temple' | 'devotee'>('devotee');
  const [specialNote, setSpecialNote] = useState(
    'අපගේ පවුලේ උපන්දිනය නිමිත්තෙන් දානයක් පිරිනැමීමට බලාපොරොත්තු වෙමු. අවශ්‍ය අඩුම කුඩුම පිළිබඳව විහාරස්ථානය සමඟ සාකච්ඡා කරමු.'
  );
  const [agreeTerms, setAgreeTerms] = useState(true);

  // OTP State
  const [otp] = useState(['4', '7', '3', '9', '1', '6']);

  const getContributionTypeSinhala = (type: ContributionType) => {
    switch (type) {
      case 'preparation': return 'ආහාර සම්පාදනය (පිස රැගෙන ඒම)';
      case 'financial': return 'බරපැන දැරීම (මූල්‍ය/වියදම්)';
      case 'full': return 'සම්පූර්ණ දානය (සම්පාදනය + බරපැන)';
      default: return 'ආහාර සම්පාදනය';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 2) {
      setStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (step === 3) {
      const newBooking: BookingRecord = {
        id: `b-${Date.now()}`,
        refNumber: String(Math.floor(100 + Math.random() * 900)),
        devoteeName: fullName,
        phone: `+94 ${phone}`,
        email,
        address,
        danaType,
        category: danaType.includes('හීල්') ? 'heel' : danaType.includes('දවල්') ? 'dawal' : 'sanghika',
        contributionType,
        date: bookingDate,
        time: danaType.includes('හීල්') ? 'පෙ.ව. 06.30' : 'පෙ.ව. 11.00',
        familyMembers: familyCount,
        foodArrangement,
        specialNote,
        status: 'pending',
        slotNumber: contributionType === 'full' ? 1 : Math.floor(1 + Math.random() * 3),
        maxSlots: 4,
        createdAt: new Date().toISOString().split('T')[0],
      };

      if (onBookingSubmitted) {
        onBookingSubmitted(newBooking);
      }
      onNavigate('admin');
    }
  };

  return (
    <div className="bg-[#FFFDF8] min-h-screen relative overflow-x-hidden font-['Noto_Sans_Sinhala',sans-serif]">
      
      {/* 🌿 Bo Leaves Branch on Top Left */}
      <BoLeavesTopLeft />

      {/* 1. Header Banner & Breadcrumbs */}
      <section className="relative overflow-hidden bg-[#F8F2E7] border-b border-[#E9DDCC] pt-6 pb-5 sm:pt-8 sm:pb-6">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=80" 
            alt="Temple Courtyard" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F2E7] via-[#F8F2E7]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-10 sm:pl-16">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center flex-wrap gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-[#6B635B] mb-2 font-medium">
            <button onClick={() => onNavigate('home')} className="hover:text-[#842A35]">
              මුල් පිටුව
            </button>
            <ChevronRight className="w-3 h-3 text-[#C58D36]" />
            <button onClick={() => onNavigate('calendar')} className="hover:text-[#842A35]">
              දාන දින දර්ශනය
            </button>
            <ChevronRight className="w-3 h-3 text-[#C58D36]" />
            <span className="text-[#842A35] font-semibold">දානය වෙන්කරවා ගැනීම</span>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-[#FFFDF8] border border-[#C58D36]/40 rounded-full shadow-xs">
              <AlmsBowlIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#C58D36]" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-semibold text-[#C58D36]">
                {TEMPLE_INFO.name} • {TEMPLE_INFO.subtitle}
              </span>
              <h1 className="text-xl sm:text-3xl font-extrabold font-['Abhaya_Libre',serif] text-[#842A35]">
                දානය වෙන්කරවා ගැනීම
              </h1>
            </div>
          </div>

        </div>
      </section>

      {/* 2. 3-Step Wizard Navigation */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-5 pb-2">
        <div className="text-center mb-2 sm:mb-3 flex items-center justify-center gap-1.5">
          <LotusIcon className="w-3.5 h-3.5 text-[#C58D36]" />
          <span className="text-xs sm:text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
            දානය වෙන්කරවා ගැනීමේ පියවර (3 පියවර)
          </span>
          <LotusIcon className="w-3.5 h-3.5 text-[#C58D36]" />
        </div>

        <div className="grid grid-cols-3 gap-1.5 sm:gap-3 max-w-3xl mx-auto">
          
          {/* Step 1 */}
          <button
            onClick={() => setStep(1)}
            className={`flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2.5 rounded-full text-[11px] sm:text-sm font-semibold transition-all border ${
              step === 1
                ? 'bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white border-[#842A35] shadow-xs'
                : 'bg-[#EDF7E7]/80 text-[#587A4D] border-[#587A4D]/40 shadow-2xs'
            }`}
          >
            <CalendarIcon className={`w-3.5 h-3.5 shrink-0 ${step === 1 ? 'text-amber-200' : 'text-[#587A4D]'}`} />
            <span className="hidden sm:inline">1. දිනය හා දානයේ වර්ගය</span>
            <span className="sm:hidden">1. දිනය</span>
            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${step === 1 ? 'text-amber-200' : 'text-[#587A4D]'}`} />
          </button>

          {/* Step 2 */}
          <button
            onClick={() => setStep(2)}
            className={`flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2.5 rounded-full text-[11px] sm:text-sm font-semibold transition-all border shadow-xs ${
              step === 2
                ? 'bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white border-[#C58D36]/50 shadow-[0_4px_12px_rgba(132,42,53,0.25)]'
                : 'bg-[#FFFDF8] text-[#302D2B] border-[#E9DDCC]'
            }`}
          >
            <User className={`w-3.5 h-3.5 shrink-0 ${step === 2 ? 'text-amber-200' : 'text-[#C58D36]'}`} />
            <span className="hidden sm:inline">2. දායකගේ විස්තර</span>
            <span className="sm:hidden">2. විස්තර</span>
          </button>

          {/* Step 3 */}
          <button
            onClick={() => setStep(3)}
            className={`flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2.5 rounded-full text-[11px] sm:text-sm font-semibold transition-all border ${
              step === 3
                ? 'bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white border-[#C58D36]/50 shadow-[0_4px_12px_rgba(132,42,53,0.25)]'
                : 'bg-[#FFFDF8] text-[#6B635B] border-[#E9DDCC]'
            }`}
          >
            <Check className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">3. තහවුරු කිරීම</span>
            <span className="sm:hidden">3. තහවුරු</span>
          </button>

        </div>
      </section>

      {/* Mobile Compact Summary Ribbon */}
      <div className="lg:hidden max-w-7xl mx-auto px-3 pt-2">
        <div className="p-3 rounded-2xl bg-gradient-to-r from-[#FFF1D5]/80 via-[#F8F2E7] to-[#FFF1D5]/80 border border-[#C58D36]/50 flex items-center justify-between gap-2 shadow-2xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#FFFDF8] border border-[#C58D36]/40 flex items-center justify-center shrink-0">
              <AlmsBowlIcon className="w-5 h-5 text-[#C58D36]" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-semibold text-[#6B635B] block">තෝරාගත් දානය හා දිනය:</span>
              <span className="text-xs font-extrabold text-[#842A35] truncate block">
                {danaType} • {bookingDate}
              </span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#FFFDF8] border border-[#E9DDCC] text-[10px] font-bold text-[#842A35] shrink-0">
            {contributionType === 'preparation' ? '🍲 සම්පාදනය' : contributionType === 'financial' ? '💰 බරපැන' : '🌟 සම්පූර්ණ'}
          </span>
        </div>
      </div>

      {/* 3. Form Body & Summary Sidebar */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* Left Column: Form Card (8 cols) */}
          <div className="lg:col-span-8 bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 sm:p-7 shadow-[0_4px_20px_rgba(132,42,53,0.05)]">
            
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Form Title */}
                <div className="border-b border-[#E9DDCC] pb-3 flex items-center justify-between">
                  <div>
                    <h2 className="text-base sm:text-xl font-bold font-['Abhaya_Libre',serif] text-[#842A35] flex items-center gap-1.5 sm:gap-2">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#C58D36]" />
                      <span>දායකගේ විස්තර හා දායකත්ව ආකාරය</span>
                    </h2>
                    <p className="text-[11px] sm:text-xs text-[#6B635B] mt-0.5">
                      ඔබ දානය භාරගන්නේ ආහාර සම්පාදනයෙන්ද නැතහොත් බරපැන දැරීමෙන්ද යන්න මෙහිදී තෝරාගත හැක.
                    </p>
                  </div>
                  <LotusIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C58D36] shrink-0" />
                </div>

                {/* 🌟 Dedicated Section: Contribution Type Selector (සම්පාදනය vs බරපැන vs සම්පූර්ණ) */}
                <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-[#FFFDF8] via-[#F8F2E7]/70 to-[#FFF1D5]/40 border-2 border-[#C58D36]/40 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs sm:text-sm font-bold text-[#842A35]">
                      දායකත්වයේ ස්වරූපය තෝරන්න <span className="text-[#842A35]">*</span>
                    </label>
                    <span className="text-[10px] text-[#6B635B] bg-[#FFFDF8] px-2 py-0.5 rounded-full border border-[#E9DDCC]">
                      උපරිම 4-5 දෙනෙකුට සමූහව භාරගත හැක
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    
                    {/* Option 1: සම්පාදනය (Food Preparation) */}
                    <label
                      onClick={() => setContributionType('preparation')}
                      className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                        contributionType === 'preparation'
                          ? 'border-[#587A4D] bg-[#EDF7E7]/90 text-[#302D2B] shadow-xs'
                          : 'border-[#E9DDCC] bg-[#FFFDF8] text-[#302D2B] hover:border-[#587A4D]/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-[#587A4D] flex items-center gap-1.5">
                            <Utensils className="w-4 h-4" />
                            <span>ආහාර සම්පාදනය</span>
                          </span>
                          <input
                            type="radio"
                            name="contributionType"
                            checked={contributionType === 'preparation'}
                            onChange={() => setContributionType('preparation')}
                            className="text-[#587A4D] focus:ring-[#587A4D]"
                          />
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-[#6B635B] leading-relaxed">
                          ආහාර සකස් කර නියමිත වේලාවට විහාරස්ථානයට රැගෙන ඒම.
                        </p>
                      </div>
                      <span className="mt-2 text-[9px] px-2 py-0.5 rounded-full bg-[#587A4D]/10 text-[#587A4D] font-bold self-start">
                        සමූහ දානය (කොටසක්)
                      </span>
                    </label>

                    {/* Option 2: බරපැන දැරීම (Financial Sponsorship) */}
                    <label
                      onClick={() => setContributionType('financial')}
                      className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                        contributionType === 'financial'
                          ? 'border-[#C58D36] bg-[#FFF1D5]/90 text-[#302D2B] shadow-xs'
                          : 'border-[#E9DDCC] bg-[#FFFDF8] text-[#302D2B] hover:border-[#C58D36]/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-[#842A35] flex items-center gap-1.5">
                            <Coins className="w-4 h-4 text-[#C58D36]" />
                            <span>බරපැන දැරීම</span>
                          </span>
                          <input
                            type="radio"
                            name="contributionType"
                            checked={contributionType === 'financial'}
                            onChange={() => setContributionType('financial')}
                            className="text-[#842A35] focus:ring-[#842A35]"
                          />
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-[#6B635B] leading-relaxed">
                          දානයේ වියදම්, පිරිවැය හෝ අවශ්‍ය ද්‍රව්‍යමය අවශ්‍යතා දැරීම.
                        </p>
                      </div>
                      <span className="mt-2 text-[9px] px-2 py-0.5 rounded-full bg-[#C58D36]/15 text-[#842A35] font-bold self-start">
                        සමූහ දානය (කොටසක්)
                      </span>
                    </label>

                    {/* Option 3: සම්පූර්ණ දානය (Full Sole Sponsorship) */}
                    <label
                      onClick={() => setContributionType('full')}
                      className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                        contributionType === 'full'
                          ? 'border-[#842A35] bg-[#FCE9E8]/80 text-[#302D2B] shadow-xs'
                          : 'border-[#E9DDCC] bg-[#FFFDF8] text-[#302D2B] hover:border-[#842A35]/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-[#842A35] flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-[#842A35]" />
                            <span>සම්පූර්ණ දානය</span>
                          </span>
                          <input
                            type="radio"
                            name="contributionType"
                            checked={contributionType === 'full'}
                            onChange={() => setContributionType('full')}
                            className="text-[#842A35] focus:ring-[#842A35]"
                          />
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-[#6B635B] leading-relaxed">
                          ආහාර සම්පාදනය හා බරපැන දෙකම තනිව භාරගැනීම.
                        </p>
                      </div>
                      <span className="mt-2 text-[9px] px-2 py-0.5 rounded-full bg-[#842A35]/10 text-[#842A35] font-bold self-start">
                        සම්පූර්ණ දිනය
                      </span>
                    </label>

                  </div>
                </div>

                {/* Form Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      සම්පූර්ණ නම <span className="text-[#842A35]">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder="ඔබගේ නම මෙහි සටහන් කරන්න"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] text-xs sm:text-sm text-[#302D2B] focus:outline-none focus:border-[#C58D36] focus:ring-2 focus:ring-[#C58D36]/15 transition-all"
                    />
                  </div>

                  {/* Phone with Country Code */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      ජංගම දුරකථන අංකය <span className="text-[#842A35]">*</span>
                    </label>
                    <div className="flex items-center rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] overflow-hidden focus-within:border-[#C58D36] focus-within:ring-2 focus-within:ring-[#C58D36]/15 transition-all">
                      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#F8F2E7] border-r border-[#E9DDCC] text-xs font-semibold shrink-0">
                        <SriLankaFlag className="w-4 h-3" />
                        <span>+94</span>
                      </div>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full px-3 py-2.5 bg-transparent text-xs sm:text-sm text-[#302D2B] focus:outline-none"
                      />
                      <span className="pr-3 text-[#587A4D] shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      ඊමේල් ලිපිනය (විකල්ප)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] text-xs sm:text-sm text-[#302D2B] focus:outline-none focus:border-[#C58D36] focus:ring-2 focus:ring-[#C58D36]/15 transition-all"
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      ලිපිනය <span className="text-[#842A35]">*</span>
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      placeholder="නිවසේ ලිපිනය"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] text-xs sm:text-sm text-[#302D2B] focus:outline-none focus:border-[#C58D36] focus:ring-2 focus:ring-[#C58D36]/15 transition-all"
                    />
                  </div>

                  {/* Dana Type Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      දානය වර්ගය <span className="text-[#842A35]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={danaType}
                        onChange={(e) => setDanaType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] text-xs sm:text-sm text-[#302D2B] appearance-none focus:outline-none focus:border-[#C58D36]"
                      >
                        <option value="හීල් දානය">හීල් දානය (පෙ.ව. 06.30)</option>
                        <option value="දවල් දානය">දවල් දානය (පෙ.ව. 11.00)</option>
                        <option value="සංඝික දානය">සංඝික දානය</option>
                        <option value="ගිලන්පස පූජාව">ගිලන්පස පූජාව</option>
                      </select>
                      <RicePlateIcon className="w-4 h-4 absolute right-3.5 top-3 pointer-events-none" />
                    </div>
                  </div>

                  {/* Booking Date */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      වෙන්කරගත් දිනය <span className="text-[#842A35]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] text-xs sm:text-sm text-[#302D2B] focus:outline-none focus:border-[#C58D36]"
                      />
                      <CalendarIcon className="w-4 h-4 text-[#C58D36] absolute right-3.5 top-3 pointer-events-none" />
                    </div>
                  </div>

                  {/* Family Members Stepper */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      සහභාගී වන සාමාජික සංඛ්‍යාව <span className="text-[#842A35]">*</span>
                    </label>
                    <div className="flex items-center justify-between rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] px-3 py-1.5">
                      <span className="text-xs font-semibold text-[#6B635B]">{familyCount} දෙනෙක්</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setFamilyCount(Math.max(1, familyCount - 1))}
                          className="w-8 h-8 rounded-lg bg-[#F8F2E7] hover:bg-[#E9DDCC] active:scale-95 text-[#842A35] font-bold text-base flex items-center justify-center transition-all border border-[#E9DDCC]"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-extrabold text-[#842A35] text-sm">
                          {familyCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => setFamilyCount(familyCount + 1)}
                          className="w-8 h-8 rounded-lg bg-[#F8F2E7] hover:bg-[#E9DDCC] active:scale-95 text-[#842A35] font-bold text-base flex items-center justify-center transition-all border border-[#E9DDCC]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Food Arrangement (Active if preparation or full) */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      ආහාර පිළියෙළ කිරීමේ ක්‍රමය <span className="text-[#842A35]">*</span>
                    </label>
                    <div className="grid grid-cols-1 gap-1.5 text-xs">
                      <label 
                        onClick={() => setFoodArrangement('devotee')}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border cursor-pointer transition-all ${
                          foodArrangement === 'devotee'
                            ? 'border-[#842A35] bg-[#FFF1D5]/50 text-[#842A35] font-semibold'
                            : 'border-[#E9DDCC] bg-[#FFFDF8] text-[#302D2B]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="foodArrangement"
                          checked={foodArrangement === 'devotee'}
                          onChange={() => setFoodArrangement('devotee')}
                          className="text-[#842A35] focus:ring-[#842A35]"
                        />
                        <span>නිවසේදී පිස රැගෙන ඒම</span>
                      </label>
                      <label 
                        onClick={() => setFoodArrangement('temple')}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border cursor-pointer transition-all ${
                          foodArrangement === 'temple'
                            ? 'border-[#842A35] bg-[#FFF1D5]/50 text-[#842A35] font-semibold'
                            : 'border-[#E9DDCC] bg-[#FFFDF8] text-[#302D2B]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="foodArrangement"
                          checked={foodArrangement === 'temple'}
                          onChange={() => setFoodArrangement('temple')}
                          className="text-[#842A35] focus:ring-[#842A35]"
                        />
                        <span>විහාරස්ථානයේදී පිස සකස් කිරීම</span>
                      </label>
                    </div>
                  </div>

                </div>

                {/* Special Note */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      විශේෂ සටහන හෝ ප්‍රාර්ථනාව (විකල්ප)
                    </label>
                    <span className="text-[10px] sm:text-xs text-[#6B635B]">
                      {specialNote.length} / 300
                    </span>
                  </div>
                  <textarea
                    rows={2}
                    maxLength={300}
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] text-xs sm:text-sm text-[#302D2B] focus:outline-none focus:border-[#C58D36]"
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F2E7]/60 border border-[#E9DDCC]">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                    className="mt-0.5 w-4 h-4 rounded text-[#842A35] focus:ring-[#842A35]"
                  />
                  <label htmlFor="terms" className="text-xs text-[#302D2B] leading-relaxed cursor-pointer">
                    විහාරස්ථාන මාර්ගෝපදේශ සහ සමූහ දාන සම්බන්ධීකරණ නියමයන් පිළිගනිමින් එකඟ වෙමි. <span className="text-[#842A35]">*</span>
                  </label>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#E9DDCC]">
                  <button
                    type="button"
                    onClick={() => onNavigate('calendar')}
                    className="inline-flex items-center justify-center gap-1 px-4 sm:px-5 py-2.5 rounded-full border border-[#C58D36] text-xs font-semibold text-[#842A35] hover:bg-[#F8F2E7] transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>දින දර්ශනයට</span>
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-1.5 px-6 sm:px-8 py-2.5 rounded-full bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <span>තහවුරු කිරීමේ පියවරට</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            )}

            {step === 3 && (
              <div className="space-y-4 text-center py-4">
                <div className="w-14 h-14 bg-[#EDF7E7] text-[#587A4D] border border-[#587A4D]/30 rounded-full mx-auto flex items-center justify-center shadow-2xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                    දාන වෙන්කිරීම තහවුරු කරන්න
                  </h2>
                  <p className="text-xs text-[#6B635B] max-w-md mx-auto mt-1">
                    ඔබගේ තොරතුරු සහ තෝරාගත් දායකත්ව ආකාරය නිවැරදිදැයි පරීක්ෂා කර අවසන් ඉල්ලීම විහාරස්ථානය වෙත යොමු කරන්න.
                  </p>
                </div>

                {/* Summary Card with Contribution Type */}
                <div className="bg-[#F8F2E7] border border-[#E9DDCC] rounded-2xl p-4 text-left max-w-md mx-auto space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#E9DDCC]">
                    <span className="text-[#6B635B]">දායකගේ නම:</span>
                    <span className="font-bold text-[#302D2B]">{fullName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E9DDCC]">
                    <span className="text-[#6B635B]">දුරකථනය:</span>
                    <span className="font-bold">+94 {phone}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E9DDCC]">
                    <span className="text-[#6B635B]">දානය දිනය:</span>
                    <span className="font-bold text-[#842A35]">{bookingDate}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E9DDCC]">
                    <span className="text-[#6B635B]">දාන වර්ගය:</span>
                    <span className="font-bold">{danaType}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E9DDCC]">
                    <span className="text-[#6B635B]">දායකත්ව ආකාරය:</span>
                    <span className={`font-extrabold px-2 py-0.5 rounded-full text-[10px] ${
                      contributionType === 'preparation'
                        ? 'bg-emerald-100 text-emerald-800'
                        : contributionType === 'financial'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                    }`}>
                      {getContributionTypeSinhala(contributionType)}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#6B635B]">සහභාගී වන පිරිස:</span>
                    <span className="font-bold">{familyCount} දෙනෙක්</span>
                  </div>
                </div>

                {/* 📱 Devotee Notification & Coordination Preview */}
                <div className="max-w-md mx-auto p-3.5 rounded-2xl bg-gradient-to-r from-[#FFF1D5]/70 to-[#F8F2E7] border border-[#C58D36]/50 text-left space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#842A35]">
                    <Send className="w-3.5 h-3.5 text-[#C58D36]" />
                    <span>ස්වයංක්‍රීය දැනුවත් කිරීමේ පද්ධතිය (SMS & WhatsApp):</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#6B635B]">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#587A4D] shrink-0 mt-0.5" />
                      <span><strong>ඔබ වෙත SMS තහවුරු කිරීම:</strong> ඉල්ලීම ලැබුණු වහාම විහාරස්ථ කාර්යාලයෙන් ඔබගේ දුරකථනයට තහවුරු කිරීමේ SMS පණිවිඩයක් ලැබේ.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#587A4D] shrink-0 mt-0.5" />
                      <span><strong>අනෙක් දායකයන් සමඟ සම්බන්ධීකරණය:</strong> මෙම දිනයේ ආහාර සම්පාදනය හෝ බරපැන දරන අනෙක් දායකයන් සහ විහාර කමිටුව අතර තොරතුරු සම්බන්ධීකරණය කරනු ඇත.</span>
                    </li>
                  </ul>
                </div>

                {/* OTP Boxes Mockup */}
                <div className="max-w-xs mx-auto pt-1">
                  <span className="text-[11px] font-semibold text-[#6B635B] block mb-1.5">
                    දුරකථන අංකය තහවුරු කිරීමේ කේතය (OTP):
                  </span>
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                    {otp.map((digit, idx) => (
                      <div 
                        key={idx}
                        className="w-8 h-10 sm:w-10 sm:h-12 rounded-xl border-2 border-[#C58D36] bg-[#FFFDF8] text-base sm:text-lg font-extrabold text-[#842A35] flex items-center justify-center shadow-2xs"
                      >
                        {digit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-3">
                  <button
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-full border border-[#C58D36] text-xs font-semibold text-[#842A35] hover:bg-[#F8F2E7]"
                  >
                    වෙනස් කරන්න
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md active:scale-95 transition-all"
                  >
                    ඉල්ලීම ස්ථිර කරන්න &gt;
                  </button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="text-center py-6 space-y-3">
                <CalendarIcon className="w-10 h-10 text-[#C58D36] mx-auto" />
                <h3 className="text-base sm:text-lg font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  දිනය සහ දාන වර්ගය තෝරාගෙන ඇත
                </h3>
                <p className="text-xs text-[#6B635B]">
                  තෝරාගත් දිනය: <strong className="text-[#842A35]">{bookingDate}</strong> | වර්ගය: <strong>{danaType}</strong>
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-2.5">
                  <button
                    onClick={() => onNavigate('calendar')}
                    className="px-4 py-2 rounded-full border border-[#C58D36] text-xs font-semibold text-[#842A35]"
                  >
                    දින දර්ශනයට යන්න
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className="px-5 py-2 rounded-full bg-[#842A35] text-white text-xs font-semibold"
                  >
                    විස්තර ඇතුළත් කිරීමට යන්න &gt;
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sidebar Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            
            {/* Card 1: Booking Summary */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-[0_4px_20px_rgba(132,42,53,0.05)] space-y-3">
              <div className="flex items-center justify-between border-b border-[#E9DDCC] pb-2">
                <div className="flex items-center gap-2">
                  <AlmsBowlIcon className="w-4 h-4 text-[#C58D36]" />
                  <h3 className="text-xs sm:text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                    දානය වෙන්කරවා ගැනීමේ සාරාංශය
                  </h3>
                </div>
                <LotusIcon className="w-3.5 h-3.5 text-[#C58D36]" />
              </div>

              {/* Photo */}
              <div className="h-28 rounded-xl overflow-hidden border border-[#E9DDCC]">
                <img 
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80" 
                  alt="Temple Stupa" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="space-y-1.5 text-xs text-[#302D2B]">
                <div className="flex items-center justify-between py-1.5 border-b border-[#E9DDCC]/50">
                  <span className="text-[#6B635B] flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#C58D36]" />
                    <span>දානයේ දිනය :</span>
                  </span>
                  <span className="font-bold text-[#842A35]">{bookingDate}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-[#E9DDCC]/50">
                  <span className="text-[#6B635B] flex items-center gap-1.5">
                    <AlmsBowlIcon className="w-3.5 h-3.5 text-[#C58D36]" />
                    <span>දානය වර්ගය :</span>
                  </span>
                  <span className="font-semibold">{danaType}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-[#E9DDCC]/50">
                  <span className="text-[#6B635B] flex items-center gap-1.5">
                    <Coins className="w-3.5 h-3.5 text-[#C58D36]" />
                    <span>දායකත්ව ස්වරූපය :</span>
                  </span>
                  <span className="font-bold text-[#842A35]">
                    {contributionType === 'preparation' ? '🍲 ආහාර සම්පාදනය' : contributionType === 'financial' ? '💰 බරපැන දැරීම' : '🌟 සම්පූර්ණ දානය'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-[#E9DDCC]/50">
                  <span className="text-[#6B635B] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C58D36]" />
                    <span>දානයේ වේලාව :</span>
                  </span>
                  <span className="font-semibold">
                    {danaType.includes('හීල්') ? 'පෙ.ව. 06.30' : 'පෙ.ව. 11.00'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-[#E9DDCC]/50">
                  <span className="text-[#6B635B] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C58D36]" />
                    <span>සහභාගී පිරිස :</span>
                  </span>
                  <span className="font-bold text-[#587A4D]">{familyCount} දෙනෙක්</span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-[#6B635B] flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-[#C58D36]" />
                    <span>විහාරස්ථාන ඇමතුම් :</span>
                  </span>
                  <span className="font-medium text-[#842A35]">{TEMPLE_INFO.phone}</span>
                </div>
              </div>
            </div>

            {/* Card 2: Security & Assistance */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-xs space-y-2.5">
              <div className="flex items-center gap-2 border-b border-[#E9DDCC] pb-2">
                <ShieldCheck className="w-4 h-4 text-[#587A4D]" />
                <h3 className="text-xs sm:text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  විහාරස්ථාන ආරක්ෂණ සහතිකය
                </h3>
              </div>
              <p className="text-[11px] text-[#6B635B] leading-relaxed">
                ඔබ ඇතුළත් කරන සියලුම පෞද්ගලික තොරතුරු විහාරස්ථානයේ දාන සම්බන්ධීකරණ කටයුතු සඳහා පමණක් ආරක්ෂිතව භාවිත කරනු ලැබේ.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
