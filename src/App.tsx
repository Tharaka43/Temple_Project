import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { DanaCalendar } from './components/pages/DanaCalendar';
import { DanaBookingForm } from './components/pages/DanaBookingForm';
import { AdminDashboard } from './components/pages/AdminDashboard';
import type { ScreenType, BookingRecord, ContributionType } from './types';
import { INITIAL_ADMIN_BOOKINGS } from './data/mockData';
import { Layers, Sparkles, Home, Calendar, FileText, Shield } from 'lucide-react';

export function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedBookingDate, setSelectedBookingDate] = useState<string>('2025 පෙබරවාරි 14 (සිකුරාදා)');
  const [selectedDanaType, setSelectedDanaType] = useState<string>('හීල් දානය');
  const [selectedContributionType, setSelectedContributionType] = useState<ContributionType>('preparation');
  const [bookingsList, setBookingsList] = useState<BookingRecord[]>(INITIAL_ADMIN_BOOKINGS);

  const handleSelectBookingDate = (dateStr: string, danaType: string, contributionType?: ContributionType) => {
    setSelectedBookingDate(dateStr);
    setSelectedDanaType(danaType);
    if (contributionType) {
      setSelectedContributionType(contributionType);
    }
  };

  const handleBookingSubmitted = (newBooking: BookingRecord) => {
    setBookingsList(prev => [newBooking, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#302D2B] flex flex-col font-['Noto_Sans_Sinhala',sans-serif] selection:bg-[#C58D36]/20 selection:text-[#842A35] pb-16 sm:pb-14">
      
      {/* 1. Header (Rendered on Public Screens) */}
      {currentScreen !== 'admin' && (
        <Header 
          currentScreen={currentScreen} 
          onNavigate={(screen) => {
            setCurrentScreen(screen);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
        />
      )}

      {/* 2. Main Page Render */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomePage onNavigate={(screen) => {
            setCurrentScreen(screen);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}

        {currentScreen === 'calendar' && (
          <DanaCalendar 
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectBookingDate={handleSelectBookingDate}
          />
        )}

        {currentScreen === 'booking' && (
          <DanaBookingForm 
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBookingSubmitted={handleBookingSubmitted}
            initialDate={selectedBookingDate}
            initialDanaType={selectedDanaType}
            initialContributionType={selectedContributionType}
          />
        )}

        {currentScreen === 'admin' && (
          <AdminDashboard 
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            bookingsList={bookingsList}
          />
        )}
      </main>

      {/* 3. Footer (Rendered on Public Screens) */}
      {currentScreen !== 'admin' && (
        <Footer onNavigate={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />
      )}

      {/* 4. Sacred Bottom Navigation & Quick UI Preview Switcher */}
      <aside 
        aria-label="Quick UI Switcher"
        className="fixed bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 z-50 bg-[#842A35]/95 text-white backdrop-blur-md px-1.5 sm:px-3 py-1.5 sm:py-2 rounded-2xl sm:rounded-full border border-[#C58D36]/80 shadow-[0_8px_30px_rgba(132,42,53,0.4)] flex items-center gap-1 sm:gap-2 text-[11px] sm:text-xs w-[94vw] max-w-md sm:w-auto sm:max-w-[95vw] justify-between sm:justify-center"
      >
        <div className="flex items-center gap-1 text-[#FFF1D5] px-1.5 font-bold font-['Abhaya_Libre',serif] border-r border-[#C58D36]/40 hidden md:flex shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-[#E5A94B]" />
          <span>UI පරීක්ෂාව</span>
        </div>

        <button
          onClick={() => { setCurrentScreen('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex-1 sm:flex-initial flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 px-2 sm:px-3.5 py-1.5 rounded-xl sm:rounded-full font-semibold transition-all shrink-0 ${
            currentScreen === 'home'
              ? 'bg-[#FFFDF8] text-[#842A35] shadow-xs'
              : 'text-amber-100/90 hover:bg-white/10'
          }`}
        >
          <Home className={`w-3.5 h-3.5 ${currentScreen === 'home' ? 'text-[#C58D36]' : 'text-amber-200/80'}`} />
          <span className="sm:hidden text-[10px] leading-tight">මුල් පිටුව</span>
          <span className="hidden sm:inline">1. මුල් පිටුව</span>
        </button>

        <button
          onClick={() => { setCurrentScreen('calendar'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex-1 sm:flex-initial flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 px-2 sm:px-3.5 py-1.5 rounded-xl sm:rounded-full font-semibold transition-all shrink-0 ${
            currentScreen === 'calendar'
              ? 'bg-[#FFFDF8] text-[#842A35] shadow-xs'
              : 'text-amber-100/90 hover:bg-white/10'
          }`}
        >
          <Calendar className={`w-3.5 h-3.5 ${currentScreen === 'calendar' ? 'text-[#C58D36]' : 'text-amber-200/80'}`} />
          <span className="sm:hidden text-[10px] leading-tight">දින දර්ශනය</span>
          <span className="hidden sm:inline">2. දින දර්ශනය</span>
        </button>

        <button
          onClick={() => { setCurrentScreen('booking'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex-1 sm:flex-initial flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 px-2 sm:px-3.5 py-1.5 rounded-xl sm:rounded-full font-semibold transition-all shrink-0 ${
            currentScreen === 'booking'
              ? 'bg-[#FFFDF8] text-[#842A35] shadow-xs'
              : 'text-amber-100/90 hover:bg-white/10'
          }`}
        >
          <FileText className={`w-3.5 h-3.5 ${currentScreen === 'booking' ? 'text-[#C58D36]' : 'text-amber-200/80'}`} />
          <span className="sm:hidden text-[10px] leading-tight">දාන පෝරමය</span>
          <span className="hidden sm:inline">3. දාන පෝරමය</span>
        </button>

        <button
          onClick={() => { setCurrentScreen('admin'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex-1 sm:flex-initial flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 px-2 sm:px-3.5 py-1.5 rounded-xl sm:rounded-full font-semibold transition-all shrink-0 ${
            currentScreen === 'admin'
              ? 'bg-[#FFFDF8] text-[#842A35] shadow-xs'
              : 'text-amber-100/90 hover:bg-white/10'
          }`}
        >
          <Shield className={`w-3.5 h-3.5 ${currentScreen === 'admin' ? 'text-[#C58D36]' : 'text-amber-200/80'}`} />
          <span className="sm:hidden text-[10px] leading-tight">පාලන පුවරුව</span>
          <span className="hidden sm:inline">4. පාලන පුවරුව</span>
        </button>

        <div className="pl-1 text-[#E5A94B] hidden lg:block shrink-0">
          <Layers className="w-4 h-4" />
        </div>
      </aside>

    </div>
  );
}

export default App;
