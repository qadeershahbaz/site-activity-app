import React from "react";
import PartnerRecordForm from "../../../components/app-form/PartnerRecordForm";
import moment from "moment";
import { createPartnerRecords } from "../../../graphql/mutations";
import { API } from "aws-amplify";
import { useHistory, useParams } from "react-router-dom";

const AddPartnerRecord = (props) => {
  const history = useHistory();
  const {
    location: {
      state: { id },
    },
  } = history;

  const params = useParams();
  const { partnerId } = params;
  const handleSubmit = async (data) => {
    const {
      date: entryDate,
      amountReceived,
      previousBalance,
      totalAmount,
      amountPaidTo,
      balance,
      amountPaid,
    } = data;
    
    let postData = {
      entryDate,
      amountReceived,
      amountPaid,
      totalAmount,
      amountPaidTo,
      previousBalance,
      balance,
      partnerId: id,
    };

   
    let res = await API.graphql({
      query: createPartnerRecords,
      variables: { input: postData },
    });

    if (res) {
      history.push({pathname: `/partners/${partnerId}`,state:{id}});
    }
  };

  return (
    <>
      <PartnerRecordForm handleFormSubmit={handleSubmit} />
    </>
  );
};

export default AddPartnerRecord;
