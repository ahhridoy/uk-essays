import React from "react";
import { Button, Container } from "react-bootstrap";

const EssayToday = () => {
  return (
    <main id="essay-today">
      <Container className="py-5 text-light text-center">
        <h2>Order an Essay Today!</h2>
        <p>
          We have over 500 expert essay writers, ready and waiting to help you
          achieve academic success
        </p>
        <Button variant="dark" className="mx-4">
          Order an Essay
        </Button>
        <Button variant="light">Check Prices</Button>
      </Container>
    </main>
  );
};

export default EssayToday;
