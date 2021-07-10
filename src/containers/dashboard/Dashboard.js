import React from "react";
import AppCard from "../../components/app-card/AppCard";
import {Link} from 'react-router-dom'

let cards = [
  {
    title: "Partners",
    url:'/partners',
    src:process.env.PUBLIC_URL+'/partners.jpg'
  },
  {
    title: "Activities",
    url:'/activity',
    src:process.env.PUBLIC_URL+'/checklist.png'
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
