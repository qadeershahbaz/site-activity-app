import React from "react";
import { Container, Navbar } from "react-bootstrap";
import AppHeader from "../app-header/AppHeader";
import {useLocation} from 'react-router-dom'

import "./app-container.styles.scss";

const AppContainer = (props) => {
  const { children } = props;
  const {pathname}=useLocation()
  console.log(pathname)

  return (
    <>
      <AppHeader />
      <div style={{ marginTop: "130px" }}>
        <Container style={{ marginBottom: "80px" }}>{children}</Container>
      </div>
    </>
  );
};

export default AppContainer;
