import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const FairUsePolicy = () => {
  return (
    <main id="policy">
      <Container className="py-5 text-light">
        <Row>
          <Col md={6} xs={12}>
            <h2>Our Fair Use Policy</h2>
            <p className="fs-5">
            Our Fair Use Policy outlines the way in which the <br /> work we provide should be used, and gives you the <br /> necessary guidance to get the most out of your <br /> model essay.
            </p>
            <Button variant="warning">Read Our <strong>Fair Use Policy</strong> ></Button>
          </Col>
          <Col md={6} xs={12}>Video</Col>
        </Row>
      </Container>
    </main>
  );
};

export default FairUsePolicy;
