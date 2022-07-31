import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ConfidenceService from "../../components/ConfidenceSerivce/ConfidenceService";
import FairUsePolicy from "../../components/FairUsePolicy/FairUsePolicy";
import Press from "../../components/Press/Press";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import { AiOutlineBars, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsVolumeMute } from "react-icons/bs";
import { BiText } from "react-icons/bi";
import { FiUsers, FiBookOpen, FiMonitor } from "react-icons/fi";
import { RiArrowRightUpFill, RiFileTextLine } from "react-icons/ri";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoReorderFourSharp } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import data from "../../data.json";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const AcademicService = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <ServicesHero service={data.services[13]} />

      <WhyChoose whyChoose={data.whyChoose[9]} />

      <section id="academic-phone-order">
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
                      In the first step, select the type of work that you need,
                      and your requirements for it – including the size of the
                      poster, the amount of words, the grade you are aiming for
                      and the date you need it by. Be sure to include enough
                      time to make the poster yourself! <br /> <br />
                      Simply head to our <a href="#">online order form</a> to
                      get started with your UKEssays order and follow the
                      directions given.
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
                      We then need to know about the subject you are studying
                      and the content that you want in the poster. We'll ask you
                      some specific questions about the type of poster you need
                      and exactly what purpose it should fulfil. The more
                      information that you give us, the better your poster will
                      be! You can also add any files or marking criteria that
                      you think will be useful for your project.
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
                      Once the work has been completed, we then check your work
                      for quality. Our in-house Quality Control Team will
                      examine every aspect of the poster, making sure it follows
                      your instructions and meets the grade you have asked for.
                      Once completed, your order can be downloaded from your
                      online account.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="what-you-get">
        <Container>
          <h3>What you get</h3>
          <p>
            Posters seem to be an increasing trend in assessment within UK
            universities! We see more and more of these every day, and with
            different types and styles of poster required, we want to make sure
            you are 100% happy with your poster order. <br /> <br />
            We get orders through for two main types of posters on a regular
            basis: academic or vocational. An academic poster may be a lot like
            an essay or a proposal, except it would be supplemented by a
            presentation where you explain the detail of the subject. A
            vocational poster is one that tends to be related to your particular
            work or practice, and it's usually targeted at customers, patients
            or service users. <br /> <br />
            Our standard poster service offers a range of different size options
            - from A1 to A4 - each including an approximate amount of written
            words and the incorporation of graphics such as tables, diagrams and
            images. Every poster order is different, and our writers will always
            ensure they follow your specific instructions. These guidelines
            exist to help give an idea of what can reasonably be expected for
            our standard prices. If you have different and specific
            requirements, please let us know when placing your order and we can
            tailor your order to be a perfect model answer for your needs.
          </p>
          <ul>
            With each size of poster available, we offer a standard number of
            words and graphics designed to meet standard poster specifications.
            If you require something different, place your order and we’ll
            review your request in full! Depending on the size you select,
            you’ll receive as standard:
            <li>
              A4: Vocational Poster, comes with approx. 50-100 words and 3-6
              graphics (tables/diagrams/images)
            </li>
            <li>
              A3: Academic Poster, comes with 300-500 words and 1-3 graphics
              (tables/diagrams/images)
            </li>
            <li>
              A2: Academic Poster, comes with 700-1000 words and 3-5 graphics
              (tables/diagrams/images)
            </li>
            <li>
              A1: Academic Poster, comes with 1300-2000 words and 4-8 graphics
              (tables/diagrams/images)
            </li>
          </ul>
          <h3>Academic posters</h3>
          <p>
            Traditional academic posters are the most common type of poster
            assignment. Often used to support accompanying work such as a
            dissertation or presentation, academic posters require you to convey
            detailed academic information about your topic, usually to people
            with some knowledge and experience.
          </p>
          <p>When completing an academic poster, our writers will:</p>
          <div>
            <div className="d-flex my-4">
              <div className="me-5">
                <BiText className="text-primary fs-2" />
              </div>
              <div>
                <h4>Balance the visual with the text</h4>
                <p>
                  The point of a poster is to be able to summarise the key ideas
                  succinctly in a clear and easy-to-understand format. However,
                  as it is a visual medium, it does also need to be
                  eye-catching!
                </p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="me-5">
                <FiUsers className="text-primary fs-2" />
              </div>
              <div>
                <h4>Consider the audience</h4>
                <p>
                  The way you approach constructing a poster will be different
                  depending on whether it's geared toward fellow students,
                  tutors, an academic research group or a layman.
                </p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="me-5">
                <RiArrowRightUpFill className="text-primary fs-2" />
              </div>
              <div>
                <h4>
                  Present information in graphical format wherever relevant
                </h4>
                <p>
                  Again, as the poster is a highly visual medium, we make use of
                  graphs, charts, diagrams and images wherever possible to
                  illustrate the points you're making in the text.
                </p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="me-5">
                <FiBookOpen className="text-primary fs-2" />
              </div>
              <div>
                <h4>
                  Make sure the poster has a very clear structure and reading
                  order
                </h4>
                <p>
                  People looking at a poster will make a very quick snap
                  judgement about whether or not they want to continue looking.
                  One way to make sure your reader stays with you is to have a
                  very clear layout and reading order.
                </p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="me-5">
                <RiFileTextLine className="text-primary fs-2" />
              </div>
              <div>
                <h4>Colour and formatting are important</h4>
                <p>
                  In order for a poster to catch the reader's attention, it's a
                  good idea to make use of colour. The colours used won't be too
                  overpowering, as they may distract from the text or even make
                  it difficult to read.
                </p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="me-5">
                <FiMonitor className="text-primary fs-2" />
              </div>
              <div>
                <h4>Bear in mind that posters are made to be presented</h4>
                <p>
                  Academic posters are, in 99% of cases, accompanied by a
                  subsequent presentation. As such, we are able to provide
                  accompanying speech notes if you need help with this element,
                  too. These notes will be written as they would be spoken,
                  offering additional insights on the information the poster
                  shows and helping you to refine your presentation skills.
                </p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="me-5">
                <AiOutlineBars className="text-primary fs-2" />
              </div>
              <div>
                <h4>Make sure a reference list is included</h4>
                <p>
                  Every poster we produce comes with a full reference list,
                  giving you everything you need to explore the topic in more
                  depth, conduct further reading, and identify key sources.
                </p>
              </div>
            </div>
          </div>
          <h3>Vocational posters</h3>
          <p>
            In some hands-on disciplines, such as nursing or social work,
            assignments for posters will be less academic and more informative.
            Sometimes these are geared towards fellow professionals, sometimes
            towards a service user or patient group. Either way, they do not
            usually have references or an academic tone; instead, these posters
            usually promote an action, intervention or philosophy, and will
            often contain step-by-step guides or boxes of information.
          </p>
          <p>For a vocational poster, our writers will:</p>
          <div>
            <div className="d-flex my-4">
              <div className="me-5">
                <HiOutlinePhotograph className="text-primary fs-2" />
              </div>
              <div>
                <h4>Include lots of images</h4>
                <p>
                  This kind of poster tends to have a stronger focus on the
                  visual, as it's even more important that the poster is
                  eye-catching.
                </p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="me-5">
                <IoReorderFourSharp className="text-primary fs-2" />
              </div>
              <div>
                <h4>Adapt your writing style</h4>
                <p>
                  For a vocational poster, you're not expected to write in an
                  essay style. Instead, you're likely to be trying to explain a
                  concept or a process to someone who has very little knowledge
                  about it, or who needs to learn more. We'll use simple
                  language, snappier and simpler sentences, and shorter
                  paragraphs than we would for an academic assignment.
                </p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="me-5">
                <FiUsers className="text-primary fs-2" />
              </div>
              <div>
                <h4>Consider the audience</h4>
                <p>
                  Again, a lot of a poster's design and content will depend very
                  much on the audience it is intended for. The main difference
                  with this kind of poster is that, in theory, you'll be
                  designing a poster for people who are not obliged to look at
                  it, and so making the poster attractive, concise and clear is
                  important.
                </p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="me-5">
                <BsVolumeMute className="text-primary fs-2" />
              </div>
              <div>
                <h4>Avoid casual use of jargon</h4>
                <p>
                  While a vocational poster may need to include some technical
                  jargon, it will need to be very clearly defined for the
                  reader. We advise against using jargon in a casual manner
                  while writing.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="service-correctly">
        <Container>
          <h2 className="text-center">How to use the service correctly</h2>
          <p className="text-center text-secondary fs-5">
            Using the model poster correctly is key to achieving academic
            success
          </p>
          <p>
            Our Poster Service will help you to develop your own poster for your
            assessment. When you order with us, we'll show you how to create a
            poster that's packed with information and attractively arranged to
            grab the attention of your audience. <br /> <br />
            We want you to get the most out of your education, and our Poster
            Service is the perfect way to help you gain the knowledge you need
            to get the grades you want. When you receive your poster, we suggest
            that you read through it carefully so that you understand its
            composition and the content that we've included. Re-read each
            section, making notes as you go along, and develop your own
            arguments and ideas by learning from our example. <br /> <br />
            Our order will include up-to-date and relevant sources, and we
            recommend that you check these out to further your research. Once
            you've learned everything you can, use the poster that our writer
            has created as a guide to making your own, learning from the
            structure, sources and layout. Our Fair Use Policy will give you
            some more insight into how our Poster Service should be used.
          </p>
        </Container>
      </section>

      <section>
        <FairUsePolicy />
      </section>

      <section>
        <ReviewsComponent />
      </section>

      <section>
        <ConfidenceService />
      </section>

      <section id="academic-frequently-asked-question">
        <Container>
          <h2 className="text-center my-5">Frequently asked questions</h2>
          <Row>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-4">
                  <AiOutlineQuestionCircle className="text-danger fs-5" />
                </div>
                <div>
                  <h5>Why do people use academic poster services?</h5>
                  <p>
                    There are many reasons why you might want to use our Poster
                    Service, and if you've never used one before, you might be
                    nervous! Our Live Chat Support Team are happy to help with
                    any questions that you might have, and you can also check
                    out the frequently asked questions in our{" "}
                    <a href="#">Help Centre</a>.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-4">
                  <AiOutlineQuestionCircle className="text-danger fs-5" />
                </div>
                <div>
                  <h4>Can I submit the writer's work as my own?</h4>
                  <p>
                    The work we create for you is to be used as a guide to help
                    you complete your own work. You need to submit your own
                    poster, and you cannot copy any of our content in your own
                    work. Our service aims to show you what you need to do to
                    get the grade you want, and you can look at the structure
                    and references we've used to help you do this. You can learn
                    more about how to use your order in our{" "}
                    <a href="#">Fair Use Policy</a>.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-4">
                  <AiOutlineQuestionCircle className="text-danger fs-5" />
                </div>
                <div>
                  <h4>When does the delivery period start?</h4>
                  <p>
                    The delivery period starts once we've found a writer and
                    have received a payment of at least 50% of the order cost.
                    It typically takes between 24 and 48 hours to find a writer,
                    although every order is different, so be sure to choose a
                    delivery date that gives you enough time to re-write your
                    work! We always keep you updated whilst we're looking for a
                    writer, so you're kept informed every step of the way.
                    Additionally, we might sometimes ask for a little more
                    information before we begin looking for a writer in order to
                    make sure the right person is assigned to your work.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex">
                <div className="me-4">
                  <AiOutlineQuestionCircle className="text-danger fs-5" />
                </div>
                <div>
                  <h4>Is your service confidential?</h4>
                  <p>
                    Our service is fully confidential, and any files that you
                    send us are anonymised before sending them on to your
                    writer. We are fully compliant with the Data Protection Act
                    2018, and we ensure our Privacy Policy is kept in-line with
                    the latest privacy regulations. We don't keep your files any
                    longer than necessary, and we never sell your data to any
                    third parties.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="academic-related-service">
        <Container>
          <h2 className="text-center">Related services</h2>
          <p className="text-center my-3">
            We offer a huge assortment of services because there are so many
            types of assignments! We can help with any degree type or level, and
            we can work to any delivery date or word length. <br /> <br />
            Sometimes, posters are required as part of research or a
            dissertation. Our writers are highly experienced in writing these
            longer pieces of academic work, so check out our Dissertation
            Writing Service! <br /> <br />
            If you have other pieces of work to complete during your degree, we
            can put you on course for writing one of your best essays yet. We'll
            take your instructions and provide you with a high-quality paper,
            showing you the structure, references and content that will be
            expected of you in order to get the grades you want!
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
                <img src="/assets/writing-1.webp" alt="" className="w-100" />
                <h4 className="text-center py-4">
                  Dissertation Writing Service
                </h4>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="shadow">
                <img
                  src="/assets/highlighting-1.webp"
                  alt=""
                  className="w-100"
                />
                <h4 className="text-center py-4">
                  Powerpoint Presentation Service
                </h4>
              </div>
            </Col>
          </Row>
          <p className="text-center mt-5">
            View our <a href="#">full service portfolio.</a>
          </p>
        </Container>
      </section>

      <section>
        <Press />
      </section>
    </main>
  );
};

export default AcademicService;
