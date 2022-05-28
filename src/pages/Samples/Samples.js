import React from "react";
import "../../styles/pages/_samples.scss";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineReddit,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { Button, Container } from "react-bootstrap";

const Samples = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="samples-top">
        <Container>
          <h2 className="text-center text-light mb-4">Samples of Our Work</h2>
          <div className="text-center text-light my-3">
            <span>Share this: </span>
            <span className="bg-primary p-1 text-light me-2">
              Facebook <FaFacebookF />{" "}
            </span>
            <span className="bg-info p-1 text-light me-2">
              Twitter <BsTwitter />{" "}
            </span>
            <span className="bg-danger p-1 text-light me-2">
              Reddit <AiOutlineReddit />{" "}
            </span>
            <span className="bg-info p-1 text-light me-2">
              Linkedin <AiFillLinkedin />{" "}
            </span>
            <span className="bg-success p-1 text-light me-2">
              WhatsApp <AiOutlineWhatsApp />{" "}
            </span>
          </div>
          <p className="text-center fs-5 text-light">
            At UK Essays, we're proud to showcase our quality and work. We've
            put together some sample academic papers, written by our <br />{" "}
            expert writers to show their skills and quality. Take a look at what
            we can produce with the following examples created at a range of{" "}
            <br /> levels in our most popular subjects.
          </p>
          <div className="text-center">
            <Button variant="danger">View our services</Button>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Samples;
