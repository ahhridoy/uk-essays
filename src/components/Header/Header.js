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
                    <div className="services-router">
                      <div>
                        <h5>ESSAY SERVICES</h5>
                        <hr />
                        <Link to="/essay-service">Essay Writing Service</Link>
                        <Link to="/assignment-service">
                          Assignment Writing Service
                        </Link>
                        <Link to="/coursework-service">
                          Coursework Writing Service
                        </Link>
                        <Link to="/essayplan-service">
                          Essay plan Writing Service
                        </Link>
                        <Link to="/reflective-service">
                          Reflective Essay Writing Service
                        </Link>
                        <Link to="/paper-service">
                          Research paper Writing Service
                        </Link>
                      </div>
                      <div>
                        <h5>DISSERTATION SERVICES</h5>
                        <h6>Now at UKDiss.com</h6>
                        <hr />
                        <Link to="/dissertation-service">
                          Dissertation Writing Service
                        </Link>
                        <Link to="/proposal-service">
                          Dissertation Proposal Service
                        </Link>
                        <Link to="/titles-service">
                          Topics with Titles Service
                        </Link>
                        <Link to="/review-service">
                          Literature Review Service
                        </Link>
                        <Link to="/capstone-service">
                          Capstone Project Writing Service
                        </Link>
                      </div>
                      <div>
                        <h5>REPORT SERVICES</h5>
                        <hr />
                        <Link to="/report-service">Report Writing Service</Link>
                        <Link to="/reflective-service">
                          Reflective Writing Service
                        </Link>
                        <Link to="/case-study-service">
                          Case Study Writing Service
                        </Link>
                        <Link to="/power-point-service">
                          PowerPoint Presentation Service
                        </Link>
                      </div>
                      <div>
                        <div>
                          <h5>EDITING / MARKING SERVICES</h5>
                          <hr />
                          <Link to="/marking-service">Marking Service</Link>
                          <Link to="/editing-service">Editing Service</Link>
                        </div>
                        <div>
                          <h5>OTHER SERVICES</h5>
                          <hr />
                          <Link to="/exam-revision-service">
                            Exam Revision Service
                          </Link>
                          <Link to="/academic-poster-service">
                            Academic Poster Service
                          </Link>
                          <Link to="/cv-service">CV Writing Service</Link>
                        </div>
                      </div>
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
