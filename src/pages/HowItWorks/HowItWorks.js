import React from "react";
import {
  Accordion,
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
      </section>

      <section id="how-ukessays-works">
        <Container>
          <h2 className="text-center">How UKEssays works</h2>
          <p className="text-center">
            At UK Essays, we like to keep things simple and transparent. Every
            step of our process is clear and open and has been perfected over
            17+ years to make sure you get the very best quality work and
            exactly what you’ve requested. Nobody else has been in the industry
            as long as we have – and in our opinion, nobody does it better!
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
              <span className="text-warning">2.</span>We'll find you the perfect
              writer
            </h5>
            <p className="text-start">
              An expert writer will be individually chosen based on your
              requirements and then assigned to help with your order. They’ll
              create you a bespoke model answer that covers every aspect of your
              requirements – perfectly detailed, expertly referenced and always
              tailored to you.
            </p>

            <h5 className="text-start">
              <span className="text-warning">3.</span>Download the work
            </h5>
            <p className="text-start">
              Our in-house academics ensure the work is at the highest quality,
              no ifs or buts. They go through every sentence of the work, from
              top to bottom, making sure there are no mistakes and that
              everything meets your requirements.
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
                Every order placed is unique – just like you. That’s why you can
                be certain you’ll receive an excellently written, bespoke, fully
                referenced and perfectly matched model answer for you. We never
                re-use or re-sell any model answer we have created, it’s tailor
                made just for you.
              </p>
            </Col>

            <Col md={4} xs={12}>
              <h5>Quality, verified</h5>
              <p>
                Our in-house team of experts – the Quality Control team – review
                every model answer individually. Every piece of work is
                personally inspected before delivery to you and any corrections
                made before the work is delivered.
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
                That’s why we partner with verified review partner Reviews.co.uk
                to make sure that those reviews are 100% genuine – every one has
                been left by a real customer. Whilst Facebook, Google and
                Trustpilot reviews may not always be genuine, you can rest
                assured knowing that every review you see of UK Essays on
                Reviews.co.uk is genuine. If you’re looking at a website with
                hundreds of 5-star reviews and no others, don’t trust them!
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

      <section id="why-choose">
        <Container>
          <h2 className="text-center">Why choose UK Essays</h2>
          <Row>
            <Col md={6} xs={12}>
              <p>
                We only use expert writers who are always qualified to the level
                they work at – they will always hold at least the grade you
                order at, if not much higher!
              </p>
              <p>
                Our writers follow your instructions to the letter, making sure
                to include everything you require. We go out of our way to make
                sure your instructions are 100% complete to ensure accuracy
                every time.
              </p>
              <p>
                We perform a bespoke and rigorous quality check on every piece
                of work our writers complete. Think marking, but even more
                detailed. We check not only the content of the work, but the
                spelling, grammar, and even sources.
              </p>
              <p>
                Our in-house experts ensure that every piece features a good
                depth of analysis, is well signposted, and is easy to read and
                understand. Getting the facts right is one thing, but the work
                being reader friendly and understandable is just as important.
              </p>
              <p>
                We check that the work is correctly focused and that all
                arguments made are well supported with relevant, current and
                reliable sources from high quality journals.
              </p>
              <p>
                Every order is packed full of value and extras that others
                charge for: from a detailed grammar check, free plagiarism scan
                and a hand selected writer, you can relax knowing we’ll take
                care of everything.
              </p>
            </Col>
            <Col md={6} xs={12}>
              <img src="/assets/why-choose.jpg" alt="" />
            </Col>
          </Row>
        </Container>
        <hr />
      </section>

      <section>
        <Container>
          <Row>
            <Col md={4} xs={12}>
              <h5>Easy</h5>
              <p>2-step order process</p>
            </Col>
            <Col md={4} xs={12}>
              <h5>Trusted</h5>
              <p>Used by over 25,000 people</p>
            </Col>
            <Col md={4} xs={12}>
              <h5>Fast</h5>
              <p>Delivered to your schedule</p>
            </Col>
          </Row>
          <hr />
        </Container>
      </section>

      <section id="popular-question">
        <Container>
          <h2 className="text-center">Popular questions</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Will using this service help me to improve my writing skills?
              </Accordion.Header>
              <Accordion.Body>
                Yes! Using our service will help you improve your own writing
                skills, by demonstrating for you exactly how your work should be
                written. When you read through your completed order, you’ll be
                able to understand the kind of tone, style and voice you need to
                use in your own work and use this to strengthen your own skills.
                Ordering a model answer allows you to learn by example, rather
                than by fumbling around making attempts to master difficult
                academic skills, with little to no feedback to help you improve.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What makes UK Essays different from the rest?
              </Accordion.Header>
              <Accordion.Body>
                There are many reasons why UK Essays is different from other
                companies, but the short answer is: you. Everything we do at UK
                Essays is done with one thing in mind: serving you as our
                customer, making sure you are getting the support and assistance
                you need to achieve greatness. We’ve all been through university
                ourselves, so we understand the difficulties and challenges you
                face every day. Our job is to help you make that easier – learn
                more, write better, and get the grades you deserve!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How do you verify your writers
              </Accordion.Header>
              <Accordion.Body>
                We pride ourselves on having some of the best academic writers
                out there. We have an extensive and detailed recruitment process
                – every writer who applies for us must be degree qualified,
                skilled with writing academic work, and most importantly, 100%
                genuine! We verify all of our writers identities and make sure
                they are who they say they are – no fake documents or disguised
                identities are allowed! In fact, only 4.2% of people who apply
                to work for us as a writer are accepted, so you can relax
                knowing we are only working with the very best.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <p className="text-center my-5">Still have questions? Head to our FAQs or get in touch.</p>
        </Container>
      </section>

      <section id="place-order">
        <Container>
          <h2 className="text-center text-light pt-5">Place an Order Today!</h2>
          <p className="text-light text-center">You'll love our service - our expert writers are ready to help you achieve success</p>
         <div className="text-center pb-5">
         <Button variant="light" className="mx-2">Place an order</Button>
          <Button variant="light">Check prices</Button>
         </div>
        </Container>
      </section>
    </main>
  );
};

export default HowItWorks;
