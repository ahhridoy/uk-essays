import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ConfidenceService from "../../components/ConfidenceSerivce/ConfidenceService";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import PhoneOrder from "../../components/PhoneOrder/PhoneOrder";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const ReflectiveService = () => {
  return (
    <main>
      <section id="reflective-service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">Reflective Writing Services</h2>
                <div className="text-start">
                  <span>Share this: </span>
                  <span>Facebook </span>
                  <span>Twitter </span>
                  <span>Reddit </span>
                  <span>Linkedin </span>
                  <span>Whatsapp </span>
                </div>
                <h4 className="text-success my-2">
                  Get Help from the Experts in Academic Reflection
                </h4>
                <p className="fs-5">
                  Reflective Practice Assessments are becoming more common for
                  students at UK universities. These assignments are set to
                  encourage you to think critically about your experiences and
                  learning, and to consider steps towards self-improvement.
                  Reflective Writing can also help you in your professional
                  life, as you can use it to consider what you excel at, where
                  you might be lacking, and the skills you need to develop in
                  order to improve yourself. <br /> <br />
                  Writing a reflective essay can be challenging, because it’s
                  very different from the traditional essay format. It can be
                  tough if your course is typically assessed on practical exams,
                  or often based in a placement because you may not be familiar
                  with how to complete these assignments. Luckily, we’re here to
                  help with your reflective essay or assignment - our writers
                  have a huge amount of experience in writing personalised
                  reflections.
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

      <section>
        <PhoneOrder />
      </section>

      <section id="include-your-order">
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
            <div className="my-4">
              <h3>Outlining your experience</h3>
              <p>
                The first step is to describe the situation or experience that
                is going to be reflected on. What you are describing will likely
                be related to your course – for example, some reflective essays
                in nursing will require you to describe an experience relating
                to a patient or mentor. This experience can then be critically
                assessed using one of the many reflective cycles that are
                commonly used for this type of assignment.
              </p>
            </div>
            <div className="my-4">
              <h3>Reflective cycle</h3>
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
            <div className="my-4">
              <h3>Key skills gained</h3>
              <p>
                Our Reflective Essay Writing Service will show you how to
                structure and write your future reflection pieces, which will
                provide you with vital skills that will benefit you in your
                academic and professional career. If you are unsure about what
                this service can offer, you can see{" "}
                <a href="#">reflective essay examples</a> here, or see what our
                customers think by viewing some of our{" "}
                <a href="#">customer feedback.</a>
              </p>
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
          <h2 className="text-center">Frequently asked questions</h2>
          <Row>
            <Col md={6} xs={12}>
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
