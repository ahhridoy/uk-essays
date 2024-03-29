import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import { MdDone } from "react-icons/md";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import data from "../../data.json";

const CasestudyService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <ServicesHero service={data.services[8]} />

      <section id="study-report">
        <Container>
          <h2>What is a case study report?</h2>
          <p className="fs-5">
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

      <section id="casestudy-why-choose">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div>
                <h2>Why choose our case study writing service?</h2>
                <p>
                  Putting the perfect case study report together can be tricky.
                  Examining a case in detail requires strong academic skills,
                  such as a key understanding of the task at hand, having a keen
                  critical eye, the ability to propose creative solutions, and
                  finally, present them in a well-structured report. <br />{" "}
                  <br />
                  Our writers have experience preparing thousands of high
                  quality, perfectly structured and in-depth case studies. They
                  know how to analyse the case at hand in great detail and will
                  intelligently comb through the facts. By doing this, they’ll
                  identify the issues and problems within the case study and
                  propose creative and well thought out suitable solutions.{" "}
                  <br /> <br />
                  By ordering our case study writing service, you’ll receive a
                  perfect case study report which you can use to gain a full and
                  detailed understanding of how to analyse your case study in
                  depth. You’ll be able to identify the key points to focus on
                  and get a perfect example of a correctly structured report –
                  helping you achieve the grade you want!
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

      <section id="casestudy-phone-order">
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
                      Simply start your essay order by using our specially
                      designed order form to send us all the details about your
                      piece of work. From there, we take your instructions to
                      write an essay just the way you need it. We’ll review your
                      instructions and get in touch to confirm everything with
                      you and clear up any questions we might have.
                    </p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="second-option">
                    <p>2</p>
                  </div>
                  <div>
                    <h4>Finding your academic expert</h4>
                    <p>
                      Each paper we write is unique, and we always aim to cater
                      to your specific needs. We carefully select each{" "}
                      <a href="#">expert writer</a>– who are always qualified in
                      the subject you need help with – to create a fully
                      referenced essay with the detailed aspects you require,
                      from a rich, detailed discussion to a well-structured
                      argument.{" "}
                      <strong>
                        We never re-use or re-sell any essay we have created.
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="third-option">
                    <p>3</p>
                  </div>
                  <div>
                    <h4>Delivery to you</h4>
                    <p>
                      After being double and triple checked, we prepare the
                      completed essay for download through your customer
                      account. We always aim to deliver your order perfectly on
                      time and without any outstanding issues. We encourage you
                      to read through the essay as soon as possible to make sure
                      you’re fully happy and don’t feel like anything has been
                      missed.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="danger">
              <strong>Order</strong> a case study today!
            </Button>
          </div>
        </Container>
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
