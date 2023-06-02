import MonthView from "@/components/calendar/month";
import { CalendarContext } from "@/context/CalendarContext";
import { useContext } from "react";
import MonthNavigation from "@/components/calendar/MonthNavigation";

const Calendar = () => {
  const { calendarSettings, bookingDates } = useContext(CalendarContext);
  const { numMonths } = calendarSettings;
  console.log("bookingDates", bookingDates);
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
