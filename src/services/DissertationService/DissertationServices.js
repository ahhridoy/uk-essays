import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdDone } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import ConfidenceService from "../../components/ConfidenceSerivce/ConfidenceService";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import data from "../../data.json";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const DissertationServices = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <ServicesHero service={data.services[6]} />

      <WhyChoose whyChoose={data.whyChoose[5]} />

      <section id="dissertation-phone-order">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <img
                src="/assets/phone-order2.png"
                alt="phone-icon"
                className="w-100"
              />
            </Col>
            <Col md={6} xs={12}>
              <h2 className="my-3">
                <span className="fs-4">Our order process is simple</span>
                <br /> Three easy steps!
              </h2>
              <div>
                <div className="text-box">
                  <div className="first-option">
                    <p>1</p>
                  </div>
                  <div>
                    <h4>Start your dissertation order</h4>
                    <p>
                      In the first stage, we simply need to know your required
                      grade, expected word count, dissertation subject area and
                      when you would like the work delivered. Be sure to give
                      yourself enough time to write your own work in accordance
                      with our <a href="#">Fair Use Policy</a>! We ask for some
                      contact details at this point so we can get in touch with
                      you about starting your order.
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
                      When ordering a full dissertation, we also need to know if
                      you require an abstract and/or appendices, and if you have
                      any specific requirements for the structure of your
                      dissertation. There's also an opportunity to attach your
                      course handbook and any completed work you have – the more
                      information we have, the better we can help you! <br />{" "}
                      <br />
                      If you're ordering part of a dissertation, you can select
                      which chapters you want to order, and the word count you
                      need for them; it's super quick!
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
                      Once these details have been entered, our English speaking
                      Customer Experience team will check over the details and
                      confirm them with you. You can pay at any time, but the
                      sooner you make your payment, the better, as we'll be able
                      to find the best writer and start your order much faster.
                      Our payment system is fully secure and you can pay by
                      credit/debit card, Amazon Pay, or make a bank transfer.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="primary">
              <strong>Order</strong> a dissertation today!
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <FairUsePolicy />
      </section>

      <section id="how-to-use">
        <Container>
          <h2>What you'll get with our Dissertation Writing Service</h2>
          <p className="mb-5">
            When you order with us, you're ordering from a trusted UK company
            with over 17 years experience in the industry. We have over 500
            expert dissertation writers, who are experienced in a wide range of
            subject areas, so no subject is too small or obscure for us! All of
            our writers hold at least a 2:1 degree, with many holding master's
            degrees or PhDs! They're each seasoned in academic writing and know
            exactly what it takes to compose an insightful, well-researched and
            thorough dissertation which meets the grade you want! To see what we
            mean, check out these <a href="#">sample dissertations</a> that were
            written by our writers! <br /> <br />
            When you use our Dissertation Writing Service, you can order the
            full dissertation all at once, or just the individual chapters you
            need. Our service includes:
          </p>
          <div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Introduction</strong>
                </h3>
                <p>
                  The introduction chapter states the aims, purpose and
                  objectives of the work. It should grab the reader's attention
                  and tell them what the work is about and why you have chosen
                  the subject.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Literature Review</strong>
                </h3>
                <p>
                  The literature review will identify past research on your
                  chosen topic. It will examine published journal articles,
                  books and other types of sources to identify key themes and
                  determine a 'gap' in the existing research. Many dissertations
                  are entirely literature-based. If you are looking for a
                  stand-alone literature review then visit our{" "}
                  <a href="#">literature review writing service</a>.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Methodology</strong>
                </h3>
                <p>
                  The methodology chapter is vital to your dissertation. The
                  purpose of this section is to say what you want to find out
                  and how you are going to do it. It outlines the research
                  paradigm and methods that you have chosen to use in your
                  research, as well as decisions you have made in terms of the
                  sampling and analysis of the data. Each of these decisions
                  need to be properly justified so that it is clear your methods
                  match the aims and objectives of your research. <br /> <br />
                  If you haven't yet decided what research method you would like
                  to use, our researchers will happily look at your research
                  topic and decide which is most suitable.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Results</strong>
                </h3>
                <p>
                  A results chapter is usually included when your dissertation
                  involves collecting data. This chapter outlines your findings
                  and presents your data, often using tables and figures, in
                  relation to each question or theme. It is also where any
                  statistical testing is done so that we can see how significant
                  the results were. We have many writers who are familiar with
                  statistical software such as SPSS or STATA and are ready to
                  help with this part.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Discussion</strong>
                </h3>
                <p>
                  A discussion chapter compares your results with other research
                  on the subject to work out what we have learned and what it
                  means for the future. It talks about whether old research has
                  been confirmed or contradicted, any new theories or
                  explanations that might have emerged, and what the results
                  might mean for policy and practice.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Conclusion</strong>
                </h3>
                <p>
                  The conclusion chapter is typically around 10% of the word
                  count. It summarises what was done, the key findings of the
                  research, and your recommendations - it needs to be clear and
                  to the point.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Extras & Other Assistance</strong>
                </h3>
                <p>
                  We can help with many other 'extras' that you may require. For
                  example, dissertations often require an abstract, which is a
                  short summary of the entire dissertation that is not factored
                  into the final word count. Designing research instruments can
                  also be very difficult, so our writers can create interview
                  questions or sample questionnaires to assist you in conducting
                  your research.
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

      <section id="full-dissertation">
        <Container>
          <h2 className="text-center my-2">Full Dissertation</h2>
          <p className="text-center">
            We have expert writers ready and waiting to help.
          </p>
          <p className="mb-4 text-center">
            You can view samples of the work produced by our expert writers in
            different fields of study below.
          </p>
          <p className="text-center">
            <strong>Sample dissertations</strong> by our expert writers
          </p>
          <Row>
            <Col md={4} xs={6}>
              <div>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Business</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Construction</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Education</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Environmental Sciences</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Finance</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>information Systems</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Marketing</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Medicine</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Tourism</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Business</p>
                  <p className="text-light bg-danger rounded">Masters Merit</p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Management</p>
                  <p className="text-light bg-danger rounded">Masters Merit</p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Nursing</p>
                  <p className="text-light bg-danger rounded">Masters Merit</p>
                </a>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-5">
            <Button variant="primary">View all Samples</Button>
          </div>
        </Container>
      </section>

      <section>
         <ConfidenceService />
      </section>
    </main>
  );
};

export default DissertationServices;
