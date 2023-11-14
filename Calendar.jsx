import * as React from "react";
import { Calendar, defaultCalendarStrings } from "@fluentui/react";
import { useConst } from "@fluentui/react-hooks";

export const CalendarWithRestrictedDates = () => {
  const defaultDate = useConst(new Date("2023-09-20"));
  const minDate = useConst(new Date("2023-09-07"));
  const maxDate = useConst(new Date("2024-09-07"));

  function restrictedDate(date) {
    const disabled_date = new Date(date);
    return disabled_date;
  }

  const restrictedDates = useConst([
    restrictedDate("2023-10-09"),
    restrictedDate("2023-11-23"),
    restrictedDate("2023-12-25"),
    restrictedDate("2024-01-01"),
    restrictedDate("2024-01-15"),
    restrictedDate("2024-02-19"),
    restrictedDate("2024-05-27"),
    restrictedDate("2024-06-19"),
    restrictedDate("2024-07-04"),
    restrictedDate("2024-09-02"),
  ]);

  const [selectedDate, setSelectedDate] = React.useState(defaultDate);

  const onSelectDate = React.useCallback((date, dateRangeArray) => {
    setSelectedDate(date);
  }, []);

  return (
    <div style={{ height: "auto" }}>
      {/* <div>Selected date: {selectedDate?.toDateString() || "Not set"}</div>
        <div>
          Date boundary: {minDate.toLocaleDateString()}-
          {maxDate.toLocaleDateString()}
        </div>
        <div>
          Disabled dates:{" "}
          {restrictedDates.map((d) => d.toLocaleDateString()).join(", ")}
        </div> */}
      <Calendar
        highlightSelectedMonth
        showGoToToday={false}
        minDate={minDate}
        maxDate={maxDate}
        restrictedDates={restrictedDates}
        onSelectDate={onSelectDate}
        value={selectedDate}
        strings={defaultCalendarStrings}
      />
    </div>
  );
};
