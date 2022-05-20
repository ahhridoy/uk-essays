import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Press = () => {
  return (
    <main id="press">

        <Container>
          <h4 className="heading text-center text-light">
            We'have received widespread<a href="#"> press coverage </a>since
            2003
          </h4>
          <Row>
            <Col md={3} xs={6}>
              <h2>THE TIMES</h2>
            </Col>
            <Col md={3} xs={6}>
              <h2>INDEPENDENT</h2>
            </Col>
            <Col md={3} xs={6}>
              <h2>BBC</h2>
            </Col>
            <Col md={3} xs={6}>
              <h2>DAILY MAIL</h2>
            </Col>
          </Row>
        </Container>

    </main>
  );
};

export default Press;
