import React from "react";
import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { VscSignIn } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";

const TopBar = () => {
  return (
    <main>
      <Navbar fixed="top" id="topbar">
        <Container className="content">
          <Link to="/" className="logo-name">
            <img src="/assets/ukessays-logo.png" alt="logo" className="logo" />
            <div className="site-name">
              <h3 className="heading text-light">
                UK<span>ESSAYS</span>
              </h3>
              <p className="sub-text">TRUSTED BY STUDENTS SINCE 2003</p>
            </div>
          </Link>
          <div className="router-links">
            <Link to="/offers">
              <span className="text-danger">
                <AiOutlineHeart />
              </span>
              <p>Offers</p>
            </Link>
            <Link to="/support">
              <span>
                <HiOutlineQuestionMarkCircle />
              </span>
              <p>Offers</p>
            </Link>
            <Link to="/Notifications">
              <span>
                <MdOutlineNotificationsNone />
              </span>
              <p>Notifications</p>
            </Link>
            <Link to="/signin">
              <span>
                <VscSignIn />
              </span>
              <p>Sign In</p>
            </Link>
            <Form className="search-form">
              <Button variant="warning">
                <FiSearch />
              </Button>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </div>
        </Container>
      </Navbar>
    </main>
  );
};

export default TopBar;
