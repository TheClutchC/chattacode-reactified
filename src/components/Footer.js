import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      style={{
        color: "#fff",
        backgroundImage: "radial-gradient( #fff, 7%, #000 )",
        textAlign: "center",
      }}
    >
      <Row>
        <Col>
          <strong>©</strong> <em>2022-2023 ChattaCode</em>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Links</h4>
          <ul class="list-unstyled">
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="events.html">Events</a>
            </li>
            <li>
              <a href="#">Connect</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="projects.html">Projects</a>
            </li>
          </ul>
        </Col>
        <Col>
          <h4>Find Us</h4>
          <a class="btn btn-dark" href="http://slack.com/">
            <i class="fa-brands fa-2x fa-slack"></i>
          </a>
          <a class="btn btn-dark" href="http://discord.com/">
            <i class="fa-brands fa-2x fa-discord"></i>
          </a>
          <a class="btn btn-dark" href="http://github.com/">
            <i class="fa-brands fa-2x fa-github"></i>
          </a>
        </Col>
        <Col>
          <h4>Contact Us</h4>
          <a role="button" class="btn btn-link" href="tel:4235550102">
            <i class="fa fa-phone fa-lg text-primary"></i> 423-555-0102
          </a>
          <br />
          <a
            role="button"
            class="btn btn-link"
            href="mailto:info@chattacode.co"
          >
            <i class="fa fa-envelope fa-lg text-primary"></i> info@chattacode.co
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
