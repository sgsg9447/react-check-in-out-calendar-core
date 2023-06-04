import MonthView from "@/components/calendar/month";
import { CalendarContext } from "@/context/CalendarContext";
import { useContext } from "react";
import MonthNavigation from "@/components/calendar/MonthNavigation";
import BookingDatesView from "./BookingDatesView";

const Calendar = () => {
  const { calendarSettings } = useContext(CalendarContext);
  const { numMonths } = calendarSettings;
  return (
    <>
      <MonthNavigation />
      <BookingDatesView />
      <div className="calendar-container">
        {[...Array(numMonths)].map((_, index) => (
          <MonthView key={`month-view-${index}`} index={index} />
        ))}
      </div>
    </>
  );
};

export default Calendar;
