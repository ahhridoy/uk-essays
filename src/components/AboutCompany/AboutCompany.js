import React from "react";
import { Button, Container } from "react-bootstrap";

const AboutCompany = () => {
  return (
    <main id="about-company">
      <Container>
        <img src="/assets/ukessays-logo.png" alt="" className="logo mb-2" />
        <h2 className="text-light">About our Company</h2>
        <p className="text-light">
          We are one of the leading providers of academic support services to
          students, which is why we only produce the highest-quality pieces of
          work and hire the best staff and writers to do it! <br /> <br />
          Still not sure? Your Assignment Writing Service also comes with a free
          7-day amendments period! If you have any questions, or there are
          justified revisions you want to make to your order, our Aftercare Team
          are always here for you. Nothing is too big or too small: we
          understand the importance of getting it right for our customers, every
          time.
        </p>
        <Button variant="danger">Find out more about us</Button>
      </Container>
    </main>
  );
};

export default AboutCompany;
