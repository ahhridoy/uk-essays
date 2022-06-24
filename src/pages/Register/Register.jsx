import React from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./_Register.scss";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="register">
      <Container>
        <div className="logo text-center">
          <img src="/assets/ukessays-logo.png" alt="logo" />
          <h2 className="text-white">UKEssays</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form">
            <h4 className="text-center mb-5">Sign Up</h4>
            <label className="mt-3">First Name</label> <br />
            <input
              {...register("firstName")}
              placeholder="First Name"
              className="input-box border rounded"
            />{" "}
            <br />
            <label className="mt-3">Last Name</label> <br />
            <input
              {...register("lastName")}
              placeholder="Last Name"
              className="input-box border rounded"
            />{" "}
            <br />
            <label className="mt-3">Phone Number</label> <br />
            <input
              {...register("number")}
              placeholder="Phone Number"
              className="input-box border rounded"
            />{" "}
            <br />
            <label className="mt-3">Email address</label> <br />
            <input
              {...register("email")}
              placeholder="Email Address"
              className="input-box border rounded"
            />{" "}
            <br />
            <label className="mt-3">Password</label> <br />
            <input
              {...register("password")}
              placeholder="Password"
              className="input-box border rounded"
            />{" "}
            <br />
            <label className="mt-3">Confirm Password</label> <br />
            <input
              {...register("password")}
              placeholder="Confirm Password"
              className="input-box border rounded"
            />{" "}
            <br />
            <input
              type="checkbox"
              value="terms"
              id="terms"
              className="me-2 mt-4"
            />
            <label htmlFor="terms" className="me-3">
              Agree Terms & Conditions
            </label>{" "}
            <br />
            <Button variant="success" className="w-100 mt-3 py-2 fs-5 fw-bold">
              Sign Up
            </Button>
            <Link to="/signin" className="text-decoration-none">
              <p className="text-center mt-2">Already have an account?</p>
            </Link>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Register;
