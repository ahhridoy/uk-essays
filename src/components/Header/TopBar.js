import React from "react";
import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <main >
      <Navbar fixed="top" id="topbar">
        <Container className="content">
          <Link to="/" className="logo-name">
            <img src="/assets/ukessays-logo.png" alt="logo" className="logo" />
            <div className="site-name">
              <h3 className="heading text-light">
                UK<span>ESSAYS</span>
              </h3>
              <p className="sub-text">
                TRUSTED BY STUDENTS SINCE 2003
              </p>
            </div>
          </Link>
          <div className="router-links">
            <Link to="/offers">Offers</Link>
            <Link to="/support">Support</Link>
            <Link to="/Notifications">Notifications</Link>
            <Link to="/signin">Sign In</Link>
            <Form className="search-form">
              <Button variant="outline-warning">Search</Button>
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
