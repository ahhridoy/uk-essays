import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Press from "../../components/Press/Press";

const Contact = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="contact-us">
        <Container className="text-light">
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center">
            UK Essays is a trading name of All Answers Ltd. All Answers Ltd is a
            company registered in England and Wales Company Registration No:
            4964706. VAT Registration <br /> No: 842417633. Registered Data
            Controller No: Z1821391.
          </p>
          <div className="text-center">
            <Button variant="light">Login to your online account</Button> <br /> <br />
            <Button variant="danger">Place an order</Button>
          </div>
        </Container>
      </section>

      <section id="call-msg">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <h2>Call us</h2>
              <h5>Get in touch with us for help and support</h5>
              <div className="ms-3">
                <p>
                  UK / International :{" "}
                  <a href="+44 (0)115 966 7955">+44 (0)115 966 7955</a>
                </p>
                <p>
                  USA: <a href="855-339-7955"></a>855-339-7955
                </p>
              </div>

              <h5>Opening hours</h5>
              <div className="ms-3">
                <p>Monday: 09:00 - 17:00 (UTC)</p>
                <p>Tuesday: 09:00 - 17:00 (UTC)</p>
                <p>Wednesday: 09:00 - 17:00 (UTC)</p>
                <p>Thursday: 09:00 - 17:00 (UTC)</p>
                <p>Friday: 09:00 - 17:00 (UTC)</p>
                <p>Saturday: 09:00 - 17:00 (UTC)</p>
                <p>
                  Sunday: Our phone lines will be closed, but you'll still be
                  able to place your order online
                </p>
              </div>
              <p>Please note:</p>
              <p>
                All calls are recorded for training and quality assurance
                purposes
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h2>Message us</h2>
              <h5>We're here to help!</h5>
              <p>
                If you have general issues, view our <a href="#">help centre</a>
              </p>
              <Button variant="primary" className="w-100 mb-3">
                Send us an email
              </Button>
              <Button variant="primary" className="w-100 mb-3">
                Send a message through your online account
              </Button>
              <Button variant="primary" className="w-100 mb-3">
                Start a live chat
              </Button>
              <Button variant="success" className="w-100 mb-3">
                Message us on WhatsApp
              </Button>

              <h2>Validate our details</h2>
              <p>
                <strong>
                  Company Registration No: <a href="#">4964706</a>
                </strong>
              </p>
              <p>
                <strong>
                  VAT Registration No: <a href="#">842417633</a>
                </strong>
              </p>
              <p>
                <strong>
                  Data Controller No: <a href="#">Z1821391</a>
                </strong>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Press />
      </section>
    </main>
  );
};

export default Contact;
