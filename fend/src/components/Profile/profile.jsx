import React, { Component } from "react";
import NavigationBar from "../NavigationBar";
import { connect } from 'react-redux'
import { ListGroup, Button, Nav, Container } from "react-bootstrap";
const axios = require("axios").default;

class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
   
    
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <Container>
          <ListGroup variant="flush">
            <ListGroup.Item>Nom: {this.props.user.last_name}</ListGroup.Item>
            <ListGroup.Item>Prenom: {this.props.user.first_name} </ListGroup.Item>
            <ListGroup.Item>Address e-Mail: {this.props.user.email}</ListGroup.Item>
            <ListGroup.Item>Type de personnel: {this.props.user.is_staff
            ? "Manager"
            : " Employe"}</ListGroup.Item>
          </ListGroup>
          <Button variant="outline-success">
            <Nav.Link href={"/modifyProfile/"}>
              Modifier vos données
            </Nav.Link>
          </Button>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer
  }
}

export default connect(mapStateToProps)(profile);
