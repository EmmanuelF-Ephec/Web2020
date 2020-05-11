import React, { Component } from "react";
import { NavigationBar } from "../NavigationBar";
import { Form, Button, Container } from "react-bootstrap";
const axios = require("axios").default;

class ModifyProfile extends Component {
  state = {
    password: null,
    oldPassword: null,
    firstPassword: null,
    secondPassword: null,
    formErrors: {
      oldPasswordMatch: "",
      newPasswordMatch: "",
      minimumPassword: "",
    },
  };

  componentDidMount() {
    let currentComponent = this;
    if (this.props.match) {
      const { id } = this.props.match.params;
      axios
        .get(`http://127.0.0.1:8000/api/utilisateurs/${id}/`)
        .then(function (response) {
          currentComponent.setState({
            password: response.data.mdp,
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let currentComponent = this;
    const { password, oldPassword, firstPassword, secondPassword } = this.state;

    let formErrors = this.state.formErrors;
    if (
      password != null &&
      oldPassword != null &&
      firstPassword != null &&
      secondPassword != null
    ) {
      formErrors.oldPasswordMatch =
        password == oldPassword
          ? ""
          : "Votre mot de passe doit correspondre avec votre ancien mot de passe.";
      formErrors.newPasswordMatch =
        firstPassword == secondPassword
          ? ""
          : "Vos mots de passent ne correspondent pas";
      if (
        formErrors.oldPasswordMatch.length > 0 ||
        formErrors.newPasswordMatch.length > 0
      ) {
        this.setState({ formErrors });
      } else {
        console.log("Je suis la requete axios");

        axios.put(
          `http://127.0.0.1:8000/api/utilisateurs/${this.props.match.params.id}/`,
          {
            idutil: 4,
            typecompte: "admin",
            nom: "testeur",
            prenom: "jean",
            mail: "dqzdsqd@mdl.com",
            mdp: currentComponent.firstPassword,
            datecreation: "2020-04-09T04:00:00Z",
          }
        );
      }
    } else {
      alert("Vous devez inserer des valeurs dans le formulaire");
    }
  };

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let formErrors = this.state.formErrors;
    switch (name) {
      case "firstPassword":
        formErrors.minimumPassword =
          value.length < 6 && value.length > 0
            ? "minimum 6 caractères nécessaires"
            : "";
        break;
    }
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  render() {
    return (
      <div>
        <NavigationBar />
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group
              controlId="formBasicPassword"
              onChange={this.handleChange}
            >
              <Form.Label>Ancien mot de passe</Form.Label>
              <Form.Control name="oldPassword" placeholder="Password" />
              {this.state.formErrors.oldPasswordMatch.length > 0 && (
                <span className="errorMessage">
                  {this.state.formErrors.oldPasswordMatch}
                </span>
              )}
            </Form.Group>{" "}
            <Form.Group
              controlId="formBasicPassword"
              onChange={this.handleChange}
            >
              <Form.Label>Nouveau mot de passe</Form.Label>
              <Form.Control name="firstPassword" placeholder="Password" />
              {this.state.formErrors.minimumPassword.length > 0 && (
                <span className="errorMessage">
                  {this.state.formErrors.minimumPassword}
                </span>
              )}
            </Form.Group>{" "}
            <Form.Group
              controlId="formBasicPassword"
              onChange={this.handleChange}
            >
              <Form.Label>Confirmer nouveau mot de passe</Form.Label>
              <Form.Control name="secondPassword" placeholder="Password" />
              {this.state.formErrors.newPasswordMatch.length > 0 && (
                <span className="errorMessage">
                  {this.state.formErrors.newPasswordMatch}
                </span>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Confirmer
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
export default ModifyProfile;
