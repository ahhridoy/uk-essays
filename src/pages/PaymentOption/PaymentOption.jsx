import React from "react";
import { Button } from "react-bootstrap";
import { FaAddressBook } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";

const PaymentOption = () => {
  return (
    <div>
      <div className="bg-white p-3">
        <div className="d-flex">
          <div className="me-3">
            <FaAddressBook className="fs-1" />
          </div>
          <div>
            <h4>Cv in No Subject</h4>
            <p>Not applicable</p>
            <p>Bronze: CV Only</p>
            <p>Jun 26, 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <p>CV</p>
            <h4>TOTAL TO PAY</h4>
          </div>
          <div>
            <p>$123.00</p>
            <h4>$123.00</h4>
            <a href="#">Change currency</a>
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
      <div className="mt-2">
        Got a coupon code? <br />
        <input type="text" />
        <br />
      </div>
      <Button className="w-100 mt-3" variant="success">Apply code</Button>
      <div className="text-center mt-3">
         <img src="/assets/trusted-site.svg" alt="" />
      </div>
    </div>
  );
};

export default PaymentOption;
