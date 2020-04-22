import React, { Component } from "react";
import { NavigationBar } from "../NavigationBar";
import { Form, Button, Container } from "react-bootstrap";

class ModifyProfile extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationBar />
        <Container>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Ancien mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>{" "}
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Nouveau mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>{" "}
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirmer nouveau mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
