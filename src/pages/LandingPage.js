import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/pages/_landing.scss";

const LandingPage = () => {
  return (
    <main>
      <section>
        <Header />
      </section>

      {/* hero */}
      <section id="hero">
        <Container className="py-5">
          <div>
            <h1>UK Essays</h1>
            <p>Trusted by thousands of students since 2003</p>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <div className="bg-dark text-light p-3 rounded ">
                <h1>Order Today</h1>
                <p>1721 reviews</p>
                <p>
                  UKEssays.com is rated 4.4 out of 5 by <br /> trusted reviews
                  site:
                </p>
                <h1>Reviews</h1>
                <Button variant="success">Place an order</Button>
              </div>
            </Col>
            <Col md={8} xs={12}>
              <div className="bg-dark text-light p-3 rounded text-end">
                <h1>Our Services</h1>
                <p>Find out how </p> <b>UKEssays can help YOU</b>
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
              <div className="bg-dark text-light p-3 rounded text-end">
                <h1>Press Coverage</h1>
                <p> BBC </p>
                <p>
                  You can view national and international <br /> press coverage
                  of our academic services in <br /> our press center.
                </p>
                <a href="#">Read more</a>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="bg-dark text-light p-3 rounded text-end">
                <h1>Service Samples</h1>
                <p>
                  Our academic writing service samples <br /> reflect the high
                  quality of work our essay <br /> writers produce and show why
                  students rate <br /> UKEssays so highly!
                </p>
                <a href="#">View samples</a>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="bg-dark text-light p-3 rounded text-end">
                <h1>Essay Writing</h1>
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

      <section id="services">
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </section>

      <section id="examples">
        <Container className="py-5">
          <h1 className="heading">Example Essays</h1>
          <p className="sub-text">
            We have over 100,000 free essays available to help you with your
            studies!
          </p>
          <p>
            Each of these essays was written by a student who submitted their
            work to our database to help other students working on similar
            assignments. Some of our most popular subject areas are linked
            below:
          </p>
          <h1>Popular Subject Areas</h1>
          <Row>
            <Col md={4} xs={12}>
              <div className="text-start text-none">
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

          <Button variant="danger" className="mx-4">
            All Essays >
          </Button>
          <Button variant="primary">Latest Article Updates > </Button>
        </Container>
      </section>

      <section id="promises">
        <Container className="py-5">
          <h1 className="my-4">
            UKEssays <span className="text-success">promises</span> you:
          </h1>
          <Row>
            <Col md={3} xs={12}>
              <h3>Plagiarism-free</h3>
              <p>
                If the work we produce contains plagiarism we'll pay out a
                £5,000 guarantee.
              </p>
            </Col>
            <Col md={3} xs={12}>
              <h3>Always on Time</h3>
              <p>If we are a minute late, the work is on us - it's free!</p>
            </Col>
            <Col md={3} xs={12}>
              <h3>Written to Standard</h3>
              <p>
                All of our assignments go through a stringent quality checking
                process from start to finish.
              </p>
            </Col>
            <Col md={3} xs={12}>
              <h3>Quality</h3>
              <p>
                Providing quality work is core to our beliefs, which is why we
                will strive to give you exactly that, and more!
              </p>
            </Col>
          </Row>
          <Button variant="success" className="my-4">
            Latest Article Updates >
          </Button>
        </Container>
      </section>

      <section id="policy">
        <Container className="py-5 text-light">
          <Row>
            <Col md={6}>
              <h2>Our Fair Use Policy</h2>
              <p>
                Understanding how to use your essay is key to gaining the most
                from your experience with us. Watch now to learn how:
              </p>
              <Button variant="warning">Our Fair Use Policy ></Button>
            </Col>
            <Col md={6}>Video</Col>
          </Row>
        </Container>
      </section>

      <section id="why-we-are">
        <Container className="py-5">
          <h1 className="my-4">Find out why we are the best</h1>
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
          <Button variant="danger" className="my-4">
            Read about our services >
          </Button>
        </Container>
      </section>

      <section id="order-now">
        <Container className="py-5 text-light">
          <h1>Order an Essay Today!</h1>
          <p>
            We have over 500 expert essay writers, ready and waiting to help you
            achieve academic success
          </p>
          <Button variant="dark" className="mx-4">
            Order an Essay
          </Button>
          <Button variant="light">Check Prices</Button>
        </Container>
      </section>

      <section id="reviews">
        <Container className="py-5">
          <Row>
            <Col md={6} xs={12} className="text-start">
              <h1>Customer Reviews</h1>
              <p>Overall rating</p>
              <span className="fs-1">4.4 </span>{" "}
              <span className="fs-3"> / 5</span>
              <p>1721 Reviews</p>
              <p>
                All reviews are supplied by verified UK Essays customers via the
                trusted and independent online review site, Reviews.io.
              </p>
            </Col>
            <Col md={6} xs={12} className="text-start review-sec">
              <h1>Reviews.io</h1>
              <p>Reviewed on 12/12/2019</p>
              <p>1721 Reviews</p>
              <b>
                “I would highly recommend this service as it is an excellent
                service that assists students of different levels in their
                thinking and analysis of their work. the service is delivered to
                a high quality and everyone is keen to help and go the extra
                mile.”
              </b>
              <p>Yasmin D</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default LandingPage;
