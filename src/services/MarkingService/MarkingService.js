import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ConfidenceService from "../../components/ConfidenceSerivce/ConfidenceService";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import {
  AiOutlineFileDone,
  AiOutlineStar,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import data from "../../data.json";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const MarkingService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <ServicesHero service={data.services[10]} />

      <WhyChoose whyChoose={data.whyChoose[7]} />

      <section id="marking-phone-order">
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
                      In step 1, we want to know about your order – we ask about
                      the level at which you are studying, the word count of the
                      paper, when you need the feedback, and the subject area
                      you are studying. We'll also need some of your contact
                      details because we'll send you a confirmation message and
                      might need to call you to ask for some more information.
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
                      Next, we want to know more about the piece of work that
                      you want to be marked. Add as much information as
                      possible! This will help us to choose the writer who is
                      best-suited to mark your work. Any files that you place on
                      the order are kept confidential; to protect your privacy,
                      our team check through the documents before they are sent
                      to our researchers to ensure{" "}
                      <strong>
                        none of your personal details are ever shared.
                      </strong>{" "}
                      <br /> <br />
                      You will then be sent a confirmation email and a member of
                      our team will be in touch.
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
                      Our hard-working staff can then begin finding you a
                      marker! Although we can't give you an exact time for when
                      you will get a marker, it typically takes between 24-48
                      hours. We'll keep in touch with you throughout every step
                      of the process, and we have a Live Chat Support Team who
                      can help if you have any questions about how your order is
                      proceeding. We ask that you pay sooner rather than later,
                      because this will help us to find you a marker much
                      quicker! <br /> <br />
                      Once we've found a marker, they'll get started with
                      checking your work and making constructive suggestions for
                      changes. It's up to you to decide if you want to use our
                      feedback. As well as an estimated grade for the work as it
                      is, we also give another grade estimation for if you make
                      the changes that we suggest.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="how-to-use">
        <Container>
          <h2 className="text-center">
            How to use our Marking and Proofreading Service
          </h2>
          <p className="mb-5 fs-5 text-center">
            Our Marking and Proofreading Service works best when you provide us
            with your university's specific marking criteria so that the <br />{" "}
            marker can see what is required of you and can give you an accurate
            grade.
          </p>
          <div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>Read through the changes</h3>
                <p>
                  Your document is returned to you with the 'track changes'
                  feature enabled, so you can see edits to your spelling and
                  grammar, view suggestions for structural changes, and read the
                  marker's detailed comments on areas of concern.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <BsPencil className="fs-3 text-primary" />
              </div>
              <div>
                <h3>Improve your work</h3>
                <p>
                  Alongside your annotated document, we provide you with a
                  feedback form containing ever more advice on improving your
                  work, it's up to you how much you want to take on board, but
                  we advise that you use as many of the marker's suggestions as
                  possible to secure the best grade you can!
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

      <section id="marking-why-love">
        <Container>
          <h2 className="text-center">Why you'll love UK Essays</h2>
          <p className="text-center mb-5 fs-5">
            Your order is 100% unique to you – so it is plagiarism-free and is
            never shared online or anywhere else - and will be written by one of{" "}
            <br />
            the best experts in the business.
          </p>
          <Row>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-3">
                  <AiOutlineFileDone className="fs-3 text-danger" />
                </div>
                <div>
                  <h4>Privacy first</h4>
                  <p>
                    All your information is safe with us. Privacy and security
                    are integral to everything that we do, and we're constantly
                    updating our procedures for customer confidentiality and
                    anonymity. We only use the best security system for our
                    database – on our order page, you can click the TrustedSite
                    logo to verify our company details and certifications for
                    security. Every piece of work you send to us for marking is
                    checked over and anonymised to ensure your confidentiality
                    when using our services.
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
                  <h4>Expertly assessed quality</h4>
                  <p>
                    We have over 500 experts who are here to help you with your
                    work, and we have an in-house team who are dedicated to
                    finding only the most experienced professionals who will
                    understand university requirements. Our markers are
                    enthusiastic about education and put their all into every
                    piece of work they undertake with us; you can read a{" "}
                    <a href="#">sample marking order</a> completed by one of our
                    writers.
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
                    We also protect your data. In line with new General Data
                    Protection (GDPR) legislation, we only hold on to your data
                    for as long as we need it, and we never sell your data to
                    any third parties. It's important to us that you feel safe
                    when you order our services! You can read more about our
                    procedures in our <a href="#">Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <ConfidenceService />
      </section>

      <section>
        <ReviewsComponent />
      </section>

      <section id="marking-asked-question">
        <Container>
          <h2 className="text-center">Frequently asked questions</h2>
          <p className="text-center fs-5 text-secondary mb-5">
            Here are some of our frequently asked questions to help you, and you
            can read more of these in our Help Centre or chat to a member of our
            Live Chat Support Team, by clicking the live chat icon in the corner
            of the screen.
          </p>

          <Row>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-4">
                  <AiOutlineQuestionCircle className="text-success fs-2" />
                </div>
                <div>
                  <h4>How do you know what grade my work is at?</h4>
                  <p>
                    After years of writing at a high-level, our markers know
                    what makes a great piece of work. We don't just estimate the
                    grade - we also give you in-depth suggestions on how to
                    improve it, focusing on how well you have followed the
                    assignment guidance, the structure and flow of the work, the
                    quality and consistency of referencing, as well as the
                    spelling and grammar. <br /> <br />
                    As with all marking, the service is partly subjective, and
                    we aren't making changes to the work that you have written
                    yourself. You will receive an estimated grade and a
                    potential grade that your work could reach if suggested
                    improvements are made. It's your choice whether you make
                    these changes - it is your work after all! <br /> <br />
                    If you use our Marking Service, we cannot guarantee the
                    grade of your final submission. We recommend that you send
                    us your university's marking criteria and assessment
                    guidelines so we can see exactly what is required of you.
                    Marking criteria differ by course type and level – by
                    sending us your university's criteria, we can estimate the
                    most accurate grade for you!
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-4">
                  <AiOutlineQuestionCircle className="text-success fs-2" />
                </div>
                <div>
                  <h4>Can you edit work that I have already written?</h4>
                  <p>
                    We don't offer an editing service because we don't allow
                    customers to directly submit work that we produce – you can
                    read more about this in our <a href="#">Fair Use Policy</a>.
                    It's important to us that customers use our services to
                    further their own knowledge and use our work as a guide to
                    help them: we do not condone plagiarism. <br /> <br />
                    We do offer an <a href="#">Essay Writing Service</a>, where
                    a writer can either create a model answer from scratch for
                    you, or can read through your completed work and any
                    feedback that you have received to do a complete re-write of
                    your work. You can then use this as a guide to create your
                    own piece of work.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <p className="text-center">
            Find more information in our <a href="#">FAQs section</a>
          </p>
        </Container>
      </section>

      <section id="related-service">
        <Container>
          <h2 className="text-center">Related services</h2>
          <p className="text-center my-3">
            We have a huge range of writing and help services to get you the
            grade you want!
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
                <img src="/assets/typing-1.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Report Writing Service</h4>
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
          <p className="text-center">
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

export default MarkingService;
