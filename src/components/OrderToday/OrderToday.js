import React from "react";
import { Button, Container } from "react-bootstrap";

const OrderToday = ({ card }) => {
  const { title, sub_title, btn } = card;
  return (
    <main id="essay-today">
      <Container className="py-5 text-light text-center">
        <h1>{title}</h1>
        <p>{sub_title}</p>
        <Button variant="dark" className="mx-4">
          {btn}
        </Button>
        <Button variant="light">Check Prices</Button>
      </Container>
    </main>
  );
};

export default OrderToday;
