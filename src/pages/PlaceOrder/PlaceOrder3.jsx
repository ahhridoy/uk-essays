import React from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Container, Row } from "react-bootstrap";
import PaymentOption from "../PaymentOption/PaymentOption";
import { FaLock } from "react-icons/fa";

const PlaceOrder3 = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="place-order3">
      <Container>
        <Row>
          <Col md={8} xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bg-white p-3">
                <h4>
                  <strong>ORDER SPECIFICS</strong>
                </h4>
                <label className="mt-3">
                  Please enter your requirements for your CV (standard 1-2
                  pages).
                </label>
                <br />
                <textarea
                  {...register("order")}
                  className="input-box text-area border bg-light rounded"
                />
                <br />
                <label className="mt-3">What is the purpose of your CV?</label>
                <div className="d-flex justify-content-between bg-light p-3 border rounded">
                  <div>
                    <input
                      type="radio"
                      value="job-applications"
                      id="job-applications"
                      name="questions"
                      className="me-2"
                    />
                    <label htmlFor="job-applications">Job Applications</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      value="academic-applications"
                      id="academic-applications"
                      name="questions"
                      className="me-2"
                    />
                    <label htmlFor="academic-applications">
                      Academic Applications
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      value="other"
                      id="other"
                      name="questions"
                      className="me-2"
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
              </div>
              <br />
              <div className="bg-white p-3">
                <h4>
                  <strong>WRITER REQUESTS</strong>
                </h4>
                <label className="mt-3">
                  Do you have a requested writer? Enter their ID number or your
                  previous order number here and we'll contact them for you once
                  your order has been received.
                </label>
                <input
                  {...register("requests")}
                  className="input-box border bg-light rounded"
                />
                <label className="mt-3">
                  Do you have anything additional to tell your writer?
                </label>
                <textarea
                  {...register("order")}
                  className="input-box text-area border bg-light rounded"
                />
              </div>
              <br />
              <div className="bg-white p-3">
                <h4>
                  <strong>PRIVACY SETTINGS</strong>
                </h4>
                <p>
                  We value your privacy – your personal information will be used
                  to administer your account and provide you with the services
                  you have requested. However, from time to time, if you have
                  used our services recently, we may contact you with offers and
                  promotions for other products and services that may interest
                  you. Please untick if you wish to opt-out of receiving
                  marketing communications via:
                </p>

                <input
                  type="checkbox"
                  value="email"
                  id="email"
                  className="me-2"
                />
                <label htmlFor="email" className="me-3">
                  EMAIL
                </label>

                <input
                  type="checkbox"
                  value="phone"
                  id="phone"
                  className="me-2"
                />
                <label htmlFor="phone" className="me-3">
                  PHONE
                </label>

                <input type="checkbox" value="sms" id="sms" className="me-2" />
                <label htmlFor="sms" className="me-3">
                  SMS
                </label>
              </div>
              <br />
              <div className="bg-white p-3">
                <h4>
                  <strong>TERMS AND CONDITIONS</strong>
                </h4>
                <input
                  type="checkbox"
                  value="terms"
                  id="terms"
                  className="me-2"
                />
                <label htmlFor="terms">
                  By ticking this box you are agreeing to our{" "}
                  <a href="#" className="text-decoration-none">
                    terms and conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-decoration-none">
                    fair use policy.
                  </a>
                </label>
              </div>
              <br />
              <Button variant="success" className="w-100 py-3 fs-5 fw-bold mb-4">
                <FaLock /> Place order
              </Button>
            </form>
          </Col>
          <Col md={4} xs={12}>
            <PaymentOption />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlaceOrder3;
