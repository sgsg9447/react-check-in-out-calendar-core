import "@/styles/App.css";
import Calendar from "@/components/calendar";
import { CalendarProps } from "@/types";
import { CalendarProvider } from "@/context/CalendarContext";

function App(props: CalendarProps) {
  const { onCheckInOutChange } = props;

  return (
    <>
      <CalendarProvider
        calendarProps={props}
        onCheckInOutChange={onCheckInOutChange}
      >
        <Calendar />
      </CalendarProvider>
    </>
  );
}

export default App;
