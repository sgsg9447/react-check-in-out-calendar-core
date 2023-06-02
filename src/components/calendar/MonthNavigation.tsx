import { CalendarContext } from "@/context/CalendarContext";
import { useCallback, useContext, useMemo } from "react";

const MonthNavigation = () => {
  const { today, currentMonth, setCurrentMonth, calendarSettings } =
    useContext(CalendarContext);
  const { maximumMonths = 12 } = calendarSettings;

  const laterMonthDate = useMemo(
    () => today.add(maximumMonths - 1, "month").toDate(),
    [today, maximumMonths]
  );

  const isPrevButtonDisabled =
    today.year() >= currentMonth.year() &&
    today.month() >= currentMonth.month();

  const isNextButtonDisabled =
    laterMonthDate.getFullYear() <= currentMonth.year() &&
    laterMonthDate.getMonth() <= currentMonth.month();

  const handleMonthChange = useCallback(
    (num: number) => {
      setCurrentMonth(num);
    },
    [setCurrentMonth]
  );

  return (
    <div className="month-navigation-container">
      <div className="button-wrapper">
        <button
          className="button"
          disabled={isPrevButtonDisabled}
          onClick={() => handleMonthChange(-1)}
        >
          {" "}
          &lt;
        </button>
        <button
          className="button"
          disabled={isNextButtonDisabled}
          onClick={() => handleMonthChange(1)}
        >
          {" "}
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MonthNavigation;
