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
  Clock
} from 'lucide-react';
import { INITIAL_ADMIN_BOOKINGS } from '../../data/mockData';
import type { BookingRecord, ScreenType } from '../../types';

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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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

  const filteredBookings = bookings.filter(b => {
    const matchStatus = statusFilter === 'all' || b.status === statusFilter;
    const matchType = danaTypeFilter === 'all' || b.danaType.includes(danaTypeFilter);
    const matchSearch = searchQuery === '' || 
      b.devoteeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.danaType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchStatus && matchType && matchSearch;
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
                placeholder="භක්තික, වෙන්කිරීම්, වැඩසටහන ... සොයන්න..."
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
                ප
              </div>
              <span className="hidden sm:inline text-xs font-semibold text-[#842A35] whitespace-nowrap">
                පරිපාලක (Admin)
              </span>
            </div>

            {/* View Website Button */}
            <button
              onClick={() => onNavigate('home')}
              className="px-2.5 sm:px-3 py-1.5 rounded-full border border-[#842A35] text-[11px] sm:text-xs font-semibold text-[#842A35] hover:bg-[#842A35] hover:text-white transition-colors whitespace-nowrap"
            >
              වෙබ් අඩවිය
            </button>

          </div>
        </div>
      </header>

      {/* Main Layout: Sidebar + Dashboard */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto flex">
        
        {/* Left Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#FFFDF8] border-r border-[#E9DDCC] flex flex-col justify-between p-4 transition-transform duration-300 shadow-xl lg:shadow-none
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="space-y-5">
            
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
                    ගම්පහ විහාරස්ථානය
                  </h2>
                  <p className="text-[10px] text-[#C58D36] font-medium">බලපාලන පද්ධතිය</p>
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
            <nav className="space-y-1 text-xs font-medium">
              
              <button
                onClick={() => { setActiveMenu('dashboard'); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all ${
                  activeMenu === 'dashboard'
                    ? 'bg-gradient-to-r from-[#842A35] to-[#6C1E27] text-white font-semibold shadow-xs'
                    : 'text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35]'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>පාලන පුවරුව</span>
              </button>

              <button
                onClick={() => { setActiveMenu('bookings'); onNavigate('calendar'); }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <AlmsBowlIcon className="w-4 h-4 text-[#C58D36]" />
                <span>දාන වෙන්කිරීම්</span>
              </button>

              <button
                onClick={() => { setActiveMenu('calendar'); onNavigate('calendar'); }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <CalendarIcon className="w-4 h-4 text-[#C58D36]" />
                <span>දින දර්ශනය</span>
              </button>

              <button
                onClick={() => { setActiveMenu('events'); setSidebarOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <DharmachakraIcon className="w-4 h-4 text-[#C58D36]" />
                <span>ආගමික වැඩසටහන්</span>
              </button>

              <button
                onClick={() => { setActiveMenu('pooja'); setSidebarOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <LotusIcon className="w-4 h-4 text-[#C58D36]" />
                <span>පූජා ඉල්ලීම්</span>
              </button>

              <button
                onClick={() => { setActiveMenu('notices'); setSidebarOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <Megaphone className="w-4 h-4 text-[#C58D36]" />
                <span>නිවේදන</span>
              </button>

              <button
                onClick={() => { setActiveMenu('devotees'); setSidebarOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <Users className="w-4 h-4 text-[#C58D36]" />
                <span>භක්තිකයන්</span>
              </button>

              <button
                onClick={() => { setActiveMenu('reports'); setSidebarOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <BarChart3 className="w-4 h-4 text-[#C58D36]" />
                <span>වාර්තා</span>
              </button>

              <button
                onClick={() => { setActiveMenu('settings'); setSidebarOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <Settings className="w-4 h-4 text-[#C58D36]" />
                <span>සැකසුම්</span>
              </button>

            </nav>

          </div>

          {/* Sidebar Bottom Sketch */}
          <div className="pt-3 border-t border-[#E9DDCC] text-center">
            <StupaAndTreeSketch className="w-24 h-16 mx-auto text-[#C58D36] opacity-70" />
            <p className="text-[10px] text-[#6B635B] mt-1">ගම්පහ විහාර පාලන</p>
          </div>
        </aside>

        {/* Mobile Backdrop */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/35 backdrop-blur-2xs z-30 lg:hidden"
          ></div>
        )}

        {/* Center Content Area */}
        <main className="flex-1 p-3 sm:p-6 space-y-4 sm:space-y-5 overflow-x-hidden relative">
          
          {/* 1. Welcome Panorama Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E9DDCC] shadow-2xs bg-[#F8F2E7]">
            <div className="absolute inset-0 z-0 opacity-25">
              <img 
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80" 
                alt="Temple Panorama" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F8F2E7] via-[#F8F2E7]/85 to-transparent"></div>
            </div>

            <div className="relative z-10 p-4 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-extrabold font-['Abhaya_Libre',serif] text-[#842A35] leading-snug">
                ගම්පහ විහාරස්ථානය පරිපාලන පද්ධතියට සාදරයෙන් පිළිගනිමු
              </h2>
              <div className="flex items-start sm:items-center gap-2 mt-1.5">
                <LotusIcon className="w-4 h-4 text-[#C58D36] shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-xs text-[#6B635B] leading-relaxed">
                  දාන වෙන්කිරීම්, වැඩසටහන්, පූජා ඉල්ලීම් හා විහාර පරිපාලනය කාර්යක්ෂමව කළමනාකරණය කිරීම සඳහා වූ පද්ධතිය.
                </p>
              </div>
            </div>
          </div>

          {/* 2. 4 Metric Cards (2x2 Grid on Mobile, 4 Cols on Desktop) */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-2.5 sm:gap-3.5">
            
            {/* Card 1: Today's Dana */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-3 sm:p-4 shadow-2xs flex items-center justify-between">
              <div className="min-w-0">
                <span className="text-[11px] sm:text-xs text-[#6B635B] font-semibold block truncate">අද දාන පූජා</span>
                <div className="text-xl sm:text-2xl font-extrabold text-[#842A35] font-['Abhaya_Libre',serif] mt-0.5">
                  05
                </div>
                <div className="text-[10px] text-[#587A4D] font-semibold mt-0.5 flex items-center gap-0.5">
                  <span>▲</span> <span>+2 අද</span>
                </div>
              </div>
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#FFF1D5] border border-[#C58D36]/40 flex items-center justify-center shrink-0">
                <AlmsBowlIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C58D36]" />
              </div>
            </div>

            {/* Card 2: Pending Approvals */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-3 sm:p-4 shadow-2xs flex items-center justify-between">
              <div className="min-w-0">
                <span className="text-[11px] sm:text-xs text-[#6B635B] font-semibold block truncate">අනුමැතියට ඇති</span>
                <div className="text-xl sm:text-2xl font-extrabold text-[#842A35] font-['Abhaya_Libre',serif] mt-0.5">
                  08
                </div>
                <div className="text-[10px] text-[#C58D36] font-semibold mt-0.5 truncate">
                  සමාලෝචනයට
                </div>
              </div>
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#FCE9E8] border border-[#842A35]/30 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#842A35]" />
              </div>
            </div>

            {/* Card 3: Upcoming Events */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-3 sm:p-4 shadow-2xs flex items-center justify-between">
              <div className="min-w-0">
                <span className="text-[11px] sm:text-xs text-[#6B635B] font-semibold block truncate">ඉදිරි වැඩසටහන්</span>
                <div className="text-xl sm:text-2xl font-extrabold text-[#842A35] font-['Abhaya_Libre',serif] mt-0.5">
                  03
                </div>
                <div className="text-[10px] text-[#6B635B] font-semibold mt-0.5">
                  දින 7 තුළ
                </div>
              </div>
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#F8F2E7] border border-[#E9DDCC] flex items-center justify-center shrink-0">
                <DharmachakraIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C58D36]" />
              </div>
            </div>

            {/* Card 4: Month Bookings */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-3 sm:p-4 shadow-2xs flex items-center justify-between">
              <div className="min-w-0">
                <span className="text-[11px] sm:text-xs text-[#6B635B] font-semibold block truncate">මාසික වෙන්කිරීම්</span>
                <div className="text-xl sm:text-2xl font-extrabold text-[#842A35] font-['Abhaya_Libre',serif] mt-0.5">
                  42
                </div>
                <div className="text-[10px] text-[#587A4D] font-semibold mt-0.5 flex items-center gap-0.5">
                  <span>▲</span> <span>+18 මසකට</span>
                </div>
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
                    අලුත්ම දාන වෙන්කිරීම් ඉල්ලීම්
                  </h3>
                </div>
                <button 
                  onClick={() => onNavigate('calendar')}
                  className="text-xs font-semibold text-[#842A35] hover:text-[#C58D36]"
                >
                  සියල්ල බලන්න &gt;
                </button>
              </div>

              {/* Filters Bar (2x2 on Mobile, 4 Cols on Desktop) */}
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
                  <label className="block text-[10px] font-semibold text-[#6B635B] mb-0.5">දාන වර්ගය:</label>
                  <select 
                    value={danaTypeFilter}
                    onChange={(e) => setDanaTypeFilter(e.target.value)}
                    className="w-full text-xs px-2.5 py-2 bg-[#F8F2E7] border border-[#E9DDCC] rounded-xl text-[#302D2B] focus:outline-none focus:border-[#C58D36]"
                  >
                    <option value="all">සියල්ල</option>
                    <option value="භෝජන">භෝජන දානය</option>
                    <option value="සිසිල">සිසිල දානය</option>
                    <option value="පැන්සල්">පැන්සල් දානය</option>
                    <option value="මල්">මල් දානය</option>
                    <option value="පහන්">පහන් දානය</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-[#6B635B] mb-0.5">දිනය:</label>
                  <select 
                    className="w-full text-xs px-2.5 py-2 bg-[#F8F2E7] border border-[#E9DDCC] rounded-xl text-[#302D2B] focus:outline-none focus:border-[#C58D36]"
                  >
                    <option value="all">සියල්ල</option>
                    <option value="today">අද</option>
                    <option value="week">මෙම සතිය</option>
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

              {/* A. Mobile Booking Cards View (<md) — Zero Horizontal Scrolling Needed! */}
              <div className="md:hidden space-y-2.5">
                {filteredBookings.map((b) => (
                  <div 
                    key={b.id}
                    className="p-3 rounded-xl bg-[#F8F2E7]/45 border border-[#E9DDCC] space-y-2.5 shadow-2xs"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold text-[#C58D36] bg-[#FFF1D5] px-2 py-0.5 rounded-md border border-[#C58D36]/30">
                          #{b.refNumber}
                        </span>
                        <h4 className="text-sm font-bold text-[#302D2B] mt-1">{b.devoteeName}</h4>
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
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C58D36]" />
                        <span>{b.time}</span>
                      </span>
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
                ))}
              </div>

              {/* B. Desktop Data Table (md+) */}
              <div className="hidden md:block overflow-x-auto rounded-xl border border-[#E9DDCC]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F8F2E7] text-[#842A35] font-bold font-['Abhaya_Libre',serif] border-b border-[#E9DDCC]">
                    <tr>
                      <th className="py-2.5 px-3">#</th>
                      <th className="py-2.5 px-3">පරිත්‍යාගශීලීගේ නම</th>
                      <th className="py-2.5 px-3">දාන වර්ගය</th>
                      <th className="py-2.5 px-3">දිනය</th>
                      <th className="py-2.5 px-3">වේලාව</th>
                      <th className="py-2.5 px-3">තත්වය</th>
                      <th className="py-2.5 px-3 text-center">ක්‍රියාමාර්ග</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E9DDCC]">
                    {filteredBookings.map((b) => (
                      <tr key={b.id} className="hover:bg-[#F8F2E7]/40 transition-colors">
                        <td className="py-2.5 px-3 font-semibold text-[#6B635B]">{b.refNumber}</td>
                        <td className="py-2.5 px-3 font-medium text-[#302D2B]">
                          <div>{b.devoteeName}</div>
                        </td>
                        <td className="py-2.5 px-3">
                          <span className="inline-flex items-center gap-1 font-medium text-[#842A35]">
                            <RicePlateIcon className="w-3.5 h-3.5 text-[#C58D36]" />
                            <span>{b.danaType}</span>
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-[#302D2B] whitespace-nowrap">{b.date}</td>
                        <td className="py-2.5 px-3 text-[#6B635B] whitespace-nowrap">{b.time}</td>
                        
                        {/* Status Badges */}
                        <td className="py-2.5 px-3 whitespace-nowrap">
                          {b.status === 'approved' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#EDF7E7] text-[#587A4D] border border-[#587A4D]/30">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                              <span>අනුමත කර ඇත</span>
                            </span>
                          )}
                          {b.status === 'pending' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FFF1D5] text-[#C58D36] border border-[#C58D36]/40">
                              <span>අනුමැතිය බලාපොරොත්තු</span>
                            </span>
                          )}
                          {b.status === 'cancelled' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FCE9E8] text-[#842A35] border border-[#842A35]/30">
                              <X className="w-2.5 h-2.5 stroke-[3]" />
                              <span>අවලංගු කර ඇත</span>
                            </span>
                          )}
                        </td>

                        {/* Action Buttons */}
                        <td className="py-2.5 px-3">
                          <div className="flex items-center justify-center gap-1">
                            <button 
                              title="විස්තර බලන්න"
                              className="p-1 text-[#6B635B] hover:text-[#842A35] hover:bg-[#F8F2E7] rounded-md"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button 
                              title="සටහන්"
                              className="p-1 text-[#6B635B] hover:text-[#842A35] hover:bg-[#F8F2E7] rounded-md"
                            >
                              <FileText className="w-3.5 h-3.5" />
                            </button>

                            {b.status === 'pending' && (
                              <>
                                <button
                                  onClick={() => handleApprove(b.id, b.devoteeName)}
                                  className="px-2 py-0.5 rounded-md bg-[#587A4D] text-white text-[10px] font-semibold hover:bg-[#43603A]"
                                >
                                  අනුමත කරන්න
                                </button>
                                <button
                                  onClick={() => handleReject(b.id, b.devoteeName)}
                                  className="px-2 py-0.5 rounded-md bg-[#842A35] text-white text-[10px] font-semibold hover:bg-[#6C1E27]"
                                >
                                  ප්‍රතික්ෂේප කරන්න
                                </button>
                              </>
                            )}
                          </div>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

            {/* Right Side Widgets (4 cols) */}
            <div className="xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
              
              {/* Widget 1: Upcoming Religious Events */}
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
                      src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=120&q=80" 
                      alt="Event 1"
                      className="w-12 h-12 rounded-lg object-cover shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35] truncate">
                        විශේෂ ධර්ම දේශනය
                      </h5>
                      <span className="text-[10px] text-[#C58D36] font-semibold">2025 පෙබරවාරි 13 | ප.ව. 6.30</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-[#F8F2E7] transition-colors">
                    <img 
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=120&q=80" 
                      alt="Event 2"
                      className="w-12 h-12 rounded-lg object-cover shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35] truncate">
                        පොහොය සත්සංගමය (වැඩික)
                      </h5>
                      <span className="text-[10px] text-[#C58D36] font-semibold">2025 පෙබරවාරි 16 | ප.ව. 7.00</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-[#F8F2E7] transition-colors">
                    <img 
                      src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=120&q=80" 
                      alt="Event 3"
                      className="w-12 h-12 rounded-lg object-cover shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35] truncate">
                        මහා දානමය පින්කම
                      </h5>
                      <span className="text-[10px] text-[#C58D36] font-semibold">2025 පෙබරවාරි 23 | පෙ.ව. 10.30</span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-2 text-center text-xs font-semibold text-[#842A35] hover:bg-[#F8F2E7] rounded-xl border border-[#E9DDCC]">
                  සියලු වැඩසටහන් බලන්න &gt;
                </button>
              </div>

              {/* Widget 2: Mini Calendar */}
              <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between border-b border-[#E9DDCC] pb-2">
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#C58D36]" />
                    <h4 className="text-xs sm:text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                      දින දර්ශනය
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-[#842A35]">පෙබරවාරි 2025</span>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-[11px]">
                  <span className="text-[#842A35] font-bold">ඉ</span>
                  <span className="text-[#842A35] font-bold">ස</span>
                  <span className="text-[#842A35] font-bold">අ</span>
                  <span className="text-[#842A35] font-bold">බ</span>
                  <span className="text-[#842A35] font-bold">බ්‍ර</span>
                  <span className="text-[#842A35] font-bold">සි</span>
                  <span className="text-[#842A35] font-bold">සෙ</span>

                  <span className="text-stone-300"></span><span className="text-stone-300"></span><span className="text-stone-300"></span><span className="text-stone-300"></span><span className="text-stone-300"></span><span className="text-stone-300"></span>
                  <span className="p-1">1</span>
                  <span className="p-1">2</span><span className="p-1">3</span><span className="p-1">4</span><span className="p-1">5</span><span className="p-1">6</span><span className="p-1">7</span>
                  <span className="p-1 bg-[#842A35] text-white font-bold rounded-md">8</span>
                  <span className="p-1">9</span><span className="p-1">10</span><span className="p-1">11</span>
                  <span className="p-1 bg-[#EDF7E7] text-[#587A4D] font-bold rounded-md">12</span>
                  <span className="p-1 bg-[#842A35] text-white font-bold rounded-md">13</span>
                  <span className="p-1">14</span><span className="p-1">15</span>
                  <span className="p-1 bg-[#EDF7E7] text-[#587A4D] font-bold rounded-md">16</span>
                  <span className="p-1">17</span><span className="p-1">18</span><span className="p-1">19</span><span className="p-1">20</span><span className="p-1">21</span><span className="p-1">22</span>
                  <span className="p-1 bg-[#EDF7E7] text-[#587A4D] font-bold rounded-md">23</span>
                  <span className="p-1">24</span><span className="p-1">25</span><span className="p-1">26</span><span className="p-1">27</span><span className="p-1">28</span>
                </div>
              </div>

              {/* Widget 3: Monthly Reminders */}
              <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-2xs space-y-2 sm:col-span-2 xl:col-span-1">
                <div className="flex items-center gap-1.5 border-b border-[#E9DDCC] pb-2">
                  <Bell className="w-3.5 h-3.5 text-[#C58D36]" />
                  <h4 className="text-xs sm:text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                    මෙම මාසයේ විශේෂ සිහිපත්
                  </h4>
                </div>

                <div className="space-y-1.5 text-xs text-[#302D2B]">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#587A4D] shrink-0 mt-0.5" />
                    <span>පොහොය සත්සංගම සූදානම් කිරීම</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#587A4D] shrink-0 mt-0.5" />
                    <span>මහා දානමය පින්කමේ සම්බන්ධීකරණ කටයුතු තහවුරු කිරීම</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#587A4D] shrink-0 mt-0.5" />
                    <span>විහාර භූමිය පිරිසිදු කිරීම (මාසික)</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* 4. Bottom Quick Action Cards (5 Cards) */}
          <div className="pt-4 border-t border-[#E9DDCC]">
            <div className="text-center mb-3">
              <span className="text-xs sm:text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35] flex items-center justify-center gap-1.5">
                <LotusIcon className="w-3.5 h-3.5 text-[#C58D36]" />
                <span>ඉක්මන් ක්‍රියාමාර්ග</span>
                <LotusIcon className="w-3.5 h-3.5 text-[#C58D36]" />
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
              
              <button 
                onClick={() => onNavigate('booking')}
                className="flex flex-col items-center text-center p-3 bg-[#FFFDF8] border border-[#E9DDCC] rounded-xl hover:border-[#C58D36] active:scale-98 transition-all group shadow-2xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F8F2E7] border border-[#C58D36]/30 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <AlmsBowlIcon className="w-4 h-4 text-[#C58D36]" />
                </div>
                <span className="text-[11px] font-bold text-[#842A35] leading-tight">
                  නව දාන වෙන්කිරීම් ලියාපදිංචි කරන්න
                </span>
              </button>

              <button 
                onClick={() => onNavigate('calendar')}
                className="flex flex-col items-center text-center p-3 bg-[#FFFDF8] border border-[#E9DDCC] rounded-xl hover:border-[#C58D36] active:scale-98 transition-all group shadow-2xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F8F2E7] border border-[#C58D36]/30 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <PlusCircle className="w-4 h-4 text-[#C58D36]" />
                </div>
                <span className="text-[11px] font-bold text-[#842A35] leading-tight">
                  නව වැඩසටහනක් ඇතුළත් කරන්න
                </span>
              </button>

              <button 
                onClick={() => onNavigate('calendar')}
                className="flex flex-col items-center text-center p-3 bg-[#FFFDF8] border border-[#E9DDCC] rounded-xl hover:border-[#C58D36] active:scale-98 transition-all group shadow-2xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F8F2E7] border border-[#C58D36]/30 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <LotusIcon className="w-4 h-4 text-[#C58D36]" />
                </div>
                <span className="text-[11px] font-bold text-[#842A35] leading-tight">
                  පූජා ඉල්ලීමක් ලියාපදිංචි කරන්න
                </span>
              </button>

              <button 
                className="flex flex-col items-center text-center p-3 bg-[#FFFDF8] border border-[#E9DDCC] rounded-xl hover:border-[#C58D36] active:scale-98 transition-all group shadow-2xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F8F2E7] border border-[#C58D36]/30 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <Megaphone className="w-4 h-4 text-[#C58D36]" />
                </div>
                <span className="text-[11px] font-bold text-[#842A35] leading-tight">
                  නව නිවේදනයක් ප්‍රකාශ කරන්න
                </span>
              </button>

              <button 
                className="col-span-2 sm:col-span-1 flex flex-col items-center text-center p-3 bg-[#FFFDF8] border border-[#E9DDCC] rounded-xl hover:border-[#C58D36] active:scale-98 transition-all group shadow-2xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F8F2E7] border border-[#C58D36]/30 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <Users className="w-4 h-4 text-[#C58D36]" />
                </div>
                <span className="text-[11px] font-bold text-[#842A35] leading-tight">
                  නව භක්තිකයෙක් ලියාපදිංචි කරන්න
                </span>
              </button>

            </div>
          </div>

          {/* Glowing Pink Lotus Flower on Bottom Right of Admin Dashboard */}
          <div className="absolute -bottom-2 right-4 pointer-events-none opacity-85 hidden sm:block">
            <PinkLotusBlossom className="w-20 h-16" />
          </div>

        </main>

      </div>
    </div>
  );
};
