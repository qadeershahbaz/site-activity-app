import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { withRouter, Link, useHistory, useParams } from "react-router-dom";

import { ListGroupItem } from "react-bootstrap";
import RecordContainer from "./RecordContainer";
import {fetchPartnerRecords} from '../services/partner-services'

const PartnerRecords = (props) => {
  const [partnerRecords, setPartnerRecords] = useState([]);
  const history = useHistory();
  const {
    location: {
      state: { id },
    },
  } = history;
  const params = useParams();
  const { partnerId } = params;

  useEffect(async() => {
   let apiData=await fetchPartnerRecords(id,10);
   setPartnerRecords(apiData?.data?.getPartnerRecordsByPartnerId.items || []);
  }, []);

 

  return (
    <div>
      {" "}
      <Link
        to={{
          pathname: `/partners/${partnerId}/add-partner-record`,
          state: { id },
        }}
      >
        <Button
          style={{ margin: "auto", display: "block", marginBottom: "4px" }}
        >
          Add Partner Record
        </Button>
      </Link>
      {partnerRecords.map((i) => (
        <ListGroupItem key={i.entryDate + Math.random()}>
          <RecordContainer {...i} />
        </ListGroupItem>
      ))}
    </div>
  );
};

export default withRouter(PartnerRecords);
