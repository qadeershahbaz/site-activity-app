import React from "react";
import { Button } from "react-bootstrap";
import { withRouter, Link, useHistory, useParams } from "react-router-dom";

const PartnerRecords = (props) => {
  const history = useHistory();
  const {location:{state:{id}}}=history
  const params=useParams();
  const {partnerId}=params
  console.log(history,params)
  return (
    <div>
      {" "}
      <Link to={{pathname:`/partners/partner-records/:${partnerId}/add-partner-record`,state:{id}}}>
        <Button style={{ margin: "auto", display: "block" }}>
          Add Partner Record
        </Button>
      </Link>
    </div>
  );
};

export default withRouter(PartnerRecords);
