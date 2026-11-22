import { CalendarDaySlot, ReligiousEvent, BookingRecord, TempleService } from '../types';

export const TEMPLE_INFO = {
  name: 'ශ්‍රී සුදර්ශන ධර්ම නිකේතනය',
  subtitle: 'හෙට්ටියාදෙණිය, ගම්පහ',
  fullAddress: 'ශ්‍රී සුදර්ශන ධර්ම නිකේතනය, හෙට්ටියාදෙණිය, ගම්පහ, ශ්‍රී ලංකාව',
  phone: '+94 33 222 4567',
  email: 'info@sudharshanadharmaya.lk',
  quote: '“ධර්මෝ රක්ෂති රක්ෂිතස්ස”',
  welcomeTitle: 'ශ්‍රී සුදර්ශන ධර්ම නිකේතනයට සාදරයෙන් පිළිගනිමු',
  welcomeSubtitle: 'හෙට්ටියාදෙණිය, ගම්පහ පිහිටි පුණ්‍යභූමිය. බුදුරජාණන් වහන්සේගේ ශ්‍රී සද්ධර්මයේ ආලෝකයෙන් සැදැහැවතුන් සුවපත් කරන ශාන්ත විහාරස්ථානය.',
};

export const UPCOMING_EVENTS: ReligiousEvent[] = [
  {
    id: 'ev-1',
    title: 'මැදින් පෝය වැඩසටහන',
    subtitle: 'මැදින් පෝය දිනයේ විශේෂ පූජා සහ ධර්මික වැඩසටහන්',
    dateStr: '2025 පෙබරවාරි 12 (බදාදා)',
    timeStr: 'ප.ව. 6.00 සිට',
    category: 'පෝය වැඩසටහන්',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
    conductedBy: 'මහා සංඝරත්නය',
  },
  {
    id: 'ev-2',
    title: 'විශේෂ බණ වැඩසටහන',
    subtitle: 'පූජ්‍ය ස්වාමීන් වහන්සේගේ ධර්ම දේශනය',
    dateStr: '2025 පෙබරවාරි 16 (ඉරිදා)',
    timeStr: 'ප.ව. 7.00 සිට',
    category: 'ධර්ම දේශනා',
    image: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=600&q=80',
    conductedBy: 'පූජ්‍ය විහාරාධිපති ස්වාමීන් වහන්සේ',
  },
  {
    id: 'ev-3',
    title: 'මහා දානමය පින්කම',
    subtitle: 'සමූහ දානය හා පුණ්‍යානුමෝදනා කටයුතු',
    dateStr: '2025 පෙබරවාරි 23 (ඉරිදා)',
    timeStr: 'පෙ.ව. 10.30 සිට',
    category: 'දානමය පින්කම්',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
    conductedBy: 'මහා සංඝරත්නය',
  },
];

export const TEMPLE_SERVICES: TempleService[] = [
  { id: 's1', title: 'භෝජන දානය', iconName: 'alms-bowl', description: 'මහා සංඝරත්නය උදෙසා පිදෙන උදෑසන හා දවල් භෝජන දානය' },
  { id: 's2', title: 'සිවුරු දානය', iconName: 'chivara', description: 'සඟසතු කර පූජා කෙරෙන තුන් සිවුරු හා අටපිරිකර' },
  { id: 's3', title: 'ධර්ම පොත් දානය', iconName: 'dharma-book', description: 'දහම් දැනුම බෙදාදෙන ධර්ම ග්‍රන්ථ මුද්‍රණය හා බෙදාහැරීම' },
  { id: 's4', title: 'පහන් දානය', iconName: 'oil-lamp', description: 'චෛත්‍ය රාජයාණන් හා බෝධීන් වහන්සේ උදෙසා ආලෝක පූජාව' },
  { id: 's5', title: 'මල් පූජා දානය', iconName: 'flower', description: 'සුවඳැති මල් හා සුවඳ දුම් පූජාමය කටයුතු' },
  { id: 's6', title: 'චෛත්‍ය පූජා', iconName: 'stupa', description: 'ස්වර්ණමය චෛත්‍ය පූජා සහ විශේෂ කප්රුක් පූජා' },
  { id: 's7', title: 'බෝධි පූජා', iconName: 'bodhi', description: 'නිරෝගී සුවය හා ආශිර්වාද ප්‍රාර්ථනා බෝධි පූජා' },
  { id: 's8', title: 'පානීය ජල දානය', iconName: 'water', description: 'පැමිණෙන සැදැහැවතුන් හා මහා සංඝරත්නය උදෙසා පැන් පූජාව' },
];

