import React from "react";
import { eventsData } from "../../app/data/eventsData";
import { Row, Col, Card, CardTitle, CardSubtitle, CardText } from "reactstrap";

//-------Below maps through array of objects(eventsData.js) and returns requested info using card layout in Reactstrap---------
  const Events = () => {
    return (
      <Row>
        <Col>
          {eventsData.map(item => (
            <Card 
              className="text-center my-2" 
              key={item.id} 
              color="dark"
              outline
            >
              <CardTitle className="h4 pb-2" key={item.day}>
                {item.day}
              </CardTitle>
              <CardSubtitle className="h6" key={item.eventName}>
                {item.eventName}
              </CardSubtitle>
              <CardText className="h6" key={item.time}>
                {item.time}
              </CardText>
            </Card>
          ))}
        </Col>
      </Row>
    );
  }
  
//-----------------------Below is right, but doesn't use Reactstrap for design, so SASS/CSS needed-------------------
// const Events = () => {
//     return (
//       <div>
//         {eventsData.map(item => (
//           <div key={item.id}>
//             <p>Event Name: {item.eventName}</p>
//             <p>Day: {item.day}</p>
//             <p>Time: {item.time}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }

  export default Events;