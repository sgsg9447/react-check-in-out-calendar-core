import dayjs from "dayjs";

export const generateMonthCalendar = (
  year: number,
  month: number,
  startDay: number
): Date[] => {
  month--;
  const startOfMonth = new Date(year, month, 1);
  const endOfMonth = new Date(year, month + 1, 0);
  const startOfWeek = (7 + startOfMonth.getDay() - startDay) % 7;
  const days = Array.from(
    { length: endOfMonth.getDate() },
    (_, i) => new Date(year, month, i + 1)
  );
  const previousMonthDays = Array.from(
    { length: startOfWeek },
    (_, i) => new Date(year, month, -i)
  ).reverse();

  // Always show 6 weeks in the calendar
  const totalDaysInCalendar = 6 * 7;
  const currentDaysCount = previousMonthDays.length + days.length;
  const nextMonthDaysCount = totalDaysInCalendar - currentDaysCount;

  const nextMonthDays = Array.from(
    { length: nextMonthDaysCount },
    (_, i) => new Date(year, month + 2, i + 1)
  );

  return [...previousMonthDays, ...days, ...nextMonthDays];
};

export const calculateNewDates = (currentMonth: dayjs.Dayjs, index: number) => {
  const newMonth = ((currentMonth.month() + index) % 12) + 1;
  const newYear =
    currentMonth.year() + Math.floor((currentMonth.month() + index) / 12);
  return { newMonth, newYear };
};
