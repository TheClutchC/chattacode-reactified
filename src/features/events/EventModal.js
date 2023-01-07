import React, { useState } from 'react';
import { eventsData } from "../../app/data/eventsData";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Modal that pops up and gives all necessary info for that event on that day of the week
// Can be clicked out of by clicking outside modal
// Info included here: day, event, description, location, time, tech stack, and any other important info
// See if I need to map over eventsData again for here or if I can just import component over directly

const EventModal = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button 
        color="secondary" 
        onClick={toggle}
        className="mb-3"
        >
        Click Here For More Info +
      </Button>
        {eventsData.map(item => (
          <Modal 
            isOpen={modal} 
            toggle={toggle} 
            {...args} 
            key={item.id}
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
              <Button color="primary" onClick={toggle}>
                Do Something
              </Button>{' '}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        ))}
    </div>
  );
}

export default EventModal;