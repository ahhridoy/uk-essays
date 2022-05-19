import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ReviewRating = () => {
  return (
    <main id="reviews">
      <Container className="py-5">
        <Row className="review-rating">
          <Col md={6} xs={12} className="text-start">
            <h2>Customer Reviews</h2>
            <p>Overall rating</p>
            <h1 className="rating">
              4.4
              <span className="rating5"> / 5</span>
            </h1>

            <p>1721 Reviews</p>
            <p>
              All reviews are supplied by verified UK Essays customers via the
              trusted and independent online review site, Reviews.io.
            </p>
          </Col>
          <Col md={6} xs={12} className="text-start review-section">
            <h1>Reviews.io</h1>
            <p>Reviewed on 12/12/2019</p>
            <p>1721 Reviews</p>
            <b>
              “I would highly recommend this service as it is an excellent
              service that assists students of different levels in their
              thinking and analysis of their work. the service is delivered to a
              high quality and everyone is keen to help and go the extra mile.”
            </b>
            <p>Yasmin D</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ReviewRating;
