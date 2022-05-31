import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import PhoneOrder from "../../components/PhoneOrder/PhoneOrder";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import { BsPencil } from "react-icons/bs";
import { MdDownloadDone, MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";

const CourseworkService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="coursework-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Coursework Writing Service</h2>
                <p className="fs-5">
                  Academic coursework is how you show your tutors or teachers
                  what you have learned throughout your course or module.
                  Coursework-style assessments are often used in undergraduate
                  degrees or diplomas, and usually count towards your final
                  grade. <br /> <br />
                  Our Coursework Writing Service will help you to develop a
                  well-written, perfectly structured and flawlessly referenced
                  piece of work no matter what your requirements are.
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

      <section>
        <WhyChoose />
      </section>

      <section id="coursework-phoneorder">
        <PhoneOrder />
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
            <div className="my-4">
              <h3>Read through the work</h3>
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
            <div className="my-4">
              <h3>Read through the literature</h3>
              <p>
                Before re-writing the coursework, take a look at the literature
                that our writer has used and make your own notes on these
                sources!
              </p>
            </div>
            <div className="my-4">
              <h3>Write your own coursework</h3>
              <p>
                Use your notes, and the new knowledge that you have gained, to
                create your own coursework; when you're finished, you can
                compare your work to our writer's model answer to make sure that
                nothing has been copied and that you have cited all your
                references properly. <br /> <br />
                Once you have finished writing your full piece of work, you may
                want to get it checked over to make sure it meets the standard
                it needs to. To help you with this, we also offer a marking
                service to guide you further to the grade you want. <br />{" "}
                <br />
                For more information on how to use the cousework as a model for
                your own piece of work, please refer to our{" "}
                <a href="#">Fair Use Policy</a>.
              </p>
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
              <h4>Expert qualified writers</h4>
              <p>
                The writer that we assign to you is always qualified to write at
                the grade that you order. <br /> <br />
                We have a rigorous process to validate a writer's quality before
                they are allowed to help you: we check their identity and their
                qualifications carefully, and they must pass a 'test' essay and
                a probationary period before they're considered to help our
                customers. We expect the best from our writers so that you can
                get the best from us!
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h4>Uncompromising quality</h4>
              <p>
                We're honest with you throughout the order process, and we're
                always transparent with our pricing. Every piece of work has its
                own unique price, so you aren't paying for something that you
                aren't going to get! <br /> <br />
                Our prices reflect our quality of service you will receive. We
                only hire the best writers, and each one is tested regularly to
                make sure they continually produce the best quality essays,
                dissertations and reports. Our writers must have at least an
                undergraduate 2:1 qualification, but many of them have master's
                level or even PhD qualifications.
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h4>Outstanding customer support</h4>
              <p>
                We can help you with your coursework, no matter what grade you
                need, how long it is, or what the subject is. We want you to
                succeed: our team of professional writers come from every
                background, and our Quality Team will make sure that the work
                fits your exact instructions. We'll make sure that we put you
                first throughout every stage of your order, even offering an
                Aftercare service!
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h4>Safe & Trusted</h4>
              <p>
                You can have confidence that we're a secure service which will
                put your needs first. We take your privacy seriously, and you
                can read our <a href="#">Privacy Policy here</a>, which is
                constantly updated. We're in line with all General Data
                Protection Regulations, and you can always ask our in-house GDPR
                officers if you have any questions. With us, your details are
                completely confidential.
              </p>
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
