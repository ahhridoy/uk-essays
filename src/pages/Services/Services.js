import React from "react";
import {  Container } from "react-bootstrap";
import FaqComponent from "../../components/FaqComponent";
import "../../styles/pages/_services.scss";

const Services = () => {

  return (
    <main>
      <section id="portfolio">
        <Container>
          <div>
            <h1 className="heading text-light">Academic Service Portfolio</h1>
            <p className="sub-text text-light">
              In the business for over 17 years. The world’s best writers. Loved
              by students and the global press. <br />
              So how do you create the world’s best work? Let us show you the
              services we have on offer and start your journey to success now:
            </p>
          </div>
          <a href="#" className="rate-review">
            <div>
              rating star icon
              <h2>4.4</h2>
              <small>average</small>
            </div>
            <div className="bg-light text-dark px-5 my-2">
              <h2>1748</h2>
              star icon<p>REVIEWS</p>
            </div>
          </a>
          <a href="#" className="dotted-link">
            View our customer feedback
          </a>
        </Container>
      </section>
      <section id="looking-for">
        <Container>
          <div>
            <h1>What are you looking for?</h1>
          </div>
          <div>
             <FaqComponent />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Services;
