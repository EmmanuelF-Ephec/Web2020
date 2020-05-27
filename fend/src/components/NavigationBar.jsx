import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavItem } from "react-bootstrap";

const Styles = styled.div`
  .navbar {
    background-color: #1f532f;
  }

  .navbar-nav .nav-link {
    color: white;

    &:hover {
      color: #ffdf23;
    }
  }
`;

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("user");
  };

  render() {
    return (
      <Styles>
        <Navbar expand="xl">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Navbar.Brand href="home">
                <img
                  src="../media/mcdonalds.jpg"
                  className="image-responsive"
                />
              </Navbar.Brand>
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
            <Nav>
              {" "}
              {this.props.user.is_staff ? (
                <Nav.Item>
                  <Nav.Link href="/ManageProfiles">Manage profiles</Nav.Link>
                </Nav.Item>
              ) : (
                ""
              )}
              <Nav.Item>
                <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/" onClick={this.logout}>
                  Log out
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
  };
};

export default connect(mapStateToProps)(NavigationBar);
