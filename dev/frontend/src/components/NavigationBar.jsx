import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #27742d;
  }

  .navbar-nav .nav-link {
    color: white;

    &:hover {
      color: black;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="xl">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/home">Accueil</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/announcements">Annonces</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/timeTables">Horaires</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
