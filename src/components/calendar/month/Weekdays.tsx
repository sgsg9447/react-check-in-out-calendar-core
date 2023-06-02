import { DAYS_OF_WEEK_EN, DAYS_OF_WEEK_KO } from "@/constants/daysOfWeek";
import { useMemo } from "react";

const Weekdays = () => {
  const language = "ko"; //TODO : 수정예정
  const startDay = 0; //TODO : 수정예정
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
