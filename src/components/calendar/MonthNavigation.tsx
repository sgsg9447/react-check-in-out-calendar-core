import { useCallback, useContext, useMemo } from "react";
import { CalendarContext } from "../../context/CalendarContext";

const MonthNavigation = () => {
  const { today, currentMonth, setCurrentMonth, calendarSettings } =
    useContext(CalendarContext);
  const { maximumMonths } = calendarSettings;

  const laterMonthDate = useMemo(
    () => today.add(maximumMonths! - 1, "month").toDate(),
    [today, maximumMonths]
  );
  const isPrevButtonDisabled =
    today.year() >= currentMonth.year() &&
    today.month() >= currentMonth.month() &&
    maximumMonths! > 0;

  const isNextButtonDisabled =
    laterMonthDate.getFullYear() <= currentMonth.year() &&
    laterMonthDate.getMonth() <= currentMonth.month() &&
    maximumMonths! > 0;

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
