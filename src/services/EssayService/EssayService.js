import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
import EssayToday from "../../components/EssayToday/EssayToday";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import WhyLove from "../../components/WhyLove/WhyLove";

import { BsPencil } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { FcHighBattery } from "react-icons/fc";
import { BiLockAlt } from "react-icons/bi";
import { FiBookOpen } from "react-icons/fi";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import data from "../../data.json";

const EssayService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <ServicesHero service={data.services[0]} />

      <section id="essay-why-choose">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div>
                <h2>Why choose our Essay Writing Service?</h2>
                <p>
                  Using an essay writing service is one of the best ways to
                  improve your own academic writing skills and to do better at
                  university. Whether you’re studying in the UK or abroad; at
                  undergraduate, masters or a different level; returning to
                  education after a long break or just struggling with a
                  specific topic, we can help! <br /> <br />
                  We think the best way to highlight the quality of our essay
                  writing service is to show you our work – it speaks for
                  itself! We’ve produced some fantastic samples that show you
                  exactly the kind of work you’ll receive when ordering from us.
                  Take a look at our <a href="#">sample essays</a>, prepared at
                  undergraduate and master's level across a range of grades and
                  subjects.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="p-3 shadow rounded">
                <h4>Reasons to choose our service</h4>
                <p>
                  <MdDone className="text-success fs-4 me-2" />
                  We only allow our <b>qualified academic writers</b> with
                  matching qualifications to take on your work.
                </p>
                <hr />
                <p>
                  <MdDone className="text-success fs-4 me-2" />
                  Your order will go through <b>
                    rigorous quality controls
                  </b>{" "}
                  and is checked against your instructions and academic
                  standards by qualified professionals, we'll even give you a
                  quality report to show our findings.
                </p>
                <hr />
                <p>
                  <MdDone className="text-success fs-4 me-2" />
                  Your order will come with a{" "}
                  <b>comprehensive plagiarism report</b> which is compiled with
                  our state-of-the-art plagiarism software, ensuring the work
                  that is produced is not plagiarised.
                </p>
                <hr />
                <p>
                  <MdDone className="text-success fs-4 me-2" />
                  You get a <b>7 day amendment period</b>, so if you're not
                  happy with the work, let us know and our customer support
                  teams will resolve any concerns.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <EssayToday />
      </section>

      <section id="essay-phone-order">
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
                    <h4>Start your UK Essays order</h4>
                    <p>
                      Simply start your essay order by using our specially
                      designed order form to send us all the details about your
                      piece of work. From there, we take your instructions to
                      write an essay just the way you need it. We’ll review your
                      instructions and get in touch to confirm everything with
                      you and clear up any questions we might have.
                    </p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="second-option">
                    <p>2</p>
                  </div>
                  <div>
                    <h4>Finding your academic expert</h4>
                    <p>
                      Each paper we write is unique, and we always aim to cater
                      to your specific needs. We carefully select each{" "}
                      <a href="#">expert writer</a>– who are always qualified in
                      the subject you need help with – to create a fully
                      referenced essay with the detailed aspects you require,
                      from a rich, detailed discussion to a well-structured
                      argument.{" "}
                      <b>
                        We never re-use or re-sell any essay we have created.
                      </b>
                    </p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="third-option">
                    <p>3</p>
                  </div>
                  <div>
                    <h4>Delivery to you</h4>
                    <p>
                      After being double and triple checked, we prepare the
                      completed essay for download through your customer
                      account. We always aim to deliver your order perfectly on
                      time and without any outstanding issues. We encourage you
                      to read through the essay as soon as possible to make sure
                      you’re fully happy and don’t feel like anything has been
                      missed.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="danger">Order an essay today!</Button>
          </div>
        </Container>
      </section>

      <section id="difference">
        <Container>
          <h2 className="text-center mb-4">The UKEssays Difference</h2>
          <div className="text-box">
            <div>
              <p>
                {" "}
                <FcHighBattery className="fs-5" /> Academic Level
              </p>
              <p>
                {" "}
                <MdDone className="text-success fs-4" /> Originality
              </p>
              <p>
                {" "}
                <BiLockAlt className="text-warning fs-4" /> Security
              </p>
              <p>
                {" "}
                <AiFillHeart className="text-danger fs-4" /> Support
              </p>
            </div>
            <div>
              <p>Degree Qualified Writers</p>
              <p>Guaranteed Plagiarism-free</p>
              <p>Checked Daily by McAfee</p>
              <p>Dedicated UK Customer Service</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="how-to-use">
        <Container>
          <h2>How to use your model essay</h2>
          <p className="mb-5">
            <a href="#">Our Fair Use Policy</a> is designed to guide you through
            the best way to use and rewrite your order - be sure to read it
            through!
          </p>
          <div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <MdDone className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Read</strong> through the work
                </h3>
                <p>
                  Once you've downloaded the essay, the next step is to make
                  sure you gain a full understanding of it.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Read</strong> through the related literature
                </h3>
                <p>
                  We strongly suggest reading the references used in the paper,
                  too, to deepen your knowledge of the topic.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <BsPencil className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Write</strong> your own essay
                </h3>
                <p>
                  <b>You should re-write the paper,</b> so it is in your own
                  words, and so that you gain the valuable information it
                  contains. You'll improve your own essay writing skills,
                  learning how to structure a conclusive answer and discuss it
                  in detail.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center">
            You can find further information about how our service works in the{" "}
            <a href="#">FAQs section</a>
          </p>
        </Container>
      </section>

      <section>
        <EssayToday />
      </section>

      <section>
        <WhyLove />
      </section>

      <section>
        <FairUsePolicy />
      </section>

      <section>
        <ReviewsComponent />
      </section>

      <section>
        <AskedQuestion />
      </section>

      <section>
        <EssayToday />
      </section>

      <section id="related-service">
        <Container>
          <h2 className="text-center">Related services</h2>
          <p className="text-center my-3">
            We can help you no matter what level you’re writing for. Many of our
            writers hold masters degrees or higher, so we can help regardless of
            whether you are writing an undergraduate or postgraduate essay! We
            also have a variety of other academic services that may be able to
            assist you.
          </p>
          <p className="text-center mb-5">
            If you are looking for a reflective piece of work, then take a look
            at our specialist <a href="#">Reflective Essay Writing Service.</a>
          </p>
          <Row>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/writing-1.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Editing Service</h4>
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
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/writing-2.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Essay Plan Writing Service</h4>
              </div>
            </Col>
          </Row>
          <p className="text-center mt-5">
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

export default EssayService;
