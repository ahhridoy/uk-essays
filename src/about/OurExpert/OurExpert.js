import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Press from "../../components/Press/Press";
import { FiUsers, FiFileText } from 'react-icons/fi';

const OurExpert = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="our-area">
        <Container className="text-light">
          <h2 className="text-center">Our Areas of Expertise</h2>
          <p className="text-center">
            At UKEssays we have both in-house and freelance writing experts in a
            vast range of academic subjects. <br />
            All our staff are qualified with a minimum of a 2:1 degree in their
            chosen subject area, with many writers holding multiple degrees{" "}
            <br />
            across a range of subjects.
          </p>
          <div className="text-center">
            <Button variant="danger">View our Essay Writing Service</Button>
          </div>
        </Container>
      </section>

      <section id="subject-area">
        <Container>
          <h2 className="text-center my-4">Subject Areas</h2>
          <Row>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/accounting.jpg" alt="" className="w-100" />
                <div className="p-3">
                  <h5>Accounting</h5>
                    <div className="ms-3">
                      <p><FiUsers /> Writers in this area: 26</p>
                      <p><FiFileText /> Lecture 26</p>
                      <p><FiFileText /> No Sample available 26</p>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="how-expert">
        <Container>
          <h2 className="text-center">See How Our Experts Can Help You</h2>
          <p className="text-center">
            We offer a wide range of academic services from essay and assignment
            writing, through to full dissertation preparation and proofreading.
          </p>
          <div className="text-center">
            <Button variant="danger">Our Services</Button>
          </div>
        </Container>
      </section>

      <section>
        <Press />
      </section>
    </main>
  );
};

export default OurExpert;
