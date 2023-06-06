type WeekdayHeaderProps = {
  year: number;
  month: number;
  language: string;
};

const WeekdayHeader = ({ year, month, language }: WeekdayHeaderProps) => {
  const getFormattedDateText = (
    year: number,
    month: number,
    language: string
  ) => (language === "ko" ? `${year}년 ${month}월` : `${month}. ${year}`);

  return (
    <div className="weekday-header-container">
      {getFormattedDateText(year, month, language)}
    </div>
  );
};

export default WeekdayHeader;
