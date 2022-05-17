import React from "react";
import { Button, Container } from "react-bootstrap";
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
          <div className="heading">
            <h1>What are you looking for?</h1>
          </div>
          <div className="accordion">
            <FaqComponent />
          </div>
        </Container>
      </section>
      <section id="we-writing">
        <Container className="text-box">
          <h1>We Writing</h1>
          <p>
            At UK Essays, we're proud to know exactly what goes into making an
            awesome essay. We've dedicated over 14 years towards becoming
            experts in all things academic – from essays, assignments and
            coursework, through to dissertations, exams, reports and
            reflections. While others come and go, UK Essays has grown and
            developed into one of the world's leading academic support
            companies. Got more questions about our services?
          </p>
          <Button variant="danger" className="text-light">
            Check Out Our <b>Samples</b>
          </Button>
        </Container>
      </section>
      <section id="essay-heros">
        <Container className="text-box">
          <h1>We Writing</h1>
          <p>
            We use a team of experts and academics to build your order and
            create a fantastic, unique and exciting piece of work every time. We
            only use highly qualified writers, including lecturers, teachers and
            PhD holders. Our in-house teams are on hand to support you with
            everything from placing your order through to ensuring your order is
            in perfect condition before being sent to you.
          </p>
          <Button variant="primary" className="text-light">
            Discover More <b>About UKEssays</b>
          </Button>
        </Container>
      </section>
    </main>
  );
};

export default Services;
