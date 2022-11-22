import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Container,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardHeader
} from 'reactstrap';

const AboutPageAccordion = (props) => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
  
    return (
        <div>
            <Accordion open={open} toggle={toggle}>
            <AccordionItem>
                <AccordionHeader targetId="1">
                    <strong>Mission Statement</strong>
                </AccordionHeader>
                <AccordionBody accordionId="1">
                    chattaCode strives to build equity in our local developer community and beyond by prioritizing the active elimination of barriers for entry into web development for Chattanooga's underrepresented communities.
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="2">
                    <strong>About Us</strong>
                </AccordionHeader>
                <AccordionBody accordionId="2">
                    chattaCode initiaTive is a developer community created in 2022 for the purpose of providing equitable access to educational resources and career development opportunities for underrepresented communities in Chattanooga.
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="3">
					<strong>Why Does It Matter?</strong>
				</AccordionHeader>
                <AccordionBody accordionId="3">
                    <Container>
                        <Card>
                            <CardHeader 
                                tag="h2" 
                                className='bg-dark text-light'
                            >
                                Current Statistics
                            </CardHeader>
                            <CardTitle 
                                tag="h4" 
                                className='bg-secondary'
                            >
                                For Chattanooga
                            </CardTitle>
                            <Container>
                                <ul>
                                    <li>
                                        <a href='https://www.chattaction.org/negro-removal-2019.html'>
                                            Tennessee State University Report on Market-Based Displacement on Communities of Color in Chattanooga
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.ulchatt.net/_files/ugd/109e62_9589ecf7d3464aefaa8fe458a4da782c.pdf'>
                                            Urban League of Greater Chattanooga: State of Black Chattanooga Inaugural Report
                                        </a>
                                    </li>
                                </ul>
                            </Container>
                        </Card>
                        <Card color='dark' inverse><h4>For Overall Techscape</h4></Card>
                        <Container>
                            <ul>
                                <li>
                                    Bureau of Labor Statistics on Current Tech Demographics
                                </li>
                                <li>
                                    <a href='https://survey.stackoverflow.co/2022/'>Stack Overflow Annual Developer Survey
                                    </a>
                                </li>
                            </ul>
                        </Container>
                    </Container>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="4">
					<strong>Implementation</strong>
				</AccordionHeader>
                <AccordionBody accordionId="4">
					The overarching goal of chattaCode is to put into practice suggestions provided by Urban League of Chattanooga and other similar organizations to improve the economic opportunities and resources for the people of Chattanooga and beyond that are underrepresented in the tech field.
                </AccordionBody>
            </AccordionItem>
            </Accordion>
        </div>
    );
}
  
  export default AboutPageAccordion;