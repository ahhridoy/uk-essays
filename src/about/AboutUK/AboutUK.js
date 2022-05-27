import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";

const AboutUK = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="who-uk-essay">
        <Container>
          <h2 className="text-center">Who are UK Essays?</h2>
          <p className="text-center">
            As innovators in the field, we consistently develop our services to
            ensure that we provide you, our customers, with the best possible
            help to help you achieve the grade that you deserve.
          </p>
        </Container>
      </section>

      <section id="how-started">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <h2>How We Started</h2>
              <p>
                Barclay Littlewood founded the company in 2003. From Day One he
                instilled an aim to strive for excellence in the company.
                Barclay created many of the service features and introduced the
                list of unrivalled guarantees that have placed us firmly at the
                helm of the essay writing services market.
              </p>
              <h2>Our Writers</h2>
              <p>
                We use over 500 experts, each thoroughly vetted by our in-house
                quality team. This means that we can assign the most suitable
                expert with the right qualifications and experience to write you
                the best possible essay. All of our experts have obtained at
                least a 2:1 degree and have displayed a consistent ability to
                write to a 2:1 or first-class standard.
              </p>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex border">
                <div>icon</div>
                <div>
                  <h3>Contact</h3>
                  <p>Get in touch with sales enquiries or support questions</p>
                </div>
              </div>
              <div className="d-flex">
                <div>icon</div>
                <div>
                  <h3>Press</h3>
                  <p>News, company info, and media resources</p>
                </div>
              </div>
              <div className="d-flex">
                <div>icon</div>
                <div>
                  <h3>Testimonials</h3>
                  <p>See what our customers say about us</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="customers-count">
        <Container>
          <Row>
            <Col md={4} xs={6}>
              <h2 className="text-danger">75,000+</h2>
              <p>Customers</p>
            </Col>
            <Col md={4} xs={6}>
              <h2 className="text-danger">1.8bn+</h2>
              <p>Words Written</p>
            </Col>
            <Col md={4} xs={6}>
              <h2 className="text-danger">500+</h2>
              <p>Active Writers</p>
            </Col>
          </Row>
        </Container>
        <hr />
      </section>

      <section>
        <ServicesComponent />
      </section>
    </main>
  );
};

export default AboutUK;
