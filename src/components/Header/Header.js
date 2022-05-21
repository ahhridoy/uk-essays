import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
        className="header"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" eventKey="/home">
                {" "}
                UK Essays
              </Nav.Link>
              <div className="services-container">
                <Nav.Link as={Link} to="/services" eventKey="/services">
                  Services
                  <div className="services-content">
                    <div>
                      <h4>Essay Services</h4>
                      <hr />
                      <Link to="/essay-service">Essay Writing Service</Link>
                      <Link to="/assignment-service">
                        Assignment Writing Service
                      </Link>
                      <Link to="/coursework-service">
                        Coursework Writing Service
                      </Link>
                      <Link to="/essay-plan-service">
                        Essay plan Writing Service
                      </Link>
                      <Link to="/reflective-service">
                        Reflective Essay Writing Service
                      </Link>
                      <Link to="/paper-service">
                        Research paper Writing Service
                      </Link>
                    </div>
                  </div>
                </Nav.Link>
              </div>
              <Nav.Link as={Link} to="/how-it-works" eventKey="/how-it-works">
                {" "}
                How It Works
              </Nav.Link>
              <Nav.Link as={Link} to="/offers" eventKey="/offers">
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