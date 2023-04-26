import React from "react";
import Events from "../features/events/Events";
import {
    Container,
    Row,
    Col
} from "reactstrap";

const EventsPage = () => {
    return (
        <Container>
            <Row>
                <Col className="col-12 my-5">
                    <Events />
                </Col>
            </Row>
        </Container>
    );
};

export default EventsPage;