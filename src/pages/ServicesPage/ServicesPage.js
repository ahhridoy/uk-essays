import React from "react";
import { Button, Container } from "react-bootstrap";
import LookingFor from "../../components/LookingFor/LookingFor";
import Press from "../../components/Press/Press";
import "../../styles/pages/_services-page.scss";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { BsStarHalf, BsPeopleFill } from "react-icons/bs";

const Services = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="portfolio">
        <Container>
          <h2 className="heading text-light text-center">
            Academic Service Portfolio
          </h2>
          <p className="sub-text text-light text-center">
            In the business for over 17 years. The world’s best writers. Loved
            by students and the global press. <br />
            So how do you create the world’s best work? Let us show you the
            services we have on offer and start your journey to success now:
          </p>

          <a href="#" className="rate-review">
            <div className="d-flex justify-content-center align-items-center">
              <span>
                <AiFillStar className="fs-4" />
                <AiFillStar className="fs-4" />
                <AiFillStar className="fs-4" />
                <AiFillStar className="fs-4" />
                <BsStarHalf className="fs-4" />
              </span>
              <div>
                <h2>4.4</h2>
                <small>average</small>
              </div>
            </div>
            <div className="bg-light text-dark text-center px-2 my-2 rounded">
              <h3>1755</h3>
              <img
                src="/assets/reviewsio-logo.webp"
                alt="logo"
                className="services-reviewsio-logo"
              />
            </div>
          </a>
          <div className="text-center mt-4">
            <a href="#" className="dotted-link">
              View our customer feedback
            </a>
          </div>
        </Container>
      </section>

      <section id="looking-for">
        <Container>
          <div className="shadow heading">
            <h2 className="text-center">What are you looking for?</h2>
          </div>
          <div className="accordion">
            <LookingFor />
          </div>
        </Container>
      </section>

      <section id="we-writing">
        <Container className="text-box">
          <h2 className="text-center my-3">
            We <AiFillHeart className="text-danger" /> Writing
          </h2>
          <p className="text-center">
            At UK Essays, we're proud to know exactly what goes into making an
            awesome essay. We've dedicated over 14 years towards becoming
            experts in all things academic – from essays, assignments and
            coursework, through to dissertations, exams, reports and
            reflections. While others come and go, UK Essays has grown and
            developed into one of the world's leading academic support
            companies. Got more questions about our services?
          </p>
          <div className="text-center">
            <Button variant="danger" className="text-light">
              Check Out Our <b>Samples</b>
            </Button>
          </div>
        </Container>
      </section>

      <section id="essay-heros">
        <Container className="text-box">
          <h2 className="text-center my-3"><BsPeopleFill className="text-primary" /> Meet The Essay Heroes</h2>
          <p className="text-center">
            We use a team of experts and academics to build your order and
            create a fantastic, unique and exciting piece of work every time. We
            only use highly qualified writers, including lecturers, teachers and
            PhD holders. Our in-house teams are on hand to support you with
            everything from placing your order through to ensuring your order is
            in perfect condition before being sent to you.
          </p>
          <div className="text-center">
            <Button variant="primary" className="text-light">
              Discover More <b>About UKEssays</b>
            </Button>
          </div>
        </Container>
      </section>
      <section>
        <Press />
      </section>
    </main>
  );
};

export default Services;
