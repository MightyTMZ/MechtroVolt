import { Container, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";
// this component is not currently being used

const NetworkingEvents = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Container className="my-5">
          <Row>
            <h2>Networking Events hosted by external organizations</h2>
            <p>
              MechtroVolt will be attending conferences that discuss many of the
              clusters we run.{" "}
            </p>
            <ul>
              <li>Electrical Engineering</li>
              <li>Mechanical Engineering</li>
              <li>Aerospace Engineering</li>
              <li>Data Science</li>
              <li>Software Engineering</li>
              <li>Civil Engineering</li>
              <br />
              <li>
                Due to financial strain, MechtroVolt will only attend
                conferences, venues, and other networking events hosted in
                Toronto. We hope in the future, we will have the privilege to
                attend events outside of Toronto.
              </li>
              <li>
                We hope these events will allow the chance for our members and
                students to connect and interact with professionals and
                like-minded individuals!
              </li>
            </ul>
          </Row>
          <Row>
            <h2>MechtroVolt Member Networking Events</h2>
            <p>
              Besides attending conferences hosted by external organizations,
              MechtroVolt will be hosting bi-monthly (every 2 months) networking
              events for members in all interest clusters to network and connect
              with each other.{" "}
            </p>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
};

export default NetworkingEvents;
