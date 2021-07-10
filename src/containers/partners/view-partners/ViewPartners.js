import React, { useEffect, useState } from "react";
import AppList from "../../../components/app-list/AppList";
import { API } from "aws-amplify";
import { listPartners } from "../../../graphql/queries";
import { ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const ViewPartners = () => {
  const [partners, setPartners] = useState([]);
  useEffect(async () => {
    fetchPartners();
  }, []);

  async function fetchPartners() {
    const apiData = await API.graphql({ query: listPartners });
    console.log(apiData.data.listPartners.items);

    setPartners(apiData.data.listPartners.items);
  }

  return (
    <>

    <AppList>
      {partners.map(({ id, name }) => (
        <Link to={{pathname: `/partners/partner-records/${name}`,state:{id}}} >
          {" "}
          <ListGroupItem>{name}</ListGroupItem>
        </Link>
      ))}
    </AppList>
    </>
  );
};

export default ViewPartners;
