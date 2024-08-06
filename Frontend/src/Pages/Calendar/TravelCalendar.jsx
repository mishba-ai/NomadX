import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

//moment library is used to format the date and time in the calendar
//react-big-calendar is a library that is used to create a calendar in react
// momentLocalizer is used to localize the calendar to the moment.js library means it will use moment.js to format the date and time

function TravelCalendar() {
  const localizer = momentLocalizer(moment); // this is for  the calendar to use moment.js

  // events is an array of objects that contains the events that will be displayed in the calendar
  const [events, setEvents] = useState([
    {
      title: "london-tokyo",
      start: new Date(2022, 6, 1),
      end: new Date(2022, 6, 10),
      allDay: true,
      resourcs: "flight",
    },
    {
      title: "tokyo",
      start: new Date(2022, 6, 10),
      end: new Date(2022, 6, 15),
      allDay: true,
      resourcs: "stay",
    },
  ]);

  const eventsStyleGetter = (event, isSelected) => {
    let style = {
      backgroundColor: event.resource === "flight" ? "#" : "#ecf0f1",
      color: event.resource === "flight" ? "white" : "black",
      transition: "all 0.3s ease",
      border: "none",
    };
    if (isSelected) {
      style.backgroundColor = "#3498db";
      style.color = "white";
      style.transform = "scale(1.02)";
      style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    }
    return {
      style,
    };
  };

  return (
    <div className=" h-full border-none">
      <Calendar 
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        style={{ color: "#9dc8f9", backgroundColor: "",border:'none',borderRadius:'10px',borderBlockWidth:'1px' }}
        eventPropGetter={eventsStyleGetter}
      />
    </div>
  );
}

export default TravelCalendar;
