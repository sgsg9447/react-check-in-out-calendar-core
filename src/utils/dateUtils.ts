import dayjs from "dayjs";

export const calculateNewDates = (currentMonth: dayjs.Dayjs, index: number) => {
  const newMonth = ((currentMonth.month() + index) % 12) + 1;
  const newYear =
    currentMonth.year() + Math.floor((currentMonth.month() + index) / 12);
  return { newMonth, newYear };
};

export const generateMonthCalendar = (
  year: number,
  month: number,
  startDay: number
): Date[] => {
  const startOfMonth = new Date(year, month - 1, 1);
  const endOfMonth = new Date(year, month, 0);
  let startOfWeek = (7 + startOfMonth.getDay() - startDay) % 7;
  let endOfWeek = (7 + endOfMonth.getDay() - startDay) % 7;
  const startDate = startOfMonth.getDate();
  const endDate = endOfMonth.getDate();
  const days = Array.from({ length: endDate }, (_, i) => {
    return new Date(year, month - 1, i + 1);
  });
  const previousMonthDays = Array.from({ length: startOfWeek }, (_, i) => {
    const date = new Date(year, month - 2, startDate - startOfWeek + i);
    return date;
  });
  const nextMonthDays = Array.from({ length: 6 - endOfWeek }, (_, i) => {
    const date = new Date(year, month, endDate + i + 1);
    return date;
  });
  return previousMonthDays.concat(days, nextMonthDays);
};
