import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillHeart, AiOutlineStar } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

const WhyLove = () => {
  return (
    <main id="why-love">
      <Container>
        <h2 className="text-center">Why you'll love UK Essays</h2>
        <p className="text-center mb-4">
          Using our essay writing service couldn’t be simpler. We guide you
          through our process step-by-step, to make sure you get the most <br />{" "}
          value from your experience.
        </p>
        <Row>
          <Col md={6} xs={12}>
            <div className="d-flex">
              <div className="me-4">
                <AiFillHeart className="text-danger fs-2" />
              </div>
              <div>
                <h4>Privacy first</h4>
                <p>
                  As a UK company, we are fully GDPR (General Data Protection
                  Regulation) compliant. In simple terms this means we only
                  require and store essential data from you, as outlined in our 
                  <a href="#" className="text-danger"> Privacy Policy</a>. We take data security very seriously, meaning
                  you can be certain your data is safe and protected.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="d-flex">
              <div className="me-4">
                <AiOutlineStar className="text-danger fs-2" />
              </div>
              <div>
                <h4>Expertly assessed quality</h4>
                <p>
                  We understand how important the quality of our work is to our
                  customers, and so we invest heavily in quality checking. Our
                  in-house team of experts - the Quality Control team – are
                  qualified in each of the subjects we provide. They review
                  every essay individually. Unlike other companies, every piece
                  of work is personally inspected before delivery to you. Where
                  others will simply send on the work directly, we review
                  spelling & grammar, structure, references and more to make
                  sure the work is exactly what you have requested. On average
                  we request changes from our writers up to 5 times before
                  sending the work onto you – all to make sure the final essay
                  is perfect!
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="d-flex">
              <div className="me-4">
                <BiLockAlt className="text-danger fs-2" />
              </div>
              <div>
                <h4>Safe & secure</h4>
                <p>
                  You can be confident that the UK Essays website is safe and
                  secure. <b>Our site is checked daily by TrustedSite</b> (one
                  of the World's most trusted cyber security companies) to
                  verify that the site is free from viruses, malware and
                  phishing attempts. We only use trusted payment methods – Sage
                  Pay, Alipay, and WeChat Pay – so your payment details are
                  stored and processed securely.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default WhyLove;
