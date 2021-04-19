import { useState } from 'react'
import DatePicker from "react-datepicker";

const Datepicker = () => {
    const [startDate, setStartDate] = useState(null);
    return (
      <DatePicker dateFormat="Pp" placeholderText="select date Deadline" showTimeSelect selected={startDate} onChange={date => setStartDate(date)} />
    );
}

export default Datepicker
