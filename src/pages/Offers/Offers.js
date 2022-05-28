import React from "react";
import { Accordion, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Press from "../../components/Press/Press";
import "../../styles/pages/_offers.scss";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import {
  AiOutlinePlusCircle,
  AiOutlineReddit,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Offers = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <section id="top-section">
        <Container>
          <div className="text-center text-light">
            <h2>Special offers & discount codes</h2>
            <p>
              On this page you can find all the current discounts and offers
              available at UKEssays.com. Whenever we have promotional codes{" "}
              <br />
              available, you can find them here, as well as any long-term
              discounts we have on offer.
            </p>
            <Link to="/services">
              <Button variant="danger" className="mx-2">
                View our services
              </Button>
            </Link>
            <Button variant="light">Check prices</Button>
          </div>
        </Container>
      </section>

      <section id="signup-subscribe">
        <Container>
          <div className="d-flex justify-content-center align-items-center">
            <h3>
              {" "}
              <FaTelegramPlane /> Sign up for our latest offers
            </h3>
            <input type="email" placeholder="Email address" />
            <Button variant="primary">Subscribe</Button>
          </div>
          <div className="offers-accordion">
            <Accordion defaultActiveKey="">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h6 className="text-primary">
                    <AiOutlinePlusCircle className="me-2" />
                    By submitting your details you consent to their use in
                    accordance with our Privacy Policy
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <h5>Marketing Permissions</h5>
                  You can unsubscribe at any time by clicking the link in the
                  footer of our emails. For information about our privacy
                  practices, please visit our privacy policy. We use Mailchimp
                  as our marketing platform. By clicking subscribe, you
                  acknowledge that your information will be transferred to
                  Mailchimp for processing. Learn more about Mailchimp's privacy
                  practices here.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      </section>

      <section id="current-offers">
        <Container>
          <h2 className="text-center my-3">Current offers</h2>
          <div className="text-center">
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
          <div className="d-flex my-4 py-4 border rounded">
            <div>
              <img src="/assets/offers-titles.png" alt="" />
            </div>
            <div className="mx-4">
              <h5>
                <span className="text-warning">Free </span>Standard Dissertation
                Titles
              </h5>
              <p>
                <b>Get 3 standard dissertation titles for free!</b> Although a
                simple task, we understand how hard it can be to choose the
                perfect title, especially for a piece of work as important as
                your dissertation. <br /> <br />
                For a limited time only, we are offering 3 titles from our
                standard title service at no cost to you! <br /> <br />
                Ordering your free titles <br />
                To get your free titles, use the order button at the bottom of
                this window and{" "}
                <b>select the Service Type: 'Standard - Title Only'</b>
                along with your selections.
              </p>
              <p>
                Terms & Conditions: <br />
                This promotion is valid for one order of three Standard Titles
                per person. This offer excludes Elite orders. Cannot be used in
                conjunction with other promotional codes. Free orders are not
                eligible for free amendments; however you may purchase paid
                upgrades or amendments. If you do not go on to place a paid
                order your free titles may become eligible for publishing.{" "}
                <a href="#">See our terms and conditions for more details.</a>
              </p>
              <Button variant="success">Place your order now ></Button>
            </div>
          </div>
          <div className="d-flex my-4 py-4 border rounded">
            <div>
              <img src="/assets/offers-refer.png" alt="" />
            </div>
            <div className="mx-4">
              <h5>
                <span className="text-warning">Up to 15% off </span>Refer a
                friend
              </h5>
              <p>
                <b>
                  Get up to 15% discount for yourself and 10% discount for every
                  friend you recommend to UKEssays.com.
                </b>{" "}
                <br /> Although a Simply refer a brand-new customer who hasn’t
                placed an order with us before, and your friend will receive 10%
                off their first order! <br /> <br />
                After paying for your order, or inside your control panel,
                you'll find your unique refer a friend link.
                <br /> <br />
                For every friend that uses your recommendation link, they will
                get 10% off their first order. When their order begins, we’ll
                then automatically reward you with a discount. <br /> <br />
                For every friend who starts an order, you get a discount, and
                even better – the more friends you refer, the greater the
                discount you can earn for yourself! <br /> <br />
                Refer 1-5 friends and you get a 10% discount on your next order
                for every friend you recommend up to friend number 5. <br />{" "}
                <br />
                Refer 6-10 friends and once you recommend your 6th friend, your
                discount will increase to 12% for every friend you recommend up
                to friend number 10.
                <br /> <br />
                Refer more than 10 friends, once you recommend your 11th friend,
                your discount will increase to 15% for every friend you
                recommend!
              </p>
              <Button variant="success">Start order></Button>{" "}
              <Link to="/login">Log in</Link>
              <p className="my-3">Terms & Conditions</p>
              <ol>
                <li>
                  If you have placed an order with us before, you should use the
                  same email address as you used when placing your order to
                  generate your recommendation link
                </li>
                <li>
                  A successful referral counts as a brand new customer placing
                  an order after using your referral link.
                </li>
                <li>
                  A “brand new” customer is someone who has never placed an
                  order with UK Essays or its sister services (also referred to
                  as All Answers Ltd)
                </li>
                <li>
                  Existing customers will not count as a successful referral.
                </li>
                <li>
                  Failure to use the referral link or modifying the referral
                  link may result in the referral not being counted.
                </li>
                <li>
                  Your discount will be automatically generated and sent to you
                  when your friend's order is assigned to a writer.
                </li>
                <li>
                  The refer a friend discount is discretionary and can be
                  refused at any time.
                </li>
              </ol>
            </div>
          </div>
          <div className="d-flex my-4 py-4 border rounded">
            <div>
              <img src="/assets/offers-refs.webp" alt="" />
            </div>
            <div className="mx-4">
              <h5>
                <span className="text-warning">Free </span>Bibliography &
                References
              </h5>
              <p>
                <b>
                  All word counts on orders are exclusive of bibliography and
                  references
                </b>{" "}
                <br /> We believe that the bibliographies and references quoted
                in your work shouldn't be part of your word count - so they are
                now exclusive of your word count! This means you get even more
                terrific content to use with every order.
                <br /> <br />
                <b>
                  So, if you order 1,000 words - you will receive work of at
                  least 1,000 words.
                </b>{" "}
                <br /> <br />
                And don't forget you'll get the bibliography and reference
                section thrown in for free! <br /> <br />
                That's right, you're not just getting a custom written essay,
                dissertation or assignment... with your order you get a complete
                package of goodies - all for no additional cost!
              </p>
              <ul>
                <li>
                  Free referencing style - choose from a variety of popular
                  referencing styles.
                </li>
                <li>
                  Free quality check and report - giving you total peace of mind
                  that the work you receive meets the standard you specified on
                  your order.
                </li>
                <li>
                  Free plagiarism scan and report - genuine proof that your
                  researcher has created this piece of work *just* for you and
                  hasn't plagiarised someone else's work.
                </li>
                <li>
                  Free amendments - total satisfaction with your order - get
                  seven days in which to request any free-of-charge changes you
                  want made to your work.
                </li>
                <li>
                  Free help finding sources - support even after you've received
                  your work - if you can't find a journal or a source used by
                  your researcher, let us know and we'll help you find it.
                </li>
              </ul>
              <Button variant="success">Place your order now ></Button>
            </div>
          </div>
          <div className="d-flex my-4 py-4 border rounded">
            <div>
              <img src="/assets/offers-long.webp" alt="" />
            </div>
            <div className="mx-4">
              <h5>
                <span className="text-warning">10% off </span>Long Delivery
                Orders
              </h5>
              <p>
                Allow us longer to complete your order and in return, you'll
                receive a discount of up to 10%! Now available on all products
                (excluding Marking orders and all Personal and Professional
                Services) on orders of any word length, a long delivery discount
                will be automatically applied as follows:
              </p>
              <ul>
                <li>
                  When choosing a 14 day delivery, a 5% discount is applied
                </li>
                <li>
                  When choosing a 21 day delivery, a 7% discount is applied
                </li>
                <li>
                  When choosing a 28 day delivery, a 10% discount is applied
                </li>
              </ul>
              <Button variant="success">Place your order now ></Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="expired-offers">
        <Container>
          <h2 className="text-center my-3">Expired offers</h2>
          <div className="text-box">
            <h4>
              <span className="text-warning">Cyber Monday! </span>Up to 15% off
              all Writing Services
            </h4>
          </div>
          <div className="text-box">
            <h4>
              <span className="text-warning">Black Friday! </span>Up to 15% off
              all Writing Services
            </h4>
          </div>
          <div className="text-center my-5">
            <Link to="/services">
              <Button variant="danger" className="mx-3">
                View services
              </Button>
            </Link>
            <Button variant="success">Order now</Button>
          </div>
        </Container>
      </section>
      <section>
        <Press />
      </section>
    </main>
  );
};

export default Offers;
