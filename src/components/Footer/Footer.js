import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BiLike } from "react-icons/bi";
import { RiQuillPenLine } from "react-icons/ri";
import { FiAtSign } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsGoogle } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <Container className="py-5 text-light">
        <div className="bg-danger my-3 p-4 rounded d-flex justify-content-between">
          <span className="fs-2 mx-3">Place an Order Today!</span>
          <Button variant="light" className="my-2">
            Place an Order
          </Button>
        </div>

        <Row className="py-5">
          <Col md={4} xs={12}>
            <div className="bg-black p-5 text-center border-bottom">
              <BiLike className="text-warning fs-1 mb-4" />
              <h3>Safe & Trusted</h3>
              <p>
                Your UKEssays purchase is secure and we're rated 4.4/5 on
                reviews.co.uk
              </p>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="bg-black p-5 text-center border-bottom">
              <RiQuillPenLine className="text-success fs-1 mb-4" />
              <h3>Bespoke</h3>
              <p>All work is written to order. No plagiarism, guaranteed!</p>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="bg-black p-5 text-center border-bottom">
              <FiAtSign className="text-info fs-1 mb-4" />
              <h3>Contact us</h3>
              <p>
                We're here to answer any questions you have about our services
              </p>
            </div>
          </Col>
        </Row>

        <Row className="py-5 footer-links">
          <Col md={3} xs={12}>
            <div>
              <img src="/assets/all-answers.webp" alt="logo" className="w-25" />
              <span>Part of All Answers Ltd</span>
            </div>
            <FaFacebookF className="fs-1 my-3 me-3" />
            <BsTwitter className="fs-1 my-3 me-3" />
            <BsGoogle className="fs-1 my-3" /> <br />
            <img src="/assets/trusted-site.svg" alt="logo" className="w-25" />
          </Col>
          <Col md={3} xs={12}>
            <b>SERVICES</b>
            <p>
              <a href="#">Essay Writing Service</a>
            </p>
            <p>
              <a href="#">Dissertation Services</a>
            </p>
            <p>
              <a href="#">Marking Service</a>
            </p>
            <p>
              <a href="#">All Services</a>
            </p>
          </Col>
          <Col md={3} xs={12}>
            <b>USEFUL RESOURCES</b>
            <p>
              <a href="#">Essays</a>
            </p>
            <p>
              <a href="#">Referencing Tools</a>
            </p>
            <p>
              <a href="#">Study Guides</a>
            </p>
            <p>
              <a href="#">Free Resources</a>
            </p>
            <p>
              <a href="#">Buying an Essay</a>
            </p>
          </Col>
          <Col md={3} xs={12}>
            <b>COMPANY</b>
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">Fair Use Policy</a>
            </p>
            <p>
              <a href="#">Complaints</a>
            </p>
            <p>
              <a href="#">Help Centre</a>
            </p>
            <p>
              <a href="#">Become a Researcher</a>
            </p>
          </Col>
        </Row>
        <p className="text-secondary">
          Copyright © 2003 - 2022 - UKEssays is a trading name of All Answers
          Ltd, a company registered in England and Wales. Company Registration
          No: 4964706. VAT Registration No: 842417633. Registered Data
          Controller No: Z1821391. Registered office: Venture House, Cross
          Street, Arnold, Nottingham, Nottinghamshire, NG5 7PJ.
        </p>
        <div className="bottom-links">
          <a href="#" className="text-secondary">
            Privacy Policy
          </a>
          <a href="#" className="text-secondary">
            Terms & Conditions
          </a>
          <a href="#" className="text-secondary">
            Copyright Notice
          </a>
          <a href="#" className="text-secondary">
            Cookies
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
