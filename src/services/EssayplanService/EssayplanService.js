import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import PhoneOrder from "../../components/PhoneOrder/PhoneOrder";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const EssayplanService = () => {
  return (
    <main>
      <section id="essayplan-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Essay Plan Writing Service</h2>
                <p className="fs-5">
                  An essay plan is a framework which provides the structure and
                  key information needed for your final essay or piece of work.
                  This consists of bullet points guiding you on how to complete
                  your introduction, which elements should be discussed in each
                  paragraph, key points from the literature or theorists, and
                  what to include in the conclusion. Our outline is a perfect
                  guide to help you write your work and get the grade you want!
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
        <PhoneOrder />
      </section>

      <section id="essaplan-how-to-use">
        <Container>
          <h2>How to use your essay plan</h2>
          <p className="mb-5">
            Essay Plans are great for helping you to stay focused on the main
            points of your work. Once you have been sent your outline, all you
            need to do is flesh it out to make a full essay. We have given you
            the structure and resources to write your essay, so you need to
            follow these to develop your ideas and arguments.
          </p>
          <div>
            <div className="my-4">
              <h3>Read through the plan</h3>
              <p>
                Start by reading through the plan a couple of times, making sure
                you locate and read the references used to enhance your
                knowledge and background reading. You should then develop the
                main points and think critically about the arguments the writer
                has given you.
              </p>
            </div>
            <div className="my-4">
              <h3>Write your own work following the guidance</h3>
              <p>
                The essay plan will give you a perfect outline for how to
                proceed with writing your own work, and the plan that we give
                you can be used as a structural guide for your future essays,
                too.
              </p>
            </div>
            <div className="my-4">
              <h3>Hand in your completed essay</h3>
              <p>
                Once you have finished writing your full piece of work, you may
                want to get it checked over to make sure it meets the standard
                it needs to. To help you with this, we also offer a marking
                service to guide you further to the grade you want.
              </p>
            </div>
          </div>
          <p className="text-center">
            You can find further information about how our service works in the{" "}
            <a href="#">FAQs section</a>
          </p>
        </Container>
      </section>

      <section id="essayplan-why-love">
        <Container>
          <h2 className="text-center">Why you'll love UK Essays</h2>
          <p className="text-center mb-4">
            These are just some of the great things that are waiting for you
            when you order with UK Essays.
          </p>
          <Row>
            <Col md={6} xs={12}>
              <h4>Expertly Qualified Writers</h4>
              <p>
                Each essay plan we produce is tailored to your needs, and we
                only use the highest quality writers. Our writers come from a
                wide range of professional and academic backgrounds, but rest
                assured that each one is tested thoroughly before beginning work
                with us. Each writer must have English as their native language,
                have professional writing experience and have passed our
                rigorous entry tests and trial period. We're confident that
                they'll do the best job, and if you have any problems with your
                work, then our writers will be happy to look it over for you and
                make the necessary amendments.
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h4>Uncompromising Quality</h4>
              <p>
                Once your essay plan has been created, it goes through an
                in-depth <a href="#">quality check</a> by our Quality Control
                and After Care teams. Our in-house team read through each piece
                of work to make sure that it follows your requirements and will
                suit your needs. We recognise the need to get things right,
                first time and every time, and we work hard to deliver a great
                service, taking the time to check each order against your
                instructions. With each essay plan, we will also send you a
                unique quality report – written just for you - and a plagiarism
                report so you can verify that the work our writer has provided
                is 100% original and has been tailored to your assignment and
                grade requirements.
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h4>Outstanding customer support</h4>
              <p>
                We have both a super friendly Customer Experience team, who aim
                to respond to any questions or issues as quickly as possible,
                and a dedicated live chat support team, who can answer any
                questions you might have before you place your order. Our staff
                are professional, welcoming and understanding of your needs – we
                recognise the importance of great customer care, and we all know
                from experience just how stressful university can be! We are
                constantly striving to be the best, so we ask for feedback on
                every piece of work you receive, and we continue to listen to
                your feedback and make changes to create a better service for
                you!
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h4>Safe & Trusted</h4>
              <p>
                Not only do we work to ensure you have the best essay plan
                possible; we also work hard to make sure that you don't have to
                worry about your privacy and security. We have an in-house team
                dedicated to monitoring Data Protection and Privacy. We will
                never sell your data, and we have a variety of security measures
                in place to protect any data you send to us. <br /> <br />
                Your data is encrypted with the best software, and we use Amazon
                Web Services (AWS) as our cloud computing provider. AWS is a
                gold standard information security provider, so you can be sure
                that your data is safe. Our storage and usage of your data is
                laid out clearly and transparently in our privacy policy.
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
        <AboutCompany />
      </section>

      <section id="related-service">
        <Container>
          <h2 className="text-center">Related services</h2>
          <p className="text-center my-3 mb-5">
            If you're unsure about what service you might need, then we're happy
            to help you; we have a variety of options which can be tailored to
            your writing needs. For any type of essay, coursework or assignment
            that you have, we will always do our best to help you get the grade
            that you want.
          </p>
          <Row>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/writing-2.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Essay Writing Service</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/reading-1.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Assignment Writing Service</h4>
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
          </Row>
          <p className="text-center my-5">
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

export default EssayplanService;
