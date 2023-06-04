import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import MonthNavigation from "./MonthNavigation";
import MonthView from "./month";

const Calendar = () => {
  const { calendarSettings } = useContext(CalendarContext);
  const { numMonths } = calendarSettings;
  return (
    <>
      <MonthNavigation />
      <div className="calendar-container">
        {[...Array(numMonths)].map((_, index) => (
          <MonthView key={`month-view-${index}`} index={index} />
        ))}
      </div>
    </>
  );
};

export default Calendar;
