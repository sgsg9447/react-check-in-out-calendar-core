import * as dayjs from "dayjs";
import { useContext } from "react";
import { CalendarContext } from "../context/CalendarContext";
import { DATE_FORMAT } from "@/constants/format";

const useHandleClickDate = (today: dayjs.Dayjs) => {
  const { bookingDates, setBookingDates } = useContext(CalendarContext);

  const handleClickDate = (date: dayjs.Dayjs) => {
    //오늘 날짜를 문자열 형식으로 반환
    const todayString = today.format(DATE_FORMAT);

    const dateString = date.format(DATE_FORMAT);

    if (todayString > dateString) {
      return;
    }
    if (
      !bookingDates.checkIn ||
      (bookingDates.checkIn && bookingDates.checkOut) ||
      date < bookingDates.checkIn
    ) {
      setBookingDates((prevBookingDates) => ({
        ...prevBookingDates,
        checkIn: date,
        checkOut: undefined,
      }));
    } else if (date > bookingDates.checkIn) {
      setBookingDates((prevBookingDates) => ({
        ...prevBookingDates,
        checkOut: date,
      }));
    }
  };

  return { handleClickDate };
};

export default useHandleClickDate;
