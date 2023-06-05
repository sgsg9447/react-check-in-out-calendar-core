# react-check-in-out-calendar-core

<img width="1511" alt="image" src="https://github.com/sgsg9447/react-check-in-out-calendar/assets/87474789/924aa6f2-5f70-4f31-a32a-8a5c2f79b27a">

The react-check-in-out-calendar-core library provides the core functionality of the react-check-in-out-calendar component. It is a lightweight library that enables you to have the powerful date manipulation capabilities of the original component without the UI elements, giving you complete freedom to design and style your own calendar component.

## Installation

Use the package manager npm to install react-check-in-out-calendar-core:

```
npm install react-check-in-out-calendar-core
```

Or with yarn:

```
yarn add react-check-in-out-calendar-core
```

### Props

| Prop Name          | Type                                              | Description                                                                       | Default                 |
| ------------------ | ------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------- |
| startDay           | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6                   | The starting day of the week                                                      | 0                       |
| numMonths          | 1 \| 2 \| 3 \| 4                                  | The number of months to be shown in the calendar                                  | 2                       |
| language           | "ko" \| "en"                                      | The language for the calendar                                                     | 'en'                    |
| maximumMonths      | number                                            | The maximum number of months that the calendar can display. (i.e 12, 24, 36, ...) | 12                      |
| defaultCheckIn     | string \| Dayjs                                   | The check-in date in "YYYY-MM-DD" format.                                         | 7 days from current day |
| defaultCheckOut    | string \| Dayjs                                   | The check-out date in "YYYY-MM-DD" format.                                        | 8 days from current day |
| onCheckInOutChange | (checkInDate?: Date, checkOutDate?: Date) => void | Callback function when check-in or check-out date changes.                        |                         |

## Usage

```jsx
import { Calendar } from 'react-check-in-out-calendar-core';

function App() {
  const handleChange = (in, out) => {
    console.log(in, out );
  };
  return (
     <Calendar
        startDay={0}
        numMonths={2}
        language="ko"
        maximumMonths={12}
        defaultCheckIn="2023-06-01"
        defaultCheckOut="2023-06-15"
        onCheckInOutChange={handleChange}
      />
  );
}
```

## CSS ClassNames

Here are the CSS class names that are used in the original `react-check-in-out-calendar` library, which you can use for styling your custom calendar component:

- `calendar-container`: The main container for the Calendar component.
- `month-navigation-container`: The main container for the MonthNavigation component.
- `button-wrapper`: The wrapper for the buttons in the MonthNavigation component.
- `button`: The buttons in the MonthNavigation component.
- `monthview-container`: The main container for the MonthView component.
- `weekday-header-container`: The main container for the WeekdayHeader component.
- `day-cell`: The cells in the MonthView component.
- `day-cell-in-range`: The cells that are within the check-in and check-out range.
- `day-cell-selected`: The cells that are either the check-in or check-out date.
- `other-day` : The cells representing dates that fall outside of the current month, i.e., dates from the previous or the next month that are displayed in the current month's calendar view.
- `before-today` : The cells representing dates that occur before the current date. These dates are generally not selectable in the context of a booking or reservation system.

## UI Library
[react-check-in-out-calendar](https://www.npmjs.com/package/react-check-in-out-calendar)
- The UI library is currently still under development. At present, the core library has not yet been incorporated. Therefore, what we have is the original calendar library which combines both the previous logic and UI. Updates integrating the core library will be coming soon.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

The MIT License.

## Contact

If you have any questions or suggestions, please feel free to contact me. I'm always open to improving this package and would love to hear any ideas or solve any issues you may have.

- Email: sgsg9447@gmail.com
- GitHub: [sgsg9447](https://github.com/sgsg9447)
