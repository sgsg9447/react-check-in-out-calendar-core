import { CalendarProps } from "./types";
import { CalendarProvider } from "./context/CalendarContext";
import Calendar from "./components/calendar";
import "./styles/style.css";

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
