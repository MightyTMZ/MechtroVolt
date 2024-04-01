import { Container, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";

const Competitions = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Container className="my-5">
          <Row>
            <h2>Competitions hosted by external organizations</h2>
            <h3>Electrical Engineering</h3>
            <ul>
              <li>University of Waterloo Electric Vehicle Challenge</li>
              <li>
                The Mentors Project Global Hackathon and Engineering Competition
              </li>
            </ul>
            <h3>Mechanical Engineering</h3>
            <ul>{/* Add competitions for Mechanical Engineering here */}</ul>
            <h3>Aerospace Engineering</h3>
            <ul>{/* Add competitions for Aerospace Engineering here */}</ul>
            <h3>Software Engineering</h3>
            <ul>Hack the Ridge - Hosted by Iroqois Ridge High School</ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <h3>Data Science</h3>
            <ul>
              <li>NASA Space Apps challenge</li>
            </ul>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Competitions;
