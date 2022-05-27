// import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";

import React from "react";

const ModelAnswer = () => {
  return (
    <Accordion
      defaultActiveKey="0"
      className="custom-accordion"
      data-aos="fade-up"
    >
      <Accordion.Item eventKey="0" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">
          Avoiding The Temptations Of Plagiarism
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          As tempting as it may be to submit this model custom written essay,
          dissertation, or assignment as your own, this isn't how our service is
          designed to be used. To benefit from any of our model answer services,
          you should take the model answer we provide as a basis for your own
          further research, and build on the knowledge within it to create your
          own, 100% original work. <br /> <br />
          We're passionate about education and we want you to get the most from
          your university education. Condoning plagiarism of the original model
          answer we provide would do a disservice to you, as it may prevent you
          from acquiring the knowledge you need when it comes to the module's
          examinations.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">
          How Should I Use The Model Answer?
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          Our model answer service gives students an example of how a specific
          question can be tackled. It may not be the only way the question could
          be approached, and indeed, you may form an entirely different view to
          the researcher, but the model answer will provide you with a strong
          starting point from which to conduct your own research and write your
          own work. On a step-by-step basis, the correct way to use our model
          answer is as follows:
          <ul>
            <li>
              Read through the entire model answer so that you completely
              understand how the question has been answered.
            </li>
            <li>
              Re-read each section or paragraph within the model answer and make
              notes.
            </li>
            <li>
              Try to develop your own ideas and arguments from the notes you
              have taken.
            </li>
            <li>
              The next step is to locate the sources the researcher has used
              within the model answer and review them.
            </li>
            <li>
              Use these sources to help further your research by locating more
              relevant material.
            </li>
            <li>
              Read through all the information you have gathered and make
              further notes on what you want to include in your own work.
            </li>
            <li>
              Use the model answer that our researcher has created as a guide to
              producing your own work. For example, learn from the structure
              used, the range and quantity of sources used and the level of
              critical analysis applied within the work.
            </li>
            <li>
              Ensure that your final piece of work is 100% original and has been
              formulated using your own ideas and perspective.
            </li>
          </ul>
          This will take a bit more effort than simply submitting the model
          answer as your own work, but it does mean that you'll learn the topic
          thoroughly and will be prepared for your examinations.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">
          Can I Submit The Model Answer To My University
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <strong>No</strong> - handing in the work of a researcher is
          plagiarism because you are passing off someone else's words as your
          own. Even if you did make minor alterations to the researcher's work,
          this would still be considered plagiarism; the work you submit to your
          university should be entirely your own. The custom research we provide
          will be of far greater benefit to you if you use it in accordance with
          this Fair Use Policy. You'll improve your grade, learn how to write a
          great piece of work and feel a great sense of satisfaction for having
          done a good job.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ModelAnswer;
