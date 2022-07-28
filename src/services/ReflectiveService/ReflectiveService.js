import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ConfidenceService from "../../components/ConfidenceSerivce/ConfidenceService";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import { BsPencil } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import data from "../../data.json";

const ReflectiveService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <ServicesHero service={data.services[4]} />

      <section id="reflective-why-choose">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div>
                <h2>Why choose our reflective practice writing service?</h2>
                <p>
                  The best way to use our reflective essay writing service is to
                  use your order to develop the skills and knowledge that you
                  will need to create your own assessment. <br /> <br />
                  After your work has been written and checked over by our
                  Quality Control Team, it’s time for you to begin writing your
                  own reflective piece, using your order to help you. We’ve
                  given you everything you need to describe your experiences,
                  apply your chosen reflective cycle and critically evaluate
                  your skills. <br /> <br />
                  Our service works best if you read through the work we have
                  sent you a few times, making notes as you go about the style
                  and structure of your order, the types of sources that have
                  been cited, and any thoughts you might have about how you can
                  learn from your experiences in the same way. These notes can
                  then be used to write your work, and if you’re struggling to
                  write your Reflection, our Aftercare Team are always on hand
                  to help.
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

      <section id="reflective-essay-today">
        <Container className="py-5 text-light text-center">
          <h2>Order a Reflective Essay Today!</h2>
          <p>
            We have over 500 expert essay writers, ready and waiting to help you
            achieve academic success
          </p>
          <Button variant="dark" className="mx-4">
            Order a Reflective Essay
          </Button>
          <Button variant="light">Check Prices</Button>
        </Container>
      </section>

      <section id="reflective-phone-order">
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
                    <h4>Start your Reflective Practice order</h4>
                    <p>
                      In the first section of our order form, we ask for a few
                      details: the grade you want, the length of the work, when
                      you want it delivered, and the subject you are studying.
                      Be sure to give yourself enough time to re-write your own
                      reflective practice essay! We also ask for a few details
                      so that we can contact you. Your data is stored securely
                      and is never sold on to anyone. You can read about how
                      this information is used in our Privacy Policy, which is
                      in-line with the Data Protection Act 2018 and the European
                      General Data Protection Regulations (GDPR).
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
                      Next, we want to know more about the specifics of your
                      order. It’s important that you put as much detail as you
                      can here so that your writer knows exactly what you expect
                      from them. We will need to know the requirements for the
                      reflection, what experience it’s based on, and whether you
                      have a specific reflective cycle that you need to use. If
                      you’re struggling to fill in the details, don’t worry –
                      our Customer Support Team are happy to help you, and we
                      even have a Live Chat Support Team on hand throughout the
                      day!
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
                      After these details have been gathered, a confirmation
                      email will be sent to you and our Customer Support Team
                      will get in touch to confirm the details of your order.
                      The sooner you make a payment, the sooner we will be able
                      to find you a writer. You can pay by credit/debit card,
                      make a bank transfer, or use WeChat Pay or Alipay.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="danger">
              <strong>Place an Order</strong> today!
            </Button>
          </div>
        </Container>
      </section>

      <section id="how-to-use">
        <Container>
          <h2>What's Included with your order</h2>
          <p className="mb-5">
            Each course has different expectations and requirements for
            reflective assignments. Some may ask you to reflect on a practical
            experience you had, while others might ask you to reflect on how you
            found the process of writing your dissertation. When ordering with
            us, we make sure that your reflective practice assessment follows
            your exact instructions. However, a typical reflective order will
            include the following steps:
          </p>
          <div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <MdDone className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Outlining your experience</strong>
                </h3>
                <p>
                  The first step is to describe the situation or experience that
                  is going to be reflected on. What you are describing will
                  likely be related to your course – for example, some
                  reflective essays in nursing will require you to describe an
                  experience relating to a patient or mentor. This experience
                  can then be critically assessed using one of the many
                  reflective cycles that are commonly used for this type of
                  assignment.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <FiBookOpen className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Reflective cycle</strong>
                </h3>
                <p>
                  There are dozens of reflective cycles, and it can be confusing
                  to know which one to use and how to properly apply it to your
                  experience. A reflective cycle will give structure to your
                  reflections and show you which points you need to focus on. We
                  can match you to the reflective cycle that will best suit your
                  course and assessment needs, and show you how it is applied in
                  practice, helping you to get the grade that you want! <br />{" "}
                  <br />
                  Some of the most common models of reflection we asked to work
                  with are: Gibbs, Kolbe, John's, Rolfe, and Schön.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex">
              <div className="me-4">
                <BsPencil className="fs-3 text-primary" />
              </div>
              <div>
                <h3>
                  <strong>Key skills gained</strong>
                </h3>
                <p>
                  Our Reflective Essay Writing Service will show you how to
                  structure and write your future reflection pieces, which will
                  provide you with vital skills that will benefit you in your
                  academic and professional career. If you are unsure about what
                  this service can offer, you can see{" "}
                  <a href="#">reflective essay examples</a> here, or see what
                  our customers think by viewing some of our{" "}
                  <a href="#">customer feedback</a>.
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

      <section>
        <FairUsePolicy />
      </section>

      <section id="how-service-work">
        <Container>
          <h2>How our service works</h2>
          <p>
            Once you’ve started the process of buying a reflective essay, our
            Customer Experience Team will check your requirements and ask you if
            there is any further information that we might need. We’ll begin
            finding a writer and will only ask them to begin work when we’re
            100% confident they can meet your expectations. Before being able to
            work for us, all our writers must demonstrate a high standard of
            English spelling and grammar, and the ability to write critical,
            focused and informative pieces of work. You can read more about our
            process of hiring writers here. <br /> <br />
            Once written, your work is passed to our Quality Care Team. We check
            every single piece of work. As well as grammar and spelling, we
            study the structure, the quality of the references, and the level of
            analysis in the work. Alongside a quality report, each piece of work
            also comes with a plagiarism report for your peace of mind – for
            free! <br /> <br />
            We then send you your work so that you can get started with writing
            your own reflective assignment in accordance with our Fair Use
            Policy. If you need any support at this stage, we are on hand to
            address any issues you might have with your order. Our dedicated
            Aftercare team are academically trained and always happy to help.
          </p>
          <h4 className="text-success my-3">Our writers</h4>
          <p>
            Even before they start writing for our company, our writers undergo
            rigorous tests to ensure their quality and they are constantly being
            reviewed to ensure they can deliver for you every time.
          </p>
          <h4 className="text-success my-3">Our staff</h4>
          <p>
            Our Quality Control and Aftercare Teams are all experienced in
            academia and come from a wide range of subjects. No matter what you
            study, we will have an expert in your subject that will understand
            your requirements, concerns, and knows what it takes for you to get
            the grade you need!
          </p>
          <h4 className="text-success my-3">Your aftercare</h4>
          <p>
            Even after we completed your Reflective Practice order, we’re here
            for you. We have a dedicated team of staff who can help you with any
            requests for changes or corrections to your order. If you have any
            questions or need any extra work completing on your order, don’t
            hesitate to get in touch.
          </p>
        </Container>
      </section>

      <section id="reflective-essay-today">
        <Container className="py-5 text-light text-center">
          <h2>Order a Reflective Today!</h2>
          <p>
            We have over 500 expert essay writers, ready and waiting to help you
            achieve academic success
          </p>
          <Button variant="dark" className="mx-4">
            Order a Reflective Essay
          </Button>
          <Button variant="light">Check Prices</Button>
        </Container>
      </section>

      <section>
        <ReviewsComponent />
      </section>

      <section>
        <ConfidenceService />
      </section>

      <section id="frequently-questions">
        <Container>
          <h2 className="text-center mb-5">Frequently asked questions</h2>
          <Row>
            <Col md={6} xs={12}>
              <AiOutlineQuestionCircle className="text-danger fs-2" />
              <h4>Is your service safe to use?</h4>
              <p>
                We’re committed to your privacy, and so any personal details
                that you send us are kept 100% confidential. We never sell your
                information to any other organisation, and we are always up to
                date with the most recent data protection legislation. For more
                information, see our Privacy Policy. <br /> <br />
                We also have our own dedicated tech team who work to make sure
                that your data is safe and secure. Your personal data is always
                encrypted, and our infrastructure is provided by Amazon Web
                Services (AWS), who lead the industry in reliable, accountable
                and robust security management systems.
              </p>
            </Col>
            <Col md={6} xs={12}>
              <AiOutlineQuestionCircle className="text-danger fs-2" />
              <h4>Why is a reflective piece of work so different?</h4>
              <p>
                Reflective pieces are very different to the standard essay
                format because instead of focusing on a specific question, they
                ask you to think about your own skills and life experiences.
                They’re tough because there’s no right or wrong answer: your
                grades come from how much you have reflected on your
                experiences, learned from them, and determined how you can apply
                those lessons in order to improve. <br /> <br />
                Many placement-based degrees will require frequent Reflection
                Essays. These help you to further your leadership, organisation,
                time management, communication and teamwork skills. The
                knowledge that you can gain from our service will help to
                improve your confidence in discussing your skills, understanding
                your strengths and weaknesses, and in explaining what you have
                learned from your experiences. Reflective Practice skills can
                benefit you outside of your academic life too, as you will be
                required to write about your skills and expertise for job
                applications and during a career.
              </p>
            </Col>
            <Col md={6} xs={12}>
              <AiOutlineQuestionCircle className="text-danger fs-2" />
              <h4>How can you reflect on my personal experiences?</h4>
              <p>
                When you <a href="#">place your order</a>, you will have the
                opportunity to provide information about your experience or
                placement. It’s best if you give us plenty of information about
                your experience, as well as your feelings, thoughts and
                processes. We can ask our writer to fabricate this, but then it
                won't be personal to you!
              </p>
            </Col>
          </Row>
          <p>
            Get more information in our <a href="#">support section</a>{" "}
          </p>
        </Container>
      </section>

      <section id="reflective-essay-today">
        <Container className="py-5 text-light text-center">
          <h2>Order a Reflective Paper Today!</h2>
          <p>
            We have over 500 expert essay writers, ready and waiting to help you
            achieve academic success
          </p>
          <Button variant="dark" className="mx-4">
            Order a Reflective Paper
          </Button>
          <Button variant="light">Check Prices</Button>
        </Container>
      </section>

      <section id="related-service">
        <Container>
          <h2 className="text-center">Related services</h2>
          <p className="text-center my-3 mb-5">
            If you've already written your reflective piece, we offer a Marking
            Service, where one of our qualified professionals will proofread
            your work and give you personalised feedback to help you reach your
            desired grade. <br /> <br />
            If you have any other assignments to complete, we can help with
            those too! We have a huge range of writing services, including our
            Essay Writing and Report Writing Service. Alternatively, if your
            course often uses exams as a form of assessment, we even do an Exam
            Revision Service! <br /> <br />
            Many courses also require you to write a dissertation in the final
            year. We offer a variety of dissertation services and can work with
            you on a chapter-by chapter basis or help you to write your full
            dissertation - whichever is most convenient for you! We also have a
            dedicated service for Literature Reviews, which can either stand
            alone or form part of a larger dissertation or piece of research.
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
          <p className="text-center my-5">
            View our <a href="#">full service portfolio</a>
          </p>
        </Container>
      </section>
    </main>
  );
};

export default ReflectiveService;
