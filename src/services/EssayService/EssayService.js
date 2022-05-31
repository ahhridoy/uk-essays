import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
import EssayToday from "../../components/EssayToday/EssayToday";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import PhoneOrder from "../../components/PhoneOrder/PhoneOrder";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import WhyLove from "../../components/WhyLove/WhyLove";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineReddit,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillStar,
} from "react-icons/ai";
import {
  BsTwitter,
  BsPencil,
  BsStarHalf,
  BsWhatsapp,
  BsFillChatLeftFill,
  BsCurrencyPound,
} from "react-icons/bs";
import { MdDownloadDone, MdOutlineWatchLater, MdDone } from "react-icons/md";
import { AiOutlineFileDone, AiFillHeart } from "react-icons/ai";
import { FcHighBattery } from "react-icons/fc";
import { BiLockAlt, BiPhoneCall } from "react-icons/bi";
import { FiBookOpen } from "react-icons/fi";

const EssayService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="essay-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Essay Writing Service</h2>
                <div className="text-light my-3">
                  <span>Share this: </span>
                  <span className="bg-primary p-1 text-light me-2">
                    Facebook <FaFacebookF />{" "}
                  </span>
                  <span className="bg-info p-1 text-light me-2">
                    Twitter <BsTwitter />{" "}
                  </span>
                  <span className="bg-danger p-1 text-light me-2">
                    Reddit <AiOutlineReddit />{" "}
                  </span>
                  <span className="bg-info p-1 text-light me-2">
                    Linkedin <AiFillLinkedin />{" "}
                  </span>
                  <span className="bg-success p-1 text-light me-2">
                    WhatsApp <AiOutlineWhatsApp />{" "}
                  </span>
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
                <h1 className="price">
                  {" "}
                  <BsCurrencyPound className="price-icon" /> 124
                </h1>
                <p>Undergraduate 2:2 • 1000 words • 7 day delivery</p>
                <img src="/assets/trusted-site.svg" alt="" /> <br />
                <Button variant="success" className="w-100 my-2">
                  <strong>Order</strong> an essay
                </Button>
                <p>Delivered on-time or your money back</p>
                <Button variant="primary" className="w-100 my-2">
                  Request a <strong>call back </strong> <BiPhoneCall />
                </Button>
                <br />
                <Button variant="success" className="w-100 my-2">
                  Message us on <strong>WhatsApp </strong> <BsWhatsapp />
                </Button>
                <br />
                <Button variant="primary" className="w-100 my-2">
                  Start a <strong>live chat </strong> <BsFillChatLeftFill />
                </Button>
              </div>
              <div className="essay-reviewsio text-center mt-3">
                <img
                  src="/assets/reviewsio-logo-white.webp"
                  alt="logo"
                  className="essay-reviewsio-logo"
                />{" "}
                <br />
                <span>
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <BsStarHalf className="text-warning fs-5" />
                  <span className="text-warning ms-2 fs-5">(307 Reviews)</span>
                </span>
              </div>
            </Col>
          </Row>
          
          <Row className="mt-5">
            <Col md={3} xs={6}>
              <div className="text-light">
                <p>
                  {" "}
                  <BsPencil className="me-2 text-danger" /> Written to Standard
                </p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="text-light d-flex">
                <p>
                  {" "}
                  <MdDownloadDone className="me-2 text-danger" />{" "}
                  Plagiarism-free
                </p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="text-light d-flex">
                <p>
                  {" "}
                  <MdOutlineWatchLater className="me-2 text-danger" /> Always on
                  Time
                </p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="text-light d-flex">
                <p>
                  {" "}
                  <AiOutlineFileDone className="me-2 text-danger" /> Unrivalled
                  Quality
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <WhyChoose />
      </section>

      <section>
        <EssayToday />
      </section>

      <section>
        <PhoneOrder />
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
                <h3><strong>Read</strong> through the work</h3>
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
                <h3><strong>Read</strong> through the related literature</h3>
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
                <h3><strong>Write</strong> your own essay</h3>
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
