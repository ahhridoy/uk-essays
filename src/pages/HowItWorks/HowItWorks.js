import React from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import "../../styles/pages/_how-it-works.scss";

const HowItWorks = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="how-it-works-hero">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <h2>The World's best writers are waiting</h2>
              <p>
                At UK Essays, we connect students like you to expert writers,
                who will help ensure you succeed in your education and career.
                An experience with UK Essays is like no other. We help students
                achieve better marks by providing you with a perfectly written
                model answer that aims to give you everything you need to do
                just that. <br /> <br />
                We walk with you, every step of the way, making sure you get the
                help and support you need with your studies. Students who work
                with UK Essays can improve their grades, learn more and gain
                better writing skills – becoming better, more well-rounded
                students. Learn more about how we work hand in hand with you to
                boost your grades!
              </p>
              <div className="d-flex">
                <DropdownButton
                  variant="outline-secondary"
                  title="I'm looking for help with.."
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">An Essay</Dropdown.Item>
                  <Dropdown.Item href="#">An Assignment</Dropdown.Item>
                  <Dropdown.Item href="#">Coursework</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">A Dissertation</Dropdown.Item>
                </DropdownButton>
                <Button variant="danger">View service</Button>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="">
                <img src="/assets/how-it-works-hero.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>

        <section id="how-ukessays-works">
          <Container>
            <h2 className="text-center">How UKEssays works</h2>
            <p className="text-center">
              At UK Essays, we like to keep things simple and transparent. Every
              step of our process is clear and open and has been perfected over
              17+ years to make sure you get the very best quality work and
              exactly what you’ve requested. Nobody else has been in the
              industry as long as we have – and in our opinion, nobody does it
              better!
            </p>
            <div>
              <h5 className="text-start">
                <span className="text-warning">1.</span>Tell us what you need
              </h5>
              <p className="text-start">
                We can help with virtually any type of work you’re completing.
                Choose from one of our 20+ writing services and give us your
                requirements, from word length to grade required. Our in-house
                experts will review your order request and make sure we have
                everything we need to do a fantastic job.
              </p>

              <h5 className="text-start">
                <span className="text-warning">2.</span>We'll find you the
                perfect writer
              </h5>
              <p className="text-start">
                An expert writer will be individually chosen based on your
                requirements and then assigned to help with your order. They’ll
                create you a bespoke model answer that covers every aspect of
                your requirements – perfectly detailed, expertly referenced and
                always tailored to you.
              </p>

              <h5 className="text-start">
                <span className="text-warning">3.</span>Download the work
              </h5>
              <p className="text-start">
                Our in-house academics ensure the work is at the highest
                quality, no ifs or buts. They go through every sentence of the
                work, from top to bottom, making sure there are no mistakes and
                that everything meets your requirements.
              </p>
            </div>
            <div className="text-center">
              <Button variant="danger">Samples of Our Work</Button>
              <a href="#" className="mx-2 text-decoration-none">
                Check prices
              </a>
            </div>
          </Container>
        </section>
        <section id="build-drive">
          <Container>
            <h1 className="text-center">Built to drive your success</h1>
            <Row>
              <Col md={4} xs={12}>
                <h5>Perfectly written work</h5>
                <p>
                  Every order placed is unique – just like you. That’s why you
                  can be certain you’ll receive an excellently written, bespoke,
                  fully referenced and perfectly matched model answer for you.
                  We never re-use or re-sell any model answer we have created,
                  it’s tailor made just for you.
                </p>
              </Col>

              <Col md={4} xs={12}>
                <h5>Quality, verified</h5>
                <p>
                  Our in-house team of experts – the Quality Control team –
                  review every model answer individually. Every piece of work is
                  personally inspected before delivery to you and any
                  corrections made before the work is delivered.
                </p>
              </Col>

              <Col md={4} xs={12}>
                <h5>In-depth plagiarism scan</h5>
                <p>
                  Every order we deliver comes with a complimentary plagiarism
                  scan that shows the uniqueness of the work we produce. We scan
                  the order against the whole internet, proving no content has
                  been copied from anywhere else and that your model answer is
                  100% unique.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="customer-review">
          <Container>
            <Row>
              <Col md={6} xs={6}>
                <h2>Customer Reviews</h2>
                <p>Overall rating</p>
                <h2>4.4 / 5</h2>
                <p>
                  start icon <a href="#">1748 Reviews</a>
                </p>
                <p>
                  The internet is filled with fake, overly positive reviews.
                  That’s why we partner with verified review partner
                  Reviews.co.uk to make sure that those reviews are 100% genuine
                  – every one has been left by a real customer. Whilst Facebook,
                  Google and Trustpilot reviews may not always be genuine, you
                  can rest assured knowing that every review you see of UK
                  Essays on Reviews.co.uk is genuine. If you’re looking at a
                  website with hundreds of 5-star reviews and no others, don’t
                  trust them!
                </p>
              </Col>
              <Col>
                <div className="bg-white p-5">
                  <h2>star icon REVIEWS</h2>
                  <p>
                    start icon <a href="#">1748 Reviews</a>
                  </p>
                  <h4>
                    “Just what I needed. Helped me to get a starting point on my
                    essay when I was completely overwhelmed by it. Gave me
                    brilliant pointers to be able to go on and write my essay
                    myself.” <br />
                  </h4>
                  <small>Debbie W</small>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="guarantees">
          <Container>
            <Row>
            <Col md={8} xs={12}>
              <h2>World class guarantees</h2>
              <p>
                When you place an order with UK Essays, you can relax knowing
                you are covered by our guarantees and promises from start to
                finish. Our awesome guarantees are there to give you the
                reassurance you need to put your trust in us. <br /> <br />
                From the basics – like no plagiarism and delivering your work on
                time – through to our in-house experts guiding you every step of
                the way, you’ll have all the support and assistance you need.
                Why not check out our guarantees for yourself and see exactly
                how you’ll be totally covered.
              </p>
              <Button variant="primary">Read About our guarantees</Button>
            </Col>
            <Col md={4} xs={12}>
              <img src="/assets/how-guarantees.jpg" alt="" className="w-100" />
              <p> 6 industry leading guarantees</p>
              <p> 5 service promises</p>
              <p> 25,000+ happy customers</p>
            </Col>
            </Row>
          </Container>
        </section>
      </section>
    </main>
  );
};

export default HowItWorks;
