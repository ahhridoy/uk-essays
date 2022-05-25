import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
import PhoneOrder from "../../components/PhoneOrder/PhoneOrder";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";

const ResearchService = () => {
  return (
    <main>
      <section id="research-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Research Paper Writing Service</h2>
                <h4 className="text-success my-2">
                  Craft the perfect research paper with UK Essays' expert
                  writers
                </h4>
                <p className="fs-5">
                  A Research Paper is a bit like an essay, or a report, but
                  instead of reporting on something, the goal is to research an
                  interesting topic instead! Completing a research paper is a
                  time-consuming task that takes a large amount of planning,
                  preparation, analysis, and above all, research. After choosing
                  something interesting to study, the goal is to write an
                  informative research paper that provides the reader with a
                  structured and detailed investigation into the topic that
                  interprets and evaluates any findings while being engaging and
                  enjoyable to read. <br /> <br />
                  Maybe you've picked an interesting topic to research but don't
                  know where to get started, or you are having trouble
                  identifying a good idea to start with? Our Research Paper
                  Writing Service is designed to give you all of the tools you
                  require to produce an interesting and detailed piece of work.
                  Our experts have delivered thousands of research papers, and
                  so can supply you with a perfectly written paper designed to
                  show you everything you need to know, from the introduction to
                  the closing summary.
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
        <PhoneOrder />
      </section>

      <section id="research-paper">
        <Container>
          <h2>Perfect Research Papers Every Time</h2>
          <p>
            Every research paper delivered by UK Essays is perfectly tailored to
            your specific requirements. Once your writer is assigned to work on
            your order, they get to work. They'll start by analysing your
            instructions, topic, ideas, and supporting information in detail.
            Armed with this information, they'll dive deep into the research
            phase of the work, interpreting and evaluating papers, collating
            research and debate and gaining a clear overview of the topic. Next,
            they use this to craft a paper that aims to meet the requirements
            perfectly. The writer will produce a well-structured research paper
            that contains all the required sections, with a well-written and
            informative report and a great set of references. <br /> <br />
            Traditionally, research papers use a chapter-style structure,
            introducing the reader to the topic before going into more detail,
            but whether you're looking for a paper containing traditional
            chapters like an Introduction, Summary, Findings and Conclusion, or
            something a little different, our experts can help. <br /> <br />
            The most useful part of your research paper is the reference list.
            Whatever topic you decide to analyse and research, finding high
            quality and reliable books, journals and other sources is key - and
            our expert writer will locate and use great references. Analysing
            these and broadening your perspective into the topic will help you
            to further your knowledge and understanding, allowing you to learn
            more and identify great references for this or other topics in the
            future!
          </p>
        </Container>
      </section>

      <section id="research-why-choose">
        <Container>
          <h2>Why Choose UK Essays?</h2>

          <div className="my-4">
            <h3>Packed with extras</h3>
            <p>
              Your order comes with a range of extras to give you value and
              peace of mind. From a detailed quality check of the completed work
              conducted by an individual qualified in your subject area, to a
              free plagiarism report, and a complimentary 7 day amendment
              period, you can relax knowing you're in safe hands, with plenty of
              post-order support.
            </p>
          </div>
          <div className="my-4">
            <h3>Experienced, personalised approach</h3>
            <p>
              At UK Essays, we're backed by over 18+ years of experience in
              writing and working hand in hand with students at every level of
              their education. We go the extra mile, every step of the way, to
              make sure your experience gives you everything you need, helping
              you to learn and improve your own skills. From start to finish,
              your order is handled and written by{" "}
              <a href="#">university qualified staff</a> and writers - degree
              holders who understand exactly the challenges you're facing.
            </p>
          </div>
          <div className="my-4">
            <h3>Protected by Guarantees and Promises</h3>
            <p>
              We aim to take the risk and worry out of getting help with your
              research paper. Our <a href="#">guarantees</a> protect you,
              offering you money back if your work is late, and our promises
              demonstrate our commitment to providing excellent service.
            </p>
          </div>
          <div className="my-4">
            <h3>Backed by customers</h3>
            <p>
              We partner with verified review website, Reviews.co.uk, to gather{" "}
              <a href="#">reviews from certified customers</a> who have placed
              their order with us. Everyone gets their chance to leave a review,
              positive or negative - so take a look and see what people just
              like you are saying.
            </p>
          </div>
          <div className="text-center">
            <Button variant="danger">Order a research paper today!</Button>
          </div>
        </Container>
      </section>

      <section>
        <ReviewsComponent />
      </section>

      <section className="border">
        <AskedQuestion />
      </section>

      <section id="related-service">
        <Container>
          <h2 className="text-center">Related services</h2>
          <Row>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/studying-2.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Essay Writing Service</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/writing-1.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Essay Plan Writing Service</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img
                  src="/assets/highlighting-1.webp"
                  alt=""
                  className="w-100"
                />
                <h4 className="text-center py-4">Report Writing Service</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Press />
      </section>
    </main>
  );
};

export default ResearchService;
