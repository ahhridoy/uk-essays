import React from "react";
import { useForm } from "react-hook-form";
import { Col, Container, Row, Button } from "react-bootstrap";
import PaymentOption from "../PaymentOption/PaymentOption";
import "./_PlaceOrder.scss";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const PlaceOrder2 = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="place-order2">
      <Container>
        <Row>
          <Col md={8} xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bg-white p-3">
                <h4>
                  <strong>PRODUCT OPTIONS</strong>
                </h4>
                <p>
                  You can choose to upgrade to our Elite service for 25% extra
                  cost. This upgrade secures you one of our top 5 elite
                  researchers in your subject, a three-month amendment period
                  with unlimited changes to your work and a personal account
                  manager to provide you with a direct point of contact with our
                  team.
                </p>

                <div className="d-flex justify-content-between bg-light p-3 border">
                  <div>
                    <input
                      type="radio"
                      value="yes"
                      id="yes"
                      name="upgrades"
                      className="me-2"
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      value="no"
                      id="no"
                      name="upgrades"
                      className="me-2"
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </div>
              </div>
              <br />
              <div className="bg-white p-3">
                <h4>
                  <strong>EARLY RELEASE</strong>
                </h4>
                <p>
                Get your order released early! Our delivery times are typically at 9pm during the week - so if you want to receive your order back by 5pm on your selected date, please select this option. For this additional fee, we will endeavour to process your order and find a writer as quickly as possible for you. Please note, this is not applicable to Next Day or Same Day deliveries.
                </p>
                <p>Add Early Release to your order for <strong>just £37.00</strong></p>

                <div className="d-flex justify-content-between bg-light p-3 border">
                  <div>
                    <input
                      type="radio"
                      value="yes"
                      id="yes"
                      name="upgrades"
                      className="me-2"
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      value="no"
                      id="no"
                      name="upgrades"
                      className="me-2"
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </div>
              </div> <br />
              <Link to="/upgrades">
              <Button variant="success" className="w-100">
                <FaLock /> Continue securely
              </Button>
              </Link>
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

export default PlaceOrder2;
