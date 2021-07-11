import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import './record-container.styles.scss'


const RecordContainer = (props) => {
  const {
    entryDate,
    amountPaid,
    amountReceived,
    balance,
    previousBalance,
    totalAmount,
  } = props;
  return (
    <Container className="record-container">
      <Row>
        <Col xs={6}>
          <div>
            <div className="label"> Date</div>
            <div>{entryDate}</div>
          </div>
        </Col>
        <Col xs={{ span: 6 }}>
          {" "}
          <div>
            <div className="label">Amount Received</div>
            <div>{amountReceived}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          {" "}
          <div>
            <div className="label">Previous Balance</div>
            <div>{previousBalance}</div>
          </div>
        </Col>
        <Col xs={6}>
          {" "}
          <div>
            <div className="label">Total Amount</div>
            <div>{totalAmount}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          {" "}
          <div>
            <div className="label"> Amount Paid</div>
            <div>{amountPaid}</div>
          </div>
        </Col>
        <Col xs={6}>
          {" "}
          <div>
            <div className="label"> Balance</div>
            <div>{balance}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RecordContainer;
