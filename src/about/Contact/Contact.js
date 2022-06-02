import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Press from "../../components/Press/Press";
import { FiPhoneCall, FiUsers } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

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
            <Button variant="light">Login to your online account</Button> <br />{" "}
            <br />
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
                  <FiPhoneCall /> UK / International :{" "}
                  <a href="tel:+44 (0)115 966 7955">+44 (0)115 966 7955</a>
                </p>
                <p>
                  <FiPhoneCall /> USA:{" "}
                  <a href="tel:855-339-7955">855-339-7955</a>
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
                Send us an email <HiOutlineMail />
              </Button>
              <Button variant="primary" className="w-100 mb-3">
                Send a message through your online account <FaTelegramPlane />
              </Button>
              <Button variant="primary" className="w-100 mb-3">
                Start a live chat <FiUsers />
              </Button>
              <Button variant="success" className="w-100 mb-3">
                Message us on WhatsApp <FaWhatsapp />
              </Button>

              <h2>Validate our details</h2>
              <p className="d-flex justify-content-between">
                <strong>Company Registration No:</strong>
                <a href="tel:4964706" className="me-5">
                  4964706
                </a>
              </p>
              <p className="d-flex justify-content-between">
                <strong>VAT Registration No:</strong>
                <a href="tel:842417633" className="me-5">
                  842417633
                </a>
              </p>
              <p className="d-flex justify-content-between">
                <strong>Data Controller No:</strong>
                <a href="tel:Z1821391" className="me-5">
                  Z1821391
                </a>
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
