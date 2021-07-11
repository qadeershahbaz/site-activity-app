import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { withRouter, Link, useHistory, useParams } from "react-router-dom";
import { API } from "aws-amplify";
import { getPartnerRecordsByPartnerId } from "../../../graphql/queries";
import { ListGroupItem } from "react-bootstrap";
import RecordContainer from "./RecordContainer";

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

  useEffect(() => {
    fetchPartnerRecords();
  }, []);

  async function fetchPartnerRecords() {
    const apiData = await API.graphql({
      query: getPartnerRecordsByPartnerId,
      variables: { partnerId: id },
    });

    setPartnerRecords(apiData.data.getPartnerRecordsByPartnerId.items || []);
  }

  return (
    <div>
      {" "}
      <Link
        to={{
          pathname: `/partners/partner-records/${partnerId}/add-partner-record`,
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
        <ListGroupItem key={i.entryDate}>
         <RecordContainer {...i}/>
        </ListGroupItem>
      ))}
    </div>
  );
};

export default withRouter(PartnerRecords);
