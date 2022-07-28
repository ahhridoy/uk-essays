import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import { BsPencil } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { AiOutlineFileDone, AiOutlineStar } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiBookOpen, FiUserCheck } from "react-icons/fi";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import data from "../../data.json";

const CourseworkService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <ServicesHero service={data.services[2]} />

      <section id="coursework-why-choose">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div>
                <h2>Why choose our coursework writing service?</h2>
                <p>
                  Writing a piece of coursework can be difficult, but we're here
                  to help! We understand how tough it can be to turn all your
                  reading into a structured piece of work, but our coursework
                  service will help you get the grade you need - on time, every
                  time.
                  <br /> <br />
                  If you've done an experiment and need help writing up the
                  results, that's no problem! If you're writing a piece of
                  coursework on a project that you've worked on, we can help
                  with this, too! Nothing is too big or small for our
                  experienced coursework writers.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="p-3 shadow rounded">
                <h4>Reasons to choose our service</h4>
                <p>
                  <MdDone className="text-success fs-4 me-2" />
                  We only allow our <strong>
                    qualified academic writers
                  </strong>{" "}
                  with matching qualifications to take on your work.
                </p>
                <hr />
                <p>
                  <MdDone className="text-success fs-4 me-2" />
                  Your order will go through{" "}
                  <strong>rigorous quality controls</strong> and is checked
                  against your instructions and academic standards by qualified
                  professionals, we'll even give you a quality report to show
                  our findings.
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

      <section id="coursework-phone-order">
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
                    <h4>Start your UK Essays order</h4>
                    <p>
                      In the first part, we ask you about your order. This
                      includes the grade you want, the word count, and when you
                      need your coursework for, so make sure you give yourself
                      some extra time to re-write the work!
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
                      Next, we ask for a few more details about your work. It's
                      important that you give us as much information as
                      possible, because this will help us to find the best
                      writer for you, and get your work started as soon as
                      possible! We ask you to send us any files that are
                      relevant and any information about the topic.
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
                      Once you have entered all the information, our Customer
                      Experience Team will confirm your order with you and check
                      over the order details. You can pay now or later, but it's
                      better to pay quickly because this allows us to find a
                      writer and begin your order much faster. You can pay by
                      credit/debit card, Alipay, WeChat Pay or by bank transfer.
                      Our payment system is fully secure, and you will always
                      receive a payment confirmation from us by email.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="danger">
              <strong>Order</strong> an coursework today!
            </Button>
          </div>
        </Container>
      </section>

      <section id="how-to-use">
        <Container>
          <h2>How to use our Coursework Writing Services</h2>
          <p className="mb-5">
            From the moment you place your order, we're here for you – our
            Customer Experience Team will help you with any questions you might
            have, and our Quality Control and Aftercare Teams will check over
            your order with a fine-tooth comb to make sure it matches all your
            requirements.
          </p>
          <div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <MdDone className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Read</strong> through the work
                </h3>
                <p>
                  You should do this a few times so that you understand the most
                  important parts of the coursework. Highlight key arguments and
                  theories and make notes of any ideas that you might want to
                  discuss, or any opinions that you might have developed from
                  reading the work. <br /> <br />
                  Be sure that you understand the content – if there's anything
                  that confused you, you can always get in touch with our
                  Aftercare Team for clarification.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Read</strong> through the literature
                </h3>
                <p>
                  Before re-writing the coursework, take a look at the
                  literature that our writer has used and make your own notes on
                  these sources!
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <BsPencil className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Write</strong> your own essay
                </h3>
                <p>
                  Use your notes, and the new knowledge that you have gained, to
                  create your own coursework; when you're finished, you can
                  compare your work to our writer's model answer to make sure
                  that nothing has been copied and that you have cited all your
                  references properly. <br /> <br />
                  Once you have finished writing your full piece of work, you
                  may want to get it checked over to make sure it meets the
                  standard it needs to. To help you with this, we also offer a
                  marking service to guide you further to the grade you want.{" "}
                  <br /> <br />
                  For more information on how to use the cousework as a model
                  for your own piece of work, please refer to our{" "}
                  <a href="#">Fair Use Policy.</a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="coursework-why-love">
        <Container>
          <h2 className="text-center">Why you'll love UK Essays</h2>
          <p className="text-center mb-4">
            These are just some of the great things that are waiting for you
            when you order with UK Essays.
          </p>
          <Row>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-3">
                  <AiOutlineFileDone className="fs-3 text-danger" />
                </div>
                <div>
                  <h4>Expert qualified writers</h4>
                  <p>
                    The writer that we assign to you is <strong>always</strong>{" "}
                    qualified to write at the grade that you order. <br />{" "}
                    <br />
                    We have a rigorous process to validate a writer's quality
                    before they are allowed to help you: we check their identity
                    and their qualifications carefully, and they must pass a
                    'test' essay and a probationary period before they're
                    considered to help our customers. We expect the best from
                    our writers so that you can get the best from us!
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-3">
                  <AiOutlineStar className="fs-3 text-danger" />
                </div>
                <div>
                  <h4>Uncompromising quality</h4>
                  <p>
                    We're honest with you throughout the order process, and
                    we're always transparent with our pricing. Every piece of
                    work has its own unique price, so you aren't paying for
                    something that you aren't going to get! <br /> <br />
                    Our prices reflect our quality of service you will receive.
                    We only hire the best writers, and each one is tested
                    regularly to make sure they continually produce the best
                    quality essays, dissertations and reports. Our writers must
                    have at least an undergraduate 2:1 qualification, but many
                    of them have master's level or even PhD qualifications.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-3">
                  <FiUserCheck className="fs-3 text-danger" />
                </div>
                <div>
                  <h4>Outstanding customer support</h4>
                  <p>
                    We can help you with your coursework, no matter what grade
                    you need, how long it is, or what the subject is. We want
                    you to succeed: our team of professional writers come from
                    every background, and our Quality Team will make sure that
                    the work fits your exact instructions. We'll make sure that
                    we put you first throughout every stage of your order, even
                    offering an Aftercare service!
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-3">
                  <BiLockAlt className="fs-3 text-danger" />
                </div>
                <div>
                  <h4>Safe & Trusted</h4>
                  <p>
                    You can have confidence that we're a secure service which
                    will put your needs first. We take your privacy seriously,
                    and you can read our <a href="#">Privacy Policy here</a>,
                    which is constantly updated. We're in line with all General
                    Data Protection Regulations, and you can always ask our
                    in-house GDPR officers if you have any questions. With us,
                    your details are completely confidential.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
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

      <section id="coursework-askedquestion">
        <AskedQuestion />
      </section>

      <section id="related-service">
        <Container>
          <h2 className="text-center">Related services</h2>
          <p className="text-center my-3 mb-5">
            Maybe you've realised that you need a different type of work. That's
            great! We can help you with our essay writing service or report
            writing service. We can even check over work that you've already
            written and offer you detailed feedback with our marking service.
          </p>
          <Row>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/studying-5.jpg" alt="" className="w-100" />
                <h4 className="text-center py-4">Essay Writing Service</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/typing-1.jpg" alt="" className="w-100" />
                <h4 className="text-center py-4">Report Writing Service</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img
                  src="/assets/highlighting-1.jpg"
                  alt=""
                  className="w-100"
                />
                <h4 className="text-center py-4">Marketing Service</h4>
              </div>
            </Col>
          </Row>
          <p className="text-center my-5">
            View our <a href="#">full service portfolio</a>
          </p>
        </Container>
      </section>

      <section>
        <Press />
      </section>
    </main>
  );
};

export default CourseworkService;
