import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Container, Row } from "react-bootstrap";
import PaymentOption from "../PaymentOption/PaymentOption";
import { FaLock } from "react-icons/fa";

const PlaceOrder3 = () => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  };
  const [val, setVal] = useState(false);
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
                      {...register("questions")}
                      type="radio"
                      name="questions"
                      value="job-applications"
                      id="ques-field"
                      className="me-2"
                    />
                    <label htmlFor="ques-field">Job Applications</label>
                  </div>

                  <div>
                    <input
                      {...register("questions")}
                      type="radio"
                      name="questions"
                      value="academic-applications"
                      id="ques-field"
                      className="me-2"
                    />
                    <label htmlFor="ques-field">
                      Academic Applications
                    </label>
                  </div>

                  <div>
                    <input
                      {...register("questions")}
                      type="radio"
                      name="questions"
                      value="other"
                      id="ques-field"
                      className="me-2"
                    />
                    <label htmlFor="ques-field">Other</label>
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
                  {...register("additional")}
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

                <input type="checkbox" name="email" className="me-2" />
                <label className="me-3">EMAIL</label>

                <input type="checkbox" name="phone" className="me-2" />
                <label htmlFor="phone" className="me-3">
                  PHONE
                </label>

                <input type="checkbox" name="sms" className="me-2" />
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
                  name="terms"
                  className="me-2"
                  onChange={(e) => {
                    setValue("terms", e.target.checked ? "yes" : "no");
                    setVal(!val);
                  }}
                  checked={val}
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
              <Button
                type="submit"
                variant="success"
                className="w-100 py-3 fs-5 fw-bold mb-4"
              >
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
