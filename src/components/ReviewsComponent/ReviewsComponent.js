import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const ReviewsComponent = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("fakeReviews.json").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <main id="reviews-component">
      <Container>
        <h2 className="text-center">Don’t just take our word for it!</h2>
        <p className="text-center">
          We've served over 25,000 customers since we started trading in 2003.
          The reviews below are all from the independently verified and <br />
          trusted Reviews.io website - a leading online reviews platform.
        </p>
        <div className="text-center my-4">
          <img src="/assets/reviewsio-logo.webp" alt="" />
        </div>
        <Row>
          {reviews.map((review) => (
            <Col key={review.id} md={4} xs={12}>
              <div className="bg-light p-3 m-2 rounded">
                <span>{review.rating}</span>
                <p>{review.description}</p>
                <p>{review.author}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button variant="warning">View more reviews</Button>
        </div>
      </Container>
    </main>
  );
};

export default ReviewsComponent;
