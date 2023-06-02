import WeekdayHeader from "@/components/calendar/month/WeekdayHeader";
import Weekdays from "@/components/calendar/month/Weekdays";
import Dates from "@/components/calendar/dates";
import { calculateNewDates } from "@/utils/dateUtils";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const MonthView = () => {
  const currentMonth = dayjs();

  const [dates, setDates] = useState(calculateNewDates(currentMonth, 0));

  useEffect(() => {
    setDates(calculateNewDates(currentMonth, 1));
  }, []);

  return (
    <div className="monthview-container">
      <WeekdayHeader
        year={dates.newYear}
        month={dates.newMonth}
        language={"ko"}
      />
      <div className="monthview-content-container">
        <Weekdays />
        <Dates newYear={dates.newYear} newMonth={dates.newMonth} />
      </div>
    </div>
  );
};

export default MonthView;
