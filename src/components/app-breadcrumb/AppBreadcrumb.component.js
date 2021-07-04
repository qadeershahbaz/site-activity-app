import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "./app-breadcrumb.styles.scss";
import { Link, useLocation } from "react-router-dom";

const AppBreadcrumb = (props) => {
  const { pathname } = useLocation();
  const crumbs = pathname.split("/").slice(1);


  const getPath=(index)=>{
    if(index==crumbs.length-1){
        return pathname
    }
    else{
      return `/${crumbs[index]}`;
    }
  }
  return (
    <Breadcrumb>
      {crumbs.map((i, index) => {
        return (
          <Breadcrumb.Item key={i}>
            <Link to={getPath(index)}>
              {" "}
              {i.toUpperCase()}
            </Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
