import { Button } from "bootstrap";
import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import PhoneOrder from "../../components/PhoneOrder/PhoneOrder";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const ExamService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="exam-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Exam Revision Service</h2>
                <p className="fs-5">
                  Exams are used across almost all degree subjects as a way for
                  students to demonstrate their understanding of the course or
                  the specific module they are studying. Exams can be one of the
                  hardest types of assessment, as choosing the information that
                  will be the most useful, as well as revising everything in
                  time, can be a difficult balancing act. Students often feel
                  nervous before entering the exam hall, and this is completely
                  natural, but revision is key to calming your anxiety: the more
                  prepared you are, the more confident you will feel. <br />
                  <br />
                  Our Exam Revision Service can help you prepare for any type of
                  exam: it’s personalised to your needs and will support you in
                  your revision to help get you the grade you want!
                </p>
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
        <PhoneOrder />
      </section>

      <section id="model-report">
        <Container>
          <h2>What the service includes</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Seen Exam</Accordion.Header>
              <Accordion.Body>
                A seen exam is when you are given the question in advance. The
                exam is under a timed condition, and you must produce a full,
                essay-style answer to the question. Typically, the student can’t
                bring additional material into the exam, and the answer itself
                doesn’t require references (though it may require you to discuss
                theorists and their ideas more generally). <br /> <br />
                Our seen exam service will provide you with a fully-written exam
                answer which takes into account how long you have to write it.
                It will include everything that you need to prepare for your
                exam and will give you a structure for how to best answer the
                question. Check out some of our seen exam examples!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Exam Notes</Accordion.Header>
              <Accordion.Body>
                Traditional exams ask you to recall key information about your
                module without knowing specifically what you’ll be asked in
                advance; you are therefore expected to produce a coherent
                response in a certain space of time. In order to do that, you
                need a very good grip on the material. The best way to revise
                for these types of exams is through creating exam notes covering
                the module’s core topics, making sure these notes are clear and
                concise. <br /> <br />
                Our exam notes will help you to understand a topic you may find
                tough. Our writers will follow whatever requirements you express
                regarding how you would like your notes to be delivered (e.g. in
                bullet points, brief sentences, short summaries, or whatever you
                find works best for you) and will make use of your key sources,
                which you can see in our examples page. We’ll give you as much
                information as you need for your time limit so that you won’t be
                left short with too little information or overburdened by too
                much.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Exam Answer</Accordion.Header>
              <Accordion.Body>
                Sometimes tutors will give you past exam papers to give you an
                idea of what upcoming exam questions will be like. Past exam
                papers can help you understand how to write a detailed and
                engaging exam answer on a similar topic. You can provide as much
                information as you like when you are ordering, and we’ll match
                you to a truly experienced writer who can whittle it down for
                you so that you can see how to ace your exam! If you’ve been
                given previous exam papers or you have an open-book exam coming
                up, we can help you to develop a fully written model answer –
                check out <a href="#">our samples now.</a>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="text-center">Why you'll love UK Essays</h2>
          <p className="text-center">
            Your order is 100% unique to you – so it is plagiarism-free and is
            never shared online or anywhere else - and will be written by one of
            the best experts in the business.
          </p>
          <div>
            <h4>Safety first</h4>
            <p>
              It's important that you trust the company that you are going to
              use for exam revision services: after all, it's your grade that's
              at stake! Our company registration details can be found at the
              bottom of any screen on our website, along with our Privacy Policy
              and Terms and Conditions. You're also welcome to give us a call
              before placing our order if you're still a little unsure: we're a
              friendly team based in Nottingham, and we are always happy to
              help! Check out our independent customer reviews to see just how
              professional and supportive our staff are: they're posted by
              customers just like you! <br /> <br />
              Our website is checked daily by online security experts,
              TrustedSite. As part of these checks our website is screened for
              malware, viruses and online phishing attempts. You can see our
              latest security report here.
            </p>
          </div>
          <div>
            <h4>Expertly assessed quality</h4>
            <p>
              We aim to exceed your expectations, and we have numerous quality
              control procedures in place which are integral to our company. We
              work with only the most professional, experienced writers: before
              starting work with us, they must pass a test, prove their identity
              and show us their own previous university results for each module
              assessment. All applicants must have at least a 2:1 degree, but
              many hold at least one postgraduate degree, too! You'll only ever
              have your order written by someone who is experienced in your
              subject area and can write to the level you have requested.
            </p>
          </div>
          <div>
            <h4>Committed customer service</h4>
            <p>
              If you find you aren't happy with your work, we'll still help you;
              we don't hide away from any issues because we know just how
              important our Exam Revision Service is to you. We therefore have
              an Aftercare Team who are dedicated to solving any problems,
              helping you to make sure you get the most out of your order. We
              aim to respond quickly to all messages, and we keep in constant
              contact with our writers so that you know what's happening at
              every stage of your order.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ExamService;
