import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Press from "../../components/Press/Press";

const EditingService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="editing-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Editing Service</h2>
                <p className="fs-5">
                  Have you completed your work and need some editing or
                  improvements? Do you feel like your university assignment
                  needs that extra level of refinement? Perhaps you have
                  received feedback and need some help addressing it and
                  improving your essay or dissertation? Our Editing service is
                  designed to give you the extra support your academic work
                  needs.
                  <br /> <br />
                  At UKEssays, we work closely with qualified editors and
                  writers in almost every university subject, giving you access
                  to skilled academics alongside our highly-rated customer
                  service team and after care service. Our editors are on
                  standby, ready and waiting to help, and unlike other editing
                  services, we personally match you to a qualified editor in
                  your subject area, allowing them to focus on the key
                  terminology and theories specific to your subject.
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
                <h1 className="price">34</h1>
                <p>Undergraduate • 1000 words • 2 day delivery</p>
                <img src="/assets/trusted-site.svg" alt="" /> <br />
                <Button variant="success" className="w-100 my-2">
                  Place an order
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

      <section id="editing">
        <Container>
          <h2>Simple, powerful and effective editing</h2>
          <p>
            UKEssays will connect you with an expert editor directly qualified
            in your subject area. From polishing off a standalone university
            assignment to give it that extra level of professionalism, to
            checking and perfecting your final dissertation project, we have got
            you covered! <br /> <br />
            Our expert editors will review your paper's spelling and grammar,
            making all the changes required to make sure your work is in perfect
            shape. Everything will be completed using Word's track changes
            feature, meaning you can see every change, understand the mistakes
            you have made and learn from them for the future! <br /> <br />
            Alongside spelling and grammar, our editors also make sure that your
            work flows well with a consistent writing style, a logical structure
            and a strong academic voice and tone throughout. They will check key
            terminology, and make sure that your language satisfies the specific
            requirements for the type of assignment or subject you are
            completing. <br /> <br />
            Simply send us your work via our secure order form, and we will
            personally match you with one of our experienced editors.
          </p>
          <ul>
            Our editing orders will:
            <li>Rectify spelling & punctuation errors</li>
            <li>Correct grammatical errors</li>
            <li>Improve the layout of your work if required</li>
            <li>Check the flow of the work</li>
            <li>Review the sentence structure and syntax</li>
            <li>Check subject-specific terminology</li>
            <li>Provide feedback relating to your work</li>
            <li>Only use an editor qualified in your subject area</li>
            <li>
              Provide a free Viper Plagiarism Scan to check for potential
              plagiarism in your document
            </li>
          </ul>
          <div className="text-center">
            <Button variant="success" className="mx-3">
              Order Now
            </Button>
            <Link to="/check-prices">Check Prices</Link>
          </div>
        </Container>
      </section>

      <section id="editing-process">
        <div className="editing-content">
          <Container>
            <div className="editing-text">
              <h2>The UKEssays Editing Process</h2>
              <p>
                We aim to make editing your work as smooth and easy as possible
                to ensure that you get the results you need with a minimum of
                fuss.
              </p>
              <p>
                Get started by selecting 'editing' - along with your subject,
                level of study and other basic details - on our simple and easy
                to use order form.
              </p>
              <p>
                Next, send through the details of what you need to be edited:
                attach your work, along with any comments or specific points you
                want our editors to focus on.
              </p>
              <p>
                Once you've submitted your request, our Customer Experience team
                will review your work and instructions, then get in touch to
                confirm everything with you and clear up any questions.
              </p>
              <p>
                After that, our team will set to work on finding you an editor
                in your subject area to make the improvements your work requires
                – finding the right person for you.
              </p>
              <p>
                Your editor will then get started, making the relevant changes
                to the work– correcting spelling and grammar and everything else
                that is included in your selected service.
              </p>
              <p>
                After finishing and submitting the edited document to us, we'll
                check to make sure all your requirements have been met, and then
                release the work for you to download
              </p>
            </div>
          </Container>
          <div className="editing-img">
            <img src="/assets/editing-additional.jpg" alt="" />
          </div>
        </div>
      </section>

      <section>
        <Container>
          <h2 className="text-center">Editing: Did you know?</h2>
          <Row>
            <Col md={6} xs={12}>
              <div>
                <p>
                  Good spelling and grammar are a key part of any piece of
                  academic work, and usually form a specific part of a marking
                  rubric or grading guidelines. Writing errors might mean that
                  your points aren't expressed clearly enough to be understood
                  by the marker, making it seem like you don't understand your
                  subject. Fixing spelling and grammar mistakes, resolving
                  issues with flow or language, or addressing areas of
                  improvement can give you those extra few marks that make the
                  difference between grades.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <p>
                  Studies show that as many as 80% of employers value candidates
                  and employees with strong written communication skills; this
                  could be the difference between you and another candidate.
                  Your time at school, college and university is the greatest
                  opportunity to improve your writing skills, so make sure you
                  take advantage of this. Editing can show you the flaws in your
                  writing and enable you to learn from your mistakes, which is a
                  key skill that can separate you from other candidates and
                  secure you a key job opportunity later in life.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="take-our-word">
        <Container>
          <h2 className="text-center">Don't just take our word for it!</h2>
          <p className="text-center">
            We've served over 25,000 customers since we started trading in 2003.
          </p>
          <Row>
            <Col md={4} xs={6}>
              <div className="bg-white p-3">
                <span>star icons</span> <br />
                <p>
                  Great work, good customer services, answer all the learning
                  outcomes, good professional staff.
                </p>
                <p>Orlando C</p>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="bg-white p-3">
                <span>star icons</span> <br />
                <p>
                  The writer followed my instructions perfectly and produced an
                  excellent piece of work. I'm delighted with the results.
                </p>
                <p>Oliver K</p>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="bg-white p-3">
                <span>star icons</span> <br />
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

      <section id="frequently-asked-question">
        <Container>
          <h2 className="text-center">Frequently asked questions</h2>
          <Row>
            <Col md={6} xs={12}>
              <div>
                <h4>Why use an Editing service?</h4>
                <p>
                  Editing is a simple and effective way to improve your work,
                  and help you learn from mistakes you may have made with your
                  writing. Marking and comments on your work can only tell you
                  so much: seeing common mistakes you make with spelling and
                  grammar and understanding how to address comments can teach
                  you how to be a better academic writer and improve your
                  grades. An editor provides you with a fresh perspective and is
                  there to help you, not catch you out!
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <h4>What makes this different to other editing services?</h4>
                <p>
                  Most editors from other services are not subject-specific
                  editors: they are often qualified in English, and whilst they
                  are excellent at fixing spelling and grammar mistakes, they
                  lack the subject-specific knowledge that we require all of our
                  editors to have. An editor that understands your work and is
                  qualified in the subject you are studying will be able to
                  catch errors in your knowledge that could hurt your chance at
                  a high grade.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <h4>
                  How long does it take you to find a writer for my editing
                  order?
                </h4>
                <p>
                  Each order is different; however, we ask that you allow 24 to
                  48 hours for a suitably qualified editor to be found.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <h4>Is the service confidential?</h4>
                <p>
                  We work in full compliance with the latest privacy legislation
                  and regulation. We will not discuss your editing order or
                  share your information with anyone other than yourself.
                </p>
              </div>
            </Col>
          </Row>
          <div className="text-center">
            <a href="#">
              Still have questions? Search for answers in our help centre
            </a>
          </div>
        </Container>
      </section>

      <section id="qualified-editors">
        <Container>
          <h2 className="text-center text-light">
            Our fully qualified editors are waiting to help!
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

export default EditingService;
