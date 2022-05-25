import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import PhoneOrder from "../../components/PhoneOrder/PhoneOrder";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const CasestudyService = () => {
  return (
    <main>
      <section id="casestudy-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Case Study Writing Service</h2>
                <div className="text-start">
                  <span>Share this: </span>
                  <span>Facebook </span>
                  <span>Twitter </span>
                  <span>Reddit </span>
                  <span>Linkedin </span>
                  <span>Whatsapp </span>
                </div>
                <h4 className="text-success my-2">
                  Get Expert Help with Your Case Study
                </h4>
                <p className="fs-5">
                  Case Studies are written as a special type of{" "}
                  <a href="#">academic report</a> that focuses on a specific
                  case – producing a focused, well-structured and well written
                  case study can be very challenging! Our case study writing
                  service is designed to help you achieve success with your case
                  study report, giving you all the tools that you need to
                  effectively examine the case at hand and produce a detailed
                  report. We can provide you with an exceptionally written case
                  study, researched and prepared by a fully qualified academic
                  in your subject area. Your case study report will be a
                  detailed yet easy to understand analysis of the case –
                  everything you need to gain a full understanding of how to
                  produce a fantastic case study!
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
              <div className="text-light d-flex">
                <span>icon</span>
                <p>Written to Standard</p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="text-light d-flex">
                <span>icon</span>
                <p>Plagiarism-free</p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="text-light d-flex">
                <span>icon</span>
                <p>Always on Time</p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="text-light d-flex">
                <span>icon</span>
                <p>Unrivalled Quality</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="study-report">
        <Container>
          <h2>What is a case study report?</h2>
          <p>
            In General, a case study is a powerful academic tool used to
            identify, examine and attempt to solve an issue – usually within a
            business or organization. A typical case study has a clear set of
            instructions and is structured very similarly to a standard Report.
            You will be asked to examine the case and provide your findings in a
            structured document with sub-headings and clearly defined sections
            (for example: Introduction, Analysis, Conclusion are the three most
            common sections). <br /> <br />
            Firstly, you are presented with a case study, which will outline a
            situation – for example, it may be about a specific business, and a
            problem (or problems) that business is having. The case study report
            will initially outline the facts, then identify and investigate the
            issue(s) or problem(s) being faced, determining what is happening
            and why. Then, it should outline potential solutions to solve the
            issue(s), before selecting one as the most effective solution. You
            may be asked to focus on certain questions and key points – for
            example providing an answer to a given question or being asked to
            consider specific points as part of your proposed solution(s).
          </p>
        </Container>
      </section>

      <section>
        <WhyChoose />
      </section>

      <section>
        <PhoneOrder />
      </section>

      <section id="your-order">
        <Container>
          <h2>How to use your order</h2>
          <p>
            When you receive your completed case study, you get everything you
            need to create your own piece of work and meet your requirements. By
            taking the model case study we produce, you’ll be able to understand
            how to correctly structure your report, the key sources and
            references to utilize, and how to effectively examine the case study
            to produce an excellent answer. Make sure you use your completed
            case study in accordance with our Fair Use Policy – this will help
            you make sure you don’t break any rules and gain the most from your
            experience with us.
          </p>
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

      <section id="related-service">
        <Container>
          <h2 className="text-center my-4">Related services</h2>
          <Row>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/writing-1.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Report Writing Service</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/writing-2.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Essay Writing Service</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img
                  src="/assets/highlighting-1.jpg"
                  alt=""
                  className="w-100"
                />
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

export default CasestudyService;
