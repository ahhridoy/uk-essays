import React from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./_Login.scss";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="login">
      <Container>
        <div className="logo text-center">
          <img src="/assets/ukessays-logo.png" alt="logo" />
          <h2 className="text-white">UKEssays</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form">
            <h4 className="text-center mb-5">Sign In</h4>
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
            <input
              type="checkbox"
              value="login"
              id="login"
              className="me-2 mt-4"
            />
            <label htmlFor="login" className="me-3">
              Stay logged in
            </label>{" "}
            <br />
            <Button variant="success" className="w-100 mt-3 py-2 fs-5 fw-bold">
              Sign In
            </Button>
            <p className="text-center mt-2">
              <a href="#" className="text-decoration-none">
                Forget Password?
              </a>
            </p>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;
