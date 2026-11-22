export type ScreenType = 'home' | 'calendar' | 'booking' | 'admin';

export type DanaCategory = 'heel' | 'dawal' | 'sanghika' | 'gilanpasa';

export type SlotStatus = 'available' | 'joint' | 'booked' | 'blocked' | 'poya';

// සම්පාදනය (ආහාර සකස් කිරීම), බරපැන (වියදම්/මූල්‍ය දායකත්වය), සම්පූර්ණ (තනිවම සම්පූර්ණ දානය)
export type ContributionType = 'preparation' | 'financial' | 'full';

export interface DanaSlotAllocation {
  id: string;
  devoteeName: string;
  phone: string;
  contributionType: ContributionType;
  familyMembers?: number;
  status: 'approved' | 'pending';
}

export interface MealSlotDetail {
  maxCapacity: number; // e.g. 4 or 5 devotees
  currentBooked: number;
  hasPreparation: boolean; // සම්පාදනය භාරගෙන ඇත්ද
  hasFinancial: boolean; // බරපැන භාරගෙන ඇත්ද
  allocations: {
    devoteeName: string;
    type: ContributionType;
    status: 'approved' | 'pending';
  }[];
}

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
  heelSlots?: MealSlotDetail;
  dawalSlots?: MealSlotDetail;
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
  contributionType: ContributionType; // 'preparation' | 'financial' | 'full'
  date: string;
  time: string;
  familyMembers: number;
  foodArrangement: 'temple' | 'devotee';
  specialNote?: string;
  status: 'approved' | 'pending' | 'cancelled';
  slotNumber?: number; // e.g. 1
  maxSlots?: number; // e.g. 4
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
