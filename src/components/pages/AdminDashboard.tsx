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
  CalendarCheck
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
        <div className="fixed top-6 right-6 z-50 bg-[#842A35] text-white px-5 py-3 rounded-xl shadow-lg border border-[#C58D36] flex items-center gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-amber-200" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#FFFDF8] border-b border-[#E9DDCC] shadow-2xs">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          
          {/* Left Title & Mobile Toggle */}
          <div className="flex items-center gap-3 pl-8 sm:pl-12 lg:pl-0">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 text-[#842A35] hover:bg-[#F8F2E7] rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <LotusIcon className="w-5 h-5 text-[#C58D36]" />
              <span className="text-xl font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
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
                placeholder="භක්තික, වෙන්කිරීම්, වැඩසටහන ... සොයන්න..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#F8F2E7] border border-[#E9DDCC] rounded-full focus:outline-none focus:border-[#C58D36] focus:bg-[#FFFDF8]"
              />
            </div>
          </div>

          {/* Right Admin Profile & Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Notification Bell */}
            <div className="relative cursor-pointer p-1.5 rounded-full hover:bg-[#F8F2E7] transition-colors">
              <Bell className="w-5 h-5 text-[#C58D36]" />
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#842A35] text-white text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </div>

            {/* Admin User Profile */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F2E7] border border-[#E9DDCC]">
              <div className="w-6 h-6 rounded-full bg-[#C58D36] text-white font-bold text-xs flex items-center justify-center">
                ප
              </div>
              <span className="text-xs font-semibold text-[#842A35]">
                පරිපාලක (Admin)
              </span>
            </div>

            {/* View Website Button */}
            <button
              onClick={() => onNavigate('home')}
              className="px-3 py-1 rounded-full border border-[#842A35] text-xs font-semibold text-[#842A35] hover:bg-[#842A35] hover:text-white transition-colors"
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
          fixed lg:static inset-y-0 left-0 z-30 w-64 bg-[#FFFDF8] border-r border-[#E9DDCC] flex flex-col justify-between p-4 transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="space-y-5">
            
            {/* Temple Crest */}
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 pb-3 border-b border-[#E9DDCC] cursor-pointer"
            >
              <div className="p-1 bg-[#F8F2E7] border border-[#E9DDCC] rounded-full">
                <StupaIcon className="w-8 h-8 text-[#C58D36]" />
              </div>
              <div>
                <h2 className="text-sm font-bold font-['Abhaya_Libre',serif] text-[#842A35] leading-tight">
                  ගම්පහ විහාරස්ථානය
                </h2>
                <p className="text-[10px] text-[#C58D36] font-medium">බලපාලන පද්ධතිය</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-1 text-xs font-medium">
              
              <button
                onClick={() => { setActiveMenu('dashboard'); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                  activeMenu === 'dashboard'
                    ? 'bg-[#842A35] text-white font-semibold shadow-xs'
                    : 'text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35]'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>පාලන පුවරුව</span>
              </button>

              <button
                onClick={() => { setActiveMenu('bookings'); onNavigate('calendar'); }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <AlmsBowlIcon className="w-4 h-4 text-[#C58D36]" />
                <span>දාන වෙන්කිරීම්</span>
              </button>

              <button
                onClick={() => { setActiveMenu('calendar'); onNavigate('calendar'); }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>දින දර්ශනය</span>
              </button>

              <button
                onClick={() => setActiveMenu('events')}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <DharmachakraIcon className="w-4 h-4 text-[#C58D36]" />
                <span>ආගමික වැඩසටහන්</span>
              </button>

              <button
                onClick={() => setActiveMenu('pooja')}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <LotusIcon className="w-4 h-4 text-[#C58D36]" />
                <span>පූජා ඉල්ලීම්</span>
              </button>

              <button
                onClick={() => setActiveMenu('notices')}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <Megaphone className="w-4 h-4 text-[#C58D36]" />
                <span>නිවේදන</span>
              </button>

              <button
                onClick={() => setActiveMenu('devotees')}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <Users className="w-4 h-4 text-[#C58D36]" />
                <span>භක්තිකයන්</span>
              </button>

              <button
                onClick={() => setActiveMenu('reports')}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
              >
                <BarChart3 className="w-4 h-4 text-[#C58D36]" />
                <span>වාර්තා</span>
              </button>

              <button
                onClick={() => setActiveMenu('settings')}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#302D2B] hover:bg-[#F8F2E7] hover:text-[#842A35] transition-all"
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
            className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          ></div>
        )}

        {/* Center Content Area */}
        <main className="flex-1 p-4 sm:p-6 space-y-5 overflow-x-hidden relative">
          
          {/* 1. Welcome Panorama Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E9DDCC] shadow-2xs bg-[#F8F2E7]">
            <div className="absolute inset-0 z-0 opacity-25">
              <img 
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80" 
                alt="Temple Panorama" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-extrabold font-['Abhaya_Libre',serif] text-[#842A35]">
                ගම්පහ විහාරස්ථානය පරිපාලන පද්ධතියට සාදරයෙන් පිළිගනිමු
              </h2>
              <div className="flex items-center gap-2 mt-1.5">
                <LotusIcon className="w-4 h-4 text-[#C58D36]" />
                <p className="text-xs text-[#6B635B] leading-relaxed">
                  දාන වෙන්කිරීම්, වැඩසටහන්, පූජා ඉල්ලීම් හා විහාර පරිපාලනය කාර්යක්ෂමව කළමනාකරණය කිරීම සඳහා වූ පද්ධතිය.
                </p>
              </div>
            </div>
          </div>

          {/* 2. 4 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
            
            {/* Card 1: Today's Dana */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-xs text-[#6B635B] font-medium">අද දාන පූජා</span>
                <div className="text-2xl font-extrabold text-[#842A35] font-['Abhaya_Libre',serif] mt-0.5">
                  05
                </div>
                <div className="text-[10px] text-[#587A4D] font-semibold mt-0.5 flex items-center gap-1">
                  <span>▲</span> පසුගිය දිනෙන් +2
                </div>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-[#FFF1D5] border border-[#C58D36]/40 flex items-center justify-center">
                <AlmsBowlIcon className="w-6 h-6 text-[#C58D36]" />
              </div>
            </div>

            {/* Card 2: Pending Approvals */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-xs text-[#6B635B] font-medium">අනුමැතිය බලාපොරොත්තු ඇති ඉල්ලීම්</span>
                <div className="text-2xl font-extrabold text-[#842A35] font-['Abhaya_Libre',serif] mt-0.5">
                  08
                </div>
                <div className="text-[10px] text-[#C58D36] font-semibold mt-0.5">
                  සමාලෝචනය අවශ්‍යයි
                </div>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-[#FCE9E8] border border-[#842A35]/30 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#842A35]" />
              </div>
            </div>

            {/* Card 3: Upcoming Events */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-xs text-[#6B635B] font-medium">ඉදිරි වැඩසටහන්</span>
                <div className="text-2xl font-extrabold text-[#842A35] font-['Abhaya_Libre',serif] mt-0.5">
                  03
                </div>
                <div className="text-[10px] text-[#6B635B] font-semibold mt-0.5">
                  ඉදිරි දින 7 තුළ
                </div>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-[#F8F2E7] border border-[#E9DDCC] flex items-center justify-center">
                <DharmachakraIcon className="w-6 h-6 text-[#C58D36]" />
              </div>
            </div>

            {/* Card 4: Month Bookings */}
            <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-xs text-[#6B635B] font-medium">මෙම මාසයේ වෙන්කිරීම්</span>
                <div className="text-2xl font-extrabold text-[#842A35] font-['Abhaya_Libre',serif] mt-0.5">
                  42
                </div>
                <div className="text-[10px] text-[#587A4D] font-semibold mt-0.5 flex items-center gap-1">
                  <span>▲</span> පසුගිය මාසයට වඩා +18
                </div>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-[#EDF7E7] border border-[#587A4D]/30 flex items-center justify-center">
                <CalendarCheck className="w-6 h-6 text-[#587A4D]" />
              </div>
            </div>

          </div>

          {/* 3. Middle Section: Table on Left & Right Widgets */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
            
            {/* Table: Latest Dana Booking Requests */}
            <div className="xl:col-span-8 bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              
              <div className="flex items-center justify-between border-b border-[#E9DDCC] pb-3">
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

              {/* Filters Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                <div>
                  <label className="block text-[10px] font-semibold text-[#6B635B] mb-0.5">තත්වය:</label>
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full text-xs px-2.5 py-1.5 bg-[#F8F2E7] border border-[#E9DDCC] rounded-lg text-[#302D2B] focus:outline-none"
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
                    className="w-full text-xs px-2.5 py-1.5 bg-[#F8F2E7] border border-[#E9DDCC] rounded-lg text-[#302D2B] focus:outline-none"
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
                    className="w-full text-xs px-2.5 py-1.5 bg-[#F8F2E7] border border-[#E9DDCC] rounded-lg text-[#302D2B] focus:outline-none"
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
                      className="w-full text-xs pl-7 pr-2.5 py-1.5 bg-[#F8F2E7] border border-[#E9DDCC] rounded-lg text-[#302D2B] focus:outline-none"
                    />
                    <Search className="w-3 h-3 text-[#C58D36] absolute left-2 top-2" />
                  </div>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto rounded-xl border border-[#E9DDCC]">
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
                        
                        {/* Status Badges matching Screenshot */}
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
            <div className="xl:col-span-4 space-y-4">
              
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
                  <div className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-[#F8F2E7] transition-colors">
                    <img 
                      src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=120&q=80" 
                      alt="Event 1"
                      className="w-12 h-12 rounded-lg object-cover" 
                    />
                    <div className="flex-1">
                      <h5 className="text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                        විශේෂ ධර්ම දේශනය
                      </h5>
                      <span className="text-[10px] text-[#C58D36] font-semibold">2025 පෙබරවාරි 13 | ප.ව. 6.30</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-[#F8F2E7] transition-colors">
                    <img 
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=120&q=80" 
                      alt="Event 2"
                      className="w-12 h-12 rounded-lg object-cover" 
                    />
                    <div className="flex-1">
                      <h5 className="text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                        පොහොය සත්සංගමය (වැඩික)
                      </h5>
                      <span className="text-[10px] text-[#C58D36] font-semibold">2025 පෙබරවාරි 16 | ප.ව. 7.00</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-[#F8F2E7] transition-colors">
                    <img 
                      src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=120&q=80" 
                      alt="Event 3"
                      className="w-12 h-12 rounded-lg object-cover" 
                    />
                    <div className="flex-1">
                      <h5 className="text-xs font-bold font-['Abhaya_Libre',serif] text-[#842A35]">
                        මහා දානමය පින්කම
                      </h5>
                      <span className="text-[10px] text-[#C58D36] font-semibold">2025 පෙබරවාරි 23 | පෙ.ව. 10.30</span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-1.5 text-center text-xs font-semibold text-[#842A35] hover:bg-[#F8F2E7] rounded-lg border border-[#E9DDCC]">
                  සියල වැඩසටහන් බලන්න &gt;
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

                <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
                  <span className="text-[#842A35] font-bold">ඉ</span>
                  <span className="text-[#842A35] font-bold">ස</span>
                  <span className="text-[#842A35] font-bold">අ</span>
                  <span className="text-[#842A35] font-bold">බ</span>
                  <span className="text-[#842A35] font-bold">බ්‍ර</span>
                  <span className="text-[#842A35] font-bold">සි</span>
                  <span className="text-[#842A35] font-bold">සෙ</span>

                  <span className="text-stone-300"></span><span className="text-stone-300"></span><span className="text-stone-300"></span><span className="text-stone-300"></span><span className="text-stone-300"></span><span className="text-stone-300"></span>
                  <span className="p-0.5">1</span>
                  <span className="p-0.5">2</span><span className="p-0.5">3</span><span className="p-0.5">4</span><span className="p-0.5">5</span><span className="p-0.5">6</span><span className="p-0.5">7</span>
                  <span className="p-0.5 bg-[#842A35] text-white font-bold rounded">8</span>
                  <span className="p-0.5">9</span><span className="p-0.5">10</span><span className="p-0.5">11</span>
                  <span className="p-0.5 bg-[#EDF7E7] text-[#587A4D] font-bold rounded">12</span>
                  <span className="p-0.5 bg-[#842A35] text-white font-bold rounded">13</span>
                  <span className="p-0.5">14</span><span className="p-0.5">15</span>
                  <span className="p-0.5 bg-[#EDF7E7] text-[#587A4D] font-bold rounded">16</span>
                  <span className="p-0.5">17</span><span className="p-0.5">18</span><span className="p-0.5">19</span><span className="p-0.5">20</span><span className="p-0.5">21</span><span className="p-0.5">22</span>
                  <span className="p-0.5 bg-[#EDF7E7] text-[#587A4D] font-bold rounded">23</span>
                  <span className="p-0.5">24</span><span className="p-0.5">25</span><span className="p-0.5">26</span><span className="p-0.5">27</span><span className="p-0.5">28</span>
                </div>
              </div>

              {/* Widget 3: Monthly Reminders */}
              <div className="bg-[#FFFDF8] border border-[#E9DDCC] rounded-2xl p-4 shadow-2xs space-y-2">
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

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              
              <button 
                onClick={() => onNavigate('booking')}
                className="flex flex-col items-center text-center p-3 bg-[#FFFDF8] border border-[#E9DDCC] rounded-xl hover:border-[#C58D36] transition-all group shadow-2xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F8F2E7] flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <AlmsBowlIcon className="w-4 h-4 text-[#C58D36]" />
                </div>
                <span className="text-[11px] font-bold text-[#842A35]">
                  නව දාන වෙන්කිරීම් ලියාපදිංචි කරන්න
                </span>
              </button>

              <button 
                onClick={() => onNavigate('calendar')}
                className="flex flex-col items-center text-center p-3 bg-[#FFFDF8] border border-[#E9DDCC] rounded-xl hover:border-[#C58D36] transition-all group shadow-2xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F8F2E7] flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <PlusCircle className="w-4 h-4 text-[#C58D36]" />
                </div>
                <span className="text-[11px] font-bold text-[#842A35]">
                  නව වැඩසටහනක් ඇතුළත් කරන්න
                </span>
              </button>

              <button 
                onClick={() => onNavigate('calendar')}
                className="flex flex-col items-center text-center p-3 bg-[#FFFDF8] border border-[#E9DDCC] rounded-xl hover:border-[#C58D36] transition-all group shadow-2xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F8F2E7] flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <LotusIcon className="w-4 h-4 text-[#C58D36]" />
                </div>
                <span className="text-[11px] font-bold text-[#842A35]">
                  පූජා ඉල්ලීමක් ලියාපදිංචි කරන්න
                </span>
              </button>

              <button 
                className="flex flex-col items-center text-center p-3 bg-[#FFFDF8] border border-[#E9DDCC] rounded-xl hover:border-[#C58D36] transition-all group shadow-2xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F8F2E7] flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <Megaphone className="w-4 h-4 text-[#C58D36]" />
                </div>
                <span className="text-[11px] font-bold text-[#842A35]">
                  නව නිවේදනයක් ප්‍රකාශ කරන්න
                </span>
              </button>

              <button 
                className="flex flex-col items-center text-center p-3 bg-[#FFFDF8] border border-[#E9DDCC] rounded-xl hover:border-[#C58D36] transition-all group shadow-2xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F8F2E7] flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <Users className="w-4 h-4 text-[#C58D36]" />
                </div>
                <span className="text-[11px] font-bold text-[#842A35]">
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
