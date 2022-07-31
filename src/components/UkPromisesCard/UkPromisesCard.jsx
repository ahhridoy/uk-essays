import React from "react";
import { Col } from "react-bootstrap";

const UkPromisesCard = ({ card, icon }) => {
  const { title, sub_title } = card;
  return (
    <Col md={3} xs={12} className="text-center">
      {icon}
      <h3>{title}</h3>
      <p>{sub_title}</p>
    </Col>
  );
};

export default UkPromisesCard;
