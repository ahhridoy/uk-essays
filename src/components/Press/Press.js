import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Press = () => {
  return (
    <main id="press">
      <Container>
        <h5 className="heading text-center text-secondary my-3">
          We'have received widespread<a href="#"> press coverage </a>since 2003
        </h5>
        <Row>
          <Col md={3} xs={6}>
            <img src="/assets/the-times-logo.webp" alt="logo" />
          </Col>
          <Col md={3} xs={6}>
          <img src="/assets/independent-logo.webp" alt="logo" />
          </Col>
          <Col md={3} xs={6}>
          <img src="/assets/bbc-logo.webp" alt="logo" />
          </Col>
          <Col md={3} xs={6}>
          <img src="/assets/daily-mail-logo.webp" alt="logo" />>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Press;
