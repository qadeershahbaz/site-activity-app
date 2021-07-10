import React from "react";
import { Card } from "react-bootstrap";
import './app-card.styles.scss'

const AppCard = (props) => {
  const { title } = props;
  return (
    <Card >
      <Card.Body>{title}</Card.Body>
    </Card>
  );
};

export default AppCard;
