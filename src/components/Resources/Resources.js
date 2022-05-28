import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Resources = () => {
  return (
    <main id="resources">
      <Container>
        <h4>Resources</h4>
        <Row>
          <Col md={3} xs={6}>
            <div>
              <img src="/assets/resources1.png" alt="img" className="w-100" />
              <h5 className="p-2 text-light">
                <span>FREE</span> Lectures
              </h5>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div>
              <img src="/assets/resources2.png" alt="img" className="w-100" />
              <h5 className="p-2 text-light">
                <span>FREE</span> Essays
              </h5>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div>
              <img src="/assets/resources3.png" alt="img" className="w-100" />
              <h5 className="p-2 text-light">
                <span>FREE</span> Study Guides
              </h5>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div>
              <img src="/assets/resources4.png" alt="img" className="w-100" />
              <h5 className="p-2 text-light">
                <span>FREE</span> Referencing Resources
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Resources;
