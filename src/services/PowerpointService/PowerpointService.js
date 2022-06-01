import React from "react";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import ConfidenceService from "../../components/ConfidenceSerivce/ConfidenceService";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import { AiFillStar, AiOutlineFileDone, AiOutlineStar } from "react-icons/ai";
import {
  BsStarHalf,
  BsCurrencyPound,
  BsWhatsapp,
  BsFillChatLeftFill,
  BsPencil,
} from "react-icons/bs";
import { BiPhoneCall, BiLockAlt } from "react-icons/bi";
import { MdDownloadDone, MdDone, MdOutlineWatchLater } from "react-icons/md";

const PowerpointService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="powerpoint-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">
                  Academic PowerPoint Presentation Service
                </h2>
                <p className="fs-5">
                  Many university courses now use PowerPoint presentations as a
                  form of academic assessment: that means that your tutors ask
                  you to present your knowledge to a room full of people. We
                  know just how scary that can be, and we're here to help!{" "}
                  <br /> <br />
                  Our service can help you to develop an academic PowerPoint
                  presentation which is engaging, professional and shows your
                  information in a clear and informative manner. Our
                  presentations also include explanatory notes – meaning you
                  really do have everything you need to develop your
                  communication and presentation skills!
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
                  <BsCurrencyPound className="price-icon" />
                  124
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
                  Message us on <strong>WhatsApp </strong>
                  <BsWhatsapp />
                </Button>
                <br />
                <Button variant="primary" className="w-100 my-2">
                  Start a <strong>live chat </strong>
                  <BsFillChatLeftFill />
                </Button>
              </div>
              <div className="powerpoint-reviewsio text-center mt-3">
                <img
                  src="/assets/reviewsio-logo-white.webp"
                  alt="logo"
                  className="powerpoint-reviewsio-logo"
                />{" "}
                <br />
                <span>
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <AiFillStar className="text-warning fs-4" />
                  <BsStarHalf className="text-warning fs-5" />
                  <span className="text-warning ms-2 fs-5">(13 Reviews)</span>
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

      <section id="powerpoint-why-choose">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div>
                <h2>Why choose our PowerPoint Presentation Service?</h2>
                <p>
                  Our PowerPoint presentations consider every aspect of your
                  assessment. Not only will we create model slides for you as a
                  basis to work on, but we also will give explanatory notes to
                  help you expand on the information covered on the slides! Our
                  PowerPoint services are designed to give you as much content
                  as possible to help you prepare for your presentation, so
                  every slide includes 50 words of text AND 200 words of notes
                  to help you explain each slide. As if that wasn't enough, for
                  a small additional fee, your writer can also provide you with
                  speech notes in a script form: you can rehearse before your
                  presentation and be word-perfect! <br /> <br />
                  We also work hard on the design of the presentation, and each
                  PowerPoint we deliver undergoes strict quality checks before
                  the work is given to you.
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

      <section id="powerpoint-phone-order">
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
                      In the first step, we ask that you give us as much
                      information as you can about your PowerPoint presentation,
                      including the grade you require, how many slides there
                      will be, the subject you're studying, and when you need
                      your model presentation for. Make sure to give yourself
                      enough time to create and rehearse your own presentation
                      in line with our Fair use Policy! If you're unsure of how
                      many slides you need, don't worry - our Customer
                      Experience Team and professional writers will be ready to
                      advise you!
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
                      In Step 2, we ask for a few more details about your order.
                      The more details you provide for us, the easier it will be
                      for us to help you! We'll ask you if you'd like additional
                      speech notes, the kind of structure that you might need,
                      and which style you require for your referencing, amongst
                      other things.
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
                      In the final step, our team will check the information you
                      have given us and confirm the details of the order with
                      you. You can pay whenever you like, but the sooner that
                      you make payment of at least 50% of the order cost, the
                      sooner we can find you a writer and get your order
                      started. You can pay by credit/debit card, Alipay, WeChat
                      Pay or by bank transfer, but your payments are secure when
                      you use our services no matter how you choose to pay.
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
          <h2>How to use our PowerPoint Presentation Service</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Review the work</Accordion.Header>
              <Accordion.Body>
                After the presentation has been created, our in-house Quality
                Control Team will check it over. We recognise how important your
                work is to you and look over every order that's written. We look
                at spelling, grammar, structure and style, and we also check to
                see that every piece of work is on-topic, well-informed and
                matches your requirements. We pass each piece of work through
                our very own plagiarism scanner, to make sure that every
                presentation is 100% original!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Create Presentation</Accordion.Header>
              <Accordion.Body>
                After the order has been finished, it's over to you to get
                started on creating your presentation! If you have any problems
                with your order, or just have questions, you can always message
                our dedicated Aftercare Team!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Practice your presentation</Accordion.Header>
              <Accordion.Body>
                It's always good to practise your presentation a few times – a
                great tip is to get a friend to listen to you speak and give
                some tips on your presentation skills. Time the presentation to
                make sure you don't overrun your timeslot and keep reading your
                speaking notes – this will help to give you confidence and will
                mean you won't read directly from your notes when you're
                speaking!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <section id="powerpoint-why-love">
        <Container>
          <h2 className="text-center">Why you'll love UK Essays</h2>
          <p className="text-center mb-5 fs-5">
            Your order is 100% unique to you – so it is plagiarism-free and is
            never shared online or anywhere else - and will be written by one of <br />
            the best experts in the business.
          </p>
          <Row>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-3">
                  <AiOutlineFileDone className="fs-3 text-danger" />
                </div>
                <div>
                  <h4>Aftercare and keeping in touch</h4>
                  <p>
                    If you have any questions or concerns after you've received
                    your presentation, we have a dedicated Aftercare Team who
                    are always happy to help. We'll help you to create a
                    PowerPoint that you can deliver with confidence and make
                    sure that the work is relevant to your subject topic,
                    requirements and grade. We always want to develop our
                    services, so we ask every customer for feedback after their
                    order is complete. You can read previous{" "}
                    <a href="#">customer reviews of our service here.</a>
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
                    It's important to us that each presentation we produce is
                    in-depth, well-designed and educational, and that every
                    order is personalised to you. Each piece of work is checked
                    by our Quality Control Team, who come from a wide-range of
                    professional and academic backgrounds, and are highly
                    proficient in English, spelling and grammar. We check the
                    work against your instructions, making sure it covers
                    everything you need, but we'll also make sure the structure
                    of the presentation will keep the audience engaged, that the
                    work uses high-quality sources, and that it is well-written
                    and well-referenced throughout. We know your peace of mind
                    is essential, so we'll always keep you up-to-date on how
                    your order is progressing; that's why we have an account
                    management system to keep track of it!
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-3">
                  <BiLockAlt className="fs-3 text-danger" />
                </div>
                <div>
                  <h4>Safe & Trusted</h4>
                  <p>
                    With us, you can be confident that your data is secure.
                    We've updated our Privacy Policy in line with current data
                    protection law, which means we will never sell your personal
                    data to anyone. You can be reassured that our payment
                    process is safe and easy to use wherever you are located.
                    Our site is tested daily by online security experts,
                    TrustedSite, who independently verify our site is free from
                    malware, viruses and phishing activity.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <ConfidenceService />
      </section>

      <section>
        <ReviewsComponent />
      </section>

      <section>
        <FairUsePolicy />
      </section>

      <section id="related-service">
        <Container>
          <h2 className="text-center">Related services</h2>
          <p className="text-center my-3">
            We have a huge range of writing and help services to get you the
            grade you want!
          </p>
          <Row>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/writing-2.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Essay Writing</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/studying-4.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Academic Poster Service</h4>
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

      <section>
        <Press />
      </section>
    </main>
  );
};

export default PowerpointService;
