import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './MyCalendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className='calendar-container'>
      <h2>Selected Date: {date.toDateString()}</h2>
      <Calendar
        className='custom-calendar'
        onChange={onChange}
        value={date}
        tileClassName={({ date, view }) =>
          view === 'month' && date.getDay() === 0 ? 'highlight-sunday' : ''
        }
      />
    </div>
  );
};

export default MyCalendar;
