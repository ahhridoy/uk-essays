// import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";

import React from "react";

const FaqComponent = () => {
  return (
    <Accordion
      defaultActiveKey="0"
      className="custom-accordion"
      data-aos="fade-up"
    >
      <Accordion.Item eventKey="0" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">
          What is the total supply?
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
          When is the official launch?
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
          How do I get whitelisted?
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

export default FaqComponent;
