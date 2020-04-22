import React, { Component } from "react";
import { NavigationBar } from "../NavigationBar";
import { Form, Button } from "react-bootstrap";

class postAdding extends Component {
  state = {};
  handleSubmit = (event) => {
    event.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(
        this.state.firstName,
        this.state.lastName,
        this.state.password,
        this.state.email
      );
    } else {
      console.log("Erreur dans le formulaire");
    }
  };
  render() {
    return (
      <div>
        <NavigationBar />
        <Form>
          <Form.Group controlId="postTitle">
            <Form.Label>Titre</Form.Label>
            <Form.Control placeholder="Titre de l'annonce" />
          </Form.Group>
          <Form.Group controlId="postText">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default postAdding;
