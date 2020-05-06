import React, { Component } from "react";
import { NavigationBar } from "../NavigationBar";
import { ListGroup, Button, Nav, Container } from "react-bootstrap";
const axios = require("axios").default;

class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      lastName: null,
      firstName: null,
      email: null,
      password: null,
      accountType: null,
    };
  }

  componentDidMount() {
    let currentComponent = this;
    if (this.props.match) {
      const { id } = this.props.match.params;
      axios
        .get(`http://127.0.0.1:8000/api/utilisateurs/${id}/`)
        .then(function (response) {
          console.log("reussite");
          console.log(response);
          currentComponent.setState({
            lastName: response.data.nom,
            firstName: response.data.prenom,
            email: response.data.mail,
            password: response.data.mdp,
            accountType: response.data.typecompte,
          });
          console.log(currentComponent.state);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }
  render() {
    const { lastName, firstName, email, password, accountType } = this.state;
    return (
      <div>
        <NavigationBar />
        <Container>
          <ListGroup variant="flush">
            <ListGroup.Item>Nom: {lastName}</ListGroup.Item>
            <ListGroup.Item>Prenom: {firstName} </ListGroup.Item>
            <ListGroup.Item>Address e-Mail: {email}</ListGroup.Item>
            <ListGroup.Item>Mot de passe: {password}</ListGroup.Item>
            <ListGroup.Item>Type de personnel: {accountType}</ListGroup.Item>
          </ListGroup>
          <Button variant="outline-success">
            <Nav.Link href="/profile/modifyProfile">
              Modifier vos données
            </Nav.Link>
          </Button>
        </Container>
      </div>
    );
  }
}
export default profile;
