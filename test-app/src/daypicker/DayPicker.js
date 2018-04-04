import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

class DayPickComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDay: undefined,
        };
    }
    handleDayClick(day, { selected }) {
        // Unselect the day if already selected
        if (selected) {
            this.setState({ selectedDay: undefined });
            return;
        }
        this.setState({ selectedDay: day });
    }
    render() {
        return (
            <div>
                <DayPicker
                    onDayClick={this.handleDayClick}
                    selectedDays={this.state.selectedDay}
                />
                {this.state.selectedDay ? (
                    <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
                ) : (
                        <p>Please select a day.</p>
                    )}
            </div>
        );
    }
}

export default DayPickComponent;