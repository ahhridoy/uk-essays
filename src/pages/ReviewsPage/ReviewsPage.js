import React from "react";
import { Button, Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import "../../styles/pages/_reviews-page.scss";

const ReviewsPage = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="reviews-page-top">
        <Container>
          <h2 className="heading text-light text-center">
            UKEssays.com Reviews
          </h2>
          <p className="sub-text text-light text-center">
            After placing an order for any of our{" "}
            <a href="#">writing services</a>, our customers are invited to leave
            a review of both the overall service they <br /> received at UK
            Essays and the product they received. We value our customers'
            feedback a great deal, and use it to constantly <br />
            improve and enhance our services.
          </p>

          <div className="rate-review-box bg-black text-center">
            <a href="#" className="rate-review">
              <img
                src="/assets/reviewsio-logo-white.webp"
                alt="logo"
                className="reviewspage-review-logo"
              />{" "}
              <br />
              <span className="text-center">
                <AiFillStar className="text-warning fs-4" />
                <AiFillStar className="text-warning fs-4" />
                <AiFillStar className="text-warning fs-4" />
                <AiFillStar className="text-warning fs-4" />
                <BsStarHalf className="text-warning fs-4" />
              </span>
              <div>
                <h5 className="text-light text-center">
                  Rated 4.4 / 5 • 1755 Reviews
                </h5>
              </div>
            </a>
          </div>
        </Container>
      </section>

      <section id="professional-services">
        <Container>
          <h2 className="text-center">Our Professional Services</h2>
          <p className="text-center">
            UKEssays have a wide range of academic writing and marking services
            to help you get the most from your studies.
          </p>
          <div className="text-center">
            <Button variant="danger">View Our Services</Button>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ReviewsPage;
