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
                <Col>
                    <h1>About Page</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AboutPageAccordion />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;