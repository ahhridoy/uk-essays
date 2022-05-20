import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import EssayToday from "../../components/EssayToday/EssayToday";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import Resources from "../../components/Resources/Resources";
import ReviewRating from "../../components/ReviewRating/ReviewRating";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import "../../styles/pages/_landing.scss";

const LandingPage = () => {
  return (
    <main>
      {/* hero */}
      <section id="hero">
        <Container className="py-5">
          <div className="text-center">
            <h1>UK Essays</h1>
            <p>Trusted by thousands of students since 2003</p>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <div className="bg-dark text-light p-3 rounded text-end box">
                <h2>Order Today</h2>
                <span>1721 reviews</span>
                <p>
                  UKEssays.com is rated 4.4 out of 5 by <br /> trusted reviews
                  site:
                </p>
                <h2>Reviews</h2>
                <Button variant="success">Place an order</Button>
              </div>
            </Col>
            <Col md={8} xs={12}>
              <div className="bg-dark text-light p-3 rounded text-end box">
                <h2>Our Services</h2>
                <p>
                  Find out how <b>UKEssays can help YOU</b>{" "}
                </p>
                <p>
                  UK Essays are a UK-based company who aim to be the ultimate
                  provider of educational support. <br /> From personalised
                  academic support services to free learning resources, we're
                  here to help you at <br /> every stage of your education.
                </p>
                <a href="#">View our service portfolio</a>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="bg-dark text-light p-3 rounded text-end box">
                <h2>Press Coverage</h2>
                <p> BBC </p>
                <p>
                  You can view national and international <br /> press coverage
                  of our academic services in <br /> our press center.
                </p>
                <a href="#">Read more</a>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="bg-dark text-light p-3 rounded text-end box">
                <h2>Service Samples</h2>
                <p>
                  Our academic writing service samples <br /> reflect the high
                  quality of work our essay <br /> writers produce and show why
                  students rate <br /> UKEssays so highly!
                </p>
                <a href="#">View samples</a>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="bg-dark text-light p-3 rounded text-end box">
                <h2>Essay Writing</h2>
                <b>Leading</b> <p> UK Based Provider</p>
                <p>
                  Our essay writing service can help you make the most of your
                  university studies.
                </p>
                <a href="#">Essay Services</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-5">
        <ServicesComponent />
        <Resources />
      </section>

      <section id="examples">
        <Container className="py-5">
          <h2 className="heading text-center">Example Essays</h2>
          <p className="sub-text text-center">
            We have over 100,000 free essays available to help you with your
            studies!
          </p>
          <p className="text-center">
            Each of these essays was written by a student who submitted their
            work to our database to help other students working on similar{" "}
            <br />
            assignments. Some of our most popular subject areas are linked
            below:
          </p>
          <h2 className="text-center my-5">Popular Subject Areas</h2>
          <Row className="sub-area">
            <Col md={4} xs={12}>
              <div className="text-start">
                <p>
                  <a href="#">Biology ></a>
                </p>
                <p>
                  <a href="#">Business ></a>
                </p>
                <p>
                  <a href="#">Economics ></a>
                </p>
                <p>
                  <a href="#">Education ></a>
                </p>
                <p>
                  <a href="#">English Language ></a>
                </p>
                <p>
                  <a href="#">English Literature ></a>
                </p>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="text-start">
                <p>
                  <a href="#">Environmental Sciences ></a>
                </p>
                <p>
                  <a href="#">Finance ></a>
                </p>
                <p>
                  <a href="#">Health & Social Care ></a>
                </p>
                <p>
                  <a href="#">Information Technology ></a>
                </p>
                <p>
                  <a href="#">Law ></a>
                </p>
                <p>
                  <a href="#">Management ></a>
                </p>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="text-start">
                <p>
                  <a href="#">Marketing ></a>
                </p>
                <p>
                  <a href="#">Nursing ></a>
                </p>
                <p>
                  <a href="#">Psychology ></a>
                </p>
                <p>
                  <a href="#">Sciences ></a>
                </p>
                <p>
                  <a href="#">Sociology ></a>
                </p>
                <p>
                  <a href="#">Teaching ></a>
                </p>
              </div>
            </Col>
          </Row>

          <div className="text-center my-4">
            <Button variant="danger" className="mx-4">
              All Essays >
            </Button>
            <Button variant="primary">Latest Article Updates > </Button>
          </div>
        </Container>
      </section>

      <section id="promises">
        <Container className="py-5">
          <h2 className="my-5 text-center">
            UKEssays <span className="text-success">promises</span> you:
          </h2>
          <Row>
            <Col md={3} xs={12} className="text-center">
              <h3>Plagiarism-free</h3>
              <p>
                If the work we produce contains plagiarism we'll pay out a
                £5,000 guarantee.
              </p>
            </Col>
            <Col md={3} xs={12} className="text-center">
              <h3>Always on Time</h3>
              <p>If we are a minute late, the work is on us - it's free!</p>
            </Col>
            <Col md={3} xs={12} className="text-center">
              <h3>Written to Standard</h3>
              <p>
                All of our assignments go through a stringent quality checking
                process from start to finish.
              </p>
            </Col>
            <Col md={3} xs={12} className="text-center">
              <h3>Quality</h3>
              <p>
                Providing quality work is core to our beliefs, which is why we
                will strive to give you exactly that, and more!
              </p>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="success" className="my-4">
              Latest Article Updates >
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <FairUsePolicy />
      </section>

      <section id="why-we-are">
        <Container className="py-5">
          <h2 className="my-4 text-center heading">
            Find out <span>why we are the best</span>
          </h2>
          <Row>
            <Col md={6} xs={12}>
              <h3>The World's Best Writers</h3>
              <p>
                Unlike other essay writing companies, we don't just use any
                writers – we use the best of the best. Every writer is not only
                directly qualified in the subject they write for, but has been
                through and understands the challenges and difficulties of
                Higher Education. Every writer is hand selected by our team to
                produce the best piece of work possible. We simply won't settle
                for less.
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h3>Loved by Customers</h3>
              <p>
                UKEssays have lots of press coverage from all over the world
                confirming that we deliver what we promise, and our customers
                regularly leave verified reviews describing their experience.
                Delivering what we promise means we get great feedback!
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h3>Outstanding Customer Support</h3>
              <p>
                At UKEssays, every part of your experience is special. From
                start to finish, we provide continuous support with our friendly
                and helpful customer experience team. We'll not only help you
                with placing your order, but help you get the most out of your
                investment – making you a better learner and a stronger
                academic.
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h3>18 Years in Business</h3>
              <p>
                Ever since we started back in 2003, we've led the industry from
                the front, setting trends and smashing expectations. We were the
                first company in the world to offer you guaranteed 2:1 and 1st
                class work and we're one of the few companies located in the UK.
                Why don't you come and say hello?
              </p>
            </Col>
          </Row>
          <div className="my-4 text-center">
            <Button variant="danger">Read about our services ></Button>
          </div>
        </Container>
      </section>

      <section>
        <EssayToday />
      </section>

      <section>
        <ReviewRating />
      </section>
    </main>
  );
};

export default LandingPage;
