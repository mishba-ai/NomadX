import { useState, useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { memo } from 'react';

function Showdatepicker(props) {

  const [dateRange, setDateRange] = useState({
    from: null,
    to: null,
  });
  

  const handleDayClick = (day) => {
    const { from, to } = dateRange;
    if (from && to && day >= from && day <= to) {
      setDateRange({
        from: null,
        to: null,
      });
      return;
    }
    if (!from) {
      setDateRange({
        from: day,
        to: null,
      });
    } else if (!to && day > from) {
      setDateRange({
        from,
        to: day,
      });
    } else {
      setDateRange({
        from: day,
        to: null,
      });
    }
  };

  const { from, to } = dateRange;
  const modifiers = { start: from, end: to };
 
  

  return (

    <div className="w-[826px] border text-white border-slate-800 bg-black rounded-3xl  flex flex-col justify-center items-center h-96">
      {/* <DayPicker mode="range" /> */}
      <DayPicker 
        className=""
        numberOfMonths={2}
        selectedDays={[from, { from, to }]}
        modifiers={modifiers}
        onDayClick={handleDayClick}
      />
      <div className="airbnb-date-range-picker__display">
        {from && to ? (
          <>
            <span>{from.toLocaleDateString()}</span>
            <span> - </span>
            <span>{to.toLocaleDateString()}</span>
          </>
        ) : (
          "Select check-in and check-out dates"
        )}
      </div>
    </div>
  );
}

export default Showdatepicker;
