import { Row, Col, Container } from "react-bootstrap";
import NavBar from "../components/NavBar";

const Partnerships = () => {
  return (
    <>
      <NavBar></NavBar>
      <Container className="my-5">
        <Row>
          <Col>
            <h2 id="about">Parterships</h2>
            <p>
              We are currently reaching out and working diligently to establish
              partnerships with companies and suppliers. More information will
              appear here soon!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 id="interests-in-partnerships">Interested in partnership?</h2>
            <p>
              If you happen to be an organization that wants to get involved,
              please don't hesitate to reach out to us{" "}
              <a href="/#contact">here</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Partnerships;
