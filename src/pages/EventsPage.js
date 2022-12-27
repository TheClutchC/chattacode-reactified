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
                <Col className="col-12 my-4 mx-2">
                    <h4 className="text-decoration-underline text-center">In-Person</h4>
                </Col>
                <Col className="col-12 mx-2">
                    <Events />
                </Col>
            </Row>
            <Row>
                <Col className="col-12 my-4 mx-2">
                    <h4 className="text-decoration-underline text-center">Virtual</h4>
                </Col>
                <Col className="col-12 mx-2">
                    <Events />
                </Col>
            </Row>
        </Container>
    );
};

export default EventsPage;