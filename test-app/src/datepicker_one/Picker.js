import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// Note: I like the simple use and interface for this particular calendar:
// React Datepicker
// From: https://ourcodeworld.com/articles/read/535/top-10-best-open-source-reactjs-datepicker-components

class Picker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
        />;
    }
}

export default Picker;