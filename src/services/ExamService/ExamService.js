import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import { MdDone } from "react-icons/md";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import data from "../../data.json";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const ExamService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <ServicesHero service={data.services[12]} />

      <WhyChoose whyChoose={data.whyChoose[8]} />

      <section id="exam-phone-order">
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
                      First, select the service you want, the grade you require
                      and the subject you are studying. When you choose your
                      delivery date, make sure you are giving yourself plenty of
                      time to revise using the work that we give you! We will
                      also ask for your email address and phone number – it’s
                      important these are correct so that we can contact you
                      about your order.
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
                      Next, we ask for more details about your exam: for
                      example, what type of exam it is, how long it will be, and
                      if you require references. If you aren’t sure about any of
                      these, don’t panic! Our Live Chat Team are happy to help;
                      just select the icon in the bottom right-hand corner to
                      start talking. If you have any extra information or files
                      that you feel will help us, feel free to add them, as it
                      will all help us find the most suitable writer for you.
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
                      Your order will now be placed, and a member of our team
                      will get in touch confirming your details. You can pay now
                      or later, but the sooner that you make your payment (50%
                      minimum), the easier it will be to find a writer to help
                      you. It typically takes between 24-48 hours to find a
                      writer but every order is different, so it can vary!
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="service-include">
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

      <section id="exam-why-love">
        <Container>
          <h2 className="text-center">Why you'll love UK Essays</h2>
          <p className="text-center text-secondary fs-5 mb-5">
            Your order is 100% unique to you – so it is plagiarism-free and is
            never shared online or anywhere else - and will be written by one of
            the best experts in the business.
          </p>
          <div className="d-flex mb-5">
            <div className="me-5">
              <MdDone className="text-primary fs-2" />
            </div>
            <div>
              <h4>Safety first</h4>
              <p>
                It's important that you trust the company that you are going to
                use for exam revision services: after all, it's your grade
                that's at stake! Our company registration details can be found
                at the bottom of any screen on our website, along with our
                Privacy Policy and Terms and Conditions. You're also welcome to
                give us a call before placing our order if you're still a little
                unsure: we're a friendly team based in Nottingham, and we are
                always happy to help! Check out our independent{" "}
                <a href="#">customer reviews </a>
                to see just how professional and supportive our staff are:
                they're posted by customers just like you! <br /> <br />
                Our website is checked daily by online security experts,
                TrustedSite. As part of these checks our website is screened for
                malware, viruses and online phishing attempts. You can see our
                <a href="#"> latest security report here</a>.
              </p>
            </div>
          </div>
          <div className="d-flex mb-5">
            <div className="me-5">
              <MdDone className="text-primary fs-2" />
            </div>
            <div>
              <h4>Expertly assessed quality</h4>
              <p>
                We aim to exceed your expectations, and we have numerous quality
                control procedures in place which are integral to our company.
                We work with only the most professional, experienced writers:
                before starting work with us, they must pass a test, prove their
                identity and show us their own previous university results for
                each module assessment. All applicants must have at least a 2:1
                degree, but many hold at least one postgraduate degree, too!
                You'll only ever have your order written by someone who is
                experienced in your subject area and can write to the level you
                have requested.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="me-5">
              <MdDone className="text-primary fs-2" />
            </div>
            <div>
              <h4>Committed customer service</h4>
              <p>
                If you find you aren't happy with your work, we'll still help
                you; we don't hide away from any issues because we know just how
                important our Exam Revision Service is to you. We therefore have
                an Aftercare Team who are dedicated to solving any problems,
                helping you to make sure you get the most out of your order. We
                aim to respond quickly to all messages, and we keep in constant
                contact with our writers so that you know what's happening at
                every stage of your order.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="service-include">
        <Container>
          <h2>How to use our Exam Revision service</h2>
          <p>
            After the order has been written and checked over, you’ll be able to
            download your work. It’s then time for you to begin revising! We
            have a page entirely dedicated to Exam Tips and Techniques and you
            should use our work as a guide to help you.
          </p>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Read through the work</Accordion.Header>
              <Accordion.Body>
                Firstly, learn the key terms and definitions we’ve given you.
                Knowing and – more importantly – showing you understand key
                terminology can be an easy way to get marks, and they are often
                very short and simple to remember. Test yourself on these by
                having a list of definitions to learn.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Create a structure</Accordion.Header>
              <Accordion.Body>
                Use our exam revision to create a structure for what you’re
                going to write and make notes for things to talk about. Practice
                writing your own answer under mock exam conditions: we recommend
                timing yourself in a quiet room, ideally at a desk, in a place
                where you won’t be interrupted. It’s important to ensure you are
                not simply re-writing your notes over and over: instead, test
                yourself to see what you’ve learned from your revision. Making
                flashcards for yourself or getting someone else to ask you
                quick-fire questions can be really useful ways to do this!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Exam day</Accordion.Header>
              <Accordion.Body>
                Eventually, exam day will come around. When the exam starts,
                take a few deep breaths before turning over your paper to help
                you keep calm. It’s a great idea to spend at least five or ten
                minutes writing a plan for how you’re going to answer the
                question you have been set; this is something that you can plan
                before you even enter the exam hall if you have a seen exam!{" "}
                <br /> <br />
                Lastly, don’t panic and plan something fun to do after your exam
                – you deserve it!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <section>
        <FairUsePolicy />
      </section>

      <section>
        <ReviewsComponent />
      </section>

      <section id="related-service">
        <Container>
          <h2 className="text-center">Related services</h2>
          <p className="text-center my-3">
            We can help you no matter what level you’re writing for. Many of our
            writers hold master's degrees or higher, so we can help regardless
            of whether you are studying for an undergraduate or postgraduate
            assignment! We have a variety of other services that you can use.
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
                <img
                  src="/assets/student-group.webp"
                  alt=""
                  className="w-100"
                />
                <h4 className="text-center py-4">Assignment Writing</h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img src="/assets/writing-1.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">Dissertation Writing</h4>
              </div>
            </Col>
          </Row>
          <p className="text-center">
            View our <a href="#">full service portfolio</a>
          </p>
        </Container>
      </section>
    </main>
  );
};

export default ExamService;
