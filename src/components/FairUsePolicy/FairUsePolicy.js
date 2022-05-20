import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const FairUsePolicy = () => {
  return (
    <main id="policy">
      <Container className="py-5 text-light">
        <Row>
          <Col md={6}>
            <h2>Our Fair Use Policy</h2>
            <p>
              Understanding how to use your essay is key to gaining the most
              from your experience with us. Watch now to learn how:
            </p>
            <Button variant="warning">Our Fair Use Policy ></Button>
          </Col>
          <Col md={6}>Video</Col>
        </Row>
      </Container>
    </main>
  );
};

export default FairUsePolicy;
