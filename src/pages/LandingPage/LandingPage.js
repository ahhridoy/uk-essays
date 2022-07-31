import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import Resources from "../../components/Resources/Resources";
import ReviewRating from "../../components/ReviewRating/ReviewRating";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import "../../styles/pages/_landing.scss";
import { AiFillStar, AiOutlineFileDone, AiFillHeart } from "react-icons/ai";
import { BsStarHalf, BsPeopleFill } from "react-icons/bs";
import { MdOutlineWatchLater, MdDone } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import data from "../../data.json";
import OrderToday from "../../components/OrderToday/OrderToday";
import UkPromisesCard from "../../components/UkPromisesCard/UkPromisesCard";

const LandingPage = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      {/* hero */}
      <section id="hero">
        <Container className="py-5">
          <div className="text-center">
            <h1>UK Essays</h1>
            <p>Trusted by thousands of students since 2003</p>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <div className="text-light p-3 text-end box">
                <h2>Order Today</h2>
                <span>
                  <AiFillStar className="text-warning" />
                  <AiFillStar className="text-warning" />
                  <AiFillStar className="text-warning" />
                  <AiFillStar className="text-warning" />
                  <BsStarHalf className="text-warning" />
                  1755 reviews
                </span>
                <p>
                  UKEssays.com is rated 4.4 out of 5 by <br /> trusted reviews
                  site:
                </p>
                <img
                  src="/assets/reviewsio-logo-white.webp"
                  className="w-100"
                  alt=""
                />{" "}
                <br />
                <Button variant="success">Place an order</Button>
              </div>
            </Col>
            <Col md={8} xs={12}>
              <div className="text-light p-3 text-end box">
                <h2>Our Services</h2>
                <p className="text-warning">
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
              <div className="text-light p-3 text-end box">
                <h2>Press Coverage</h2>
                <div className="d-flex justify-content-between">
                  <img
                    src="/assets/the-telegraph-logo.webp"
                    alt="logo"
                    className="news-logo"
                  />
                  <img
                    src="/assets/bbc-logo.webp"
                    alt="logo"
                    className="news-logo"
                  />
                  <img
                    src="/assets/independent-logo.webp"
                    alt="logo"
                    className="news-logo"
                  />
                </div>
                <p>
                  You can view national and international <br /> press coverage
                  of our academic services in <br /> our press center.
                </p>
                <a href="#">Read more</a>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="text-light p-3 text-end box">
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
              <div className="text-light p-3 text-end box">
                <h2>Essay Writing</h2>
                <p className="text-warning">
                  {" "}
                  <b>Leading</b> UK Based Provider
                </p>
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
          <p className="sub-text text-center fs-5 font-weight-light">
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
          <h2 className="text-center my-5">
            <strong>Popular</strong> Subject Areas
          </h2>
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
            UKEssays <strong className="text-success">promises</strong> you:
          </h2>
          <Row>
            <UkPromisesCard
              card={data.ukPromises[0]}
              icon={<MdDone className="fs-2 text-success mb-2" />}
            />
            <UkPromisesCard
              card={data.ukPromises[1]}
              icon={<MdOutlineWatchLater className="fs-2 text-success mb-2" />}
            />
            <UkPromisesCard
              card={data.ukPromises[2]}
              icon={<BsPencil className="fs-2 text-success mb-2" />}
            />
            <UkPromisesCard
              card={data.ukPromises[3]}
              icon={<AiOutlineFileDone className="fs-2 text-success mb-2" />}
            />
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
            Find out <strong>why we are the best</strong>
          </h2>
          <Row className="gy-4">
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div>
                  <BsPeopleFill className="fs-2 why-we-are-icons" />
                </div>
                <div className="ms-4">
                  <h3>The World's Best Writers</h3>
                  <p>
                    Unlike other essay writing companies, we don't just use any
                    writers – we use the best of the best. Every writer is not
                    only directly qualified in the subject they write for, but
                    has been through and understands the challenges and
                    difficulties of Higher Education. Every writer is hand
                    selected by our team to produce the best piece of work
                    possible. <a href="#">We simply won't settle for less.</a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div>
                  <AiFillHeart className="fs-2 why-we-are-icons" />
                </div>
                <div className="ms-4">
                  <h3>Loved by Customers</h3>
                  <p>
                    UKEssays have lots of press coverage from all over the world
                    confirming that we deliver what we promise, and our
                    customers regularly leave verified reviews describing their
                    experience. Delivering what we promise means we get great
                    feedback!
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div>
                  <AiOutlineFileDone className="fs-2 why-we-are-icons" />
                </div>
                <div className="ms-4">
                  <h3>Outstanding Customer Support</h3>
                  <p>
                    At UKEssays, every part of your experience is special. From
                    start to finish, we provide continuous support with our
                    friendly and helpful customer experience team. We'll not
                    only help you with placing your order, but help you get the
                    most out of your investment – making you a better learner
                    and a stronger academic.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div>
                  <MdOutlineWatchLater className="fs-2 why-we-are-icons" />
                </div>
                <div className="ms-4">
                  <h3>18 Years in Business</h3>
                  <p>
                    Ever since we started back in 2003, we've led the industry
                    from the front, setting trends and smashing expectations. We
                    were the first company in the world to offer you guaranteed
                    2:1 and 1st class work and we're one of the few companies
                    located in the UK. Why don't you come and say hello?
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="my-4 text-center">
            <Button variant="danger">Read about our services ></Button>
          </div>
        </Container>
      </section>

      <section>
        <OrderToday card={data.OrderToady[0]} />
      </section>

      <section>
        <ReviewRating />
      </section>
    </main>
  );
};

export default LandingPage;
