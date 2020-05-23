import React, { Component } from "react";
import  NavigationBar  from "../NavigationBar";
import { Form, Button, Container } from "react-bootstrap";
import {connect} from 'react-redux'
const axios = require("axios").default;

class ModifyProfile extends Component {
  state = {
    oldPassword: null,
    firstPassword: null,
    secondPassword: null,
    formErrors: {
     oldPassword: "",
     firstPassword: "",
     secondPassword: "",
    },
    formValid: {
      oldPassword: false,
      firstPassword: false,
      secondPassword: false
    }
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const formValid = this.state.formValid;
    if (formValid.oldPassword && formValid.firstPassword && formValid.secondPassword) {
     
      axios.post('/token/', JSON.stringify({
        email: this.props.email,
        password: this.state.oldPassword
      }))
      .then( res => {
        console.log(res)
      }
        
      )
      .catch(err => {
        console.log(err)
      })
    }
    else {
      if (this.state.oldPassword === 0 || this.state.oldPassword < 4) {
      }
    }
  };

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let formErrors = this.state.formErrors;
    const formValid = this.state.formValid


    switch (name) {
      case "firstPassword":
      
        if (value.length > 0 && value.length >=4) {
          formErrors.firstPassword= "";
          formValid.firstPassword = true
        }
        else {
          formErrors.firstPassword = "Mimimum 4 caractères";
          formValid.firstPassword = false;
        }
        break;
      case "secondPassword": 
        
        if (value === this.state.firstPassword) {
          formErrors.secondPassword= "";
          formValid.secondPassword = true
        }
        else {
          formErrors.secondPassword = "Les mots de passe ne correspondent pas";
          formValid.secondPassword = false;
        }
        break;
      case "oldPassword": 
        if (value.length > 0 && value.length >= 4) {
          formErrors.oldPassword= "";
          formValid.oldPassword = true
        }
        else {
          formValid.oldPassword = false;
        }
        break;
      default:
        break;
    }
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <NavigationBar />
        
          <Form onSubmit={this.handleSubmit}>
            <Form.Group
              controlId="formBasicPassword"
              onChange={this.handleChange}
            >
              <Form.Label>Ancien mot de passe</Form.Label>
              <Form.Control name="oldPassword" type="password" placeholder="Password" />
              {this.state.formErrors.oldPassword.length > 0 && (
                <span className="errorMessage">
                  {this.state.formErrors.oldPassword}
                </span>
              )}
            </Form.Group>{" "}
            <Form.Group
              controlId="formBasicPassword"
              onChange={this.handleChange}
            >
              <Form.Label>Nouveau mot de passe</Form.Label>
              <Form.Control name="firstPassword" type='password' placeholder="Password" />
              {this.state.formErrors.firstPassword.length > 0 && (
                <span className="errorMessage">
                  {this.state.formErrors.firstPassword}
                </span>
              )}
            </Form.Group>{" "}
            <Form.Group
              controlId="formBasicPassword"
              onChange={this.handleChange}
            >
              <Form.Label>Confirmer nouveau mot de passe</Form.Label>
              <Form.Control name="secondPassword" type="password" placeholder="Password" />
              {this.state.formErrors.secondPassword.length > 0 && (
                <span className="errorMessage">
                  {this.state.formErrors.secondPassword}
                </span>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Confirmer
            </Button>
          </Form>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user
  }
}

export default ModifyProfile;
