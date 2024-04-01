import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MechtroVolt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#about">About Us</Nav.Link>
            <Nav.Link href="/#partnerships">Our Partners</Nav.Link>
            <Nav.Link href="/#home">How we work?</Nav.Link>{" "}
            {/* for now, when the idea becomes clearer, make sure to add a page that takes about how MechtroVolt operates*/}
            <Nav.Link href="/#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
