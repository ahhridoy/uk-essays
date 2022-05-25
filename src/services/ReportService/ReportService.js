import React from "react";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import PhoneOrder from "../../components/PhoneOrder/PhoneOrder";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import WhyLove from "../../components/WhyLove/WhyLove";

const ReportService = () => {
  return (
    <main>
      <section id="report-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Report Writing Service</h2>
                <p className="fs-5">
                  Our Report Writing Service will help you to create a concise
                  and informative academic report that will get you the grades
                  you need. Our reports are written by the highest-quality
                  writers in the industry and our team of in-house staff will
                  support you through every step of the process to make sure you
                  get the most out of your report!
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

      <section>
        <WhyChoose />
      </section>

      <section id="report-today">
        <Container className="py-5 text-light text-center">
          <h2>Order a Report Today!</h2>
          <p>
            We have over 500 expert essay writers, ready and waiting to help you
            achieve academic success
          </p>
          <Button variant="dark" className="mx-4">
            Order an Report
          </Button>
          <Button variant="light">Check Prices</Button>
        </Container>
      </section>

      <section>
        <PhoneOrder />
      </section>

      <section id="model-report">
        <Container>
          <h2>How to use your model report</h2>
          <p>
            Before the completed report is sent to you, our Quality Control Team
            will read the work, checking to see that it's exactly what you want,
            to the standard that you've asked for. After you have been given
            your report, you can request changes at any time – our Aftercare
            team are incredibly understanding and are eager to help!
          </p>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Read through the work</Accordion.Header>
              <Accordion.Body>
                The best way to write your report is to re-read the one that we
                have given you several times over, learning from the structure,
                the key points and recommendations made by your writer, and any
                crucial theories or sources they have used.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Read through the literature</Accordion.Header>
              <Accordion.Body>
                Use this report to develop your knowledge and be sure to check
                out the literature. Find and read through the sources used in
                the paper, use these to explore the topic further, and conduct
                additional reading to further your own arguments, ideas and
                knowledge.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Write your own report</Accordion.Header>
              <Accordion.Body>
                Read through the information that you gathered and then use the
                model answer as a guide for writing your work, making sure to
                include your own ideas too! For more information about producing
                your own work, take a look at our Fair Use Policy video.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <section>
        <FairUsePolicy />
      </section>

      <section>
        <WhyLove />
      </section>

      <section id="report-today">
        <Container className="py-5 text-light text-center">
          <h2>Order a Report Today!</h2>
          <p>
            We have over 500 expert essay writers, ready and waiting to help you
            achieve academic success
          </p>
          <Button variant="dark" className="mx-4">
            Order an Report
          </Button>
          <Button variant="light">Check Prices</Button>
        </Container>
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
          <p className="text-center my-3">
            We can help you no matter what level you're writing for. Many of our
            writers hold master's degrees or higher, so we can help regardless
            of whether you are studying for an undergraduate or postgraduate
            degree! We have a variety of other services that you can use.
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
                <img src="/assets/writing-1.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Dissertation Writing</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/writing-4.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Essay Plan Service</h4>
              </div>
            </Col>
          </Row>
          <p className="text-center">
            View our <a href="#">full service portfolio</a>
          </p>
        </Container>
      </section>

      <section id="report-today">
        <Container className="py-5 text-light text-center">
          <h2>Order a Report Today!</h2>
          <p>
            We have over 500 expert essay writers, ready and waiting to help you
            achieve academic success
          </p>
          <Button variant="dark" className="mx-4">
            Order an Report
          </Button>
          <Button variant="light">Check Prices</Button>
        </Container>
      </section>

      <section>
        <Press />
      </section>
    </main>
  );
};

export default ReportService;
