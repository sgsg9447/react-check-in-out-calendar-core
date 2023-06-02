import { generateMonthCalendar } from "@/utils/dateUtils";
import { useMemo } from "react";
import DateCell from "@/components/calendar/dates/DateCell";

type DatesProps = {
  newYear: number;
  newMonth: number;
};

const Dates = ({ newYear, newMonth }: DatesProps) => {
  const startDay = 0;
  const totalDate = useMemo(() => {
    return generateMonthCalendar(newYear, newMonth, startDay);
  }, [newYear, newMonth, startDay]);

  const lastDayOfMonth = useMemo(() => {
    return new Date(newYear, newMonth, 0).getDate();
  }, [newYear, newMonth]);

  return (
    <ul className="dates-container">
      {totalDate.map((date) => (
        <DateCell
          key={date.toString()}
          year={date.getFullYear()}
          month={date.getMonth() + 1}
          date={date.getDate()}
          isOtherDay={date.getMonth() + 1 !== newMonth}
          lastDayOfMonth={lastDayOfMonth}
        />
      ))}
    </ul>
  );
};

export default Dates;