export const GALLERY_IMAGES = [
  {
    id: 'g1',
    title: 'සුදු චෛත්‍ය රාජයාණන්',
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g2',
    title: 'ඓතිහාසික ශ්‍රී මහා බෝධීන් වහන්සේ',
    url: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g3',
    title: 'බුදු මැඳුර සහ රන් බුද්ධ ප්‍රතිමා වහන්සේ',
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g4',
    title: 'මහා සංඝරත්නයේ පිණ්ඩපාත චාරිකාව',
    url: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g5',
    title: 'දහම් පාසල් සිසුන් හා භාවනා වැඩසටහන',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g6',
    title: 'දහසක් පහන් ආලෝක පූජාව',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
  }
];

export const FEBRUARY_2025_DAYS: CalendarDaySlot[] = [
  // Jan overflow
  { date: 26, fullDate: '2025-01-26', isCurrentMonth: false, dayOfWeek: 0 },
  { date: 27, fullDate: '2025-01-27', isCurrentMonth: false, dayOfWeek: 1 },
  { date: 28, fullDate: '2025-01-28', isCurrentMonth: false, dayOfWeek: 2 },
  { date: 29, fullDate: '2025-01-29', isCurrentMonth: false, dayOfWeek: 3 },
  { date: 30, fullDate: '2025-01-30', isCurrentMonth: false, dayOfWeek: 4 },
  { date: 31, fullDate: '2025-01-31', isCurrentMonth: false, dayOfWeek: 5 },
  // Feb days
  { 
    date: 1, 
    fullDate: '2025-02-01', 
    isCurrentMonth: true, 
    dayOfWeek: 6, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 2, 
    fullDate: '2025-02-02', 
    isCurrentMonth: true, 
    dayOfWeek: 0, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 3, 
    fullDate: '2025-02-03', 
    isCurrentMonth: true, 
    dayOfWeek: 1, 
    heelStatus: 'joint', 
    dawalStatus: 'available',
    heelSlots: {
      maxCapacity: 4,
      currentBooked: 1,
      hasPreparation: false,
      hasFinancial: true,
      allocations: [
        { devoteeName: 'ජයන්ත අල්විස් මහතා', type: 'financial', status: 'approved' }
      ]
    },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 4, 
    fullDate: '2025-02-04', 
    isCurrentMonth: true, 
    dayOfWeek: 2, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 5, 
    fullDate: '2025-02-05', 
    isCurrentMonth: true, 
    dayOfWeek: 3, 
    heelStatus: 'booked', 
    dawalStatus: 'booked',
    heelSlots: {
      maxCapacity: 4,
      currentBooked: 4,
      hasPreparation: true,
      hasFinancial: true,
      allocations: [
        { devoteeName: 'ආනන්ද සිරිසේන මහතා', type: 'full', status: 'approved' }
      ]
    },
    dawalSlots: {
      maxCapacity: 4,
      currentBooked: 4,
      hasPreparation: true,
      hasFinancial: true,
      allocations: [
        { devoteeName: 'කුමාරි පෙරේරා මහත්මිය', type: 'preparation', status: 'approved' },
        { devoteeName: 'සරත් ද සිල්වා මහතා', type: 'financial', status: 'approved' },
        { devoteeName: 'නීල් රත්නායක මහතා', type: 'financial', status: 'approved' },
        { devoteeName: 'මල්ලිකා ජයවර්ධන මහත්මිය', type: 'financial', status: 'approved' }
      ]
    }
  },
  { 
    date: 6, 
    fullDate: '2025-02-06', 
    isCurrentMonth: true, 
    dayOfWeek: 4, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 7, 
    fullDate: '2025-02-07', 
    isCurrentMonth: true, 
    dayOfWeek: 5, 
    heelStatus: 'joint', 
    dawalStatus: 'available',
    heelSlots: {
      maxCapacity: 4,
      currentBooked: 2,
      hasPreparation: true,
      hasFinancial: false,
      allocations: [
        { devoteeName: 'විමලා ගුණසේකර මහත්මිය', type: 'preparation', status: 'approved' },
        { devoteeName: 'චන්දන විජේතුංග මහතා', type: 'financial', status: 'pending' }
      ]
    },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 8, 
    fullDate: '2025-02-08', 
    isCurrentMonth: true, 
    dayOfWeek: 6, 
    heelStatus: 'available', 
    dawalStatus: 'available', 
    isSpecialDay: true, 
    poyaTitle: 'පොහොය දිනය (මහ සුළුවාම්)',
    heelSlots: { maxCapacity: 5, currentBooked: 1, hasPreparation: false, hasFinancial: true, allocations: [{ devoteeName: 'දායක සභාව', type: 'financial', status: 'approved' }] },
    dawalSlots: { maxCapacity: 5, currentBooked: 2, hasPreparation: true, hasFinancial: true, allocations: [{ devoteeName: 'දායක සභාව', type: 'preparation', status: 'approved' }] }
  },
  { 
    date: 9, 
    fullDate: '2025-02-09', 
    isCurrentMonth: true, 
    dayOfWeek: 0, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 10, 
    fullDate: '2025-02-10', 
    isCurrentMonth: true, 
    dayOfWeek: 1, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 11, 
    fullDate: '2025-02-11', 
    isCurrentMonth: true, 
    dayOfWeek: 2, 
    heelStatus: 'joint', 
    dawalStatus: 'available',
    heelSlots: {
      maxCapacity: 4,
      currentBooked: 1,
      hasPreparation: true,
      hasFinancial: false,
      allocations: [
        { devoteeName: 'සුදර්මන් ආරියරත්න මහතා', type: 'preparation', status: 'approved' }
      ]
    },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 12, 
    fullDate: '2025-02-12', 
    isCurrentMonth: true, 
    dayOfWeek: 3, 
    heelStatus: 'booked', 
    dawalStatus: 'booked',
    heelSlots: {
      maxCapacity: 4,
      currentBooked: 4,
      hasPreparation: true,
      hasFinancial: true,
      allocations: [
        { devoteeName: 'සමන් කරුණාරත්න මහතා', type: 'full', status: 'approved' }
      ]
    },
    dawalSlots: {
      maxCapacity: 4,
      currentBooked: 4,
      hasPreparation: true,
      hasFinancial: true,
      allocations: [
        { devoteeName: 'ගීතාංජලී මැණිකේ මහත්මිය', type: 'full', status: 'approved' }
      ]
    }
  },
  { 
    date: 13, 
    fullDate: '2025-02-13', 
    isCurrentMonth: true, 
    dayOfWeek: 4, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 14, 
    fullDate: '2025-02-14', 
    isCurrentMonth: true, 
    dayOfWeek: 5, 
    heelStatus: 'joint', 
    dawalStatus: 'joint',
    heelSlots: {
      maxCapacity: 4,
      currentBooked: 2,
      hasPreparation: true,
      hasFinancial: true,
      allocations: [
        { devoteeName: 'කසුන් මධුසේන විජේසිංහ මහතා', type: 'preparation', status: 'approved' },
        { devoteeName: 'රංජිත් අබේසේකර මහතා', type: 'financial', status: 'approved' }
      ]
    },
    dawalSlots: {
      maxCapacity: 4,
      currentBooked: 1,
      hasPreparation: false,
      hasFinancial: true,
      allocations: [
        { devoteeName: 'නිලංකා ප්‍රියදර්ශනී මහත්මිය', type: 'financial', status: 'pending' }
      ]
    }
  },
  { 
    date: 15, 
    fullDate: '2025-02-15', 
    isCurrentMonth: true, 
    dayOfWeek: 6, 
    heelStatus: 'joint', 
    dawalStatus: 'available',
    heelSlots: {
      maxCapacity: 4,
      currentBooked: 1,
      hasPreparation: true,
      hasFinancial: false,
      allocations: [
        { devoteeName: 'මාලිනී දිසානායක මහත්මිය', type: 'preparation', status: 'approved' }
      ]
    },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 16, 
    fullDate: '2025-02-16', 
    isCurrentMonth: true, 
    dayOfWeek: 0, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 17, 
    fullDate: '2025-02-17', 
    isCurrentMonth: true, 
    dayOfWeek: 1, 
    heelStatus: 'blocked', 
    dawalStatus: 'blocked', 
    specialNote: 'වෙන්කිරීම් නොහැක (විශේෂ වැඩසටහන)' 
  },
  { 
    date: 18, 
    fullDate: '2025-02-18', 
    isCurrentMonth: true, 
    dayOfWeek: 2, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 19, 
    fullDate: '2025-02-19', 
    isCurrentMonth: true, 
    dayOfWeek: 3, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 20, 
    fullDate: '2025-02-20', 
    isCurrentMonth: true, 
    dayOfWeek: 4, 
    heelStatus: 'joint', 
    dawalStatus: 'available',
    heelSlots: {
      maxCapacity: 4,
      currentBooked: 2,
      hasPreparation: false,
      hasFinancial: true,
      allocations: [
        { devoteeName: 'රුවන් චන්ද්‍රසිංහ මහතා', type: 'financial', status: 'pending' },
        { devoteeName: 'චිත්‍රාල් සෝමරත්න මහතා', type: 'financial', status: 'approved' }
      ]
    },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 21, 
    fullDate: '2025-02-21', 
    isCurrentMonth: true, 
    dayOfWeek: 5, 
    heelStatus: 'booked', 
    dawalStatus: 'booked',
    heelSlots: {
      maxCapacity: 4,
      currentBooked: 4,
      hasPreparation: true,
      hasFinancial: true,
      allocations: [
        { devoteeName: 'ජගත් ජයවර්ධන මහතා', type: 'full', status: 'approved' }
      ]
    },
    dawalSlots: {
      maxCapacity: 4,
      currentBooked: 4,
      hasPreparation: true,
      hasFinancial: true,
      allocations: [
        { devoteeName: 'ලලිත් විජේසේකර මහතා', type: 'full', status: 'approved' }
      ]
    }
  },
  { 
    date: 22, 
    fullDate: '2025-02-22', 
    isCurrentMonth: true, 
    dayOfWeek: 6, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 23, 
    fullDate: '2025-02-23', 
    isCurrentMonth: true, 
    dayOfWeek: 0, 
    heelStatus: 'booked', 
    dawalStatus: 'booked',
    heelSlots: {
      maxCapacity: 4,
      currentBooked: 4,
      hasPreparation: true,
      hasFinancial: true,
      allocations: [
        { devoteeName: 'ප්‍රදීප් රණසිංහ මහතා', type: 'full', status: 'approved' }
      ]
    },
    dawalSlots: {
      maxCapacity: 4,
      currentBooked: 4,
      hasPreparation: true,
      hasFinancial: true,
      allocations: [
        { devoteeName: 'සමන්තිකා අතුකෝරල මහත්මිය', type: 'full', status: 'approved' }
      ]
    }
  },
  { 
    date: 24, 
    fullDate: '2025-02-24', 
    isCurrentMonth: true, 
    dayOfWeek: 1, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 25, 
    fullDate: '2025-02-25', 
    isCurrentMonth: true, 
    dayOfWeek: 2, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 26, 
    fullDate: '2025-02-26', 
    isCurrentMonth: true, 
    dayOfWeek: 3, 
    heelStatus: 'joint', 
    dawalStatus: 'available',
    heelSlots: {
      maxCapacity: 4,
      currentBooked: 1,
      hasPreparation: true,
      hasFinancial: false,
      allocations: [
        { devoteeName: 'වසන්ත කරුණාතිලක මහතා', type: 'preparation', status: 'approved' }
      ]
    },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 27, 
    fullDate: '2025-02-27', 
    isCurrentMonth: true, 
    dayOfWeek: 4, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  { 
    date: 28, 
    fullDate: '2025-02-28', 
    isCurrentMonth: true, 
    dayOfWeek: 5, 
    heelStatus: 'available', 
    dawalStatus: 'available',
    heelSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] },
    dawalSlots: { maxCapacity: 4, currentBooked: 0, hasPreparation: false, hasFinancial: false, allocations: [] }
  },
  // March overflow
  { date: 1, fullDate: '2025-03-01', isCurrentMonth: false, dayOfWeek: 6 },
];

