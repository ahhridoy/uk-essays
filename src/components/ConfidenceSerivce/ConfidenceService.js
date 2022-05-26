import React from "react";
import { Container } from "react-bootstrap";

const ConfidenceService = () => {
  return (
    <main id="confidence-service">
      <Container>
        <img src="/assets/ukessays-logo.png" alt="" className="logo mb-2" />
        <h2 className="text-light">Confidence in our service</h2>
        <p className="text-light">
          At UKEssays, the customer is at the heart of everything we do. You can
          trust that we will work our hardest to help you get the grade that you
          want! To that end, we only hire the most enthusiastic, hard-working
          and reliable members of staff. You can meet the team and{" "}
          <a href="#">read about our company’s history here</a>. <br /> <br />
          Since 2003 it has been our goal to become a leading supplier of
          educational support services. We strive to help students achieve their
          academic ambitions, and we’re driven to aid you in developing into a
          qualified professional. After you receive your order, we will ask you
          to give us your views on the service that you received. We take this
          feedback very seriously and use it to make continual improvements to
          our customer support measures and quality checks. If you want to learn
          more about our motivations for our service, you can read some of our
          <a href="#">press releases</a>, written by our Chief Operations
          Officer.
        </p>
      </Container>
    </main>
  );
};

export default ConfidenceService;
