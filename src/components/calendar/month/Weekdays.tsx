
import { useContext, useMemo } from "react";
import { CalendarContext } from "../../../context/CalendarContext";
import { DAYS_OF_WEEK_EN, DAYS_OF_WEEK_KO } from "../../../constants/daysOfWeek";

const Weekdays = () => {
  const { calendarSettings } = useContext(CalendarContext);
  const { language = "en", startDay = 0 } = calendarSettings;

  const DAYS_OF_WEEK: string[] = useMemo(() => {
    let daysOfWeek = language === "ko" ? DAYS_OF_WEEK_KO : DAYS_OF_WEEK_EN;
    return [...daysOfWeek.slice(startDay), ...daysOfWeek.slice(0, startDay)];
  }, [language, startDay]);

  return (
    <div className="weekdays">
      {DAYS_OF_WEEK.map((elm) => (
        <div key={elm}>{elm}</div>
      ))}
    </div>
  );
};

export default Weekdays;
