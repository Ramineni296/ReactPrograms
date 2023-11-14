import * as React from "react";
import { CalendarWithRestrictedDates } from "./Calendar";
import { DatePicker } from "@fluentui/react";

const datePickerStyles = {
  root: { maxWidth: 300, marginTop: 15 },
};

function ModifiedDatePicker() {
  return (
    <div>
      <DatePicker
        styles={datePickerStyles}
        placeholder="Select a date..."
        ariaLabel="Select a date"
        calendarAs={CalendarWithRestrictedDates}
      />
    </div>
  );
}

export default ModifiedDatePicker;
