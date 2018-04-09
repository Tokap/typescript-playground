import * as React from "react";
// TODO: Review the package details and create custom type for DateUtils
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

type MaybeDate = Date | null;

export interface CalendarState {
  from: MaybeDate;
  to: MaybeDate;
  enteredTo: MaybeDate;
}

// --- Helper Functions
function clone(d: Date) {
  return new Date(d.getTime());
}

function isDayBefore(d1: MaybeDate, d2: MaybeDate) {
  if (d1 == null || d2 == null) {
    return false;
  }

  const day1 = clone(d1).setHours(0, 0, 0, 0);
  const day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 < day2;
}

export default class Example extends React.Component<{}, CalendarState> {
  constructor(props: Object) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: null,
      to: null,
      enteredTo: null // Keep track of the last day for mouseEnter.
    };
  }

  isSelectingFirstDay(from: MaybeDate, to: MaybeDate, day: MaybeDate) {
    const isBeforeFirstDay = from && isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  }

  handleDayClick(day: Date) {
    const { from, to } = this.state;
    if (from && to && day >= from && day <= to) {
      this.handleResetClick();
      return;
    }
    if (this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day as Date,
        to: null,
        enteredTo: null
      });
    } else {
      this.setState({
        to: day as Date,
        enteredTo: day as Date
      });
    }
  }

  handleDayMouseEnter(day: MaybeDate) {
    const { from, to } = this.state;
    if (!this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day as Date
      });
    }
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  render() {
    const { from, to, enteredTo } = this.state;

    // Existing Type Signature Expects non-nullable fields for these.
    // This has been manually adjusted in node_modules - need to do better.
    const confirmedFrom: Date = from == null ? new Date() : from;
    const modifiers = { start: from, end: to };
    const disabledDays = { before: from };
    const selectedDays = [from, { from: from, to: enteredTo }];

    return (
      <div>
        <DayPicker
          className="Range"
          numberOfMonths={2}
          fromMonth={confirmedFrom} // Package Types This Wrong
          selectedDays={selectedDays} // Package Types This Wrong
          disabledDays={disabledDays}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
        />
        <div>
          {!from && !to && "Please select the first day."}
          {from && !to && "Please select the last day."}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{" "}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Reset
              </button>
            )}
        </div>
      </div>
    );
  }
}
