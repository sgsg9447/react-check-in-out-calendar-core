import { DATE_FORMAT } from "@/constants/format";
import { CalendarContext } from "@/context/CalendarContext";
import useHandleClickDate from "@/hooks/useHandleClickDate";
import dayjs from "dayjs";
import { useContext } from "react";
type DateCellProps = {
  date: number;
  month: number;
  year: number;
  isOtherDay: boolean;
  lastDayOfMonth: number;
};

const DateCell = ({
  date,
  month,
  year,
  isOtherDay,
  lastDayOfMonth,
}: DateCellProps) => {
  const { bookingDates, today } = useContext(CalendarContext);
  const currentDate = dayjs(new Date(year, month - 1, date));
  const isAfterLastDay = date > lastDayOfMonth;
  const { handleClickDate } = useHandleClickDate(today);
  const currentDateString = currentDate.format(DATE_FORMAT);
  console.log("currentDateString", currentDateString);
  const todayDateString = today.format(DATE_FORMAT);
  const checkInDateString = bookingDates.checkIn?.format(DATE_FORMAT);
  const checkOutDateString = bookingDates.checkOut?.format(DATE_FORMAT);
  const isSelectedDate =
    !isOtherDay &&
    (checkInDateString === currentDateString ||
      checkOutDateString === currentDateString);
  const isWithinRange =
    !isOtherDay &&
    checkInDateString &&
    checkOutDateString &&
    checkInDateString < currentDateString &&
    currentDateString < checkOutDateString;

  let classNames = "";
  if (currentDateString === todayDateString) {
    classNames += "today";
  }
  if (isSelectedDate) {
    classNames += "selected";
  }
  if (isWithinRange) {
    classNames += "within-range";
  }
  if (isOtherDay) {
    classNames += "other-day";
  }

  return (
    <li
      className={`datecell-container ${classNames}`}
      onClick={
        !isAfterLastDay && !isOtherDay
          ? () => handleClickDate(currentDate)
          : undefined
      }
    >
      <div className="date-cell">{date}</div>
    </li>
  );
};

export default DateCell;
