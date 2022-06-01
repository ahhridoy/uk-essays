import React from "react";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import {
  BsPencil,
  BsCurrencyPound,
  BsWhatsapp,
  BsFillChatLeftFill,
  BsStarHalf,
} from "react-icons/bs";
import { MdDownloadDone, MdOutlineWatchLater, MdDone } from "react-icons/md";
import { AiOutlineFileDone, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiPhoneCall, BiLockAlt } from "react-icons/bi";
import { FiBookOpen, FiUserCheck } from "react-icons/fi";

const ReportService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="report-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Report Writing Service</h2>
                <p className="fs-5">
                  Our Report Writing Service will help you to create a concise
                  and informative academic report that will get you the grades
                  you need. Our reports are written by the highest-quality
                  writers in the industry and our team of in-house staff will
                  support you through every step of the process to make sure you
                  get the most out of your report!
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
              <div className="report-reviewsio text-center mt-3">
                <img
                  src="/assets/reviewsio-logo-white.webp"
                  alt="logo"
                  className="report-reviewsio-logo"
                />{" "}
                <br />
                <span>
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <BsStarHalf className="text-warning fs-5" />
                  <span className="text-warning ms-2 fs-5">(49 Reviews)</span>
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

      <section id="report-why-choose">
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
                  We only allow our <strong>
                    qualified academic writers
                  </strong>{" "}
                  with matching qualifications to take on your work.
                </p>
                <hr />
                <p>
                  <MdDone className="text-success fs-4 me-2" />
                  Your order will go through{" "}
                  <strong>rigorous quality controls</strong> and is checked
                  against your instructions and academic standards by qualified
                  professionals, we'll even give you a quality report to show
                  our findings.
                </p>
                <hr />
                <p>
                  <MdDone className="text-success fs-4 me-2" />
                  Your order will come with a{" "}
                  <strong>comprehensive plagiarism report</strong> which is
                  compiled with our state-of-the-art plagiarism software,
                  ensuring the work that is produced is not plagiarised.
                </p>
                <hr />
                <p>
                  <MdDone className="text-success fs-4 me-2" />
                  You get a <strong>7 day amendment period</strong>, so if
                  you're not happy with the work, let us know and our customer
                  support teams will resolve any concerns.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="report-today">
        <Container className="py-5 text-light text-center">
          <h2>Order a Report Today!</h2>
          <p>
            We have over 500 expert essay writers, ready and waiting to help you
            achieve academic success
          </p>
          <Button variant="dark" className="mx-4">
            Order an Report
          </Button>
          <Button variant="light">Check Prices</Button>
        </Container>
      </section>

      <section id="report-phone-order">
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
                      The first stage of the order process is about your needs –
                      we ask to know what grade you want, how many words or
                      pages you want to be written, when you want the work, and
                      what subject you're studying.
                    </p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="second-option">
                    <p>2</p>
                  </div>
                  <div>
                    <h4>Tell us all your requirements</h4>
                    <p>
                      Next, we ask for a few more specifics. It helps us to know
                      what your report is based on and if you have a specific
                      structure that you need to follow. You can add any files
                      that you think will be helpful to us at this stage, like
                      your course guidelines or research that will be relevant
                      to your work. This information will help us to find the
                      most suitable writer for your order – the more information
                      you give, the better! <br /> <br />
                      After this, our team will check your order details and
                      confirm them with you. They might also ask you a few more
                      questions, which will help us to process your order.
                    </p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="third-option">
                    <p>3</p>
                  </div>
                  <div>
                    <h4>An academic expert will start your order</h4>
                    <p>
                      You can make a payment now or later, but we recommend that
                      you do it sooner because this will help us to find a
                      writer much more quickly! <br /> <br />
                      Once our writer gets started on your order, we'll keep you
                      in the loop throughout, and if you have any issues or
                      questions – we'll be more than happy to help!
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="model-report">
        <Container>
          <h2>How to use your model report</h2>
          <p>
            Before the completed report is sent to you, our Quality Control Team
            will read the work, checking to see that it's exactly what you want,
            to the standard that you've asked for. After you have been given
            your report, you can request changes at any time – our Aftercare
            team are incredibly understanding and are eager to help!
          </p>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Read through the work</Accordion.Header>
              <Accordion.Body>
                The best way to write your report is to re-read the one that we
                have given you several times over, learning from the structure,
                the key points and recommendations made by your writer, and any
                crucial theories or sources they have used.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Read through the literature</Accordion.Header>
              <Accordion.Body>
                Use this report to develop your knowledge and be sure to check
                out the literature. Find and read through the sources used in
                the paper, use these to explore the topic further, and conduct
                additional reading to further your own arguments, ideas and
                knowledge.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Write your own report</Accordion.Header>
              <Accordion.Body>
                Read through the information that you gathered and then use the
                model answer as a guide for writing your work, making sure to
                include your own ideas too! For more information about producing
                your own work, take a look at our Fair Use Policy video.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <section>
        <FairUsePolicy />
      </section>

      <section id="report-why-love">
        <Container>
          <h2 className="text-center">Why you'll love UK Essays</h2>
          <p className="text-center mb-4">
            Our reports are written by the highest-quality writers in the
            industry and our team of in-house staff will support you through
            every step of the process to make sure you get the most out of your
            report!
          </p>
          <Row>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-3">
                  <AiOutlineFileDone className="fs-3 text-danger" />
                </div>
                <div>
                  <h4>Detailed and structured reports</h4>
                  <p>
                    A good structure is key to writing a great report, but it
                    can be difficult to know where to begin! We have a huge
                    number of experts in writing reports, who are trained in
                    many subject areas and degree types - whether you're an
                    undergraduate or master's student, we're here for you. Our
                    order process is super easy, and you can provide as much
                    detail as you like about how you want your report to be
                    written or any specific requests you might have.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-3">
                  <AiOutlineStar className="fs-3 text-danger" />
                </div>
                <div>
                  <h4>Expertly assessed quality</h4>
                  <p>
                    We've been in business since 2003 and have always strived to
                    offer only the best quality of work to our customers. Our
                    writers are experts in creating well written, detailed
                    reports. We know this because before they can complete any
                    order, we take steps to make sure they're fully qualified to
                    work in your subject and we test them with a practical
                    assignment so that we know they are able to perform. Also,
                    because you are paying for originality, every piece of work
                    comes with a free plagiarism scan so that you know it's 100%
                    plagiarism free! We read every single word of the reports
                    that our writers create to make sure they are of the highest
                    quality and to guarantee you get the best learning
                    experience from us.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-3">
                  <FiUserCheck className="fs-3 text-danger" />
                </div>
                <div>
                  <h4>Lots of support throughout</h4>
                  <p>
                    The moment your order is placed, we are hard at work to
                    provide a report that; matches your requirements exactly, is
                    on time, and meets the grade that you need. Our Customer
                    Experience Team will keep you in the loop every step of the
                    way and our Quality Control Team will check the work against
                    your instructions, as well as making sure that the spelling,
                    grammar, focus, and structure of your report are all up to
                    scratch. Finally, our After Care Team will keep in touch
                    with our writer, and if you need any changes, they'll do
                    everything they can to make sure you are left with a smile
                    on your face.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <p className="text-center">
            Get more information in our <a href="#">support section</a>
          </p>
        </Container>
      </section>

      <section id="report-today">
        <Container className="py-5 text-light text-center">
          <h2>Order a Report Today!</h2>
          <p>
            We have over 500 expert essay writers, ready and waiting to help you
            achieve academic success
          </p>
          <Button variant="dark" className="mx-4">
            Order an Report
          </Button>
          <Button variant="light">Check Prices</Button>
        </Container>
      </section>

      <section>
        <ReviewsComponent />
      </section>

      <section>
        <AboutCompany />
      </section>

      <section id="related-service">
        <Container>
          <h2 className="text-center">Related services</h2>
          <p className="text-center my-3">
            We can help you no matter what level you're writing for. Many of our
            writers hold master's degrees or higher, so we can help regardless
            of whether you are studying for an undergraduate or postgraduate
            degree! We have a variety of other services that you can use.
          </p>
          <Row>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/studying-5.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Essay Writing Service</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/writing-1.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Dissertation Writing</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/writing-4.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Essay Plan Service</h4>
              </div>
            </Col>
          </Row>
          <p className="text-center">
            View our <a href="#">full service portfolio</a>
          </p>
        </Container>
      </section>

      <section id="report-today">
        <Container className="py-5 text-light text-center">
          <h2>Order a Report Today!</h2>
          <p>
            We have over 500 expert essay writers, ready and waiting to help you
            achieve academic success
          </p>
          <Button variant="dark" className="mx-4">
            Order an Report
          </Button>
          <Button variant="light">Check Prices</Button>
        </Container>
      </section>

      <section>
        <Press />
      </section>
    </main>
  );
};

export default ReportService;
