import React from "react";
import { eventsData } from "../../app/data/eventsData";

const Events = () => {
    return (
      <div>
        {eventsData.map(item => (
          <div key={item.id}>
            <p>Event Name: {item.eventName}</p>
            <p>Day: {item.day}</p>
            <p>Time: {item.time}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Events;