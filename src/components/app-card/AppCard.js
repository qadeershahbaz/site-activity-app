import React from "react";
import { Card } from "react-bootstrap";
import "./app-card.styles.scss";

const AppCard = (props) => {
  const { title,src } = props;
  return (
    <Card>
      <Card.Img variant="top" src={src} />
      <Card.Body>{title}</Card.Body>
    </Card>
  );
};

export default AppCard;
