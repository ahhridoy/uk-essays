import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdDone } from "react-icons/md";

const WhyChoose = () => {
  return (
    <section id="why-choose">
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <div>
              <h2>Why choose our Essay Writing Service?</h2>
              <p>
                Using an essay writing service is one of the best ways to
                improve your own academic writing skills and to do better at
                university. Whether you’re studying in the UK or abroad; at
                undergraduate, masters or a different level; returning to
                education after a long break or just struggling with a specific
                topic, we can help! <br /> <br />
                We think the best way to highlight the quality of our essay
                writing service is to show you our work – it speaks for itself!
                We’ve produced some fantastic samples that show you exactly the
                kind of work you’ll receive when ordering from us. Take a look
                at our <a href="#">sample essays</a>, prepared at undergraduate
                and master's level across a range of grades and subjects.
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
                professionals, we'll even give you a quality report to show our
                findings.
              </p>
              <hr />
              <p>
                <MdDone className="text-success fs-4 me-2" />
                Your order will come with a{" "}
                <strong>comprehensive plagiarism report</strong> which is
                compiled with our state-of-the-art plagiarism software, ensuring
                the work that is produced is not plagiarised.
              </p>
              <hr />
              <p>
                <MdDone className="text-success fs-4 me-2" />
                You get a <strong>7 day amendment period</strong>, so if you're
                not happy with the work, let us know and our customer support
                teams will resolve any concerns.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoose;
