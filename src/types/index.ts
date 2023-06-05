import dayjs, { Dayjs } from "dayjs";

export type BookingDatesType = {
  checkIn?: dayjs.Dayjs;
  checkOut?: dayjs.Dayjs;
};

export type LanguageType = "ko" | "en";
export type StartDayType = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type NumMonthsType = 1 | 2 | 3 | 4;

export interface CalendarProps {
  startDay?: StartDayType;
  numMonths?: NumMonthsType;
  language?: LanguageType;
  maximumMonths?: number;
  defaultCheckIn?: string | Dayjs;
  defaultCheckOut?: string | Dayjs;
  onCheckInOutChange?: (checkInDate?: Date, checkOutDate?: Date) => void;
}

export type CheckInOutChangeType = CalendarProps["onCheckInOutChange"];
