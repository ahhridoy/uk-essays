import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import { AiOutlineGift, AiOutlineStar } from "react-icons/ai";
import { BsHexagon } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import data from "../../data.json";

const ResearchService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <ServicesHero service={data.services[5]} />

      <section id="research-phone-order">
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
                    <h4>Select your options</h4>
                    <p>
                      Start with the basics - choose how many words your
                      research paper requires, the subject you're studying, and
                      the grade you're looking to achieve. Then, select a
                      delivery time that fits into your schedule and enter your
                      contact details so that we can keep you updated!
                    </p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="second-option">
                    <p>2</p>
                  </div>
                  <div>
                    <h4>Give the details for your research paper</h4>
                    <p>
                      The second step of our order form allows you to enter the
                      specific details and information for your request. Explain
                      your topic (if you have one) and what you hope to analyse
                      and research, and don't be afraid to include any ideas or
                      thoughts you have! Enter as much information as you like
                      and attach any files that may be useful for our writer.
                      Once complete, your order will come through to our
                      top-rated customer service team, who'll review your order
                      in full and carefully check we have everything we need to
                      do a fantastic job.
                    </p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="third-option">
                    <p>3</p>
                  </div>
                  <div>
                    <h4>Wait for your order to be completed</h4>
                    <p>
                      Next, we personally contact and select the best writer for
                      your request from our pool of highly qualified academic
                      writers, including lecturers, professionals and experts
                      with years of experience in writing research papers. We
                      always consider things from your perspective to ensure you
                      get the very best writer and service. After receiving
                      payment, we'll assign your order to the chosen writer, and
                      that's it! Your order will be made available to download
                      on the delivery date given - and that's guaranteed with
                      our Always On Time guarantee!
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="danger">
              <strong>Order</strong> a research paper today!
            </Button>
          </div>
        </Container>
      </section>

      <section id="research-paper">
        <Container>
          <h2>Perfect Research Papers Every Time</h2>
          <p className="fs-5">
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
          <h2 className="mb-5">Why Choose UK Essays?</h2>

          <div className="my-4 d-flex">
            <div className="me-5">
              <AiOutlineGift className="text-primary fs-2" />
            </div>
            <div>
              <h3>Packed with extras</h3>
              <p>
                Your order comes with a range of extras to give you value and
                peace of mind. From a detailed quality check of the completed
                work conducted by an individual qualified in your subject area,
                to a free plagiarism report, and a complimentary 7 day amendment
                period, you can relax knowing you're in safe hands, with plenty
                of post-order support.
              </p>
            </div>
          </div>
          <div className="my-4 d-flex">
            <div className="me-5">
              <FiThumbsUp className="text-primary fs-2" />
            </div>
            <div>
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
          </div>
          <div className="my-4 d-flex">
            <div className="me-5">
              <BsHexagon className="text-primary fs-2" />
            </div>
            <div>
              <h3>Protected by Guarantees and Promises</h3>
              <p>
                We aim to take the risk and worry out of getting help with your
                research paper. Our <a href="#">guarantees</a> protect you,
                offering you money back if your work is late, and our promises
                demonstrate our commitment to providing excellent service.
              </p>
            </div>
          </div>
          <div className="my-4 d-flex">
            <div className="me-5">
              <AiOutlineStar className="text-primary fs-2" />
            </div>
            <div>
              <h3>Backed by customers</h3>
              <p>
                We partner with verified review website, Reviews.co.uk, to
                gather <a href="#">reviews from certified customers</a> who have
                placed their order with us. Everyone gets their chance to leave
                a review, positive or negative - so take a look and see what
                people just like you are saying.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button variant="danger">
              <strong>Order</strong> a research paper today!
            </Button>
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
          <h2 className="text-center my-4">Related services</h2>
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
