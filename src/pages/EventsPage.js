import React from "react";
import Events from "../features/events/Events";

const EventsPage = () => {
    return (
        <div>
            <h1 style={{ color: "orange" }}>Events Page</h1>
            <h4>Currently only in-person workshops:</h4>
            <Events />
        </div>
    );
};

export default EventsPage;