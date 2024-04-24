import { Row, Col, Container } from "react-bootstrap";
import NavBar from "../components/NavBar";

const AboutUs = () => {
  return (
    <>
      <NavBar></NavBar>
      <Container className="my-5">
        <Row>
          <Col>
            <h2 id="about">About Us</h2>
            <p>
              A student-led non-profit organization and registered charity. We
              aim to raise money and provide supplies for students who showcase
              immense promise in their STEM projects. In addition, we
              host events and workshops with companies to provide a learning
              opportunity for underprivileged kids. All earnings and proceeds
              will go towards charity.
            </p>
          </Col>
          <Col>
            <img
              src={"img/mechtrovolt.png"}
              alt="MechtroVolt Logo"
              style={{ height: "200px", width: "" }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 id="events">Events</h2>
            <p>
              From workshops to project showcases, we aim to empower the next
              generation of STEM experts who come from underprivileged communities.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 id="events">Partnerships and Sponsors</h2>
            <p>
              We understand that some engineering projects require a number of
              supplies and money in order to make a meaningful impact. Feel that
              money or supplies is an obstacle? Don't worry! We are here to
              help! We will strive to fundraise money and negotiate with
              suppliers to ensure that promising engineering projects and ideas
              do not hindered by a lack of money or supplies!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 id="events">Suggestions?</h2>
            <p>
              Since we are a student-led organization, we are OPEN to ANY
              suggestion you may have! We ask that you reach out to us kindly if
              you have any suggestions that you want us to acknowledge. Contact
              us <a href="#contact">here</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
