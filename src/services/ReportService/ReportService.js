import React from "react";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import { MdDone } from "react-icons/md";
import { AiOutlineFileDone, AiOutlineStar } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import data from "../../data.json";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const ReportService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <ServicesHero service={data.services[7]} />

      <WhyChoose whyChoose={data.whyChoose[0]} />

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

      <section id="report-phone-order">
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
                      The first stage of the order process is about your needs –
                      we ask to know what grade you want, how many words or
                      pages you want to be written, when you want the work, and
                      what subject you're studying.
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
                      Next, we ask for a few more specifics. It helps us to know
                      what your report is based on and if you have a specific
                      structure that you need to follow. You can add any files
                      that you think will be helpful to us at this stage, like
                      your course guidelines or research that will be relevant
                      to your work. This information will help us to find the
                      most suitable writer for your order – the more information
                      you give, the better! <br /> <br />
                      After this, our team will check your order details and
                      confirm them with you. They might also ask you a few more
                      questions, which will help us to process your order.
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
                      You can make a payment now or later, but we recommend that
                      you do it sooner because this will help us to find a
                      writer much more quickly! <br /> <br />
                      Once our writer gets started on your order, we'll keep you
                      in the loop throughout, and if you have any issues or
                      questions – we'll be more than happy to help!
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
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

      <section id="report-why-love">
        <Container>
          <h2 className="text-center">Why you'll love UK Essays</h2>
          <p className="text-center mb-4">
            Our reports are written by the highest-quality writers in the
            industry and our team of in-house staff will support you through
            every step of the process to make sure you get the most out of your
            report!
          </p>
          <Row>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-3">
                  <AiOutlineFileDone className="fs-3 text-danger" />
                </div>
                <div>
                  <h4>Detailed and structured reports</h4>
                  <p>
                    A good structure is key to writing a great report, but it
                    can be difficult to know where to begin! We have a huge
                    number of experts in writing reports, who are trained in
                    many subject areas and degree types - whether you're an
                    undergraduate or master's student, we're here for you. Our
                    order process is super easy, and you can provide as much
                    detail as you like about how you want your report to be
                    written or any specific requests you might have.
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
                    We've been in business since 2003 and have always strived to
                    offer only the best quality of work to our customers. Our
                    writers are experts in creating well written, detailed
                    reports. We know this because before they can complete any
                    order, we take steps to make sure they're fully qualified to
                    work in your subject and we test them with a practical
                    assignment so that we know they are able to perform. Also,
                    because you are paying for originality, every piece of work
                    comes with a free plagiarism scan so that you know it's 100%
                    plagiarism free! We read every single word of the reports
                    that our writers create to make sure they are of the highest
                    quality and to guarantee you get the best learning
                    experience from us.
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
                  <h4>Lots of support throughout</h4>
                  <p>
                    The moment your order is placed, we are hard at work to
                    provide a report that; matches your requirements exactly, is
                    on time, and meets the grade that you need. Our Customer
                    Experience Team will keep you in the loop every step of the
                    way and our Quality Control Team will check the work against
                    your instructions, as well as making sure that the spelling,
                    grammar, focus, and structure of your report are all up to
                    scratch. Finally, our After Care Team will keep in touch
                    with our writer, and if you need any changes, they'll do
                    everything they can to make sure you are left with a smile
                    on your face.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <p className="text-center">
            Get more information in our <a href="#">support section</a>
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
