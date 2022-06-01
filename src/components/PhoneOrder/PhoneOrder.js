import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const PhoneOrder = () => {
  return (
    <section id="phone-order">
      <Container> 
        <Row>
          <Col md={6} xs={12}>
            <img
              src="/assets/phone-order.png"
              alt="phone-icon"
              className="w-100"
            />
          </Col>
          <Col md={6} xs={12}>
            <h2 className="my-3">
              Our order process is simple Three easy steps!
            </h2>
            <div>
              <div className="text-box">
                <div className="first-option">
                  <p>1</p>
                </div>
                <div>
                  <h4>Start your UK Essays order</h4>
                  <p>
                    Simply start your essay order by using our specially
                    designed order form to send us all the details about your
                    piece of work. From there, we take your instructions to
                    write an essay just the way you need it. We’ll review your
                    instructions and get in touch to confirm everything with you
                    and clear up any questions we might have.
                  </p>
                </div>
              </div>
              <div className="text-box">
                <div className="second-option">
                  <p>2</p>
                </div>
                <div>
                  <h4>Finding your academic expert</h4>
                  <p>
                    Each paper we write is unique, and we always aim to cater to
                    your specific needs. We carefully select each <a href="#">expert writer</a>
                    – who are always qualified in the subject you need help with
                    – to create a fully referenced essay with the detailed
                    aspects you require, from a rich, detailed discussion to a
                    well-structured argument.{" "}
                    <strong>We never re-use or re-sell any essay we have created.</strong>
                  </p>
                </div>
              </div>
              <div className="text-box">
                <div className="third-option">
                  <p>3</p>
                </div>
                <div>
                  <h4>Delivery to you</h4>
                  <p>
                    After being double and triple checked, we prepare the
                    completed essay for download through your customer account.
                    We always aim to deliver your order perfectly on time and
                    without any outstanding issues. We encourage you to read
                    through the essay as soon as possible to make sure you’re
                    fully happy and don’t feel like anything has been missed.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button variant="danger">Order an essay today!</Button>
        </div>
      </Container>
    </section>
  );
};

export default PhoneOrder;
