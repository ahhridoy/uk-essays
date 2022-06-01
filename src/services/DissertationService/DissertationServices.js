import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
import { AiOutlineFileDone, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FiBookOpen } from "react-icons/fi";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import ConfidenceService from "../../components/ConfidenceSerivce/ConfidenceService";

const DissertationServices = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="dissertation-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Dissertation Writing Service</h2>
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
                  Get Dissertation Writing Help from the Experts
                </h4>
                <p className="fs-5">
                  Your dissertation is likely to be the toughest project you
                  will encounter in your degree and often forms a large part of
                  your overall grade. Our Dissertation Writing Service is
                  specifically designed to help you read, write and research to
                  the best of your ability. <br /> <br />A dissertation is a
                  larger piece of work on a subject of your choice that is
                  typically completed at the end of a university course - either
                  in an undergraduate or master's degree or as your PhD thesis.
                  Dissertations usually aim to fill a gap in the student's
                  knowledge about a topic or else offer a new take on an old
                  topic.
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
                  <BsCurrencyPound className="price-icon" /> 136
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
                <div className="dissertation-reviewsio text-center mt-3">
                  <img
                    src="/assets/reviewsio-logo.webp"
                    alt="logo"
                    className="dissertation-reviewsio-logo"
                  />{" "}
                  <br />
                  <span>
                    <AiFillStar className="text-warning fs-4" />
                    <AiFillStar className="text-warning fs-4" />
                    <AiFillStar className="text-warning fs-4" />
                    <AiFillStar className="text-warning fs-4" />
                    <BsStarHalf className="text-warning fs-5" />
                    <span className="text-black ms-2 fs-5">(45 Reviews)</span>
                  </span>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={3} xs={6}>
              <div className="text-light">
                <p>
                  {" "}
                  <BsPencil className="me-2 text-info" /> Written to Standard
                </p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="text-light d-flex">
                <p>
                  {" "}
                  <MdDownloadDone className="me-2 text-info" /> Plagiarism-free
                </p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="text-light d-flex">
                <p>
                  {" "}
                  <MdOutlineWatchLater className="me-2 text-info" /> Always on
                  Time
                </p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="text-light d-flex">
                <p>
                  {" "}
                  <AiOutlineFileDone className="me-2 text-info" /> Unrivalled
                  Quality
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="dissertation-why-choose">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div>
                <h2>Why choose our Dissertation Writing Service?</h2>
                <p>
                  Our service will help you learn how to write the perfect
                  dissertation. Our highly qualified academic writers can craft
                  a completely custom, engaging, and interesting dissertation
                  based on whatever title or proposal you can come up with. Just
                  tell us if you require a full dissertation or part of one, and
                  which chapters you need help with when placing your order.{" "}
                  <br /> <br />
                  We understand the frustration that student's face when trying
                  to juggle work, a social life and university assessments,
                  which is why we're here to help you get the most out of your
                  university experience. Our service is 100% confidential, 100%
                  plagiarism free, always delivered on time and we have over{" "}
                  <a href="#">500 expert writers</a> ready to help you. <br />{" "}
                  <br />
                  If you need help and assistance in choosing a dissertation
                  topic or title, then our{" "}
                  <a href="#">Topic and Titles service</a> is a great place to
                  get started.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="p-3 shadow rounded">
                <h4>Reasons to choose our UKDiss.com</h4>
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

      <section id="dissertation-phone-order">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <img
                src="/assets/phone-order2.png"
                alt="phone-icon"
                className="w-100"
              />
            </Col>
            <Col md={6} xs={12}>
              <h2 className="my-3">
                <span className="fs-4">Our order process is simple</span>
                <br /> Three easy steps!
              </h2>
              <div>
                <div className="text-box">
                  <div className="first-option">
                    <p>1</p>
                  </div>
                  <div>
                    <h4>Start your dissertation order</h4>
                    <p>
                      In the first stage, we simply need to know your required
                      grade, expected word count, dissertation subject area and
                      when you would like the work delivered. Be sure to give
                      yourself enough time to write your own work in accordance
                      with our <a href="#">Fair Use Policy</a>! We ask for some
                      contact details at this point so we can get in touch with
                      you about starting your order.
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
                      When ordering a full dissertation, we also need to know if
                      you require an abstract and/or appendices, and if you have
                      any specific requirements for the structure of your
                      dissertation. There's also an opportunity to attach your
                      course handbook and any completed work you have – the more
                      information we have, the better we can help you! <br />{" "}
                      <br />
                      If you're ordering part of a dissertation, you can select
                      which chapters you want to order, and the word count you
                      need for them; it's super quick!
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
                      Once these details have been entered, our English speaking
                      Customer Experience team will check over the details and
                      confirm them with you. You can pay at any time, but the
                      sooner you make your payment, the better, as we'll be able
                      to find the best writer and start your order much faster.
                      Our payment system is fully secure and you can pay by
                      credit/debit card, Amazon Pay, or make a bank transfer.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="primary">
              <strong>Order</strong> a dissertation today!
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <FairUsePolicy />
      </section>

      <section id="how-to-use">
        <Container>
          <h2>What you'll get with our Dissertation Writing Service</h2>
          <p className="mb-5">
            When you order with us, you're ordering from a trusted UK company
            with over 17 years experience in the industry. We have over 500
            expert dissertation writers, who are experienced in a wide range of
            subject areas, so no subject is too small or obscure for us! All of
            our writers hold at least a 2:1 degree, with many holding master's
            degrees or PhDs! They're each seasoned in academic writing and know
            exactly what it takes to compose an insightful, well-researched and
            thorough dissertation which meets the grade you want! To see what we
            mean, check out these <a href="#">sample dissertations</a> that were
            written by our writers! <br /> <br />
            When you use our Dissertation Writing Service, you can order the
            full dissertation all at once, or just the individual chapters you
            need. Our service includes:
          </p>
          <div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Introduction</strong>
                </h3>
                <p>
                  The introduction chapter states the aims, purpose and
                  objectives of the work. It should grab the reader's attention
                  and tell them what the work is about and why you have chosen
                  the subject.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Literature Review</strong>
                </h3>
                <p>
                  The literature review will identify past research on your
                  chosen topic. It will examine published journal articles,
                  books and other types of sources to identify key themes and
                  determine a 'gap' in the existing research. Many dissertations
                  are entirely literature-based. If you are looking for a
                  stand-alone literature review then visit our{" "}
                  <a href="#">literature review writing service</a>.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Methodology</strong>
                </h3>
                <p>
                  The methodology chapter is vital to your dissertation. The
                  purpose of this section is to say what you want to find out
                  and how you are going to do it. It outlines the research
                  paradigm and methods that you have chosen to use in your
                  research, as well as decisions you have made in terms of the
                  sampling and analysis of the data. Each of these decisions
                  need to be properly justified so that it is clear your methods
                  match the aims and objectives of your research. <br /> <br />
                  If you haven't yet decided what research method you would like
                  to use, our researchers will happily look at your research
                  topic and decide which is most suitable.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Results</strong>
                </h3>
                <p>
                  A results chapter is usually included when your dissertation
                  involves collecting data. This chapter outlines your findings
                  and presents your data, often using tables and figures, in
                  relation to each question or theme. It is also where any
                  statistical testing is done so that we can see how significant
                  the results were. We have many writers who are familiar with
                  statistical software such as SPSS or STATA and are ready to
                  help with this part.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Discussion</strong>
                </h3>
                <p>
                  A discussion chapter compares your results with other research
                  on the subject to work out what we have learned and what it
                  means for the future. It talks about whether old research has
                  been confirmed or contradicted, any new theories or
                  explanations that might have emerged, and what the results
                  might mean for policy and practice.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Conclusion</strong>
                </h3>
                <p>
                  The conclusion chapter is typically around 10% of the word
                  count. It summarises what was done, the key findings of the
                  research, and your recommendations - it needs to be clear and
                  to the point.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Extras & Other Assistance</strong>
                </h3>
                <p>
                  We can help with many other 'extras' that you may require. For
                  example, dissertations often require an abstract, which is a
                  short summary of the entire dissertation that is not factored
                  into the final word count. Designing research instruments can
                  also be very difficult, so our writers can create interview
                  questions or sample questionnaires to assist you in conducting
                  your research.
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

      <section id="full-dissertation">
        <Container>
          <h2 className="text-center my-2">Full Dissertation</h2>
          <p className="text-center">
            We have expert writers ready and waiting to help.
          </p>
          <p className="mb-4 text-center">
            You can view samples of the work produced by our expert writers in
            different fields of study below.
          </p>
          <p className="text-center">
            <strong>Sample dissertations</strong> by our expert writers
          </p>
          <Row>
            <Col md={4} xs={6}>
              <div>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Business</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Construction</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Education</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Environmental Sciences</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Finance</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>information Systems</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Marketing</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Medicine</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Tourism</p>
                  <p className="text-light bg-success rounded">
                    Undergraduate 2:1
                  </p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Business</p>
                  <p className="text-light bg-danger rounded">Masters Merit</p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Management</p>
                  <p className="text-light bg-danger rounded">Masters Merit</p>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between text-decoration-none"
                >
                  <p>Nursing</p>
                  <p className="text-light bg-danger rounded">Masters Merit</p>
                </a>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-5">
            <Button variant="primary">View all Samples</Button>
          </div>
        </Container>
      </section>

      <section>
         <ConfidenceService />
      </section>
    </main>
  );
};

export default DissertationServices;
