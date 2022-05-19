import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FaqComponent from "../../components/FaqComponent";
import "../../styles/pages/_services.scss";

const Services = () => {
  return (
    <main>
      <section id="portfolio">
        <Container>
          <div>
            <h2 className="heading text-light text-center">
              Academic Service Portfolio
            </h2>
            <p className="sub-text text-light text-center">
              In the business for over 17 years. The world’s best writers. Loved
              by students and the global press. <br />
              So how do you create the world’s best work? Let us show you the
              services we have on offer and start your journey to success now:
            </p>
          </div>
          <a href="#" className="rate-review">
            <div className="d-flex justify-content-center align-items-center">
              <span>rating star icon</span>
              <div>
                <h2>4.4</h2>
                <small>average</small>
              </div>
            </div>
            <div className="bg-light text-dark text-center px-2 my-2 rounded">
              <h3>1748</h3>
              <span>
                star icon<small> REVIEWS</small>
              </span>
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
          <div className="heading">
            <h2 className="text-center">What are you looking for?</h2>
          </div>
          <div className="accordion">
            <FaqComponent />
          </div>
        </Container>
      </section>

      <section id="we-writing">
        <Container className="text-box">
          <h2 className="text-center">We Writing</h2>
          <p>
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
          <h2 className="text-center">Meet The Essay Heroes</h2>
          <p>
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

      <section id="press">
        <Container>
          <h4 className="heading text-center text-light">
            We'have received widespread<a href="#"> press coverage </a>since
            2003
          </h4>
          <Row>
            <Col md={3} xs={6}>
              <h2>THE TIMES</h2>
            </Col>
            <Col md={3} xs={6}>
              <h2>INDEPENDENT</h2>
            </Col>
            <Col md={3} xs={6}>
              <h2>BBC</h2>
            </Col>
            <Col md={3} xs={6}>
              <h2>DAILY MAIL</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Services;
