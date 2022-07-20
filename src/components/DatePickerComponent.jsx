import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import { ko } from "date-fns/esm/locale";

const DatePickerComponent = ({ setSearchDateString, setSelectedEndDateString, isRangeSearch }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isCalendarOpen, setIsCalendartOpen] = useState(false)

    const ExampleCustomInput = ({ value, onClick }) => (
      <>
      <button className="example-custom-input" onClick={onClick}>
        {value}
      </button>
      </>
    );
    return (
      <DatePicker
        locale={ko}
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<Form.Control as="textarea" rows={1} style={{width:"250px"}}/>}
      />
    );
};

export default DatePickerComponent;