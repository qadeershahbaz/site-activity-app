import React from "react";
import AppCard from "../../components/app-card/AppCard";
import {Link} from 'react-router-dom'

let cards = [
  {
    title: "Partners",
    url:'/partners'
  },
  {
    title: "Activities",
    url:'/activity'
  },
];

const Dashboard = () => {
  return (
    <>
      {cards.map((i) => (
       <Link to={i.url}> <AppCard {...i} /></Link>
      ))}
    </>
  );
};

export default Dashboard;
