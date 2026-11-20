export type ScreenType = 'home' | 'calendar' | 'booking' | 'admin';

export type DanaCategory = 'heel' | 'dawal' | 'sanghika' | 'gilanpasa';

export type SlotStatus = 'available' | 'joint' | 'booked' | 'blocked' | 'poya';

export interface CalendarDaySlot {
  date: number; // day of month
  fullDate: string; // YYYY-MM-DD
  isCurrentMonth: boolean;
  dayOfWeek: number; // 0=Sunday, 6=Saturday
  heelStatus?: SlotStatus;
  dawalStatus?: SlotStatus;
  poyaTitle?: string;
  isSpecialDay?: boolean;
  specialNote?: string;
}

export interface BookingRecord {
  id: string;
  refNumber: string;
  devoteeName: string;
  phone: string;
  email?: string;
  address?: string;
  danaType: string;
  category: DanaCategory;
  date: string;
  time: string;
  familyMembers: number;
  foodArrangement: 'temple' | 'devotee';
  specialNote?: string;
  status: 'approved' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface ReligiousEvent {
  id: string;
  title: string;
  subtitle: string;
  dateStr: string;
  timeStr: string;
  image: string;
  category: string;
  conductedBy?: string;
}

export interface TempleService {
  id: string;
  title: string;
  iconName: string;
  description?: string;
}
