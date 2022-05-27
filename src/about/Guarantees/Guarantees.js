import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Press from "../../components/Press/Press";
import ReviewRating from "../../components/ReviewRating/ReviewRating";

const Guarantees = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="trusted-students">
        <Container className="text-light">
          <h2 className="text-center">Guarantees: Trusted By Students</h2>
          <p className="text-center">
            We know putting your trust in a writing service is difficult. That’s
            why we offer our promises to you, giving you the confidence you need
            to get the help you deserve. Each guarantee gives you extra value
            and peace of mind that you’re in safe hands – not only will we
            produce excellent work, but on the very rare occasion that something
            goes wrong, you’re covered.
          </p>
          <div className="text-center">
            <Button variant="success">Place an Order</Button>
          </div>
        </Container>
      </section>

      <section id="our-guarantees">
        <Container>
          <h2 className="text-center">Our guarantees to you</h2>
          <p className="text-center">
            We’re backed by over 17 years of experience in delivering high
            quality essays, assignments, dissertations and much more. We’ve
            helped thousands of students with their studies, providing much
            needed support and assistance across every subject imaginable.
          </p>
          <Row>
            <Col md={4} xs={12}>
              <h5>Plagiarism-free, every time</h5>
              <p>
                Every piece of work we deliver comes with a dedicated plagiarism
                report using Viper, our bespoke plagiarism scanner. Not only is
                all work we produce plagiarism free, but we'll prove it, too.
                Just like industry-approved Turnitin, our Viper Plagiarism
                Scanner will scan against online resources, as well as our own
                database of previous work, to check for any similarities.
              </p>
            </Col>
            <Col md={4} xs={12}>
              <h5>Always on Time</h5>
              <p>
                Deadlines – they’re a nightmare. That’s why we don’t mess about
                when it comes to delivering your work on time. If we’re even a
                minute late, the work is on us – it’s free! You’ll be kept
                informed every step of the way on the progress of your order.
                We’re so confident we'll deliver on time, every time, we can
                guarantee you peace of mind every time you order.
              </p>
            </Col>
            <Col md={4} xs={12}>
              <h5>Written to standard</h5>
              <p>
                We're extremely proud of our work - all of our assignments go
                through a stringent quality checking process from start to
                finish. As soon as our writers have completed your work, it is
                proofread, checked for any errors and given a thorough
                plagiarism scan. We don't stop there either – we then check that
                all the points that you requested have been clearly covered by
                our in-house university educated academics, before we finally
                release your assignment!
              </p>
            </Col>
            <Col md={4} xs={12}>
              <h5>Never resold – never published</h5>
              <p>
                It’s that simple. We are never going to re-sell your order to
                another person, and we’re never going to publish it online.
                Every order is created uniquely for you, and nobody else – we
                guarantee it.
              </p>
            </Col>
            <Col md={4} xs={12}>
              <h5>Completely confidential and totally secure</h5>
              <p>
                Every order with UK Essays is completely, 100%, confidential.
                Your details are never shared or sold to third parties. Unlike
                many other companies, we adhere to and are bound by GDPR and UK
                Law, and are registered data controllers, meaning we’ve been
                certified to safely store your data. You have total piece of
                mind with UK Essays that your data is safe and secure with a
                trustworthy company.
              </p>
            </Col>
            <Col md={4} xs={12}>
              <h5>UK Based and 100% real</h5>
              <p>
                We’re a UK company, based in the UK. Many others moonlight as UK
                companies, but are not – don’t fall for the many scams and fake
                sites out there!{" "}
                <a href="#">Check us out and see for yourself!</a>
              </p>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="succes">Start your order</Button>
            <Link to="/check-prices">Check prices</Link>
          </div>
        </Container>
      </section>

      <section>
        <ReviewRating />
      </section>

      <section id="our-promises">
        <Container>
          <h2 className="text-center mb-5">Our promises to you</h2>
          <Row className="gy-5">
            <Col md={6} xs={12}>
              <div>
                <img
                  src="/assets/guarantees-order.webp"
                  alt=""
                  className="w-50 ms-5"
                />
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <h5>Detailed order processing</h5>
                <p>
                  We value your time as much as you do, which is why we aim to
                  process your order as quickly as possible, and our in-house
                  expert academics will review your instructions. Getting it
                  right first time is so important, so we go through your order
                  details carefully to check that everything is perfect, making
                  sure our writers have everything they need to do a fantastic
                  job. If we need any more information or have any questions,
                  we’ll be in touch straight away so that we can keep things
                  moving.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <h5>Fully verified writers</h5>
                <p>
                  Every writer working with us has been through an extensive{" "}
                  <a href="#">verification process</a> to make sure they are an
                  excellent writer with the knowledge required to help students
                  like you. We go through multiple steps and require a test
                  piece of work to make sure they have the skills you need.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <img
                  src="/assets/guarantees-writers.png"
                  alt=""
                  className="w-50 me-5"
                />
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <img
                  src="/assets/guarantees-matched.png"
                  alt=""
                  className="w-50 me-5"
                />
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <h5>Matched to your requirements</h5>
                <p>
                  Unlike others, we don’t just assign you any available writer
                  we have – we take time to specifically contact writers to
                  assist with your order, always trying to locate the very best
                  writer to complete your request. Our writers have both
                  academic and industry experience, so they can use both theory
                  and practice to bring key expertise and rich context to your
                  order. <br /> <br />
                  They will always have a minimum qualification of the standard
                  you choose – usually higher. We know our writers' strengths
                  and weaknesses inside-out so we can be certain that the most
                  suitable writer is always being assigned to your order.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <h5>In-house Experts</h5>
                <p>
                  It’s not just the quality of writers we guarantee, but the
                  quality of our internal staff, too. Every staff member, from
                  Customer Experience through to After Care, holds a degree and
                  has attended university, so they know and understand the steps
                  you have to take and how important your work is. When we
                  review your completed work, it’s reviewed by someone with a
                  matching qualification to your subject area. You can rest
                  assured knowing that from start to finish we’ll treat you
                  exactly how we would like to be treated ourselves, because
                  we’ve been through your struggles ourselves!
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <img
                  src="/assets/guarantees-expert.png"
                  alt=""
                  className="w-50 me-5"
                />
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <img
                  src="/assets/guarantees-aftercare.webp"
                  alt=""
                  className="w-50 me-5"
                />
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <h5>After Care Who Really Care</h5>
                <p>
                  If on the rare occasion you’d like to request some changes to
                  your work, we’ll respond to your amendment request as quickly
                  as we can. Our After Care team are on standby waiting to
                  address your concerns. If you think there’s an issue with your
                  work, we aim to get back to you as quickly as we can to
                  smoothly resolve everything.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
      </section>

      <section id="steps">
        <Container className="text-center">
          <Row>
            <Col md={4} xs={6}>
              <div>
                <h4>Easy</h4>
                <p>3-step order process</p>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div>
                <h4>Trusted</h4>
                <p>Used by over 25,000 people</p>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div>
                <h4>Fast</h4>
                <p>Delivered to your schedule</p>
              </div>
            </Col>
          </Row>
          <hr />
        </Container>
      </section>

      <section id="have-a-question">
        <Container>
          <h2 className="text-center mb-4">Have a questions</h2>
          <p className="text-center">
            We're here to help. Head to our <a href="#">FAQs</a>or{" "}
            <a href="#">get in touch</a>
          </p>
        </Container>
      </section>

      <section id="now-started">
        <Container>
          <h1 className="text-center text-light">Now, lets get started!</h1>
          <p className="text-center text-light">
            You'll love our service - our expert writers are ready to help you
            achieve success
          </p>
          <div className="text-center">
            <Button variant="light">Get started</Button>
            <Button variant="light">Check prices</Button>
          </div>
        </Container>
      </section>

      <section>
        <Press />
      </section>
    </main>
  );
};

export default Guarantees;
