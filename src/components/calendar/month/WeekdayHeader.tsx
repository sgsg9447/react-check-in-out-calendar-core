const WeekdayHeader = () => {
  const year = 2023;
  const month = 6;
  const language = "ko";
  const getFormattedDateText = (
    year: number,
    month: number,
    language: string
  ) => (language === "ko" ? `${year}년 ${month}월` : `${year}. ${month}`);

  return (
    <div className="weekday-header-container">
      {getFormattedDateText(year, month, language)}
    </div>
  );
};

export default WeekdayHeader;
