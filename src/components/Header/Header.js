import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

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
                <IoIosHome /> UK Essays
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
                        <Link to="/research-service">
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
                        <Link to="/powerpoint-service">
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
                          <Link to="/exam-service">Exam Revision Service</Link>
                          <Link to="/academic-service">
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
              <Nav.Link as={Link} to="/samples" eventKey="/samples">
                Samples
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing" eventKey="/home">
                Reviews
              </Nav.Link>
              <div className="about-container">
                <Nav.Link as={Link} to="/contact" eventKey="/contact">
                  About Us
                  <div className="about-content">
                    <div className="about-router">
                      <div>
                        <h5>ABOUT UKESSAYS</h5>
                        <hr />
                        <Link to="/about">About UK Essays</Link>
                        <Link to="/expert-writers">Our Expert Writers</Link>
                        <Link to="/guarantees">Our Guarantees</Link>
                        <Link to="/quality">Our Quality Procedures</Link>
                        <Link to="/customer-reviews">Customer Reviews</Link>
                        <Link to="/essay-guide">Essay Buying Guide</Link>
                        <Link to="/finance">Payl8r Finance</Link>
                      </div>
                      <div>
                        <h5>CONTACT</h5>
                        <hr />
                        <Link to="/contact">Contact UK Essays</Link>
                        <Link to="/press-centre">Press Centre & Enquiries</Link>
                        <Link to="/write-ukessays">Write for UK Essays</Link>
                        <Link to="/faqs">FAQs</Link>
                      </div>
                      <div>
                        <Link to="/fair-use">
                          <img
                            src="/assets/fair-use.jpg"
                            alt=""
                            className="w-100"
                          />
                          <p>
                            <Link to="/fair-use">Fair Use Policy</Link>
                          </p>
                        </Link>
                      </div>
                      <div>
                        <img
                          src="/assets/sign-in.jpg"
                          alt=""
                          className="w-100"
                        />
                        <p>
                          <a href="#">Account Login</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Nav.Link>
              </div>
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
