import React from "react";
import { Button, Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import ReferenceLibrary from "../../components/ReferenceLibrary/ReferenceLibrary";
import "../../styles/pages/_resources-page.scss";

const ResourcesPage = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="resources-top">
        <Container>
          <h2 className="heading text-light text-center">
            Free Academic Resources
          </h2>
          <p className="sub-text text-light text-center">
            Looking for some help with your studies? We've put together a huge
            range of amazing learning tools and resources – all for free! From
            easy-to-read essay samples to time-saving referencing generators,
            we've got exactly what you need to enhance your education today.
          </p>

          <a href="#" className="rate-review">
            <div className="d-flex justify-content-center align-items-center">
              <span>
                <AiFillStar className="fs-4" />
                <AiFillStar className="fs-4" />
                <AiFillStar className="fs-4" />
                <AiFillStar className="fs-4" />
                <BsStarHalf className="fs-4" />
              </span>
              <div>
                <h2>4.4</h2>
                <small>average</small>
              </div>
            </div>
            <div className="bg-light text-dark text-center px-2 my-2 rounded">
              <h3>1755</h3>
              <img
                src="/assets/reviewsio-logo.webp"
                alt="logo"
                className="services-reviewsio-logo"
              />
            </div>
          </a>
        </Container>
      </section>

      <section id="reference-library">
        <Container>
          <div className="shadow heading">
            <h2 className="text-center">What are you looking for?</h2>
          </div>
          <div className="accordion">
            <ReferenceLibrary />
          </div>
        </Container>
      </section>

      <section id="professional-writing-service">
        <Container>
          <h2 className="text-center">Professional Writing Services</h2>
          <p className="text-center fs-5">
            UKEssays also provide academic writing services for students of all
            levels.
          </p>
          <p className="text-center">
            Our professional writers can produce anything from undergraduate
            essays right through to PhD level work. To find out how UKEssays may
            be able to help you with your studies, take a look at our range of
            services:
          </p>
          <div className="text-center">
            <Button variant="primary">Full Service Portfolio</Button>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ResourcesPage;
