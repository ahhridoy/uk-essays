import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WhyChoose = () => {
  return (
    <main id="why-choose">
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
                at our sample essays, prepared at undergraduate and master's
                level across a range of grades and subjects.
              </p>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="text-box">
              <h4>Reasons to choose our service</h4>
              <p>
                {" "}
                We only allow our <b>qualified academic writers</b> with
                matching qualifications to take on your work.
              </p>
              <hr />
              <p>
                Your order will go through <b>rigorous quality controls</b> and
                is checked against your instructions and academic standards by
                qualified professionals, we'll even give you a quality report to
                show our findings.
              </p>
              <hr />
              <p>
                Your order will come with a{" "}
                <b>comprehensive plagiarism report</b> which is compiled with
                our state-of-the-art plagiarism software, ensuring the work that
                is produced is not plagiarised.
              </p>
              <hr />
              <p>
                You get a <b>7 day amendment period</b>, so if you're not happy
                with the work, let us know and our customer support teams will
                resolve any concerns.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default WhyChoose;
