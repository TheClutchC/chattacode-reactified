import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import AboutPageAccordion from "../features/about/AboutPageAccordion";

const AboutPage = () => {
    return (
        <Container>
            <Row>
                <Col className="my-5">
                    <AboutPageAccordion />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;