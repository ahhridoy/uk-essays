import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const ReviewRating = () => {
  return (
    <main id="reviews">
      <Container className="py-5">
        <Row className="review-rating">
          <Col md={6} xs={12} className="text-start">
            <h2>Customer Reviews</h2>
            <p className="fs-3">Overall rating</p>
            <h1 className="rating">
              4.4
              <span className="rating5"> / 5</span>
            </h1>
            <span>
              <AiFillStar className="text-warning" />
              <AiFillStar className="text-warning" />
              <AiFillStar className="text-warning" />
              <AiFillStar className="text-warning" />
              <BsStarHalf className="text-warning" />
                <span className="number-of-reviews">1755 reviews</span>
            </span>

            <p>
              All reviews are supplied by verified UK Essays customers via the
              trusted and independent online review site, Reviews.io.
            </p>
          </Col>
          <Col md={6} xs={12} className="text-start review-section">
            <img src="/assets/reviewsio-logo.webp" alt="logo" /> <br />
            <span>
              <AiFillStar className="text-warning" />
              <AiFillStar className="text-warning" />
              <AiFillStar className="text-warning" />
              <AiFillStar className="text-warning" />
              <AiFillStar className="text-warning" />
                <span className="number-of-reviews">Reviewed on 12/12/2019</span>
            </span> <br /> <br />
            <strong>
              “I would highly recommend this service as it is an excellent
              service that assists students of different levels in their
              thinking and analysis of their work. the service is delivered to a
              high quality and everyone is keen to help and go the extra mile.”
            </strong>
            <p className="mt-3">Yasmin D</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ReviewRating;
