import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
import "./_PlaceOrder.scss";
import PaymentOption from "../PaymentOption/PaymentOption";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const PlaceOrder = () => {
  // const [blogs, setBlogs] = useState([]);

  const blogs = [
    {
      label: "200 Words 1 Page",
      value: 120,
    },
    {
      label: "300 Words 1 Page",
      value: 160,
    },
    {
      label: "500 Words 2 Page",
      value: 200,
    },
    {
      label: "700 Words 2 Page",
      value: 280,
    },
    {
      label: "800 Words 3 Page",
      value: 320,
    },
  ];

  // useEffect(() => {
  //   axios.get("http://localhost:5000/blogs").then((res) => {
  //     setBlogs(res.data);
  //   });
  // }, []);

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/upgrades");
  };

  const [result, ddIvalue] = useState(blogs.value);

  const ddIHandler = (e) => {
    ddIvalue(e.value);
  };

  return (
    <div id="place-order">
      <Container>
        <Row>
          <Col md={8} xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bg-white p-3">
                <h4>
                  <strong>PRODUCT OPTIONS</strong>
                </h4>
                <label className="mt-3">
                  <strong>Package</strong>
                </label>{" "}
                <br />
                <Select
                  options={blogs}
                  onChange={ddIHandler}
                  className="input-box border bg-light rounded"
                />
                <br />
                <label className="mt-3">
                  <strong>Delivery Time</strong>
                </label>{" "}
                <br />
                <input
                  {...register("delivery-time")}
                  placeholder="Date"
                  className="input-box border bg-light rounded"
                />
              </div>{" "}
              <br />
              <div className="bg-white p-3">
                <h4>
                  <strong>YOUR DETAILS</strong>
                </h4>
                <label className="mt-3">
                  <strong>Your Name</strong>
                </label>{" "}
                <br />
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="input-box border bg-light rounded"
                />{" "}
                <br />
                <label className="mt-3">
                  <strong>Your email address</strong>
                </label>{" "}
                <br />
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="input-box border bg-light rounded"
                />{" "}
                <br />
                <label className="mt-3">
                  <strong>Your Where are you located?</strong>
                </label>{" "}
                <br />
                <select
                  {...register("country")}
                  className="input-box border bg-light rounded"
                >
                  <option value="">Please select a country</option>
                  <option value="afghanistan">Afghanistan</option>
                  <option value="australia">Australia</option>
                  <option value="united-states">United States</option>
                  <option value="united-kingdom">United Kingdom</option>
                  <option value="india">India</option>
                  <option value="bangladesh">Bangladesh</option>
                </select>{" "}
                <br />
                <label className="mt-3">
                  <strong>Your phone number</strong>
                </label>{" "}
                <br />
                <input
                  {...register("number")}
                  placeholder="Number"
                  className="input-box border bg-light rounded"
                />{" "}
                <br /> <br />
                <div className="d-flex align-items-start">
                  <input
                    type="checkbox"
                    value="remember"
                    className="me-2 mt-1"
                  />
                  <label for="remember">
                    <strong>Remember me </strong>
                    By ticking this box, we’ll store your personal details -
                    your Name, Email and Phone Number, on your local computer to
                    save you time when you next place an order. For your own
                    privacy we recommend that you do not select remember me if
                    you are using a shared computer.{" "}
                  </label>
                </div>{" "}
                <br />
                <div className="d-flex align-items-start">
                  <input
                    type="checkbox"
                    value="privacy"
                    className="me-2 mt-1"
                  />
                  <label for="privacy">
                    <strong>Privacy </strong>
                    By ticking this box, we’ll store your personal details -
                    your Name, Email and Phone Number, on your local computer to
                    save you time when you next place an order. For your own
                    privacy we recommend that you do not select remember me if
                    you are using a shared computer.{" "}
                  </label>
                </div>
              </div>{" "}
              <br />
              <Button
                type="submit"
                variant="success"
                className="w-100 py-3 fs-5 fw-bold"
              >
                <FaLock /> Continue securely
              </Button>
            </form>
          </Col>
          <Col md={4} xs={12}>
            <PaymentOption result={result} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlaceOrder;
