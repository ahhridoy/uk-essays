import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">UK Essays</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Offers</Nav.Link>
              <Nav.Link href="#pricing">Support</Nav.Link>
              <Nav.Link href="#pricing">Notification</Nav.Link>
              <Nav.Link href="#pricing">Sign In</Nav.Link>
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
              <Nav.Link href="#home">UK Essays</Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link>
              <Nav.Link href="#pricing">How It Works</Nav.Link>
              <Nav.Link href="#pricing">Offers</Nav.Link>
              <Nav.Link href="#pricing">Samples</Nav.Link>
              <Nav.Link href="#pricing">Reviews</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#pricing">Free Resources</Nav.Link>
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
