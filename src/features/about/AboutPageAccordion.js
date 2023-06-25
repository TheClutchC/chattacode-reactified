import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Card,
    CardSubtitle,
    CardText,
    List
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
                    ChattaCode strives to build equity in our local developer community and beyond by prioritizing the active elimination of barriers for entry into web development for Chattanooga's underrepresented communities.
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="2">
                    <strong>About Us</strong>
                </AccordionHeader>
                <AccordionBody accordionId="2">
                    ChattaCode is a developer community created in 2022 for the purpose of providing equitable access to educational resources and career development opportunities for underrepresented communities in the city of Chattanooga, Tennessee.
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="3">
					<strong>Why Does It Matter?</strong>
				</AccordionHeader>
                <AccordionBody accordionId="3">
                    <>
                        <Card>
                            <CardSubtitle 
                                tag="h3" 
                                className='text-center bg-secondary'
                            >
                                Current Statistics
                            </CardSubtitle>
                            <CardText tag="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu. Mattis aliquam faucibus purus in massa tempor nec. Adipiscing elit pellentesque habitant morbi tristique. Bibendum arcu vitae elementum curabitur vitae nunc. Pellentesque elit eget gravida cum sociis natoque penatibus et. Iaculis nunc sed augue lacus viverra vitae. Quis auctor elit sed vulputate mi sit. Cras tincidunt lobortis feugiat vivamus at augue. Quisque egestas diam in arcu cursus euismod quis viverra. Diam sit amet nisl suscipit adipiscing bibendum est. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Id faucibus nisl tincidunt eget nullam non nisi. Ridiculus mus mauris vitae ultricies leo integer. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Velit egestas dui id ornare.
                            </CardText>
                            <CardSubtitle 
                                tag="h6" 
                                className='text-center bg-secondary'
                            >
                                For Chattanooga
                            </CardSubtitle>
                            <List>
                                <li><a href='https://www.chattaction.org/negro-removal-2019.html'>Tennessee State University Report</a> on Market-Based Displacement on Communities of Color in Chattanooga</li>
                                <li><a href='https://www.ulchatt.net/_files/ugd/109e62_9589ecf7d3464aefaa8fe458a4da782c.pdf'>Urban League of Greater Chattanooga</a> State of Black Chattanooga Inaugural Report</li>
                            </List>
                            <CardSubtitle 
                                tag="h6" 
                                className='text-center bg-secondary'
                            >
                                For Overall Techscape
                            </CardSubtitle>
                            <List>
                                <li>Bureau of Labor Statistics on Current Tech Demographics</li>
                                <li><a href='https://survey.stackoverflow.co/2022/'>Stack Overflow Annual Developer Survey</a></li>
                            </List>
                        </Card>  
                    </>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="4">
					<strong>Implementation</strong>
				</AccordionHeader>
                <AccordionBody accordionId="4">
					The overarching goal of ChattaCode is to put into practice suggestions provided by Urban League of Chattanooga and other similar organizations to improve the economic opportunities and resources for the people of Chattanooga and beyond that are underrepresented in the tech field.
                </AccordionBody>
            </AccordionItem>
            </Accordion>
        </div>
    );
}
  
  export default AboutPageAccordion;