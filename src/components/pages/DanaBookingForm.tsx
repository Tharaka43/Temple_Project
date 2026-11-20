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
  Users
} from 'lucide-react';
import type { BookingRecord, ScreenType } from '../../types';

interface DanaBookingFormProps {
  onNavigate: (screen: ScreenType) => void;
  onBookingSubmitted?: (booking: BookingRecord) => void;
  initialDate?: string;
  initialDanaType?: string;
}

export const DanaBookingForm: React.FC<DanaBookingFormProps> = ({ 
  onNavigate, 
  onBookingSubmitted,
  initialDate = '2025 දෙසැම්බර් 23 (අඟහරුවාදා)',
  initialDanaType = 'බත් දානය'
}) => {
  const [step, setStep] = useState<number>(2);
  const [fullName, setFullName] = useState('කසුන් මධුසේන විජේසිංහ');
  const [phone, setPhone] = useState('77 223 4567');
  const [email, setEmail] = useState('kasun.vijesinghe@gmail.com');
  const [address, setAddress] = useState('අංක 128/4, විහාර මාවත, ගම්පහ.');
  const [danaType, setDanaType] = useState(initialDanaType);
  const [bookingDate, setBookingDate] = useState(initialDate);
  const [familyCount, setFamilyCount] = useState<number>(12);
  const [foodArrangement, setFoodArrangement] = useState<'temple' | 'devotee'>('temple');
  const [specialNote, setSpecialNote] = useState(
    'අපගේ පවුලේ උපන්දිනය නිමිත්තෙන් දානයක් පිරිනැමීමට බලාපොරොත්තු වෙමි. කලවා වේලාපත් පිළිබඳව කරුණාකර සලසා බලන්න.'
  );
  const [agreeTerms, setAgreeTerms] = useState(true);

  // OTP State
  const otp = ['4', '7', '3', '9', '1', '6'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      const newBooking: BookingRecord = {
        id: `b-${Date.now()}`,
        refNumber: String(Math.floor(100 + Math.random() * 900)),
        devoteeName: fullName,
        phone: `+94 ${phone}`,
        email,
        address,
        danaType,
        category: 'heel',
        date: bookingDate,
        time: 'පෙ.ව. 10.30',
        familyMembers: familyCount,
        foodArrangement,
        specialNote,
        status: 'pending',
        createdAt: new Date().toISOString().split('T')[0],
      };

      if (onBookingSubmitted) {
        onBookingSubmitted(newBooking);
      }
      onNavigate('admin');
    }
  };

  return (
    <div className="bg-[#FFFDF8] min-h-screen relative overflow-x-hidden">
      
      {/* 🌿 Bo Leaves Branch on Top Left */}
      <BoLeavesTopLeft />

      {/* 1. Header Banner & Breadcrumbs */}
      <section className="bg-[#F8F2E7] border-b border-[#E9DDCC] pt-6 pb-5 sm:pt-8 sm:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-10 sm:pl-16">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-[#6B635B] mb-2 font-medium">
            <button onClick={() => onNavigate('home')} className="hover:text-[#842A35]">
              මුල් පිටුව
            </button>
            <ChevronRight className="w-3 h-3 text-[#C58D36]" />
            <button onClick={() => onNavigate('calendar')} className="hover:text-[#842A35]">
              දානය වෙන්කරවා ගැනීම
            </button>
            <ChevronRight className="w-3 h-3 text-[#C58D36]" />
            <span className="text-[#842A35] font-semibold">දානය වෙන්කරවා ගැනීම</span>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-[#FFFDF8] border border-[#E9DDCC] rounded-full shadow-2xs">
              <AlmsBowlIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#C58D36]" />
            </div>
            <h1 className="text-xl sm:text-3xl font-extrabold font-['Abhaya_Libre',serif] text-[#842A35]">
              දානය වෙන්කරවා ගැනීම
            </h1>
          </div>

        </div>
      </section>

      {/* 2. 3-Step Wizard Navigation */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-5 pb-2">
        <div className="text-center mb-2 sm:mb-3">
          <span className="text-xs sm:text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
            දානය වෙන්කරවා ගැනීමේ පියවර (3 පියවර)
          </span>
        </div>

        <div className="grid grid-cols-3 gap-1.5 sm:gap-3 max-w-3xl mx-auto">
          
          {/* Step 1 */}
          <button
            onClick={() => setStep(1)}
            className={`flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-semibold transition-all border ${
              step === 1
                ? 'bg-[#842A35] text-white border-[#842A35]'
                : 'bg-[#FFFDF8] text-[#587A4D] border-[#587A4D]/40 shadow-2xs'
            }`}
          >
            <CalendarIcon className="w-3.5 h-3.5 text-[#C58D36] shrink-0" />
            <span className="hidden sm:inline">1. දිනය හා දානයේ වර්ගය</span>
            <span className="sm:hidden">1. දිනය</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#587A4D] shrink-0" />
          </button>

          {/* Step 2 */}
          <button
            onClick={() => setStep(2)}
            className={`flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-semibold transition-all border shadow-xs ${
              step === 2
                ? 'bg-[#842A35] text-white border-[#842A35]'
                : 'bg-[#FFFDF8] text-[#302D2B] border-[#E9DDCC]'
            }`}
          >
            <User className="w-3.5 h-3.5 text-amber-200 shrink-0" />
            <span className="hidden sm:inline">2. දායකගේ විස්තර</span>
            <span className="sm:hidden">2. විස්තර</span>
          </button>

          {/* Step 3 */}
          <button
            onClick={() => setStep(3)}
            className={`flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-semibold transition-all border ${
              step === 3
                ? 'bg-[#842A35] text-white border-[#842A35]'
                : 'bg-[#FFFDF8] text-[#6B635B] border-[#E9DDCC]'
            }`}
          >
            <Check className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">3. තහවුරු කිරීම</span>
            <span className="sm:hidden">3. තහවුරු</span>
          </button>

        </div>
      </section>

      {/* 3. Form Body & Summary Sidebar */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* Left Column: Form Card (8 cols) */}
          <div className="lg:col-span-8 bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 sm:p-7 shadow-xs">
            
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Form Title */}
                <div className="border-b border-[#E9DDCC] pb-3 flex items-center justify-between">
                  <div>
                    <h2 className="text-base sm:text-xl font-bold font-['Abhaya_Libre',serif] text-[#842A35] flex items-center gap-1.5 sm:gap-2">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#C58D36]" />
                      <span>දායකගේ විස්තර ඇතුළත් කරන්න</span>
                    </h2>
                    <p className="text-[11px] sm:text-xs text-[#6B635B] mt-0.5">
                      කරුණාකර දාන වෙන්කරවා ගැනීම සඳහා ඔබගේ විස්තර පහතින් සම්පූර්ණ කරන්න.
                    </p>
                  </div>
                  <LotusIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C58D36]" />
                </div>

                {/* Form Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      සම්පූර්ණ නම <span className="text-[#842A35]">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder="ඔබගේ නම මෙහි සටහන් කරන්න"
                      className="w-full px-3 py-2 rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] text-xs sm:text-sm text-[#302D2B] focus:outline-none focus:border-[#C58D36]"
                    />
                  </div>

                  {/* Phone with Country Code */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      ජංගම දුරකථන අංකය <span className="text-[#842A35]">*</span>
                    </label>
                    <div className="flex items-center rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] overflow-hidden focus-within:border-[#C58D36]">
                      <div className="flex items-center gap-1.5 px-2.5 py-2 bg-[#F8F2E7] border-r border-[#E9DDCC] text-xs font-semibold shrink-0">
                        <SriLankaFlag className="w-4 h-3" />
                        <span>+94</span>
                      </div>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full px-2.5 py-2 bg-transparent text-xs sm:text-sm text-[#302D2B] focus:outline-none"
                      />
                      <span className="pr-2.5 text-[#587A4D] shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      ඊමේල් ලිපිනය (විකල්ප)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3 py-2 rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] text-xs sm:text-sm text-[#302D2B] focus:outline-none focus:border-[#C58D36]"
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      ලිපිනය <span className="text-[#842A35]">*</span>
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      placeholder="නිවසේ ලිපිනය"
                      className="w-full px-3 py-2 rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] text-xs sm:text-sm text-[#302D2B] focus:outline-none focus:border-[#C58D36]"
                    />
                  </div>

                  {/* Dana Type Selection */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      දානය වර්ගය <span className="text-[#842A35]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={danaType}
                        onChange={(e) => setDanaType(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] text-xs sm:text-sm text-[#302D2B] appearance-none focus:outline-none focus:border-[#C58D36]"
                      >
                        <option value="බත් දානය">බත් දානය</option>
                        <option value="හීල් දානය">හීල් දානය</option>
                        <option value="දවල් දානය">දවල් දානය</option>
                        <option value="සංඝික දානය">සංඝික දානය</option>
                        <option value="ගිලන්පස">ගිලන්පස</option>
                      </select>
                      <RicePlateIcon className="w-4 h-4 absolute right-3 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Booking Date */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      වෙන්කරගත් දිනය <span className="text-[#842A35]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        required
                        className="w-full px-3 py-2 rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] text-xs sm:text-sm text-[#302D2B] focus:outline-none focus:border-[#C58D36]"
                      />
                      <CalendarIcon className="w-4 h-4 text-[#C58D36] absolute right-3 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Family Members Stepper */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      පවුලේ සාමාජික සංඛ්‍යාව <span className="text-[#842A35]">*</span>
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] px-2 py-0.5">
                        <button
                          type="button"
                          onClick={() => setFamilyCount(Math.max(1, familyCount - 1))}
                          className="w-8 h-8 rounded-lg bg-[#F8F2E7] hover:bg-[#E9DDCC] text-[#842A35] font-bold text-base flex items-center justify-center transition-colors"
                        >
                          -
                        </button>
                        <span className="w-10 text-center font-bold text-[#842A35] text-sm">
                          {familyCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => setFamilyCount(familyCount + 1)}
                          className="w-8 h-8 rounded-lg bg-[#F8F2E7] hover:bg-[#E9DDCC] text-[#842A35] font-bold text-base flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-xs text-[#6B635B]">දෙනෙක් සහභාගී වේ</span>
                    </div>
                  </div>

                  {/* Food Arrangement */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      ආහාර සැකසීමේ ක්‍රමය <span className="text-[#842A35]">*</span>
                    </label>
                    <div className="space-y-1.5 pt-0.5 text-xs">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="foodArrangement"
                          checked={foodArrangement === 'temple'}
                          onChange={() => setFoodArrangement('temple')}
                          className="text-[#842A35] focus:ring-[#842A35]"
                        />
                        <span>විහාරස්ථානය මඟින් සකස් කරමි</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="foodArrangement"
                          checked={foodArrangement === 'devotee'}
                          onChange={() => setFoodArrangement('devotee')}
                          className="text-[#842A35] focus:ring-[#842A35]"
                        />
                        <span>දායකයා විසින් ආහාර සපයමි</span>
                      </label>
                    </div>
                  </div>

                </div>

                {/* Special Note */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-[#302D2B]">
                      විශේෂ සටහන (විකල්ප)
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
                    className="w-full px-3 py-2 rounded-xl border border-[#E9DDCC] bg-[#FFFDF8] text-xs sm:text-sm text-[#302D2B] focus:outline-none focus:border-[#C58D36]"
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                    className="mt-0.5 rounded text-[#842A35] focus:ring-[#842A35]"
                  />
                  <label htmlFor="terms" className="text-xs text-[#302D2B] leading-relaxed cursor-pointer">
                    විහාරස්ථාන මාර්ගෝපදේශ සහ දාන සේවා සම්බන්ධ නියමයන් පිළිගනිමින් එකඟ වෙමි. <span className="text-[#842A35]">*</span>
                    <a href="#guidelines" className="text-[#842A35] font-semibold underline ml-1.5 inline-flex items-center gap-0.5">
                      <span>මාර්ගෝපදේශ බලන්න</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </label>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E9DDCC]">
                  <button
                    type="button"
                    onClick={() => onNavigate('calendar')}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-[#C58D36] text-xs font-semibold text-[#842A35] hover:bg-[#F8F2E7] transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>පෙර පියවරට</span>
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white font-semibold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <span>ඊළඟ පියවර</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            )}

            {step === 3 && (
              <div className="space-y-4 text-center py-5">
                <div className="w-12 h-12 bg-[#EDF7E7] text-[#587A4D] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  දාන වෙන්කිරීම තහවුරු කරන්න
                </h2>
                <p className="text-xs text-[#6B635B] max-w-md mx-auto">
                  ඔබ විසින් ඇතුළත් කළ තොරතුරු පරීක්ෂා කර අවසන් ඉල්ලීම විහාරස්ථානය වෙත යොමු කරන්න.
                </p>

                <div className="bg-[#F8F2E7] border border-[#E9DDCC] rounded-xl p-3.5 text-left max-w-md mx-auto space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#E9DDCC]">
                    <span className="text-[#6B635B]">දායකගේ නම:</span>
                    <span className="font-bold">{fullName}</span>
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
                  <div className="flex justify-between py-1">
                    <span className="text-[#6B635B]">පවුලේ පිරිස:</span>
                    <span className="font-bold">{familyCount} දෙනෙක්</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => setStep(2)}
                    className="px-4 py-2 rounded-full border border-[#C58D36] text-xs font-semibold text-[#842A35]"
                  >
                    වෙනස් කරන්න
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white font-semibold text-xs sm:text-sm shadow-xs"
                  >
                    ඉල්ලීම යොමු කරන්න &gt;
                  </button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="text-center py-6 space-y-3">
                <CalendarIcon className="w-9 h-9 text-[#C58D36] mx-auto" />
                <h3 className="text-base sm:text-lg font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  දිනය සහ දාන වර්ගය තෝරාගෙන ඇත
                </h3>
                <p className="text-xs text-[#6B635B]">
                  තෝරාගත් දිනය: <strong className="text-[#842A35]">{bookingDate}</strong> | වර්ගය: <strong>{danaType}</strong>
                </p>
                <div className="pt-2 flex justify-center gap-2.5">
                  <button
                    onClick={() => onNavigate('calendar')}
                    className="px-3.5 py-1.5 rounded-full border border-[#C58D36] text-xs font-semibold"
                  >
                    දින දර්ශනයට යන්න
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className="px-4 py-1.5 rounded-full bg-[#842A35] text-white text-xs font-semibold"
                  >
                    විස්තර ඇතුළත් කිරීමට යන්න &gt;
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            
            {/* Card 1: Booking Summary */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-xs space-y-2.5">
              <div className="flex items-center gap-2 border-b border-[#E9DDCC] pb-2">
                <AlmsBowlIcon className="w-4 h-4 text-[#C58D36]" />
                <h3 className="text-xs sm:text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  දානය වෙන්කරවා ගැනීමේ සාරාංශය
                </h3>
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
                <div className="flex items-center justify-between py-1 border-b border-[#E9DDCC]/50">
                  <span className="text-[#6B635B] flex items-center gap-1">
                    <CalendarIcon className="w-3 h-3 text-[#C58D36]" />
                    <span>දානයේ දිනය :</span>
                  </span>
                  <span className="font-bold text-[#842A35]">{bookingDate}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-[#E9DDCC]/50">
                  <span className="text-[#6B635B] flex items-center gap-1">
                    <AlmsBowlIcon className="w-3 h-3 text-[#C58D36]" />
                    <span>දානය වර්ගය :</span>
                  </span>
                  <span className="font-semibold">{danaType}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-[#E9DDCC]/50">
                  <span className="text-[#6B635B] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C58D36]" />
                    <span>දානයේ වේලාව :</span>
                  </span>
                  <span className="font-semibold">පෙ.ව. 10.30 සිට</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-[#6B635B] flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#C58D36]" />
                    <span>පවුලේ සංඛ්‍යාව :</span>
                  </span>
                  <span className="font-semibold">{familyCount} දෙනෙක්</span>
                </div>
              </div>

              {/* Notice Box */}
              <div className="p-2.5 bg-[#F8F2E7] border border-[#E9DDCC] rounded-xl text-xs space-y-1">
                <div className="flex items-center gap-1 text-[#842A35] font-bold font-['Abhaya_Libre',serif]">
                  <LotusIcon className="w-3.5 h-3.5 text-[#C58D36]" />
                  <span>විහාරස්ථානය සටහන :</span>
                </div>
                <p className="text-[#6B635B] text-[11px] leading-relaxed">
                  දානය පෙ.ව. 10.30 සිට ආරම්භ වේ. කරුණාකර අවම වශයෙන් මිනිත්තු 30කට පෙර විහාරස්ථානයට පැමිණෙන්න.
                </p>
              </div>
            </div>

            {/* Card 2: Phone OTP Verification */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-xs space-y-2.5">
              <div className="flex items-center gap-2 border-b border-[#E9DDCC] pb-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#842A35]" />
                <h3 className="text-xs sm:text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  දුරකථන අංකය සත්‍යාපනය (OTP)
                </h3>
              </div>

              <p className="text-[11px] text-[#6B635B]">
                ඔබගේ දුරකථන අංකයට යවන ලද සත්‍යාපන කේතය ඇතුළත් කරන්න.
              </p>

              {/* 6 OTP Boxes */}
              <div className="flex items-center justify-between gap-1">
                {otp.map((digit, i) => (
                  <div
                    key={i}
                    className="w-8 h-10 rounded-lg border border-[#C58D36] bg-[#FFFDF8] font-bold text-sm flex items-center justify-center text-[#842A35]"
                  >
                    {digit}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#587A4D]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>සත්‍යාපිතයි</span>
                </div>
                <button className="text-[11px] text-[#842A35] hover:underline">
                  නැවත යවන්න (00:58)
                </button>
              </div>
            </div>

            {/* Card 3: Guidelines */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-xs space-y-2">
              <div className="flex items-center gap-1.5 border-b border-[#E9DDCC] pb-2">
                <Check className="w-3.5 h-3.5 text-[#587A4D]" />
                <h3 className="text-xs sm:text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  දානය වෙන්කරවා ගැනීමේ මාර්ගෝපදේශ
                </h3>
              </div>

              <ul className="space-y-1.5 text-[11px] sm:text-xs text-[#302D2B]">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3 h-3 text-[#587A4D] shrink-0 mt-0.5" />
                  <span>දානය අවම වශයෙන් දින 03කට පෙර වෙන්කරවා ගැනීම සුදුසුය.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3 h-3 text-[#587A4D] shrink-0 mt-0.5" />
                  <span>අවශ්‍ය සංඛ්‍යාව, දානය වර්ගය හා වේලාව නිවැරදිව සඳහන් කරන්න.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3 h-3 text-[#587A4D] shrink-0 mt-0.5" />
                  <span>විශේෂ අවශ්‍යතා කලින්ම දන්වන්න.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