export const INITIAL_ADMIN_BOOKINGS: BookingRecord[] = [
  {
    id: 'b-001',
    refNumber: '001',
    devoteeName: 'සමන් කරුණාරත්න මහතා',
    phone: '+94 77 123 4567',
    email: 'saman.k@gmail.com',
    address: 'නො. 45, විහාර මාවත, හෙට්ටියාදෙණිය, ගම්පහ',
    danaType: 'හීල් දානය',
    category: 'heel',
    contributionType: 'full',
    date: '2025 පෙබරවාරි 12',
    time: 'පෙ.ව. 06.30',
    familyMembers: 10,
    foodArrangement: 'temple',
    status: 'approved',
    slotNumber: 1,
    maxSlots: 1,
    createdAt: '2025-02-01',
  },
  {
    id: 'b-002',
    refNumber: '002',
    devoteeName: 'නිලංකා ප්‍රියදර්ශනී මහත්මිය',
    phone: '+94 71 987 6543',
    email: 'nilanka.p@yahoo.com',
    address: 'අංක 12, බෝධිරාජ මාවත, හෙට්ටියාදෙණිය, ගම්පහ',
    danaType: 'දවල් දානය',
    category: 'dawal',
    contributionType: 'financial', // බරපැන දැරීම
    date: '2025 පෙබරවාරි 14',
    time: 'පෙ.ව. 11.00',
    familyMembers: 8,
    foodArrangement: 'temple',
    status: 'pending',
    slotNumber: 1,
    maxSlots: 4,
    createdAt: '2025-02-03',
  },
  {
    id: 'b-003',
    refNumber: '003',
    devoteeName: 'කසුන් මධුසේන විජේසිංහ මහතා',
    phone: '+94 77 223 4567',
    email: 'kasun.vijesinghe@gmail.com',
    address: 'අංක 128/4, විහාර මාවත, හෙට්ටියාදෙණිය, ගම්පහ',
    danaType: 'හීල් දානය',
    category: 'heel',
    contributionType: 'preparation', // සම්පාදනය (ආහාර පිස රැගෙන ඒම)
    date: '2025 පෙබරවාරි 14',
    time: 'පෙ.ව. 06.30',
    familyMembers: 12,
    foodArrangement: 'devotee',
    status: 'approved',
    slotNumber: 1,
    maxSlots: 4,
    createdAt: '2025-02-04',
  },
  {
    id: 'b-004',
    refNumber: '004',
    devoteeName: 'රංජිත් අබේසේකර මහතා',
    phone: '+94 76 555 1234',
    email: 'ranjith.a@gmail.com',
    address: 'මහවෙල පාර, හෙට්ටියාදෙණිය, ගම්පහ',
    danaType: 'හීල් දානය',
    category: 'heel',
    contributionType: 'financial', // බරපැන දැරීම
    date: '2025 පෙබරවාරි 14',
    time: 'පෙ.ව. 06.30',
    familyMembers: 6,
    foodArrangement: 'temple',
    status: 'approved',
    slotNumber: 2,
    maxSlots: 4,
    createdAt: '2025-02-05',
  },
  {
    id: 'b-005',
    refNumber: '005',
    devoteeName: 'විමලා ගුණසේකර මහත්මිය',
    phone: '+94 70 333 4444',
    email: 'vimala.g@hotmail.com',
    address: 'අංක 88, නුවර පාර, හෙට්ටියාදෙණිය, ගම්පහ',
    danaType: 'හීල් දානය',
    category: 'heel',
    contributionType: 'preparation', // සම්පාදනය
    date: '2025 පෙබරවාරි 07',
    time: 'පෙ.ව. 06.30',
    familyMembers: 6,
    foodArrangement: 'devotee',
    status: 'approved',
    slotNumber: 1,
    maxSlots: 4,
    createdAt: '2025-02-05',
  },
  {
    id: 'b-006',
    refNumber: '006',
    devoteeName: 'රුවන් චන්ද්‍රසිංහ මහතා',
    phone: '+94 77 888 9999',
    email: 'ruwan.c@gmail.com',
    address: 'හෙට්ටියාදෙණිය වත්ත, ගම්පහ',
    danaType: 'ගිලන්පස පූජාව',
    category: 'gilanpasa',
    contributionType: 'financial', // බරපැන
    date: '2025 පෙබරවාරි 20',
    time: 'ප.ව. 6.00',
    familyMembers: 12,
    foodArrangement: 'temple',
    status: 'pending',
    slotNumber: 1,
    maxSlots: 4,
    createdAt: '2025-02-06',
  },
];
