import React from "react";
import { Container } from "react-bootstrap";
import ModelAnswer from "../../components/ModelAnswer/ModelAnswer";

const FairUse = () => {
  return (
    <main>
      <section id="fair-use">
        <Container>
          <h2 className="text-light text-center">Our Fair Use Policy</h2>
          <p className="text-light text-center">
            We've been providing support to students, helping them make the most
            out of their academic studies, since 2003. The custom academic work
            that we provide is a powerful tool that will help to boost your
            coursework grades and examination results when used correctly.{" "}
            <br /> <br />
            Our Fair Use Policy outlines the way in which the work we provide
            should be used and gives you the necessary guidance to get the most
            out of your model answer.
          </p>
        </Container>
      </section>

      <section id="model-answer">
        <Container>
          <div className="shadow heading">
            <h2 className="text-center">The Ethics of Our Model Answer Services</h2>
          </div>
          <div className="accordion">
            <ModelAnswer />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default FairUse;
