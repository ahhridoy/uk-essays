import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const WritingService = () => {
  return (
    <main>
      <section id="writing-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Essay Writing Service</h2>
                <div className="text-start">
                  <span>Share this: </span>
                  <span>Facebook </span>
                  <span>Twitter </span>
                  <span>Reddit </span>
                  <span>Linkedin </span>
                  <span>Whatsapp </span>
                </div>
                <h4 className="text-success my-2">
                  Get Essay Help from the Academic Experts
                </h4>
                <p className="fs-5">
                  Our essay writing service is designed to get you the extra
                  help you need in completing your next university essay. We
                  match the best academic writers, qualified across an enormous
                  range of subjects and grades, to requests for help from
                  students just like you. Writing in perfect English, our
                  writers will create a custom piece of work designed just for
                  you and to help you reach the grade you require.
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
        </Container>
      </section>
    </main>
  );
};

export default WritingService;
