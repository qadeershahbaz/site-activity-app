import React from "react";
import AppCard from "../../components/app-card/AppCard";
import {Link} from 'react-router-dom'

let cards = [
  {
    title: "Partners",
    url:'/partners',
    src:process.env.PUBLIC_URL+'/hands.jpg'
  },
  {
    title: "Activities",
    url:'/activity',
    src:process.env.PUBLIC_URL+'/invoice.png'
  },
];

const Dashboard = () => {
  return (
    <>
      {cards.map((i) => (
       <Link to={i.url} key={i.title}> <AppCard {...i} /></Link>
      ))}
    </>
  );
};

export default Dashboard;
