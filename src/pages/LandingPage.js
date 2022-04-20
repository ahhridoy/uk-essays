import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
        <Container>
          <div>
            <h1>UK Essays</h1>
            <p>Trusted by thousands of students since 2003</p>
          </div>
          <Row>
            <Col md={4}>
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
            <Col md={8}>
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
            <Col md={4}>
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
            <Col md={4}>
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
            <Col md={4}>
              <div className="bg-dark text-light p-3 rounded text-end">
                <h1>Essay Writing</h1>
                <b>Leading</b> <p> UK Based Provider</p>
                <p>
                Our essay writing service can help you make the most of your university studies.
                </p>
                <a href="#">Essay Services</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default LandingPage;
