import dayjs from "dayjs";
import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import { DATE_FORMAT } from "../../constants/format";

type LanguageTextMap = {
  [key: string]: { checkIn: string; checkOut: string };
};

const languageTextMap: LanguageTextMap = {
  ko: { checkIn: "체크인", checkOut: "체크아웃" },
  en: { checkIn: "Check-In", checkOut: "Check-Out" },
};

const BookingDatesView = () => {
  const { bookingDates, calendarSettings } = useContext(CalendarContext);
  const { language = "en" } = calendarSettings;

  const { checkIn: checkInText, checkOut: checkOutText } =
    languageTextMap[language];

  const renderDateView = (title: string, date?: dayjs.Dayjs) => (
    <div className="booking-dates">
      {title} {date?.format(DATE_FORMAT)}
    </div>
  );

  return (
    <div className="booking-dates-view-container">
      {renderDateView(checkInText, bookingDates.checkIn)}
      {renderDateView(checkOutText, bookingDates.checkOut)}
    </div>
  );
};

export { BookingDatesView };
