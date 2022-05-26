import React from "react";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import ConfidenceService from "../../components/ConfidenceSerivce/ConfidenceService";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import PhoneOrder from "../../components/PhoneOrder/PhoneOrder";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import WhyLove from "../../components/WhyLove/WhyLove";

const PowerpointService = () => {
  return (
    <main>
      <section id="powerpoint-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">
                  Academic PowerPoint Presentation Service
                </h2>
                <p className="fs-5">
                  Many university courses now use PowerPoint presentations as a
                  form of academic assessment: that means that your tutors ask
                  you to present your knowledge to a room full of people. We
                  know just how scary that can be, and we're here to help!{" "}
                  <br /> <br />
                  Our service can help you to develop an academic PowerPoint
                  presentation which is engaging, professional and shows your
                  information in a clear and informative manner. Our
                  presentations also include explanatory notes – meaning you
                  really do have everything you need to develop your
                  communication and presentation skills!
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

      <section>
        <PhoneOrder />
      </section>

      <section id="model-report">
        <Container>
          <h2>How to use our PowerPoint Presentation Service</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Review the work</Accordion.Header>
              <Accordion.Body>
                After the presentation has been created, our in-house Quality
                Control Team will check it over. We recognise how important your
                work is to you and look over every order that's written. We look
                at spelling, grammar, structure and style, and we also check to
                see that every piece of work is on-topic, well-informed and
                matches your requirements. We pass each piece of work through
                our very own plagiarism scanner, to make sure that every
                presentation is 100% original!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Create Presentation</Accordion.Header>
              <Accordion.Body>
                After the order has been finished, it's over to you to get
                started on creating your presentation! If you have any problems
                with your order, or just have questions, you can always message
                our dedicated Aftercare Team!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Practice your presentation</Accordion.Header>
              <Accordion.Body>
                It's always good to practise your presentation a few times – a
                great tip is to get a friend to listen to you speak and give
                some tips on your presentation skills. Time the presentation to
                make sure you don't overrun your timeslot and keep reading your
                speaking notes – this will help to give you confidence and will
                mean you won't read directly from your notes when you're
                speaking!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <section>
        <WhyLove />
      </section>

      <section>
        <ConfidenceService />
      </section>

      <section>
        <ReviewsComponent />
      </section>

      <section>
        <FairUsePolicy />
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
                <img src="/assets/writing-2.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Essay Writing</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/studying-4.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">
                  Academic Poster Service
                </h4>
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

      <section>
        <Press />
      </section>
    </main>
  );
};

export default PowerpointService;
