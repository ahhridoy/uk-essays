import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">UK Essays</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/features" eventKey="/">
                Offers
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing" eventKey="/">
                Support
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing" eventKey="/">
                Notification
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing" eventKey="/">
                Sign In
              </Nav.Link>
              <Form className="d-flex">
                <Button variant="outline-warning">Search</Button>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" eventKey="/home">
                {" "}
                UK Essays
              </Nav.Link>
              <Nav.Link as={Link} to="/services" eventKey="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/how-it-works" eventKey="/how-it-works">
                {" "}
                How It Works
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing" eventKey="/home">
                Offers
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing" eventKey="/home">
                Samples
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing" eventKey="/home">
                Reviews
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing" eventKey="/home">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing" eventKey="/home">
                Free Resources
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Button variant="success">Place an order</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
