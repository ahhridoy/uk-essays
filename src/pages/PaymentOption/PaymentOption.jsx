import React from "react";
import { Button } from "react-bootstrap";
import { FaAddressBook } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import "./_PaymentOption.scss";

const PaymentOption = () => {
  return (
    <div id="payment-option">
      <div className="bg-white p-3">
        <div className="d-flex mb-3">
          <div className="me-3">
            <FaAddressBook className="fs-1" />
          </div>
          <div>
            <strong>Cv in No Subject</strong> <br />
            <span>Not applicable</span> <br />
            <span>Bronze: CV Only</span> <br />
            <span>Jun 26, 2022</span> <br />
          </div>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <div>
            <span>CV</span> <br />
            <strong>TOTAL TO PAY</strong>
          </div>
          <div>
            <span>$123.00</span> <br />
            <strong>$123.00</strong> <br />
            <a href="#" className="text-decoration-none">Change currency</a>
          </div>
        </div>
        <div className="bg-dark p-2">
          <p className="text-white text-center">Pay $61.50 to start work</p>
          <div className="bg-white p-2">
            <p>
              Only pay when you're ready to start work on your order. Pay the
              remaining balance of $61.50 once the work is complete.
            </p>
          </div>
        </div>
        <br />
        <div>
          <p>
            <strong>We accept:</strong>
          </p>
          <img src="/assets/cards.png" alt="logo" className="w-100" />
        </div>
        <div className="border p-3 mt-2">
          <AiFillInfoCircle /> Got any questions?{" "}
          <strong className="text-primary">Call 00971 600 575 297</strong>
        </div>
      </div>{" "}
      <br />
      <div className="mt-2 bg-white p-3">
        Got a coupon code? <br />
        <input type="text" className="w-100 input-box border bg-light rounded" />
        <br />
        <Button className="w-100 mt-3 py-2 fs-5 fw-bold" variant="success">
          Apply code
        </Button>
      </div>
      <div className="text-center mt-3">
        <img src="/assets/trusted-site.svg" alt="" />
      </div>
    </div>
  );
};

export default PaymentOption;
