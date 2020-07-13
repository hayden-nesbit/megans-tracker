import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
function DateSelect(props) {
 
  function handleChange(date) {
      props.setDue(date)
  };

    return (
      <DatePicker
        selected={props.due}
        onChange={handleChange}
      />
    );
  }

export default DateSelect