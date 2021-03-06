import React from "react";

import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDateChanged = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFcousChanged = (calendarFocused) => {
    this.setState(() => ({ calendarFocused: calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date"> Date </option>
          <option value="amount"> Amount </option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDateChanged}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFcousChanged}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

// go into ExpenseDashboard
export default connect(mapStateToProps)(ExpenseListFilters);
