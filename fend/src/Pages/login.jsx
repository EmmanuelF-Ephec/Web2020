import React, { Component } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/auth";

const emailVerif = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: {
        email: "",
      },
      formValid: {
        email: false,
        password: false,
      },
    };
  }

  componentDidMount() {
    if (localStorage.getItem("access_token")) {
      this.props.history.push("/home");
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formValid = this.state.formValid;
    if (formValid.password && formValid.email) {
      this.props.onAuth(this.state.email, this.state.password).then((res) => {
        console.log(this.props.token);
        if (this.props.token != null) {
          console.log("ha");
          this.props.history.push("/home");
        }
      });
    } else {
      console.log("Erreur dans le formulaire");
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const formErrors = this.state.formErrors;
    const formValid = this.state.formValid;
    switch (name) {
      case "email":
        if (value.length > 0 && emailVerif.test(value)) {
          formErrors.email = "";
          formValid.email = true;
        } else {
          formErrors.email = "L'email n'est pas valide";
          formValid.email = false;
        }
        break;
      case "password":
        if (value.length > 0 && value.length >= 4) {
          formValid.password = true;
        } else {
          formValid.password = false;
        }
        break;
      default:
        break;
    }

    this.setState({ [name]: value });
  };

  handleOnBlur = (event) => {
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;
    let formValid = this.state.formValid;

    switch (name) {
      case "email":
        if (value.length > 0 && emailVerif.test(value)) {
          formErrors.email = "";
          formValid.email = true;
        } else {
          formErrors.email = "L'email n'est pas valide";
          formValid.email = false;
        }
        break;
      default:
        break;
    }
  };

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.data.detail}</p>;
    }

    return (
      <div id="login">
        {this.props.loading ? (
          <Spinner animation="border"></Spinner>
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <h1>McCrews</h1>
            <span className="errorMessage">{errorMessage}</span>
            <Form.Group
              controlId="formBasicEmail"
              onChange={this.handleChange}
              onBlur={this.handleOnBlur}
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
              />
              {this.state.formErrors.email.length > 0 && (
                <span className="errorMessage">
                  {this.state.formErrors.email}
                </span>
              )}
            </Form.Group>

            <Form.Group
              controlId="formBasicPassword"
              onChange={this.handleChange}
              onBlur={this.handleOnBlur}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Se connecter
            </Button>
            <a href="/fgtPassword">Mot de passe oublié ?</a>
          </Form>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.authLogin(email, password)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
