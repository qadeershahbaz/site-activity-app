import React,{useEffect, useState} from "react";
import AppList from "../../components/app-list/AppList";
import { API } from "aws-amplify";
import { listPartners } from "../../graphql/queries";
import {ListGroupItem } from "react-bootstrap";


const Partners = () => {
    const [partners,setPartners]=useState([])
  useEffect(async () => {
   
    fetchPartners();
  }, []);

  async function fetchPartners() {
    const apiData = await API.graphql({ query: listPartners });
   
    setPartners(apiData.data.listPartners.items);
   
  }

  return <AppList>{partners.map((i)=><ListGroupItem>{i.name}</ListGroupItem>)}</AppList>;
};

export default Partners;
