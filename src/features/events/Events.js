import React, {useState} from "react";
import { eventsData } from "../../app/data/eventsData";
import { 
  Row, 
  Col, 
  Card, 
  CardTitle, 
  CardSubtitle, 
  CardText, 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter 
} from "reactstrap";

//-------Below maps through array of objects(eventsData.js) and returns requested info using card layout in Reactstrap---------
  const Events = (args) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

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
              <CardTitle className="h4 pb-2 pt-1 text-light bg-dark" key={item.day}>
                {item.day}
              </CardTitle>
              <CardSubtitle className="h6" key={item.eventName}>
                {item.eventName}
              </CardSubtitle>
              <CardText className="h6" key={item.time}>
                {item.time}
              </CardText>

              {/* Below is code for a modal
               that pops up when clicked for
                each day of the week */}

              {/* <Button key={item.day} onClick={toggle}>
                Click here for more info about {item.day}'s meeting
              </Button>
              <Modal
                isOpen={modal} 
                toggle={toggle} 
                {...args}
              >
                <ModalHeader 
                  toggle={toggle} 
                  key={item.day}
                >
                  {item.day}
                </ModalHeader>
                <ModalBody key={item.description}>
                  {item.description}
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
              </Modal> */}
              {/* This is the end of
               the code for the modal.
               Code seems to break once 
               modal is toggled, only 
               displays info for Sunday
               on every button and loses 
               the ability to scroll up 
               and down the page. */}

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