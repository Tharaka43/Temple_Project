import React, { useState } from 'react';
import { 
  StupaIcon, 
  LotusIcon, 
  AlmsBowlIcon, 
  DharmachakraIcon,
  RicePlateIcon
} from '../icons/BuddhistIcons';
import { BoLeavesTopLeft, PinkLotusBlossom, StupaAndTreeSketch } from '../common/TempleDecorations';
import { 
  Search, 
  Bell, 
  Calendar as CalendarIcon, 
  Check, 
  X, 
  Eye, 
  FileText, 
  Home, 
  Megaphone, 
  Users, 
  BarChart3, 
  Settings, 
  PlusCircle,
  Menu,
  CheckCircle2,
  CalendarCheck,
  Clock,
  Utensils,
  Coins,
  Sparkles,
  MessageSquare,
  Share2,
  Copy,
  Send
} from 'lucide-react';
import { INITIAL_ADMIN_BOOKINGS, TEMPLE_INFO } from '../../data/mockData';
import type { BookingRecord, ScreenType, ContributionType } from '../../types';

interface AdminDashboardProps {
  onNavigate: (screen: ScreenType) => void;
  bookingsList?: BookingRecord[];
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  onNavigate,
  bookingsList: initialList = INITIAL_ADMIN_BOOKINGS 
}) => {
  const [bookings, setBookings] = useState<BookingRecord[]>(initialList);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [danaTypeFilter, setDanaTypeFilter] = useState<string>('all');
  const [contributionFilter, setContributionFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [notificationModalBooking, setNotificationModalBooking] = useState<BookingRecord | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleApprove = (id: string, devoteeName: string) => {
    setBookings(prev => 
      prev.map(b => b.id === id ? { ...b, status: 'approved' } : b)
    );
    showToast(`${devoteeName} ගේ දාන ඉල්ලීම සාර්ථකව අනුමත කරන ලදී!`);
  };

  const handleReject = (id: string, devoteeName: string) => {
    setBookings(prev => 
      prev.map(b => b.id === id ? { ...b, status: 'cancelled' } : b)
    );
    showToast(`${devoteeName} ගේ දාන ඉල්ලීම ප්‍රතික්ෂේප / අවලංගු කරන ලදී.`);
  };

  const getContributionLabel = (type: ContributionType) => {
    switch (type) {
      case 'preparation': return { text: 'ආහාර සම්පාදනය', icon: Utensils, bg: 'bg-[#EDF7E7]', textCol: 'text-[#587A4D]', border: 'border-[#587A4D]/30' };
      case 'financial': return { text: 'බරපැන දැරීම', icon: Coins, bg: 'bg-[#FFF1D5]', textCol: 'text-[#C58D36]', border: 'border-[#C58D36]/40' };
      case 'full': return { text: 'සම්පූර්ණ දානය', icon: Sparkles, bg: 'bg-[#FCE9E8]', textCol: 'text-[#842A35]', border: 'border-[#842A35]/30' };
      default: return { text: 'ආහාර සම්පාදනය', icon: Utensils, bg: 'bg-[#EDF7E7]', textCol: 'text-[#587A4D]', border: 'border-[#587A4D]/30' };
    }
  };

  const generateNotificationMessage = (booking: BookingRecord) => {
    const roleText = booking.contributionType === 'preparation' 
      ? 'ආහාර සම්පාදනය (පිස රැගෙන ඒම)' 
      : booking.contributionType === 'financial' 
        ? 'බරපැන දැරීම (මූල්‍ය/වියදම්)' 
        : 'සම්පූර්ණ දානය';

    return `නමෝ බුද්ධාය! ශ්‍රී සුදර්ශන ධර්ම නිකේතනය - හෙට්ටියාදෙණිය, ගම්පහ.\nපින්වත් ${booking.devoteeName}, ${booking.date} දින ${booking.danaType} (${booking.time}) සඳහා ඔබගේ '${roleText}' සාර්ථකව ලියාපදිංචි වී ඇත. (කොටස් ${booking.slotNumber || 1}/${booking.maxSlots || 4}).\nඅනෙක් දායකයන් සහ විහාර කමිටුව සමඟ සම්බන්ධීකරණය සඳහා අමතන්න: ${TEMPLE_INFO.phone}.\nතෙරුවන් සරණයි!`;
  };

  const filteredBookings = bookings.filter(b => {
    const matchStatus = statusFilter === 'all' || b.status === statusFilter;
    const matchType = danaTypeFilter === 'all' || b.danaType.includes(danaTypeFilter);
    const matchContribution = contributionFilter === 'all' || b.contributionType === contributionFilter;
    const matchSearch = searchQuery === '' || 
      b.devoteeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.danaType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchStatus && matchType && matchContribution && matchSearch;
  });

  return (
    <div className="bg-[#FFFDF8] min-h-screen flex flex-col font-['Noto_Sans_Sinhala',sans-serif] relative overflow-x-hidden">
      
      {/* 🌿 Bo Leaves Branch on Top Left */}
      <BoLeavesTopLeft />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 right-4 left-4 sm:left-auto sm:top-6 sm:right-6 z-50 bg-[#842A35] text-white px-4 py-3 rounded-xl shadow-lg border border-[#C58D36] flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-amber-200 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* 📱 Modal: Devotee Notification & Coordinator Message Preview */}
      {notificationModalBooking && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-[#FFFDF8] border-2 border-[#C58D36] rounded-2xl max-w-lg w-full p-4 sm:p-6 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-[#E9DDCC] pb-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#C58D36]" />
                <h3 className="text-base sm:text-lg font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                  දායකයන් දැනුවත් කිරීමේ පණිවිඩය (SMS / WhatsApp)
                </h3>
              </div>
              <button 
                onClick={() => setNotificationModalBooking(null)}
                className="p-1 text-[#6B635B] hover:text-[#842A35] rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-[#6B635B] block font-semibold">
                දායකයා: <strong className="text-[#302D2B]">{notificationModalBooking.devoteeName}</strong> ({notificationModalBooking.phone})
              </span>

              {/* Message Box */}
              <div className="p-3.5 rounded-xl bg-[#F8F2E7] border border-[#E9DDCC] text-xs sm:text-[13px] text-[#302D2B] leading-relaxed whitespace-pre-wrap font-sans">
                {generateNotificationMessage(notificationModalBooking)}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#E9DDCC]">
              <span className="text-[11px] text-[#587A4D] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>ස්වයංක්‍රීයව සකස් කරන ලද නිල පණිවිඩය</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generateNotificationMessage(notificationModalBooking));
                    showToast('පණිවිඩය පිටපත් කරගන්නා ලදී!');
                  }}
                  className="px-3.5 py-2 rounded-xl border border-[#C58D36] text-xs font-bold text-[#842A35] hover:bg-[#F8F2E7] flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>පිටපත් කරන්න</span>
                </button>

                <button
                  onClick={() => {
                    const text = encodeURIComponent(generateNotificationMessage(notificationModalBooking));
                    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>WhatsApp යවන්න</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#FFFDF8]/95 backdrop-blur-md border-b border-[#E9DDCC] shadow-2xs">
        <div className="h-0.5 w-full bg-gradient-to-r from-[#E9DDCC] via-[#C58D36] to-[#E9DDCC] opacity-70"></div>
        <div className="max-w-[1600px] mx-auto px-3 sm:px-6 flex items-center justify-between h-15 sm:h-16">
          
          {/* Left Title & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 text-[#842A35] bg-[#F8F2E7] border border-[#E9DDCC] hover:border-[#C58D36] rounded-xl"
              aria-label="පාලන මෙනුව"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <LotusIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C58D36] shrink-0" />
              <span className="text-lg sm:text-xl font-bold font-['Abhaya_Libre',serif] text-[#842A35] whitespace-nowrap">
                පාලන පුවරුව
              </span>
            </div>
          </div>

          {/* Center Search Input */}
          <div className="hidden md:flex items-center max-w-md w-full mx-6">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-[#C58D36] absolute left-3.5 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="දායකයාගේ නම, දාන වර්ගය සොයන්න..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#F8F2E7] border border-[#E9DDCC] rounded-full focus:outline-none focus:border-[#C58D36] focus:bg-[#FFFDF8]"
              />
            </div>
          </div>

          {/* Right Admin Profile & Actions */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            
            {/* Notification Bell */}
            <div className="relative cursor-pointer p-1.5 rounded-full bg-[#F8F2E7]/70 hover:bg-[#F8F2E7] border border-[#E9DDCC] transition-colors">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#C58D36]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#842A35] text-white text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </div>

            {/* Admin User Profile */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-[#F8F2E7] border border-[#E9DDCC]">
              <div className="w-6 h-6 rounded-full bg-[#C58D36] text-white font-bold text-xs flex items-center justify-center shrink-0">
                නා
              </div>
              <div className="hidden sm:block text-left">
                <span className="text-xs font-bold text-[#842A35] block leading-tight">විහාරාධිපති හිමි</span>
                <span className="text-[9px] text-[#6B635B] block">{TEMPLE_INFO.name}</span>
              </div>
            </div>

            {/* Public Site Button */}
            <button
              onClick={() => onNavigate('home')}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full border border-[#C58D36] text-[#842A35] hover:bg-[#F8F2E7] transition-all"
            >
              <Home className="w-3.5 h-3.5" />
              <span>වෙබ් අඩවියට</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container: Sidebar + Content */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto relative">
        
        {/* Mobile Sidebar Backdrop */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-black/40 lg:hidden backdrop-blur-2xs"
          />
        )}

        {/* Left Sidebar Navigation */}
        <aside className={`
          fixed lg:static top-0 bottom-0 left-0 z-40
          w-64 bg-[#FFFDF8] border-r border-[#E9DDCC]
          p-4 flex flex-col justify-between shrink-0
          transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="space-y-4">
            
            {/* Temple Crest */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E9DDCC]">
              <div 
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <div className="p-1 bg-[#F8F2E7] border border-[#C58D36]/40 rounded-full">
                  <StupaIcon className="w-8 h-8 text-[#C58D36]" />
                </div>
                <div>
                  <h2 className="text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35] leading-tight">
                    {TEMPLE_INFO.name}
                  </h2>
                  <p className="text-[10px] text-[#C58D36] font-medium">{TEMPLE_INFO.subtitle}</p>
                </div>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1.5 text-[#6B635B] hover:text-[#842A35] rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-1 text-xs font-semibold">
              <button
                onClick={() => setActiveMenu('dashboard')}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all ${
                  activeMenu === 'dashboard'
                    ? 'bg-[#842A35] text-white shadow-xs'
                    : 'text-[#302D2B] hover:bg-[#F8F2E7]'
                }`}
              >
                <BarChart3 className="w-4 h-4 text-[#C58D36]" />
                <span>ප්‍රධාන පුවරුව (Overview)</span>
              </button>

              <button
                onClick={() => { setActiveMenu('bookings'); onNavigate('calendar'); }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                  activeMenu === 'bookings'
                    ? 'bg-[#842A35] text-white shadow-xs'
                    : 'text-[#302D2B] hover:bg-[#F8F2E7]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <AlmsBowlIcon className="w-4 h-4 text-[#C58D36]" />
                  <span>දාන වෙන්කිරීම් කළමනාකරණය</span>
                </div>
                <span className="px-1.5 py-0.2 rounded-full bg-[#FFF1D5] text-[#842A35] text-[10px] font-bold">
                  {bookings.length}
                </span>
              </button>

              <button
                onClick={() => onNavigate('booking')}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] transition-all"
              >
                <PlusCircle className="w-4 h-4 text-[#C58D36]" />
                <span>නව දානයක් ලියාපදිංචි කිරීම</span>
              </button>

              <button
                onClick={() => setActiveMenu('events')}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all ${
                  activeMenu === 'events'
                    ? 'bg-[#842A35] text-white'
                    : 'text-[#302D2B] hover:bg-[#F8F2E7]'
                }`}
              >
                <CalendarIcon className="w-4 h-4 text-[#C58D36]" />
                <span>ආගමික වැඩසටහන්</span>
              </button>

              <button
                onClick={() => setActiveMenu('devotees')}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all ${
                  activeMenu === 'devotees'
                    ? 'bg-[#842A35] text-white'
                    : 'text-[#302D2B] hover:bg-[#F8F2E7]'
                }`}
              >
                <Users className="w-4 h-4 text-[#C58D36]" />
                <span>දායක සභා ලේඛනය</span>
              </button>
            </nav>

          </div>

          {/* Quick Help Card */}
          <div className="pt-4 border-t border-[#E9DDCC]">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#FFF1D5]/60 to-[#F8F2E7] border border-[#C58D36]/40 text-center space-y-1.5">
              <span className="text-[11px] font-bold text-[#842A35] block">කාර්යාලීය සහය</span>
              <p className="text-[10px] text-[#6B635B] leading-tight">
                තාක්ෂණික ගැටලු සඳහා විහාර කාර්යාලය අමතන්න.
              </p>
              <span className="text-[11px] font-extrabold text-[#842A35] block">{TEMPLE_INFO.phone}</span>
            </div>
          </div>
        </aside>

        {/* Right Main Body Content */}
        <main className="flex-1 p-3.5 sm:p-6 lg:p-7 space-y-5 sm:space-y-6 min-w-0">
          
          {/* 1. Welcome Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E9DDCC] bg-[#F8F2E7] shadow-xs">
            <div className="absolute inset-0 z-0 opacity-15">
              <img 
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1500&q=80" 
                alt="Temple Panorama" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F8F2E7] via-[#F8F2E7]/85 to-transparent"></div>
            </div>

            <div className="relative z-10 p-4 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-extrabold font-['Abhaya_Libre',serif] text-[#842A35] leading-snug">
                {TEMPLE_INFO.name} පරිපාලන පද්ධතියට සාදරයෙන් පිළිගනිමු
              </h2>
              <div className="flex items-start sm:items-center gap-2 mt-1.5">
                <LotusIcon className="w-4 h-4 text-[#C58D36] shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-xs text-[#6B635B] leading-relaxed">
                  ආහාර සම්පාදනය, බරපැන දැරීම, දායකත්ව සම්බන්ධීකරණය හා විහාර කාර්යයන් කාර්යක්ෂමව කළමනාකරණය කරන්න.
                </p>
              </div>
            </div>
          </div>

          {/* 2. 4 Metric Cards (2x2 Grid on Mobile, 4 Cols on Desktop) */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-2.5 sm:gap-3.5">
            
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFFDF8] border border-[#E9DDCC] shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-[10px] sm:text-xs text-[#6B635B] font-semibold block">මුළු දාන වෙන්කිරීම්</span>
                <span className="text-xl sm:text-2xl font-extrabold text-[#842A35]">142</span>
              </div>
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#F8F2E7] border border-[#C58D36]/40 flex items-center justify-center shrink-0">
                <AlmsBowlIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C58D36]" />
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFFDF8] border border-[#E9DDCC] shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-[10px] sm:text-xs text-[#6B635B] font-semibold block">ඉදිරි දාන (සතිය)</span>
                <span className="text-xl sm:text-2xl font-extrabold text-[#587A4D]">28</span>
              </div>
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#EDF7E7] border border-[#587A4D]/30 flex items-center justify-center shrink-0">
                <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#587A4D]" />
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFFDF8] border border-[#E9DDCC] shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-[10px] sm:text-xs text-[#6B635B] font-semibold block">අනුමැතිය අපේක්ෂිත</span>
                <span className="text-xl sm:text-2xl font-extrabold text-[#C58D36]">
                  {bookings.filter(b => b.status === 'pending').length}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#FFF1D5] border border-[#C58D36]/50 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#842A35]" />
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFFDF8] border border-[#E9DDCC] shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-[10px] sm:text-xs text-[#6B635B] font-semibold block">අද දින දානය</span>
                <span className="text-xs sm:text-sm font-bold text-[#842A35]">හීල් & දවල් (සම්පූර්ණයි)</span>
              </div>
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#EDF7E7] border border-[#587A4D]/30 flex items-center justify-center shrink-0">
                <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#587A4D]" />
              </div>
            </div>

          </div>

          {/* 3. Middle Section: Table on Left & Right Widgets */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-5 items-start">
            
            {/* Latest Dana Booking Requests */}
            <div className="xl:col-span-8 bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-3.5 sm:p-5 shadow-xs space-y-3.5 sm:space-y-4">
              
              <div className="flex items-center justify-between border-b border-[#E9DDCC] pb-2.5 sm:pb-3">
                <div className="flex items-center gap-2">
                  <AlmsBowlIcon className="w-5 h-5 text-[#C58D36]" />
                  <h3 className="text-base sm:text-lg font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                    දාන වෙන්කිරීම් සහ සහභාගීත්ව ලේඛනය
                  </h3>
                </div>
                <button 
                  onClick={() => onNavigate('calendar')}
                  className="text-xs font-semibold text-[#842A35] hover:text-[#C58D36]"
                >
                  දින දර්ශනයට &gt;
                </button>
              </div>

              {/* Filters Bar (4 items) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                <div>
                  <label className="block text-[10px] font-semibold text-[#6B635B] mb-0.5">තත්වය:</label>
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full text-xs px-2.5 py-2 bg-[#F8F2E7] border border-[#E9DDCC] rounded-xl text-[#302D2B] focus:outline-none focus:border-[#C58D36]"
                  >
                    <option value="all">සියල්ල</option>
                    <option value="approved">අනුමත කර ඇත</option>
                    <option value="pending">අනුමැතිය බලාපොරොත්තු</option>
                    <option value="cancelled">අවලංගු කර ඇත</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-[#6B635B] mb-0.5">දායකත්ව ස්වරූපය:</label>
                  <select 
                    value={contributionFilter}
                    onChange={(e) => setContributionFilter(e.target.value)}
                    className="w-full text-xs px-2.5 py-2 bg-[#F8F2E7] border border-[#E9DDCC] rounded-xl text-[#302D2B] focus:outline-none focus:border-[#C58D36]"
                  >
                    <option value="all">සියලු ආකාර</option>
                    <option value="preparation">🍲 ආහාර සම්පාදනය</option>
                    <option value="financial">💰 බරපැන දැරීම</option>
                    <option value="full">🌟 සම්පූර්ණ දානය</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-[#6B635B] mb-0.5">දාන වර්ගය:</label>
                  <select 
                    value={danaTypeFilter}
                    onChange={(e) => setDanaTypeFilter(e.target.value)}
                    className="w-full text-xs px-2.5 py-2 bg-[#F8F2E7] border border-[#E9DDCC] rounded-xl text-[#302D2B] focus:outline-none focus:border-[#C58D36]"
                  >
                    <option value="all">සියල්ල</option>
                    <option value="හීල්">හීල් දානය</option>
                    <option value="දවල්">දවල් දානය</option>
                    <option value="සංඝික">සංඝික දානය</option>
                    <option value="ගිලන්පස">ගිලන්පස පූජාව</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-[#6B635B] mb-0.5">සොයන්න:</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="නම සොයන්න..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-xs pl-7 pr-2.5 py-2 bg-[#F8F2E7] border border-[#E9DDCC] rounded-xl text-[#302D2B] focus:outline-none focus:border-[#C58D36]"
                    />
                    <Search className="w-3.5 h-3.5 text-[#C58D36] absolute left-2 top-2.5" />
                  </div>
                </div>
              </div>

              {/* A. Mobile Booking Cards View (<md) */}
              <div className="md:hidden space-y-2.5">
                {filteredBookings.map((b) => {
                  const contribMeta = getContributionLabel(b.contributionType || 'preparation');
                  const ContribIcon = contribMeta.icon;

                  return (
                    <div 
                      key={b.id}
                      className="p-3 rounded-xl bg-[#F8F2E7]/45 border border-[#E9DDCC] space-y-2.5 shadow-2xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-bold text-[#C58D36] bg-[#FFF1D5] px-2 py-0.5 rounded-md border border-[#C58D36]/30">
                              #{b.refNumber}
                            </span>
                            <span className={`inline-flex items-center gap-1 text-[9.5px] font-bold px-2 py-0.5 rounded-full ${contribMeta.bg} ${contribMeta.textCol} border ${contribMeta.border}`}>
                              <ContribIcon className="w-3 h-3" />
                              <span>{contribMeta.text}</span>
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-[#302D2B] mt-1">{b.devoteeName}</h4>
                          <span className="text-[10px] text-[#6B635B] block">{b.phone}</span>
                        </div>

                        {/* Status Badge */}
                        <div>
                          {b.status === 'approved' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#EDF7E7] text-[#587A4D] border border-[#587A4D]/30">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                              <span>අනුමතයි</span>
                            </span>
                          )}
                          {b.status === 'pending' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#FFF1D5] text-[#C58D36] border border-[#C58D36]/40">
                              <span>බලාපොරොත්තු</span>
                            </span>
                          )}
                          {b.status === 'cancelled' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#FCE9E8] text-[#842A35] border border-[#842A35]/30">
                              <X className="w-2.5 h-2.5 stroke-[3]" />
                              <span>අවලංගුයි</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#6B635B] pt-1.5 border-t border-[#E9DDCC]/70">
                        <span className="inline-flex items-center gap-1 font-semibold text-[#842A35]">
                          <RicePlateIcon className="w-3.5 h-3.5 text-[#C58D36]" />
                          <span>{b.danaType}</span>
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <CalendarIcon className="w-3 h-3 text-[#C58D36]" />
                          <span>{b.date}</span>
                        </span>
                        <span className="text-[10px] font-bold text-[#6B635B]">
                          කොටස: {b.slotNumber || 1}/{b.maxSlots || 4}
                        </span>
                      </div>

                      {/* Notification Trigger Button */}
                      <div className="pt-1 flex items-center justify-between gap-2">
                        <button
                          onClick={() => setNotificationModalBooking(b)}
                          className="w-full py-1.5 px-2 rounded-xl bg-[#FFFDF8] border border-[#C58D36] text-[11px] font-bold text-[#842A35] hover:bg-[#F8F2E7] flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Send className="w-3 h-3 text-[#C58D36]" />
                          <span>දායකයා දැනුවත් කරන්න (SMS/WhatsApp)</span>
                        </button>
                      </div>

                      {b.status === 'pending' && (
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <button
                            onClick={() => handleApprove(b.id, b.devoteeName)}
                            className="py-2 rounded-xl bg-[#587A4D] text-white text-xs font-semibold flex items-center justify-center gap-1 shadow-2xs active:scale-98"
                          >
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                            <span>අනුමත කරන්න</span>
                          </button>
                          <button
                            onClick={() => handleReject(b.id, b.devoteeName)}
                            className="py-2 rounded-xl bg-[#842A35] text-white text-xs font-semibold flex items-center justify-center gap-1 shadow-2xs active:scale-98"
                          >
                            <X className="w-3.5 h-3.5 stroke-[2.5]" />
                            <span>ප්‍රතික්ෂේප කරන්න</span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* B. Desktop Data Table (md+) */}
              <div className="hidden md:block overflow-x-auto rounded-xl border border-[#E9DDCC]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F8F2E7] text-[#842A35] font-bold font-['Abhaya_Libre',serif] border-b border-[#E9DDCC]">
                    <tr>
                      <th className="py-2.5 px-3">#</th>
                      <th className="py-2.5 px-3">දායකයාගේ නම</th>
                      <th className="py-2.5 px-3">දායකත්ව ස්වරූපය</th>
                      <th className="py-2.5 px-3">දාන වර්ගය</th>
                      <th className="py-2.5 px-3">දිනය</th>
                      <th className="py-2.5 px-3">තත්වය</th>
                      <th className="py-2.5 px-3 text-center">ක්‍රියාමාර්ග</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E9DDCC]">
                    {filteredBookings.map((b) => {
                      const contribMeta = getContributionLabel(b.contributionType || 'preparation');
                      const ContribIcon = contribMeta.icon;

                      return (
                        <tr key={b.id} className="hover:bg-[#F8F2E7]/40 transition-colors">
                          <td className="py-2.5 px-3 font-semibold text-[#6B635B]">{b.refNumber}</td>
                          <td className="py-2.5 px-3 font-medium text-[#302D2B]">
                            <div className="font-bold">{b.devoteeName}</div>
                            <div className="text-[10px] text-[#6B635B]">{b.phone}</div>
                          </td>
                          <td className="py-2.5 px-3 whitespace-nowrap">
                            <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${contribMeta.bg} ${contribMeta.textCol} border ${contribMeta.border}`}>
                              <ContribIcon className="w-3 h-3" />
                              <span>{contribMeta.text}</span>
                            </span>
                            <span className="text-[9.5px] text-[#6B635B] block mt-0.5">
                              කොටස: {b.slotNumber || 1}/{b.maxSlots || 4}
                            </span>
                          </td>
                          <td className="py-2.5 px-3">
                            <span className="inline-flex items-center gap-1 font-semibold text-[#842A35]">
                              <RicePlateIcon className="w-3.5 h-3.5 text-[#C58D36]" />
                              <span>{b.danaType}</span>
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-[#302D2B] whitespace-nowrap">
                            <div>{b.date}</div>
                            <div className="text-[10px] text-[#6B635B]">{b.time}</div>
                          </td>
                          
                          {/* Status Badges */}
                          <td className="py-2.5 px-3 whitespace-nowrap">
                            {b.status === 'approved' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#EDF7E7] text-[#587A4D] border border-[#587A4D]/30">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                                <span>අනුමතයි</span>
                              </span>
                            )}
                            {b.status === 'pending' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FFF1D5] text-[#C58D36] border border-[#C58D36]/40">
                                <span>බලාපොරොත්තු</span>
                              </span>
                            )}
                            {b.status === 'cancelled' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FCE9E8] text-[#842A35] border border-[#842A35]/30">
                                <X className="w-2.5 h-2.5 stroke-[3]" />
                                <span>අවලංගුයි</span>
                              </span>
                            )}
                          </td>

                          {/* Action Buttons */}
                          <td className="py-2.5 px-3">
                            <div className="flex items-center justify-center gap-1.5">
                              <button 
                                onClick={() => setNotificationModalBooking(b)}
                                title="දායකයා දැනුවත් කිරීමේ පණිවිඩය (SMS/WhatsApp)"
                                className="px-2 py-1 rounded-md bg-[#F8F2E7] border border-[#C58D36] text-[#842A35] text-[10px] font-bold hover:bg-[#FFF1D5] flex items-center gap-1"
                              >
                                <Send className="w-3 h-3 text-[#C58D36]" />
                                <span>දැනුවත් කරන්න</span>
                              </button>

                              {b.status === 'pending' && (
                                <>
                                  <button
                                    onClick={() => handleApprove(b.id, b.devoteeName)}
                                    className="px-2 py-1 rounded-md bg-[#587A4D] text-white text-[10px] font-semibold hover:bg-[#43603A]"
                                  >
                                    අනුමත
                                  </button>
                                  <button
                                    onClick={() => handleReject(b.id, b.devoteeName)}
                                    className="px-2 py-1 rounded-md bg-[#842A35] text-white text-[10px] font-semibold hover:bg-[#6C1E27]"
                                  >
                                    ප්‍රතික්ෂේප
                                  </button>
                                </>
                              )}
                            </div>
                          </td>

                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

            </div>

            {/* Right Side Widgets (4 cols) */}
            <div className="xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
              
              {/* Widget 1: Multi-Devotee Coordination Protocol */}
              <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-2xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#E9DDCC] pb-2">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#C58D36]" />
                    <h4 className="text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                      සමූහ දාන සම්බන්ධීකරණය
                    </h4>
                  </div>
                  <span className="text-[10px] bg-[#EDF7E7] text-[#587A4D] font-bold px-2 py-0.5 rounded-full border border-[#587A4D]/30">
                    සක්‍රියයි
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-[#6B635B]">
                  <li className="flex items-start gap-2 p-2 rounded-xl bg-[#F8F2E7]/70 border border-[#E9DDCC]">
                    <Utensils className="w-4 h-4 text-[#587A4D] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#302D2B] block text-[11px]">ආහාර සම්පාදකයන්:</span>
                      <span className="text-[10.5px]">පිස රැගෙන එන ආහාර ප්‍රමාණය හා වේලාවන් විහාරයෙන් දැනුම් දේ.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2 p-2 rounded-xl bg-[#F8F2E7]/70 border border-[#E9DDCC]">
                    <Coins className="w-4 h-4 text-[#C58D36] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#302D2B] block text-[11px]">බරපැන දරන්නන්:</span>
                      <span className="text-[10.5px]">අවශ්‍ය අමතර ද්‍රව්‍ය, පලතුරු හෝ පිරිවැය භාරගැනීම.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Widget 2: Upcoming Events */}
              <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-2xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#E9DDCC] pb-2">
                  <div className="flex items-center gap-1.5">
                    <DharmachakraIcon className="w-4 h-4 text-[#C58D36]" />
                    <h4 className="text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                      ඉදිරි ආගමික වැඩසටහන්
                    </h4>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-[#F8F2E7] transition-colors">
                    <img 
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=150&q=80" 
                      alt="Poya Program" 
                      className="w-10 h-10 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <h5 className="text-xs font-bold text-[#842A35] truncate">මැදින් පෝය වැඩසටහන</h5>
                      <span className="text-[10px] text-[#6B635B] block">2025 පෙබ. 12 • ප.ව. 6.00</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-[#F8F2E7] transition-colors">
                    <img 
                      src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=150&q=80" 
                      alt="Dhamma Sermon" 
                      className="w-10 h-10 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <h5 className="text-xs font-bold text-[#842A35] truncate">විශේෂ බණ වැඩසටහන</h5>
                      <span className="text-[10px] text-[#6B635B] block">2025 පෙබ. 16 • ප.ව. 7.00</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </main>
      </div>

    </div>
  );
};
