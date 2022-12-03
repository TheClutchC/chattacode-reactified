import React from "react";

export const Events = () => {
    const data = () => [
        {
            id: 0,
            day: "Monday",
            date: "",
            time: "6 p.m. - 8 p.m.",
            eventName: "Coding in the Park",
            location: "",
            description: "",
            stack: "",
            inPerson: true
        },
        {
            id: 1,
            day: "Tueday",
            date: "",
            time: "6 p.m. - 8 p.m.",
            eventName: "Learning Essentials ( HTML, CSS, Javascript )",
            location: "",
            description: "",
            stack: "",
            inPerson: true
        },
        {
            id: 2,
            day: "Wednesday",
            date: "",
            time: "6 p.m. - 8 p.m.",
            eventName: "Learning Essentials ( HTML, CSS, Javascript )",
            location: "",
            description: "",
            stack: "",
            inPerson: true
        },
        {
            id: 3,
            day: "Thursday",
            date: "",
            time: "6 p.m. - 8 p.m.",
            eventName: "Progression (Javascript, Bootstrap, React)",
            location: "",
            description: "",
            stack: "",
            inPerson: true
        },
        {
            id: 4,
            day: "Friday",
            date: "",
            time: "6 p.m. - 8 p.m.",
            eventName: "Progression (Javascript, Bootstrap, React)",
            location: "",
            description: "",
            stack: "",
            inPerson: true
        },
        {
            id: 5,
            day: "Saturday",
            date: "",
            time: "12 p.m. - 8 p.m.",
            eventName: "Partnered Project Building",
            location: "",
            description: "",
            stack: "",
            inPerson: true
        },
        {
            id: 6,
            day: "Sunday",
            date: "",
            time: "6 p.m. - 8 p.m.",
            eventName: "Sundae Funday",
            location: "",
            description: "",
            stack: "",
            inPerson: true
        }
    ];

    const listItems = data.map(
        (element) => {
            return (
                <ul type="square" key={element.id}>
                    <li style={{ 
                          fontWeight: 'bold', 
                          color: 'red'
                        }}
                    >
                        {element.day}
                    </li>
                    <li>{element.eventName}</li>
                </ul>
            )
        }
    )
    
    return (
        <div>
            {listItems}
        </div>
    )

}