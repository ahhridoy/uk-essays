import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Press from "../../components/Press/Press";
import { BsWhatsapp, BsFillChatLeftFill, BsPencil } from "react-icons/bs";
import {
  MdDownloadDone,
  MdDone,
  MdOutlineWatchLater,
  MdOutlineDownloadDone,
} from "react-icons/md";
import { RiFileTextLine } from "react-icons/ri";
import { TiWeatherDownpour } from "react-icons/ti";
import {
  AiFillStar,
  AiOutlineFileDone,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

const CVWritingService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="cv-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">CV Writing Service</h2>
                <p className="fs-5">
                  Finding the perfect job starts with the perfect CV. Giving the
                  right first impression with your CV – curriculum vitae - is
                  crucial to getting noticed, securing interviews, and
                  ultimately the job you want. A well written and engaging CV is
                  key – that's where our writers can help! <br /> <br />
                  At UKEssays we have hundreds of writers academically qualified
                  and with professional writing experience who can help produce
                  the perfect professionally written CV. Unlike other CV writing
                  companies, our perspective is unique; we aim to match you with
                  someone with the qualifications and knowledge in the area you
                  are qualified in and want to work in. We don't use generic CV
                  writers, so every CV is produced uniquely to your
                  specifications and with your future employment wishes in mind.
                </p>
                <div>
                  <Button variant="success" className="mx-3">
                    Order Now
                  </Button>
                  <Link
                    to="/check-prices"
                    className="text-decoration-none text-light fs-5"
                  >
                    Check Prices
                  </Link>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12}>
              <div className="bg-light p-4 text-center rounded">
                <p>Get help with questions about our services or pricing.</p>
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

      <section id="choose-cv">
        <Container>
          <h2>Choose a CV package to suit your needs</h2>
          <p>
            We've designed a range of packages to help you get targeted help
            with exactly what you need, and to boost your chances of securing
            the job you deserve. We cover everything from basic CV writing
            through to cover letters and LinkedIn bios, designed to help boost
            your chances of success. Pick the package that suits your needs and
            get started with our professional CV writing service today.
          </p>
          <p>
            Don't forget – every package comes with our exceptional and highly
            rated customer service, hand selected writer matching and quality
            control process.
          </p>
          <Row>
            <Col md={3} xs={6}>
              <div>
                <div className="my-3">
                  <RiFileTextLine className="fs-1 bronze-icon" />
                </div>
                <h4>Bronze</h4>
                <p>
                  Our bronze package gets you a professionally written CV
                  produced by one of our fully qualified academic writers.
                </p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div>
                <div className="my-3">
                  <RiFileTextLine className="fs-1 silver-icon" />
                </div>
                <h4>Silver</h4>
                <p>
                  Get a bit extra with the silver package – CV writing plus 2
                  revisions, so you can request two sets of changes and polish
                  your CV to perfection.
                </p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div>
                <div className="my-3">
                  <RiFileTextLine className="fs-1 gold-icon" />
                </div>
                <h4>Gold</h4>
                <p>
                  Found the perfect job and need a well written cover letter?
                  Our gold package contains all the benefits of the silver
                  package, plus a one-page cover letter.
                </p>
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div>
                <div className="my-3">
                  <RiFileTextLine className="fs-1 platinum-icon" />
                </div>
                <h4>Platinum</h4>
                <p>
                  Our ultimate package – CV writing, a cover letter, a biography
                  for your LinkedIn Profile, and 3 revisions.
                </p>
              </div>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="success" className="mx-3">
              Order Now
            </Button>
            <Link to="/check-prices" className="text-decoration-none">
              Check Prices
            </Link>
          </div>
        </Container>
      </section>

      <section id="what-we-do">
        <div className="editing-content">
          <Container>
            <div className="editing-text">
              <h2>What we do</h2>
              <p>
                Ordering your CV with UKEssays is simple – we aim to make the
                process as painless as possible!
              </p>
              <p>
                <MdDone className="text-success fs-4 me-2" /> Choose your
                package from one of our four options: bronze, silver, gold or
                platinum
              </p>
              <p>
                <MdDone className="text-success fs-4 me-2" />
                Send through details of your request, including details of your
                education and employment history and any other useful
                information
              </p>
              <p>
                <MdDone className="text-success fs-4 me-2" />
                We'll receive your request, check it through, and our customer
                service team will contact you to confirm everything (and ask for
                anything else we think might help our writers)
              </p>
              <p>
                <MdDone className="text-success fs-4 me-2" />
                Next, we contact our range of expert freelance CV writers who
                are qualified or experienced in the areas you are looking to
                focus on. We carefully hand select the best writer to complete
                your CV based on their qualifications, experience and overall
                knowledge
              </p>
              <p>
                <MdDone className="text-success fs-4 me-2" />
                We'll then ask your chosen writer to get to work on producing an
                excellent CV based on your specific needs and goals
              </p>
              <p>
                <MdDone className="text-success fs-4 me-2" />
                Once complete, our quality team conducts a quality control
                review on your CV to make sure your requirements have been met
                and that everything else meets our exacting quality standards
              </p>
              <p>
                <MdDone className="text-success fs-4 me-2" />
                Then, your CV – plus any extras - is delivered to you via your
                online account for you to download!
              </p>
              <p>
                <MdDone className="text-success fs-4 me-2" />
                And, if you've chosen our Silver, Gold or Platinum packages, you
                can submit up to 2 (or 3 for Platinum) requests for amendments,
                free of charge
              </p>
            </div>
          </Container>
          <div className="editing-img">
            <img src="/assets/additional-2.jpg" alt="" />
          </div>
        </div>
      </section>

      <section id="did-you-know">
        <Container>
          <h2 className="text-center my-5">CVs: Did you know?</h2>
          <Row>
            <Col md={4} xs={12}>
              <MdOutlineWatchLater className="fs-2 mb-3" />
              <p>
                On average, recruiters spend no more than 10 seconds looking at
                a CV – which means getting the right keywords front and centre
                are crucial. Our writers will optimise your CV to target the
                industry you want to work in to make sure you get noticed.
              </p>
            </Col>
            <Col md={4} xs={12}>
              <TiWeatherDownpour className="fs-2 mb-3" />
              <p>
                On average, recruiters spend no more than 10 seconds looking at
                a CV – which means getting the right keywords front and centre
                are crucial. Our writers will optimise your CV to target the
                industry you want to work in to make sure you get noticed.
              </p>
            </Col>
            <Col md={4} xs={12}>
              <MdOutlineDownloadDone className="fs-2 mb-3" />
              <p>
                Grammar, tone and style are crucial to a great CV. With over 40%
                of CVs discarded because of simple mistakes, we ensure your CV
                is perfectly written, with perfect spelling and grammar, in the
                correct style and tone for your industry.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="take-our-word">
        <Container>
          <h2 className="text-center">Don't just take our word for it!</h2>
          <p className="text-center fs-5 text-secondary">
            We've served over 25,000 customers since we started trading in 2003.
          </p>
          <Row>
            <Col md={4} xs={6}>
              <div className="bg-white p-3">
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>{" "}
                <br />
                <p>
                  Great work, good customer services, answer all the learning
                  outcomes, good professional staff.
                </p>
                <p>Orlando C</p>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="bg-white p-3">
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>{" "}
                <br />
                <p>
                  The writer followed my instructions perfectly and produced an
                  excellent piece of work. I'm delighted with the results.
                </p>
                <p>Oliver K</p>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="bg-white p-3">
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>
                <span>
                  <AiFillStar className="text-warning fs-5" />
                </span>{" "}
                <br />
                <p>
                  Great service, great communication throughout, would
                  definitely use again
                </p>
                <p>Ryan H</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="cv-frequently-asked-question">
        <Container>
          <h2 className="text-center my-5">Frequently asked questions</h2>
          <Row>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-4">
                  <AiOutlineQuestionCircle className="text-info fs-5" />
                </div>
                <div>
                  <h5>Why use a CV writing service?</h5>
                  <p>
                    A CV is your opportunity to sell yourself, get yourself
                    noticed, and secure an interview. You have a few seconds to
                    grab the readers attention and make your CV stick out
                    amongst all the others in the pile. Our writers can help
                    make sure your CV is memorable for all the right reasons and
                    represents you in the best possible way..
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-4">
                  <AiOutlineQuestionCircle className="text-info fs-5" />
                </div>
                <div>
                  <h4>
                    How can you explain my previous job(s) better than I can?
                  </h4>
                  <p>
                    When writing about your previous jobs, it's easy to get lost
                    and stray from the point – focusing on things that don't
                    matter for the jobs you are applying for or waffling about
                    responsibilities you had in too much detail. Our writers
                    will help to make sure your CV is focused, sharp and to the
                    point, hitting the relevant and attention-grabbing keywords
                    that make the reader notice you.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-4">
                  <AiOutlineQuestionCircle className="text-info fs-5" />
                </div>
                <div>
                  <h4>
                    How long does it take you to find a writer for my order?
                  </h4>
                  <p>
                    Each order is different; however, we ask that you allow 24
                    to 48 hours for a writer to be found.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-4">
                  <AiOutlineQuestionCircle className="text-info fs-5" />
                </div>
                <div>
                  <h4>Is the service confidential?</h4>
                  <p>
                    We work in full compliance with the latest privacy
                    legislation and regulation. We will not discuss your order
                    or share your information with anyone other than yourself.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <p className="text-center mt-4">
            <a href="#">
              Still have questions? Search for answers in our help centre
            </a>
          </p>
        </Container>
      </section>

      <section id="qualified-editors">
        <Container>
          <h2 className="text-center text-light">
            Our expert CV writers are waiting to help!
          </h2>
          <div className="text-center">
            <Button variant="light">Place an Order</Button>
          </div>
        </Container>
      </section>

      <section>
        <Press />
      </section>
    </main>
  );
};

export default CVWritingService;
