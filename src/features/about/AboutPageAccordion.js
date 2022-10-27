import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

function AboutPageAccordion(props) {
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
                	Currently, Tennessee State University Report on Market-Based Displacement on Communities of Color in Chattanooga and the Urban League of Greater Chattanooga: State of Black Chattanooga Inaugural Report and the Bureau of Labor Statistics on Current Tech Demographics and the Stack Overflow Annual Developer Survey.
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="4">
					<strong>Implementation</strong>
				</AccordionHeader>
                <AccordionBody accordionId="4">
					chattaCode initiaTive lorem ipsum dolor sit amet consectetur adipisicing elit. Ut est consequuntur velit, optio earum, harum qui unde at aliquid quod quam voluptatibus aliquam illum cum sit autem error quia voluptatem, dolores quis repellat. Sed minus necessitatibus porro quaerat reiciendis dignissimos dolor eum culpa quia labore eaque at ullam alias iure minima incidunt, dolore sequi soluta commodi excepturi ad omnis illo!
                </AccordionBody>
            </AccordionItem>
            </Accordion>
        </div>
    );
}
  
  export default AboutPageAccordion;