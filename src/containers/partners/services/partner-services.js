import { API } from "aws-amplify";
import { getPartnerRecordsByPartnerId } from "../../../graphql/queries";

export async function fetchPartnerRecords(id,limit) {
    const apiData = await API.graphql({
      query: getPartnerRecordsByPartnerId,
      variables: { partnerId: id,limit},
    });

    return apiData
  }