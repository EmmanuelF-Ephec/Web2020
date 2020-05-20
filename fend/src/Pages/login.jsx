
import React, {Component} from 'react';
import {Form, Button, Spinner} from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom'   
import { connect } from 'react-redux'
import * as actions from '../actions/auth'

const emailVerif = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)


const formValidation = ({ formErrors, ...rest }) => {
  let valid = false;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach((val) => {
    val == null && (valid = false);
  });

  return valid;
};

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {  
            email: "",
            password: "",
             formErrors: {
                email: "",
                password: "",
            },
            formValid: {
                email: false,
                password: false,
            }
        }
    }

    componentDidMount() {
    
        if (localStorage.getItem("access_token")) {
            this.props.history.push("/home");
        }
      }

    handleSubmit = event => {
        event.preventDefault(); 
        if (formValid(this.state)) {
            console.log('non')
            this.props.onAuth(this.state.email, this.state.password).then( (res) => {
                console.log(res);
                if (this.props.token != null) {
                    this.props.history.push("/home");
                }
            })
            /*
            let mail = user.email;
            Axios.get('http://127.0.0.1:8000/api/utilisateurs/?mail=' + mail)
            .then(res => {
                console.log(res.data);
                if (res.data.length == 0) {
                    let formErrors = this.state.formErrors;
                    formErrors.formOk = "L'email ou le mot de passe est incorrecte";
                    this.setState(formErrors);
                }
                else {
                    if (res.data[0].mdp == user.password) {
                        this.props.history.push("/home")
                    }
                    else {
                        let formErrors = this.state.formErrors;
                        formErrors.formOk = "L'email ou le mot de passe est incorrecte"
                        this.setState(formErrors);
                    }
                }
            })
            */
        }
        else {
            console.log("Erreur dans le formulaire");
        }

  };
  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleOnBlur = (event) => {
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "email":
          if(value.length > 0 && emailVerif.test(value)) {
            formErrors = "";
            formValid.email
          }
          
        break;
      case "password":
        formErrors.password =
          value.length > 0 && value.length < 4 ? "Minimum 4 caractères" : "",;
        break;
      default:
        break;
    }
    }

    render() { 
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.data.detail}</p>
            )
        }

        return (
            
            <div id="login">
           
                {this.props.loading ?

                <Spinner animation="border"></Spinner>

                :   

                <Form onSubmit={this.handleSubmit}>
                    <h1>Connexion</h1>
                    <span className="errorMessage">{errorMessage}</span>
                    <Form.Group controlId="formBasicEmail" onChange={this.handleChange} onBlur={this.handleOnBlur}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" />
                        {this.state.formErrors.email.length> 0 && (
                        <span className="errorMessage">{this.state.formErrors.email}</span>
                        )}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" onChange={this.handleChange} onBlur={this.handleOnBlur}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" />
                        {this.state.formErrors.password.length > 0 && (
                        <span className="errorMessage">{this.state.formErrors.password}</span>
                        )}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Se connecter
                    </Button>
                    <a href="/fgtPassword">Mot de passe oublié ?</a>
                </Form>

                }
            </div>
          )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.authReducer,
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.authLogin(email, password)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));