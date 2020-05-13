import React, { Component } from "react";
import NavigationBar from "../NavigationBar";
import { Container, ListGroup, Button, Nav } from "react-bootstrap";
import { profile } from "../Profile/profile";
const axios = require("axios").default;

class ManageProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    let currentComponent = this;
    axios
      .get(`http://127.0.0.1:8000/api/utilisateurs/`)
      .then(function (response) {
        console.log("rreussite");

        currentComponent.setState({
          users: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteAccount(idUtil) {
    axios.delete(`http://127.0.0.1:8000/api/users/${idUtil}/`);
  }

  displayAllUsers(userItem) {
    return (
      <ListGroup.Item>
        {userItem.nom + "  " + userItem.prenom}{" "}
        <div className="float-right">
          <Button variant="outline-success" size="sm">
            <a href={"/profile/" + userItem.idutil + "/"}>Voir profil</a>
          </Button>
          <Button
            onClick={() => this.deleteAccount(userItem.idutil)}
            variant="outline-danger"
            size="sm"
          >
            Supprimer
          </Button>
        </div>
      </ListGroup.Item>
    );
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <NavigationBar />
        <Container>
          <ListGroup variant="flush">
            {users.length > 0 ? (
              users.map((userItem) => {
                return this.displayAllUsers(userItem);
              })
            ) : (
              <p>test</p>
            )}
          </ListGroup>
        </Container>
      </div>
    );
  }
}



export default ManageProfiles;
