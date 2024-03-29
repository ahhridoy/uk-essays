import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import {
  BsPencil,
} from "react-icons/bs";
import {  MdDone } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import data from "../../data.json";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import OrderToday from "../../components/OrderToday/OrderToday";

const AssignmentService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <ServicesHero service={data.services[1]} />

      <WhyChoose whyChoose={data.whyChoose[1]} />

      <OrderToday card={data.OrderToady[1]} />

      <section id="assignment-phone-order">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <img
                src="/assets/phone-order.png"
                alt="phone-icon"
                className="w-100"
              />
            </Col>
            <Col md={6} xs={12}>
              <h2 className="my-3">
                Our order process is simple Three easy steps!
              </h2>
              <div>
                <div className="text-box">
                  <div className="first-option">
                    <p>1</p>
                  </div>
                  <div>
                    <h4>Start your assignment order</h4>
                    <p>
                      To get started, head to our <a href="#">order form</a>,
                      here you can calculate a price based on your specific
                      requirements. Next, we ask to know the basics, such as the
                      word count of the paper, when you need the order by, and
                      the subject area you study.
                    </p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="second-option">
                    <p>2</p>
                  </div>
                  <div>
                    <h4>Tell us all your requirements</h4>
                    <p>
                      Next, we'll ask for a little more detail. It helps us to
                      have as much information as possible because it will help
                      us to choose the writer who will suit your order best!
                      We'll send you a confirmation of your order, and you can
                      add extra details whenever you like before work gets
                      started. Don't worry: our team will get in touch with you
                      to confirm the specifics before we send your order out to
                      make sure nothing has been missed!
                    </p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="third-option">
                    <p>3</p>
                  </div>
                  <div>
                    <h4>An academic expert will start your order</h4>
                    <p>
                      You can pay at any time, but it's best to pay as soon as
                      possible to enable us to find you a writer. Once you've
                      paid a minimum of 50% of your order cost, your order is
                      ready to go! <br /> <br />
                      <strong>
                        We never re-use or re-sell any assignments
                      </strong>{" "}
                      we have created, so you can be assured that the work you
                      receive will be 100% original.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="danger">
              <strong>Order</strong> an assignment today!
            </Button>
          </div>
        </Container>
      </section>

      <section id="how-to-use">
        <Container>
          <h2>How to use your model assignment</h2>
          <p className="mb-5 fs-5">
            Our Assignment Writing Service aims to help you understand what
            makes a great assignment, and offers a guide for the structure,
            language, style and engagement with sources that will be expected of
            you. You can read all about our <a href="#">Fair Use Policy</a> to
            learn how to use our service correctly and to find top tips on
            writing your work using our model as a guide!
          </p>
          <div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <MdDone className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Read</strong> through the assignment
                </h3>
                <p>
                  We recommend that you gather as much information as you can
                  from our work – check out the sources we've written about and
                  read them yourself, then interpret the writer's arguments and
                  viewpoints; what do you think?
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>Make Notes</h3>
                <p>
                  Once you've formed your own critical viewpoint, you can make
                  notes about your comprehension of the theories and the
                  literature, then you can compare the conclusions your writer
                  has drawn with your own.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <BsPencil className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Write</strong> your own assignment
                </h3>
                <p>
                  You can use the critical ideas you've developed by following
                  this process and apply them to our writer's carefully crafted
                  example structure. This is the best way to write your own
                  assignment and create a great piece of work, getting the most
                  out of our model answer! <br /> <br />
                  If you have any questions, our Customer Experience Team will
                  be happy to help you! We respond to all our messages, so you
                  never have to worry about being left in the dark.
                </p>
              </div>
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
          <p className="text-center mt-5">
            <a href="#">View our full service portfolio</a>
          </p>
        </Container>
      </section>

      <section>
        <Press />
      </section>
    </main>
  );
};

export default AssignmentService;
