import React from "react";
import PartnerRecordForm from "../../../components/app-form/PartnerRecordForm";

const AddPartnerRecord = (props) => {
  const handleSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      <PartnerRecordForm handleFormSubmit={handleSubmit} />
    </>
  );
};

export default AddPartnerRecord;
