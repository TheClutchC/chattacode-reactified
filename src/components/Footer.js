import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

const mapLinks = [
  'Home', 
  'About', 
  'Events', 
  'Connect',
  'Blog',
  'Projects'
];

const Footer = () => {
  const linkPaths = [
    '/', 
    '/about', 
    '/events', 
    '/connect', 
    '/blog', 
    '/projects'
  ];

  return (
    <Container fluid className="text-center bg-dark text-light footer">
      <Row>
        <Col>
          <strong>©</strong> <em>2022-2023 ChattaCode</em>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Links</h4>
          <ul className="list-unstyled">
            <li>
              {mapLinks.map((page, index) => (
                <div key={page} className="py-1 px-4">
                  <NavLink to={linkPaths[index]}>
                    {page}
                  </NavLink>
                </div>
              ))}
            </li>
          </ul>
        </Col>
        <Col>
          <h4>Find Us</h4>
          <a className="btn btn-light mx-1" href="https://discord.com/channels/1047165567859179550/1047165567859179552">Discord</a>
          <a className="btn btn-light mx-1" href="https://github.com/TheClutchC/chattacode-reactified">GitHub</a>
        </Col>
        <Col>
          <h4>Contact Us</h4>
          <a role="button" className="btn btn-link" href="tel:4235550102">423-555-0102</a>
          <br />
          <a role="button" className="btn btn-link" href="mailto:info@chattacode.co" >info@chattacode.co</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;