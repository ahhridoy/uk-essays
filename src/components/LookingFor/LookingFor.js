// import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";

import React from "react";

const LookingFor = () => {
  return (
    <Accordion
      defaultActiveKey="0"
      className="custom-accordion"
      data-aos="fade-up"
    >
      <Accordion.Item eventKey="0" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">
          Essay Services
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">
          Dissertation Services
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">
          Report Services
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">
          Other Services
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default LookingFor;
