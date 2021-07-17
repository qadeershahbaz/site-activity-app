import React, { useEffect, useState } from "react";
import PartnerRecordForm from "../../../components/app-form/PartnerRecordForm";
import { createPartnerRecords } from "../../../graphql/mutations";
import { API } from "aws-amplify";
import { useHistory, useParams } from "react-router-dom";
import { fetchPartnerRecords } from "../services/partner-services";
import moment from "moment";

const AddPartnerRecord = (props) => {
  const [previousRecord, setPreviousRecord] = useState({});
  const history = useHistory();
  const {
    location: {
      state: { id },
    },
  } = history;

  const params = useParams();
  const { partnerId } = params;

  useEffect(async () => {
    let apiData = await fetchPartnerRecords(id, 1);
    let partnerRecord = apiData?.data?.getPartnerRecordsByPartnerId.items[0];
    console.log(partnerRecord)
    const { balance = 0, entryDate = moment("2001-01-01") } =
      partnerRecord || {};
    let _previousRecord = {
      previousBalance:balance,
      entryDate,
    };
    setPreviousRecord(_previousRecord);
  }, []);

  const handleSubmit = async (data) => {
    const {
       entryDate,
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
      history.push({ pathname: `/partners/${partnerId}`, state: { id } });
    }
  };

  return (
    <>
      <PartnerRecordForm
        handleFormSubmit={handleSubmit}
        previousRecord={previousRecord}
      />
    </>
  );
};

export default AddPartnerRecord;
