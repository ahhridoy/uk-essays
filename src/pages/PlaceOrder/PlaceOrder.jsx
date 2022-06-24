import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import "./_PlaceOrder.scss";
import PaymentOption from "../PaymentOption/PaymentOption";

const PlaceOrder = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="place-order">
      <Container>
        <Row>
          <Col md={8} xs={12}>
            <h3>PRODUCT OPTIONS</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>Package</p>
              <select {...register("package")}>
                <option value="bronze">Bronze: CV Only</option>
                <option value="silver">Silver: CV + 2 Revisions</option>
                <option value="gold">
                  Gold: CV + Cover Letter + 2 Revisions
                </option>
                <option value="platinum">
                  Platinum: CV + Cover Letter + Linkedin Bio + 3 Revisions
                </option>
              </select>
              <p>Delivery Time</p>
              <input {...register("delivery-time")} placeholder="Date" />
              <h3>YOUR DETAILS</h3>
              <p>Your Name</p>
              <input {...register("name")} placeholder="Name" />
              <p>Your email address</p>
              <input {...register("email")} placeholder="Email" />
              <p>Your Where are you located?</p>
              <select {...register("country")}>
                <option value="">Please select a country</option>
                <option value="afghanistan">Afghanistan</option>
                <option value="australia">Australia</option>
                <option value="united-states">United States</option>
                <option value="united-kingdom">United Kingdom</option>
                <option value="india">India</option>
                <option value="bangladesh">Bangladesh</option>
              </select>
              <p>Your phone number</p>
              <input {...register("number")} placeholder="Number" /> <br />
              <input type="checkbox" value="remember" />
              <label for="remember"> I have a bike</label> <br />
              <input type="submit" />
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

export default PlaceOrder;
