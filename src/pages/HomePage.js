import { Container, Button, ButtonGroup, Row, Col } from "reactstrap";
// import LoginPage from "./LoginPage";
// import RegisterPage from "./RegisterPage";


const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col className="col-4" style={{ color: "#fff" }}>
                    <h1>Home Page</h1>
                </Col>
                {/* <Col>
                    <ButtonGroup className="col-4 float-end">
                        <Button className="bg-primary" href={LoginPage}>Login</Button>
                        <Button className="bg-success" href={RegisterPage}>Register</Button>
                    </ButtonGroup>
                </Col> */}
            </Row>
        </Container>
    );
};

export default HomePage;