import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";

import {
  BsPencil,
  BsCurrencyPound,
  BsWhatsapp,
  BsFillChatLeftFill,
  BsStarHalf,
} from "react-icons/bs";
import { MdDownloadDone, MdOutlineWatchLater, MdDone } from "react-icons/md";
import { AiOutlineFileDone, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiPhoneCall, BiLockAlt } from "react-icons/bi";
import { FiBookOpen, FiUserCheck } from "react-icons/fi";

const EssayplanService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="essayplan-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Essay Plan Writing Service</h2>
                <p className="fs-5">
                  An essay plan is a framework which provides the structure and
                  key information needed for your final essay or piece of work.
                  This consists of bullet points guiding you on how to complete
                  your introduction, which elements should be discussed in each
                  paragraph, key points from the literature or theorists, and
                  what to include in the conclusion. Our outline is a perfect
                  guide to help you write your work and get the grade you want!
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
                  <BsCurrencyPound className="price-icon" /> 42
                </h1>
                <p>Undergraduate 2:2 ??? 1000 words ??? 7 day delivery</p>
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
                  Message us on <strong>WhatsApp </strong> <BsWhatsapp />
                </Button>
                <br />
                <Button variant="primary" className="w-100 my-2">
                  Start a <strong>live chat </strong> <BsFillChatLeftFill />
                </Button>
              </div>
              <div className="essayplan-reviewsio text-center mt-3">
                <img
                  src="/assets/reviewsio-logo-white.webp"
                  alt="logo"
                  className="essayplan-reviewsio-logo"
                />{" "}
                <br />
                <span>
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <BsStarHalf className="text-warning fs-5" />
                  <span className="text-warning ms-2 fs-5">(10 Reviews)</span>
                </span>
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={3} xs={6}>
              <div className="text-light">
                <p>
                  {" "}
                  <BsPencil className="me-2 text-danger" /> Written to Standard
                </p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="text-light d-flex">
                <p>
                  {" "}
                  <MdDownloadDone className="me-2 text-danger" />{" "}
                  Plagiarism-free
                </p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="text-light d-flex">
                <p>
                  {" "}
                  <MdOutlineWatchLater className="me-2 text-danger" /> Always on
                  Time
                </p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="text-light d-flex">
                <p>
                  {" "}
                  <AiOutlineFileDone className="me-2 text-danger" /> Unrivalled
                  Quality
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="essayplan-why-choose">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div>
                <h2>Why choose an Essay Plan?</h2>
                <p>
                  Our essay plan writing service is great value for money: you
                  can order just 1/3rd of the overall word count of your full
                  piece of work. You'll find the depth and quality of our work
                  provided by our professional writers is of the same excellence
                  that you would get with a full model answer! <br /> <br />
                  Still not sure if an essay plan is for you? Take a look at
                  some <a href="#">sample essay</a> plans we have written, as
                  created by our writers, or discover more about the service,
                  how to use your essay plan, and why you can always trust UK
                  Essays to create a fantastic piece of work.
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

      <section id="essayplan-phone-order">
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
                      To get started, <a href="#">head to our order form</a>.
                      Next, select your grade, delivery time and subject area.
                      For the length of the essay plan, you should choose one
                      third of the word count of the overall work: for example,
                      if you are writing a 3000-word essay, you only need to
                      order a 1000-word plan.
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
                      All you need to do now is enter a few details about what
                      you want to be included in your essay outline. The more
                      details you can give us, the better your outline (and
                      therefore your finished essay) will be. We'll need to know
                      the details for the full piece of work that the essay plan
                      is intended for, so be sure to mention any specific
                      requirements here!
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
                      Once these details have been entered, our Customer
                      Experience team will check over the details and confirm
                      them with you. You can pay at any time, but the sooner you
                      make your payment, the better, as we'll be able to find a
                      writer and start your order much faster. Our payment
                      system is fully secure, and you can pay by credit/debit
                      card, WeChat Pay, Alipay or make a bank transfer.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="essayplan-how-to-use">
        <Container>
          <h2>How to use your essay plan</h2>
          <p className="mb-5">
            Essay Plans are great for helping you to stay focused on the main
            points of your work. Once you have been sent your outline, all you
            need to do is flesh it out to make a full essay. We have given you
            the structure and resources to write your essay, so you need to
            follow these to develop your ideas and arguments.
          </p>
          <div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <MdDone className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Read</strong> through the plan
                </h3>
                <p>
                  Start by reading through the plan a couple of times, making
                  sure you locate and read the references used to enhance your
                  knowledge and background reading. You should then develop the
                  main points and think critically about the arguments the
                  writer has given you.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Write your own work</strong> following the guidance
                </h3>
                <p>
                  The essay plan will give you a perfect outline for how to
                  proceed with writing your own work, and the plan that we give
                  you can be used as a structural guide for your future essays,
                  too.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <BsPencil className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Hand in</strong> your completed essay
                </h3>
                <p>
                  Once you have finished writing your full piece of work, you
                  may want to get it checked over to make sure it meets the
                  standard it needs to. To help you with this, we also offer a{" "}
                  <a href="#">marking service</a> to guide you further to the
                  grade you want.
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

      <section id="essayplan-why-love">
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
                  <h4>Expert Qualified Writers</h4>
                  <p>
                    Each essay plan we produce is tailored to your needs, and we
                    only use the highest quality writers. Our writers come from
                    a wide range of professional and academic backgrounds, but
                    rest assured that each one is tested thoroughly before
                    beginning work with us. Each writer must have English as
                    their native language, have professional writing experience
                    and have passed our rigorous entry tests and trial period.
                    We're confident that they'll do the best job, and if you
                    have any problems with your work, then our writers will be
                    happy to look it over for you and make the necessary
                    amendments.
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
                  <h4>Uncompromising Quality</h4>
                  <p>
                    Once your essay plan has been created, it goes through an
                    in-depth <a href="#">quality check</a> by our Quality
                    Control and After Care teams. Our in-house team read through
                    each piece of work to make sure that it follows your
                    requirements and will suit your needs. We recognise the need
                    to get things right, first time and every time, and we work
                    hard to deliver a great service, taking the time to check
                    each order against your instructions. With each essay plan,
                    we will also send you a unique quality report ??? written just
                    for you - and a plagiarism report so you can verify that the
                    work our writer has provided is 100% original and has been
                    tailored to your assignment and grade requirements.
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
                  <h4>Outstanding Customer Support</h4>
                  <p>
                    We have both a super friendly Customer Experience team, who
                    aim to respond to any questions or issues as quickly as
                    possible, and a dedicated live chat support team, who can
                    answer any questions you might have before you place your
                    order. Our staff are professional, welcoming and
                    understanding of your needs ??? we recognise the importance of
                    great customer care, and we all know from experience just
                    how stressful university can be! We are constantly striving
                    to be the best, so we ask for feedback on every piece of
                    work you receive, and we continue to listen to your feedback
                    and make changes to create a better service for you!
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
                    Not only do we work to ensure you have the best essay plan
                    possible; we also work hard to make sure that you don't have
                    to worry about your privacy and security. We have an
                    in-house team dedicated to monitoring Data Protection and
                    Privacy. We will never sell your data, and we have a variety
                    of security measures in place to protect any data you send
                    to us. <br /> <br />
                    Your data is encrypted with the best software, and we use
                    Amazon Web Services (AWS) as our cloud computing provider.
                    AWS is a gold standard information security provider, so you
                    can be sure that your data is safe. Our storage and usage of
                    your data is laid out clearly and transparently in our
                    privacy policy.
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

      <section id="related-service">
        <Container>
          <h2 className="text-center">Related services</h2>
          <p className="text-center my-3 mb-5">
            If you're unsure about what service you might need, then we're happy
            to help you; we have a variety of options which can be tailored to
            your writing needs. For any type of essay, coursework or assignment
            that you have, we will always do our best to help you get the grade
            that you want.
          </p>
          <Row>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/writing-2.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Essay Writing Service</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/reading-1.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Assignment Writing Service</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/typing-2.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">
                  Dissertation Writing Service
                </h4>
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

export default EssayplanService;
