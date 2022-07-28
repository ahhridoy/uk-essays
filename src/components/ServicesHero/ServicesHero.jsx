import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineReddit,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillStar,
  AiOutlineFileDone,
  AiFillHeart,
} from "react-icons/ai";
import {
  BsTwitter,
  BsPencil,
  BsStarHalf,
  BsWhatsapp,
  BsFillChatLeftFill,
  BsCurrencyPound,
} from "react-icons/bs";
import { MdDownloadDone, MdOutlineWatchLater } from "react-icons/md";
import { BiPhoneCall, BiLockAlt } from "react-icons/bi";
import "./_services-hero.scss";

const ServicesHero = ({ service }) => {
  const {
    name,
    sub_name,
    social,
    title,
    description,
    description2,
    price,
    reviews,
    offers,
    difference,
  } = service;
  // console.log(service);
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="service-hero">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="text-light">
                <h2 className="my-2">{name}</h2>
                {social && (
                  <div className="text-light my-3">
                    <span>Share this: </span>
                    <span className="bg-primary p-1 text-light me-2">
                      {social.facebook} <FaFacebookF />{" "}
                    </span>
                    <span className="bg-info p-1 text-light me-2">
                      {social.twitter} <BsTwitter />{" "}
                    </span>
                    <span className="bg-danger p-1 text-light me-2">
                      {social.reddit} <AiOutlineReddit />{" "}
                    </span>
                    <span className="bg-info p-1 text-light me-2">
                      {social.linkedin} <AiFillLinkedin />{" "}
                    </span>
                    <span className="bg-success p-1 text-light me-2">
                      {social.whatsapp} <AiOutlineWhatsApp />{" "}
                    </span>
                  </div>
                )}
                {sub_name && <h4 className="text-success my-2">{sub_name}</h4>}
                {title && <p className="fs-5">{title}</p>}
                <p className="fs-5">{description}</p>
                {description2 && <p className="fs-5">{description2}</p>}

                {reviews && (
                  <div className="bg-black p-3 my-2">
                    <h4>See for yourself</h4>
                    <h3>
                      <span className="text-success">Samples</span> of our work
                    </h3>
                    <p>
                      We have a number of sample essays to illustrate the
                      quality of our services. Each sample has been written to a
                      specific academic grade.
                    </p>
                    <Button variant="success" className="mx-2">
                      Samples of our work
                    </Button>
                    <Button variant="success">Samples of essays</Button>
                  </div>
                )}
              </div>
            </Col>

            <Col md={4} xs={12}>
              <div className="bg-light p-4 text-center rounded">
                {price && (
                  <>
                    <i>Prices from</i>
                    <h1 className="price">
                      <BsCurrencyPound className="price-icon" /> {price}
                    </h1>
                    <p>Undergraduate 2:2 • 1000 words • 7 day delivery</p>
                    <img src="/assets/trusted-site.svg" alt="" /> <br />
                    <Button variant="success" className="w-100 my-2">
                      <strong>Order</strong> an essay
                    </Button>
                  </>
                )}
                <p>Delivered on-time or your money back</p>
                <Button variant="primary" className="w-100 my-2">
                  Request a <strong>call back </strong> <BiPhoneCall />
                </Button>
                <br />
                <Button variant="success" className="w-100 my-2">
                  Message us on <strong>WhatsApp </strong> <BsWhatsapp />
                </Button>
                <br />
                <Button variant="primary" className="w-100 my-2">
                  Start a <strong>live chat </strong> <BsFillChatLeftFill />
                </Button>
              </div>
              {reviews && (
                <div className="essay-reviewsio text-center mt-3">
                  <img
                    src="/assets/reviewsio-logo-white.webp"
                    alt="logo"
                    className="essay-reviewsio-logo"
                  />{" "}
                  <br />
                  <span>
                    <AiFillStar className="text-warning fs-4" />
                    <AiFillStar className="text-warning fs-4" />
                    <AiFillStar className="text-warning fs-4" />
                    <AiFillStar className="text-warning fs-4" />
                    <BsStarHalf className="text-warning fs-5" />
                    <span className="text-warning ms-2 fs-5">
                      ({reviews} Reviews)
                    </span>
                  </span>
                </div>
              )}
            </Col>
          </Row>

          {offers && (
            <Row className="mt-5">
              <Col md={3} xs={6}>
                <div className="text-light">
                  <p>
                    {" "}
                    <BsPencil className="me-2 text-danger" /> Written to
                    Standard
                  </p>
                </div>
              </Col>
              <Col md={3} xs={6}>
                <div className="text-light d-flex">
                  <p>
                    {" "}
                    <MdDownloadDone className="me-2 text-danger" />{" "}
                    Plagiarism-free
                  </p>
                </div>
              </Col>
              <Col md={3} xs={6}>
                <div className="text-light d-flex">
                  <p>
                    {" "}
                    <MdOutlineWatchLater className="me-2 text-danger" /> Always
                    on Time
                  </p>
                </div>
              </Col>
              <Col md={3} xs={6}>
                <div className="text-light d-flex">
                  <p>
                    {" "}
                    <AiOutlineFileDone className="me-2 text-danger" />{" "}
                    Unrivalled Quality
                  </p>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      {difference && (
        <section id="assignment-difference">
          <Container>
            <Row>
              <h2 className="text-center text-light mb-4">
                The UKEssays Difference
              </h2>
              <div className="text-box">
                <div className="text-light">
                  <p>
                    <BsPencil className="me-2 text-danger" /> Written by
                    Academic Experts
                  </p>
                  <p>
                    <BiLockAlt className="me-2 text-warning" /> Trusted, Secure
                    & Confidential
                  </p>
                </div>

                <div className="text-light">
                  <p>
                    <MdDownloadDone className="me-2 text-success" /> Guaranteed
                    Plagiarism-free
                  </p>
                  <p>
                    <AiFillHeart className="me-2 text-danger" /> Exceptional
                    Customer Service
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </section>
      )}
    </main>
  );
};

export default ServicesHero;
