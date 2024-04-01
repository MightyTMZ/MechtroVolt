import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import NavBar from "../components/NavBar";

const LandingScreen = () => {
  return (
    <>
      <NavBar></NavBar>
      <Jumbotron />
      <Container className="my-5">
        <Row>
          <Col>
            <h2 id="about">About Us</h2>
            <p>
              A student-led non-profit organization and registered charity. We
              aim to raise money and provide supplies for students who showcase
              immense promise in their engineering projects. In addition, we
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
        {/* Row className="my-5">
          <Col>
            <h2 id="services">Our Events</h2>
            <ul>
              <li>
                <a href="#" className="events-link">
                  Project Building
                </a>
                : From design and prototyping to testing and optimization.
              </li>
              <li>
                <a href="#" className="events-link">
                  Workshops
                </a>
                : We aim to teach others through interactive sessions on various
                topics.
              </li>
              <li>
                <a href="/#competitions" className="events-link">
                  Competitions
                </a>
                : We host our own competitions and also participate in events
                hosted by external organizations.
              </li>
              <li></li>
              <li>
                <a href="/#networking-events" className="events-link">
                  Networking Events
                </a>
                : Opportunities to connect with like-minded individuals,
                professionals, and organizations in our community.{" "}
              </li>
            </ul>
          </Col>
        </Row>
        <h2>Our current running projects</h2>
        <Row>
          {/* Project 
          <Col md={4}>
            <div className="project-item">
              <img
                src={"img/humanoid.png"}
                alt="Project 1"
                className="img-fluid"
                style={{ width: "30%" }}
              />
              <h3>Humanoid</h3>
              <p>
                The humanoid project is a daunting task that engineers can't do
                by themselves. This project is where we create a large scale
                humanoid that can do basic actions such as walking, moving arms
                and hands. This project is quite the challenge. Using Arduino or
                Raspberry Pi, let's create this!
              </p>
            </div>
          </Col>
          {/* Project 2 
          <Col md={4}>
            <div className="project-item">
              <img
                src={"img/weather_balloon.png"}
                alt="Project 2"
                className="img-fluid"
                style={{ width: "30%" }}
              />
              <h3>Aquarius, the weather balloon</h3>
              <p>
                Aquarius, the weather balloon project aims to deploy a
                high-altitude balloon equipped with scientific instruments to
                collect atmospheric data. The balloon, typically filled with
                helium, ascends to the upper atmosphere, reaching heights of
                tens of kilometers above the Earth's surface. This project
                offers a unique opportunity to study weather patterns,
                atmospheric phenomena, and climate change, contributing to
                scientific research and enhancing our understanding of the
                Earth's atmosphere.
              </p>
            </div>
          </Col>
          {/* Project 3
          <Col md={4}>
            <div className="project-item">
              <img
                src={"img/drone.png"}
                alt="Project 3"
                className="img-fluid"
                style={{ width: "30%" }}
              />
              <h3>UrbanEcoGrow</h3>
              <p>
                The UrbanEcoGrow project utilizes drones with sensors and
                machine learning AI to monitor crop growth in real-time,
                optimizing resources and maximizing yield. Powered by renewable
                energy, these drones reduce carbon emissions and ensure proper
                crop growth. Additionally, a city-wide system converts carbon
                emissions into energy, supporting urban farming. This initiative
                promotes sustainability and addresses environmental challenges
                in urban areas. We plan to propose this idea to the City of
                Toronto.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <h2 id="team">Meet Our Team</h2>
            <ul>
              <li>Team Member 1: Role and brief bio.</li>
              <li>Team Member 2: Role and brief bio.</li>
              <li>Team Member 3: Role and brief bio.</li>
              <li>Team Member 4: Role and brief bio.</li>
            </ul>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <h2 id="contact">Contact Us</h2>
            <ul>
              <li>Email: info@mechtrovolt.com</li>
              <li>Phone: [Phone Number]</li>
              <li>Address: [Address]</li>
            </ul>
          </Col>
  </Row> */}
      </Container>
    </>
  );
};

export default LandingScreen;
