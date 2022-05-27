import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Press from "../../components/Press/Press";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";

const AboutUK = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="who-uk-essay">
        <Container>
          <h2 className="text-center">Who are UK Essays?</h2>
          <p className="text-center">
            As innovators in the field, we consistently develop our services to
            ensure that we <br /> provide you, our customers, with the best
            possible help to help you achieve the grade <br /> that you deserve.
          </p>
        </Container>
      </section>

      <section id="how-started">
        <Container className="text-light">
          <Row>
            <Col md={6} xs={12}>
              <h2>How We Started</h2>
              <p>
                Barclay Littlewood founded the company in 2003. From Day One he
                instilled an aim to strive for excellence in the company.
                Barclay created many of the service features and introduced the
                list of unrivalled guarantees that have placed us firmly at the
                helm of the essay writing services market.
              </p>
              <h2>Our Writers</h2>
              <p>
                We use over 500 experts, each thoroughly vetted by our in-house
                quality team. This means that we can assign the most suitable
                expert with the right qualifications and experience to write you
                the best possible essay. All of our experts have obtained at
                least a 2:1 degree and have displayed a consistent ability to
                write to a 2:1 or first-class standard.
              </p>
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex border my-2">
                <div>icon</div>
                <div>
                  <h3>Contact</h3>
                  <p>Get in touch with sales enquiries or support questions</p>
                </div>
              </div>
              <div className="d-flex border my-2">
                <div>icon</div>
                <div>
                  <h3>Press</h3>
                  <p>News, company info, and media resources</p>
                </div>
              </div>
              <div className="d-flex border my-2">
                <div>icon</div>
                <div>
                  <h3>Testimonials</h3>
                  <p>See what our customers say about us</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="customers-count">
        <Container className="text-center">
          <Row>
            <Col md={4} xs={6}>
              <h2 className="text-danger">75,000+</h2>
              <p>Customers</p>
            </Col>
            <Col md={4} xs={6}>
              <h2 className="text-danger">1.8bn+</h2>
              <p>Words Written</p>
            </Col>
            <Col md={4} xs={6}>
              <h2 className="text-danger">500+</h2>
              <p>Active Writers</p>
            </Col>
          </Row>
        </Container>
        <hr />
      </section>

      <section id="history">
        <Container>
          <h2 className="mb-5">The History of UK Essays</h2>
          <div className="d-flex">
            <div>
              <h4>2003</h4>
            </div>
            <div className="border-start ms-4 ps-4">
              <p>
                July - <a href="#">Barclay Littlewood</a> started a small
                website offering help to students who were studying
                undergraduate law. He solely managed the website and also wrote
                the model essays himself (Barclay is a qualified lawyer). <br />{" "}
                <br />
                November - <strong>Company was formed</strong> Barclay founded a
                company called Academic Answers and employed a small team who
                were tasked with developing the website and to also begin to
                recruit talented, qualified writers in a broad range of academic
                subjects -{" "}
                <a href="#">See our company’s registration details.</a>
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <h4>2004</h4>
            </div>
            <div className="border-start ms-4 ps-4">
              <p>
                April -{" "}
                <strong>We developed our own unique piece of software</strong>{" "}
                We employed a team of programmers to start building our own
                unique software that works efficiently alongside our in-house
                team to take in, manage and allocate the orders to the most
                appropriate writer. This system is constantly being developed
                and has now become one of our biggest assets.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <h4>2009</h4>
            </div>
            <div className="border-start ms-4 ps-4">
              <p>
                March -{" "}
                <strong>
                  Academic Answers' name is changed to All Answers
                </strong>{" "}
                The company’s name was changed to reflect the future vision we
                have for the company more accurately. The ‘all’ now encompasses
                the ability to answer any writing question. <br /> <br />
                July - <strong>Tony became our CEO</strong> Tony took over from
                Barclay as our CEO. His role is to carry on with the aim to
                deliver excellence. Barclay took on the role of business and
                personal development consultant. <br /> <br />
                December - <strong>We completed our 10,000th order</strong> We
                reached our 10,000th order! Thank you to all our customers for
                helping us to reach this amazing goal. Onwards and upwards to
                20,000 orders!
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <h4>2010</h4>
            </div>
            <div className="border-start ms-4 ps-4">
              <p>
                March -{" "}
                <strong>
                  We moved to larger offices in Arnold Nottingham.
                </strong>{" "}
                With the fast growth of our company we needed to move to a
                bigger office. With the extra space we have now opened our doors
                to welcome students to come and visit us. We would love to meet
                you and you can make an appointment to{" "}
                <a href="#">visit us here</a>. <br /> <br />
                May -{" "}
                <strong>
                  We introduce new marking and proofreading services
                </strong>{" "}
                We introduced a new service that allows students to have their
                essays, dissertations and assignments marked and critiqued by a
                university professor. This service has grown into an invaluable
                tool for students to find any errors or weak areas in their work
                before it’s handed in. <a href="#">Find out more</a> about this
                service.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <h4>2012</h4>
            </div>
            <div className="border-start ms-4 ps-4">
              <p>
                May - <strong>We were featured on BBC Radio </strong> Mark
                Dennison from BBC Radio Nottingham interviewed our quality
                manager about the ethics of using an essay writing service.{" "}
                <br /> <br />
                July -{" "}
                <strong>
                  We introduced multiple currencies on our order form
                </strong>{" "}
                We can now take payment in UK pounds, US and Australian dollars
                and Euros. We also take orders that will be written for each
                country's specific educational system. <br /> <br />
                November -{" "}
                <strong>
                  PowerPoint, report and reflective practice writing services
                  added.
                </strong>
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <h4>2014</h4>
            </div>
            <div className="border-start ms-4 ps-4">
              <p>
                February - <strong>A one tier marking service</strong> which
                took our 3 different product levels and combined them into one.
                October - <strong>We reached our 85,000th order!</strong> Thank
                you to all our customers for helping us to reach this amazing
                goal. Onwards and upwards to 100,000 orders!
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <h4>2015</h4>
            </div>
            <div className="border-start ms-4 ps-4">
              <p>
                April - <strong>Exam revision service</strong> which offers
                students help with revision was added to our services. Find out
                more about our exam revision service <a href="#">here</a>.{" "}
                <br /> <br />
                November - <strong>
                  We were featured in a BBC programme
                </strong>{" "}
                discussing essay writing services. Throughout the programme it
                was confirmed we delivered on all our guarantees.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <h4>2016</h4>
            </div>
            <div className="border-start ms-4 ps-4">
              <p>
                June - <strong>We launched a world first:</strong> a free
                marking service, allowing all students to get a free mark on
                their essay.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <h4>2017</h4>
            </div>
            <div className="border-start ms-4 ps-4">
              <p>
                February -{" "}
                <strong>We hit a big milestone: 125,000 orders!</strong> To all
                the students we’ve helped over the years – thank you for
                choosing UK Essays. October -{" "}
                <strong>Our new order form launches:</strong> We launched a
                brand new, revamped order form, with a form personalised to each
                product, making it even easier for customers to send through all
                the information we need to do a fantastic job.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <h4>2018</h4>
            </div>
            <div className="border-start ms-4 ps-4">
              <p>
                April -{" "}
                <strong>The new EU regulation - GDPR - came into force</strong>,
                so we improved our security and <a href="#">privacy options.</a>{" "}
                <br /> <br />
                July - <strong>We began our partnership with</strong>{" "}
                <a href="#">Reviews.co.uk</a>, who gather fully verified reviews
                for all our customers to see! <br /> <br />
                August - <strong>We overhauled our</strong>{" "}
                <a href="#">Dissertation Title service</a>, with two options
                available. <br /> <br />
                September -{" "}
                <strong>A huge update to our order form was released</strong>,
                bringing loads of great new features to make using it even
                easier. <br /> <br />
                November –{" "}
                <strong>
                  We launched a new product for students looking for
                </strong>{" "}
                <a href="#">help creating a Poster</a>.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <h4>2019</h4>
            </div>
            <div className="border-start ms-4 ps-4">
              <p>
                February -{" "}
                <strong>
                  International Baccalaureate grades are now available
                </strong>{" "}
                to select on <a href="#">our order form.</a> <br /> <br />
                October – <strong>
                  We launched a new Case Study Service:
                </strong>{" "}
                you can now request help with <a href="#">Case Studies</a>,
                ideal for students in business, nursing, education, marketing,
                and many more subject areas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <ServicesComponent />
      </section>

      <section>
        <Press />
      </section>
    </main>
  );
};

export default AboutUK;
