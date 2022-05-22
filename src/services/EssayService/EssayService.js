import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
import EssayToday from "../../components/EssayToday/EssayToday";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import PhoneOrder from "../../components/PhoneOrder/PhoneOrder";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const EssayService = () => {
  return (
    <main>
      <section id="essay-service-hero">
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
              <p>Academic Level</p>
              <p>Originality</p>
              <p>Security</p>
              <p>Support</p>
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
            <div className="my-4">
              <h3>Read through the work</h3>
              <p>
                Once you've downloaded the essay, the next step is to make sure
                you gain a full understanding of it.
              </p>
            </div>
            <div className="my-4">
              <h3>Read through the related literature</h3>
              <p>
                We strongly suggest reading the references used in the paper,
                too, to deepen your knowledge of the topic.
              </p>
            </div>
            <div className="my-4">
              <h3>Write your own essay</h3>
              <p>
                <b>You should re-write the paper,</b> so it is in your own
                words, and so that you gain the valuable information it
                contains. You'll improve your own essay writing skills, learning
                how to structure a conclusive answer and discuss it in detail.
              </p>
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

      <section id="why-love">
        <Container>
          <h2 className="text-center">Why you'll love UK Essays</h2>
          <p className="text-center mb-4">
            Using our essay writing service couldn’t be simpler. We guide you
            through our process step-by-step, to make sure you get the most{" "}
            <br /> value from your experience.
          </p>
          <Row>
            <Col md={6} xs={12}>
              <h4>Privacy first</h4>
              <p>
                As a UK company, we are fully GDPR (General Data Protection
                Regulation) compliant. In simple terms this means we only
                require and store essential data from you, as outlined in our
                Privacy Policy. We take data security very seriously, meaning
                you can be certain your data is safe and protected.
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h4>Expertly assessed quality</h4>
              <p>
                We understand how important the quality of our work is to our
                customers, and so we invest heavily in quality checking. Our
                in-house team of experts - the Quality Control team – are
                qualified in each of the subjects we provide. They review every
                essay individually. Unlike other companies, every piece of work
                is personally inspected before delivery to you. Where others
                will simply send on the work directly, we review spelling &
                grammar, structure, references and more to make sure the work is
                exactly what you have requested. On average we request changes
                from our writers up to 5 times before sending the work onto you
                – all to make sure the final essay is perfect!
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h4>Safe & secure</h4>
              <p>
                You can be confident that the UK Essays website is safe and
                secure. <b>Our site is checked daily by TrustedSite</b> (one of
                the World's most trusted cyber security companies) to verify
                that the site is free from viruses, malware and phishing
                attempts. We only use trusted payment methods – Sage Pay,
                Alipay, and WeChat Pay – so your payment details are stored and
                processed securely.
              </p>
            </Col>
          </Row>
        </Container>
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
            at our <a href="#">specialist Reflective Essay Writing Service.</a>
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
        </Container>
      </section>

      <section>
        <Press />
      </section>
    </main>
  );
};

export default EssayService;
