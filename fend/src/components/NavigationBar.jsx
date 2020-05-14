import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import {connect} from 'react-redux'

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-nav .nav-link {
    color: grey;

    &:hover {
      color: white;
    }
  }
`;

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
            <Nav>
              {" "}
              {this.props.user.is_staff == 1 ?
              <Nav.Item>
                <Nav.Link href="/ManageProfiles">Manage profiles</Nav.Link>
              </Nav.Item>
              : ""
              }
              <Nav.Item>
                <Nav.Link href="/profile/6">Profile</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.userReducer
  }
}


export default connect(mapStateToProps)(NavigationBar);