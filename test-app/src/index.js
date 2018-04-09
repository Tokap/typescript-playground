import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import Picker from "./datepicker_one/Picker";
// import DayPickComponent from "./daypicker/DayPicker";
import DayPickPlus from "./daypicker/DayPickerPlus";
// import DateInputForm from "./daypicker_input/DayPickerInput";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<DayPickPlus />, document.getElementById("root"));
registerServiceWorker();
