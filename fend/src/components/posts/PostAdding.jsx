import React, { Component } from "react";
import NavigationBar from "../NavigationBar";
import { Form, Button, Alert, Container } from "react-bootstrap";
import axios from "axios";
const formValid = (formErrors) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

class postAdding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      text: null,
      idUser: "1",
      dateTime: null,
      show: false,
      formErrors: {
        title: "",
        text: "",
        idUser: "",
        dateTime: "",
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (formValid(this.state.formErrors)) {
      const post = {
        titre: this.state.title,
        texteannonce: this.state.text,
        idUtil: this.state.idUser,
        dateCreation: this.state.dateTime,
      };
      axios
        .post("/annonces/", JSON.stringify(post), {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
        });
    } else {
      console.log("Erreur dans le formulaire");
    }
    this.setState({
      show: true,
    });
  };

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  render() {
    return (
      <div>
        <NavigationBar />
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="postTitle" onChange={this.handleChange}>
              <Form.Label>Titre</Form.Label>
              <Form.Control name="title" placeholder="Titre de l'annonce" />
            </Form.Group>
            <Form.Group controlId="postText" onChange={this.handleChange}>
              <Form.Label>Texte de l'annonce</Form.Label>
              <Form.Control name="text" as="textarea" rows="5" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Alert variant="success" show={this.state.show}>
            Annonce postée!
          </Alert>
        </Container>
      </div>
    );
  }
}

export default postAdding;
