type DateCellProps = {
  date: number;
  month: number;
  year: number;
  isOtherDay: boolean;
  lastDayOfMonth: number;
};

const DateCell = ({
  date,
  month,
  year,
  isOtherDay,
  lastDayOfMonth,
}: DateCellProps) => {
  return <li className="datecell-container">{date}</li>;
};

export default DateCell;
