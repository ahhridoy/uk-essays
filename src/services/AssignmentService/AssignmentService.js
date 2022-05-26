import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
import EssayToday from "../../components/EssayToday/EssayToday";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import PhoneOrder from "../../components/PhoneOrder/PhoneOrder";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const AssignmentService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="assignment-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Assignment Writing Service</h2>
                <h4 className="text-success my-2">
                  Get Assignment Help from the Experts
                </h4>
                <p className="fs-5">
                  Assignments are completed throughout your time in university
                  and are used by tutors to measure your progress and
                  understanding of a course or module. <br /> <br />
                  Our Assignment Writing Service will create a 100% custom
                  written assignment that will help you to be the best. We work
                  with a professional team of UK based writers who, following
                  your requirements and instructions, will develop a model
                  answer which is flawlessly structured, well-sourced and
                  written in perfect English.
                </p>
                <div className="bg-black p-3 my-2">
                  <h4>See for yourself</h4>
                  <h3>
                    <span className="text-success">Samples</span> of our work
                  </h3>
                  <p>
                    We have a number of sample essays to illustrate the quality
                    of our services. Each sample has been written to a specific
                    academic grade.
                  </p>
                  <Button variant="success" className="mx-2">
                    Samples of our work
                  </Button>
                  <Button variant="success">Samples of essays</Button>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12}>
              <div className="bg-light p-4 text-center rounded">
                <i>Prices from</i>
                <h1 className="price">124</h1>
                <p>Undergraduate 2:2 • 1000 words • 7 day delivery</p>
                <img src="/assets/trusted-site.svg" alt="" /> <br />
                <Button variant="success" className="w-100 my-2">
                  Order an essay
                </Button>
                <p>Delivered on-time or your money back</p>
                <Button variant="primary" className="w-100 my-2">
                  Request a call back
                </Button>
                <br />
                <Button variant="success" className="w-100 my-2">
                  Message us on WhatsApp
                </Button>
                <br />
                <Button variant="primary" className="w-100 my-2">
                  Start a live chat
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="difference2">
        <Container>
          <Row>
            <h2 className="text-center text-light mb-4">
              The UKEssays Difference
            </h2>
            <div className="text-box">
              <div className="text-light">
                <p>Written by Academic Experts</p>
                <p>Trusted, Secure & Confidential</p>
              </div>

              <div className="text-light">
                <p>Guaranteed Plagiarism-free</p>
                <p>Exceptional Customer Service</p>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section>
        <WhyChoose />
      </section>

      <section>
        <EssayToday />
      </section>

      <section id="phone-order2">
        <PhoneOrder />
      </section>

      <section id="how-to-use">
        <Container>
          <h2>How to use your model essay</h2>
          <p className="mb-5">
            Our Assignment Writing Service aims to help you understand what
            makes a great assignment, and offers a guide for the structure,
            language, style and engagement with sources that will be expected of
            you. You can read all about our <a href="">Fair Use Policy</a> to
            learn how to use our service correctly and to find top tips on
            writing your work using our model as a guide!
          </p>
          <div>
            <div className="my-4">
              <h3>Read through the assignment</h3>
              <p>
                We recommend that you gather as much information as you can from
                our work – check out the sources we've written about and read
                them yourself, then interpret the writer's arguments and
                viewpoints; what do you think?
              </p>
            </div>
            <div className="my-4">
              <h3>Make Notes</h3>
              <p>
                Once you've formed your own critical viewpoint, you can make
                notes about your comprehension of the theories and the
                literature, then you can compare the conclusions your writer has
                drawn with your own.
              </p>
            </div>
            <div className="my-4">
              <h3>Write your own assignment</h3>
              <p>
                You can use the critical ideas you've developed by following
                this process and apply them to our writer's carefully crafted
                example structure. This is the best way to write your own
                assignment and create a great piece of work, getting the most
                out of our model answer! <br /> <br />
                If you have any questions, our Customer Experience Team will be
                happy to help you! We respond to all our messages, so you never
                have to worry about being left in the dark.
              </p>
            </div>
          </div>
          <p className="text-center">
            You can find further information about how our service works in the{" "}
            <a href="#">FAQs section</a>
          </p>
        </Container>
      </section>

      <section>
        <FairUsePolicy />
      </section>

      <section>
        <ReviewsComponent />
      </section>

      <section>
        <AboutCompany />
      </section>

      <section>
        <AskedQuestion />
      </section>

      <section id="assignment-today">
        <Container className="py-5 text-light text-center">
          <h2>Order An Assignment Today!</h2>
          <p>
            We have over 500 expert assignment writers, ready and waiting to
            help you achieve academic success
          </p>
          <Button variant="dark" className="mx-4">
            Order an Assignment
          </Button>
          <Button variant="light">Check Prices</Button>
        </Container>
      </section>

      <section id="related-service">
        <Container>
          <h2 className="text-center">Related services</h2>
          <p className="text-center my-3">
            We offer many different services to help you get the best out of
            your education. Whether you're an undergraduate or master's student,
            we can help!
          </p>
          <Row>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/studying-5.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Essay Writing Service</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/writing-3.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">
                  Dissertation Writing Service
                </h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/studying-1.jpg" alt="" className="w-100" />
                <h4 className="text-center py-4">
                  Reflective Practice Service
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Press />
      </section>
    </main>
  );
};

export default AssignmentService;
