import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ServicesComponent = () => {
  return (
    <main id="services">
      <Container>
        <h4>Services</h4>
        <Row>
          <Col md={3} xs={6}>
            <div>
              <img src="/assets/services1.png" alt="img" className="w-100" />
              <h5 className="p-2 bg-dark text-light">Essay Writing Service</h5>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div>
              <img src="/assets/services2.png" alt="img" className="w-100" />
              <h5 className="p-2 bg-dark text-light">
                Assignment Writing Service
              </h5>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div>
              <img src="/assets/services3.png" alt="img" className="w-100" />
              <h5 className="p-2 bg-dark text-light">
                Dissertation Writing Service
              </h5>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div>
              <img src="/assets/services4.png" alt="img" className="w-100" />
              <h5 className="p-2 bg-dark text-light">Dissertation Proposals</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ServicesComponent;
