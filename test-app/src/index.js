import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Picker from './datepicker_one/Picker';
import DayPickComponent from './daypicker/DayPicker';
import DateInputForm from './daypicker_input/DayPickerInput';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DateInputForm />, document.getElementById('root'));
registerServiceWorker();
