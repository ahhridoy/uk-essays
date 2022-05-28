// import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Col, Row } from "react-bootstrap";

import React from "react";

const ReferenceLibrary = () => {
  return (
    <Accordion
      defaultActiveKey="0"
      className="custom-accordion"
      data-aos="fade-up"
    >
      <Accordion.Item eventKey="0" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">
          Example and Sample Academic Papers
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p className="bg-info">
            Professionally Written Samples - These sample papers were written by
            our expert writers to demonstrate our quality and work.
          </p>
          <p>
            <a href="#">Professionally Written Essay Samples</a>
          </p>
          <p>
            <a href="#">Professionally Written Assignment Samples</a>
          </p>
          <p>
            <a href="#">Professionally Written Coursework Samples</a>
          </p>
          <p>
            <a href="#">All Professionally Written Samples</a>
          </p>
          <p className="bg-info">Student Written Examples</p>
          <p>
            <a href="#">Student Written Essays</a>
          </p>
          <p>
            <a href="#">Student Written Assignment Examples</a>
          </p>
          <p>
            <a href="#">Student Written Coursework Examples</a>
          </p>
          <p>
            <a href="#">Student Written Dissertations @ UKDiss</a>
          </p>

          <h4>Example Dissertation Sections @ UKDiss</h4>
          <Row>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Dissertation Proposals</a>
              </p>
              <p>
                <a href="#">Dissertation Introductions</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Dissertation Methodologies</a>
              </p>
              <p>
                <a href="#">Research Projects</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Literature Reviews</a>
              </p>
              <p>
                <a href="#">Dissertation Titles</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Dissertation Topics</a>
              </p>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">
          Referencing Guides and Tools
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>
            <a href="#">Referencing Index</a>
          </p>
          <hr />
          <h4>Reference Tools</h4>
          <Row>
            <Col md={3} xs={6}>
              <p>
                <a href="#">APA Referencing Tool</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Harvard Referencing Tool</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">OSCOLA Referencing Tool</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Vancouver Referencing Tool</a>
              </p>
            </Col>
          </Row>
          <h4>Reference Guides</h4>
          <Row>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Harvard Referencing Guide</a>
              </p>
              <p>
                <a href="#">APA Referencing Guide</a>
              </p>
              <p>
                <a href="#">ASA Referencing Guide</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Vancouver Referencing Guide</a>
              </p>
              <p>
                <a href="#">OSCOLA Referencing Guide</a>
              </p>
              <p>
                <a href="#">Blue Book Referencing Guide</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">MLA Referencing Guide</a>
              </p>
              <p>
                <a href="#">MHRA Referencing Guide</a>
              </p>
              <p>
                <a href="#">Turabian Referencing Guide</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">MLA Referencing Guide</a>
              </p>
              <p>
                <a href="#">MHRA Referencing Guide</a>
              </p>
              <p>
                <a href="#">Turabian Referencing Guide</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Chicago Referencing Guide</a>
              </p>
              <p>
                <a href="#">Open University Referencing Guide</a>
              </p>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">
          Studies Guides
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <h4>Undergraduate & Masters Study Guides</h4>
          <Row>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Essay Writing Guides</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Referencing Guides</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Master Study Guides</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Exam Revision Guides</a>
              </p>
            </Col>
          </Row>
          <h4>Marketing Guides</h4>
          <Row>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Marketing Theories & Models</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Examples of SWOT Analysis</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Examples of PESTEL Analysis</a>
              </p>
            </Col>
          </Row>
          <h4>Dissertation Guides</h4>
          <p>
            You can also find our extensive collection of dissertation guides
            and examples over at UKDiss.com:
          </p>
          <Row>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Dissertation Writing Guides</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">PhD Study Guides</a>
              </p>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">
          Free Academic Lectures
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>
            <a href="#">Lectures Index</a>
          </p>
          <hr />
          <h4>Available Lectures</h4>
          <Row>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Accounting & Finance Lectures</a>
              </p>
              <p>
                <a href="#">Business Lectures</a>
              </p>
              <p>
                <a href="#">Contract Law Lectures</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Criminal Law Lectures</a>
              </p>
              <p>
                <a href="#">Economics Lectures</a>
              </p>
              <p>
                <a href="#">Education Lectures</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Land Law Lectures</a>
              </p>
              <p>
                <a href="#">Law Lectures</a>
              </p>
              <p>
                <a href="#">Nursing Lectures</a>
              </p>
            </Col>
            <Col md={3} xs={6}>
              <p>
                <a href="#">Public Law Lectures</a>
              </p>
              <p>
                <a href="#">Tort Law Lectures</a>
              </p>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ReferenceLibrary;
