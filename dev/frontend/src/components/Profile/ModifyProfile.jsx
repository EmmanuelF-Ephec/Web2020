import React, { Component } from "react";
import { NavigationBar } from "../NavigationBar";
import { Form, Button } from "react-bootstrap";

class ModifyProfile extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationBar />
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Nom</Form.Label>
            <Form.Control placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Prenom</Form.Label>
            <Form.Control placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>eMail</Form.Label>
            <Form.Control placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default ModifyProfile;
