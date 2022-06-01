import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
import EssayToday from "../../components/EssayToday/EssayToday";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import {
  BsStarHalf,
  BsCurrencyPound,
  BsWhatsapp,
  BsFillChatLeftFill,
  BsPencil,
} from "react-icons/bs";
import { BiPhoneCall, BiLockAlt } from "react-icons/bi";
import { MdDownloadDone, MdDone } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";

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
                <h1 className="price">
                  <BsCurrencyPound className="price-icon" />
                  124
                </h1>
                <p>Undergraduate 2:2 • 1000 words • 7 day delivery</p>
                <img src="/assets/trusted-site.svg" alt="" /> <br />
                <Button variant="success" className="w-100 my-2">
                  <strong>Order</strong> an essay
                </Button>
                <p>Delivered on-time or your money back</p>
                <Button variant="primary" className="w-100 my-2">
                  Request a <strong>call back </strong> <BiPhoneCall />
                </Button>
                <br />
                <Button variant="success" className="w-100 my-2">
                  Message us on <strong>WhatsApp </strong>
                  <BsWhatsapp />
                </Button>
                <br />
                <Button variant="primary" className="w-100 my-2">
                  Start a <strong>live chat </strong>
                  <BsFillChatLeftFill />
                </Button>
              </div>
              <div className="assignment-reviewsio text-center mt-3">
                <img
                  src="/assets/reviewsio-logo-white.webp"
                  alt="logo"
                  className="assignment-reviewsio-logo"
                />{" "}
                <br />
                <span>
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <BsStarHalf className="text-warning fs-5" />
                  <span className="text-warning ms-2 fs-5">(85 Reviews)</span>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="assignment-difference">
        <Container>
          <Row>
            <h2 className="text-center text-light mb-4">
              The UKEssays Difference
            </h2>
            <div className="text-box">
              <div className="text-light">
                <p>
                  <BsPencil className="me-2 text-danger" /> Written by Academic
                  Experts
                </p>
                <p>
                  <BiLockAlt className="me-2 text-warning" /> Trusted, Secure &
                  Confidential
                </p>
              </div>

              <div className="text-light">
                <p>
                  <MdDownloadDone className="me-2 text-success" /> Guaranteed
                  Plagiarism-free
                </p>
                <p>
                  <AiFillHeart className="me-2 text-danger" /> Exceptional
                  Customer Service
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section id="assignment-why-choose">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div>
                <h2>Why choose our assignment writing service?</h2>
                <p>
                  We know how tough writing an assignment can be. Maybe you're
                  trying to break into a new grade boundary; maybe you can't
                  figure out how to structure your work; or maybe it's just that
                  you have to talk about a topic that you're really struggling
                  to understand! <br /> <br />
                  When you order with us, you're working with some of the most
                  experienced experts in modern academia. We have a huge team of
                  professional writers who undergo rigorous tests before they
                  start working for us. We have writers in every subject, and
                  many hold several degrees. <br /> <br />
                  We only begin your assignment order when we're sure we have
                  someone who is well-versed in your subject area and qualified
                  to write to the grade you need.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="p-3 shadow rounded">
                <h4>Reasons to choose our service</h4>
                <p>
                  <MdDone className="text-success fs-4 me-2" />
                  We only allow our <b>qualified academic writers</b> with
                  matching qualifications to take on your work.
                </p>
                <hr />
                <p>
                  <MdDone className="text-success fs-4 me-2" />
                  Your order will go through <b>
                    rigorous quality controls
                  </b>{" "}
                  and is checked against your instructions and academic
                  standards by qualified professionals, we'll even give you a
                  quality report to show our findings.
                </p>
                <hr />
                <p>
                  <MdDone className="text-success fs-4 me-2" />
                  Your order will come with a{" "}
                  <strong>comprehensive plagiarism report</strong> which is
                  compiled with our state-of-the-art plagiarism software,
                  ensuring the work that is produced is not plagiarised.
                </p>
                <hr />
                <p>
                  <MdDone className="text-success fs-4 me-2" />
                  You get a <strong>7 day amendment period</strong>, so if
                  you're not happy with the work, let us know and our customer
                  support teams will resolve any concerns.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <EssayToday />
      </section>

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
