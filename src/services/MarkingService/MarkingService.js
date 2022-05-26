import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ConfidenceService from "../../components/ConfidenceSerivce/ConfidenceService";
import PhoneOrder from "../../components/PhoneOrder/PhoneOrder";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import WhyLove from "../../components/WhyLove/WhyLove";

const MarkingService = () => {
  return (
    <main>
      <section id="marking-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Marking and Proofreading Service</h2>
                <p className="fs-5">
                  Proofreading is the final step towards completing your work:
                  it is one of the best opportunities to grab a few extra marks.
                  If you do it perfectly, it might even help you achieve a
                  higher grade!
                  <br /> <br />
                  Maybe you've been consistently getting a grade that's just
                  below what you want. Maybe you always seem to get the same
                  kind of feedback, but you just don't know where you're going
                  wrong. Maybe you've just been staring at the paper for so long
                  that you need a fresh pair of eyes to look at it! Our Marking
                  and Proofreading Service is a perfect way to give you that
                  competitive edge and boost your grade. Designed to help you
                  squeeze every bit of potential out of your work, our
                  professional marking service will provide you with in-depth
                  and informative feedback.
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
                <h1 className="price">34</h1>
                <p>Undergraduate • 1000 words • 2 day delivery</p>
                <img src="/assets/trusted-site.svg" alt="" /> <br />
                <Button variant="success" className="w-100 my-2">
                  Place an order
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

      <section id="how-to-use">
        <Container>
          <h2>How to use our Marking and Proofreading Service</h2>
          <p className="mb-5">
            Our Marking and Proofreading Service works best when you provide us
            with your university's specific marking criteria so that the marker
            can see what is required of you and can give you an accurate grade.
          </p>
          <div>
            <div className="my-4">
              <h3>Read through the changes</h3>
              <p>
                Your document is returned to you with the 'track changes'
                feature enabled, so you can see edits to your spelling and
                grammar, view suggestions for structural changes, and read the
                marker's detailed comments on areas of concern.
              </p>
            </div>
            <div className="my-4">
              <h3>Improve your work</h3>
              <p>
                Alongside your annotated document, we provide you with a
                feedback form containing ever more advice on improving your
                work, it's up to you how much you want to take on board, but we
                advise that you use as many of the marker's suggestions as
                possible to secure the best grade you can!
              </p>
            </div>
          </div>
          <p className="text-center">
            You can find further information about how our service works in the{" "}
            <a href="#">FAQs section</a>
          </p>
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

      <section id="asked-question">
        <Container>
          <h2>Frequently asked questions</h2>
          <p>
            Here are some of our frequently asked questions to help you, and you
            can read more of these in our Help Centre or chat to a member of our
            Live Chat Support Team, by clicking the live chat icon in the corner
            of the screen.
          </p>

          <Row>
            <Col md={6} xs={12}>
              <h4>How do you know what grade my work is at?</h4>
              <p>
                After years of writing at a high-level, our markers know what
                makes a great piece of work. We don't just estimate the grade -
                we also give you in-depth suggestions on how to improve it,
                focusing on how well you have followed the assignment guidance,
                the structure and flow of the work, the quality and consistency
                of referencing, as well as the spelling and grammar. <br />{" "}
                <br />
                As with all marking, the service is partly subjective, and we
                aren't making changes to the work that you have written
                yourself. You will receive an estimated grade and a potential
                grade that your work could reach if suggested improvements are
                made. It's your choice whether you make these changes - it is
                your work after all! <br /> <br />
                If you use our Marking Service, we cannot guarantee the grade of
                your final submission. We recommend that you send us your
                university's marking criteria and assessment guidelines so we
                can see exactly what is required of you. Marking criteria differ
                by course type and level – by sending us your university's
                criteria, we can estimate the most accurate grade for you!
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h4>Can you edit work that I have already written?</h4>
              <p>
                We don't offer an editing service because we don't allow
                customers to directly submit work that we produce – you can read
                more about this in our <a href="#">Fair Use Policy.</a> It's
                important to us that customers use our services to further their
                own knowledge and use our work as a guide to help them: we do
                not condone plagiarism. <br /> <br />
                We do offer an <a href="#">Essay Writing Service</a>, where a
                writer can either create a model answer from scratch for you, or
                can read through your completed work and any feedback that you
                have received to do a complete re-write of your work. You can
                then use this as a guide to create your own piece of work.
              </p>
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
