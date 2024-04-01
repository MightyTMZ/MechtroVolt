import { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./ContactUs.css"; // Import CSS file for styling

const ContactUs = () => {
  const [isHoveringOverLinkedIn, setIsHoveringOverLinkedIn] = useState(false);
  const [isHoveringOverInstagram, setIsHoveringOverInstagram] = useState(false);

  const handleMouseHoverLinkedIn = () => {
    setIsHoveringOverLinkedIn(true);
  };

  const handleMouseLeaveLinkedIn = () => {
    setIsHoveringOverLinkedIn(false);
  };

  const handleMouseHoverInstagram = () => {
    setIsHoveringOverInstagram(true);
  };

  const handleMouseLeaveInstagram = () => {
    setIsHoveringOverInstagram(false);
  };

  const redirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <NavBar />
      <Container className="my-5">
        <Row>
          <Col>
            <h2 id="about">Email</h2>
            <p>
              Have any business inquires or suggestions? Don't hesitate to reach
              out or connect with us!
            </p>
            <p>
              <a href="mailto:mechtrovolt@gmail.com">mechtrovolt@gmail.com</a>
            </p>
          </Col>
          {/* <Col>
            <img
              src={"img/mechtrovolt.png"}
              alt="MechtroVolt Logo"
              style={{ height: "200px", width: "" }}
            />
  </Col> */}
        </Row>
        <Row>
          <h2>Social Media</h2>
        </Row>
        <Row>
          <Col>
            <FaLinkedin
              className={isHoveringOverLinkedIn ? "linkedin-hover" : ""}
              onMouseEnter={handleMouseHoverLinkedIn}
              onMouseLeave={handleMouseLeaveLinkedIn}
              size={60}
              onClick={() =>
                redirect("https://www.linkedin.com/company/mechtrovolt/")
              }
            />
            <AiFillInstagram
              className={isHoveringOverInstagram ? "instagram-hover" : ""}
              onMouseEnter={handleMouseHoverInstagram}
              onMouseLeave={handleMouseLeaveInstagram}
              size={60}
              onClick={() => redirect("https://www.instagram.com/mechtrovolt/")}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
