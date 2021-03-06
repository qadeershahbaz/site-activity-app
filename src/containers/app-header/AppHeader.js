import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import AppBreadcrumb from "../../components/app-breadcrumb/AppBreadcrumb.component";
import {  AmplifySignOut } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";


const AppHeader = () => {
  const onBreadcrumbItemClick = () => {};

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        style={{ background: "darkblue" }}
      >
        <Container style={{ textAlign: "center" }}>
          <Link to='/'><Navbar.Brand>Site Activity</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <AmplifySignOut
                 // style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar
        expand="lg"
        fixed="top"
        style={{ top: "56px", background: "cornflowerblue", zIndex: 1029 }}
      >
        <Container style={{ color: "white" }}>
          <AppBreadcrumb onBreadcrumbItemClick={onBreadcrumbItemClick} />
        </Container>
      </Navbar>
    </>
  );
};

export default AppHeader;
