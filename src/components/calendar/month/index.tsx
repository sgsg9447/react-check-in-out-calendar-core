import WeekdayHeader from "@/components/calendar/month/WeekdayHeader";
import Weekdays from "@/components/calendar/month/Weekdays";
import Dates from "@/components/calendar/dates";
import { calculateNewDates } from "@/utils/dateUtils";
import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "@/context/CalendarContext";

const MonthView = ({ index }: { index: number }) => {
  const { currentMonth, calendarSettings } = useContext(CalendarContext);
  const { language = "en" } = calendarSettings;

  const [dates, setDates] = useState(calculateNewDates(currentMonth, index));

  useEffect(() => {
    setDates(calculateNewDates(currentMonth, index));
  }, [currentMonth]);

  return (
    <div className="monthview-container">
      <WeekdayHeader
        year={dates.newYear}
        month={dates.newMonth}
        language={language}
      />
      <div className="monthview-content-container">
        <Weekdays />
        <Dates newYear={dates.newYear} newMonth={dates.newMonth} />
      </div>
    </div>
  );
};

export default MonthView;
