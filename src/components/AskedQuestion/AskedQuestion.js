import React from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";

const AskedQuestion = () => {
  return (
    <main id="asked-question">
      <Container>
        <h2 className="mb-4 text-center">Frequently asked questions</h2>
        <h4 className="text-center my-3">Search Support Articles</h4>
        <InputGroup className="mb-3">
          <FormControl placeholder="Enter a search term..." />
          <Button variant="primary">Search</Button>
        </InputGroup>
        <p className="text-center">
          *You can also <a href="£">browse our support documentation here ></a>
        </p>
      </Container>
    </main>
  );
};

export default AskedQuestion;
