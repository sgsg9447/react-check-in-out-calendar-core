import WeekdayHeader from "@/components/calendar/month/WeekdayHeader";
import Weekdays from "@/components/calendar/month/Weekdays";

const MonthView = () => {
  return (
    <div className="monthview-container">
      <WeekdayHeader />
      <div className="monthview-content-container">
        <Weekdays />
      </div>
    </div>
  );
};

export default MonthView;
