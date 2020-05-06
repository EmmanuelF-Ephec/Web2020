import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../actions/user";

const emailVerif = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

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
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: {
        email: "",
        password: "",
        formOk: "",
      },
    };
  }

  static propTypes = {
    user: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getUser();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.getUser();
    /*
        if (formValid(this.state)) {
            const user = {
                email: this.state.email, 
                password: this.state.password
            }
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
        }
        else {
            console.log("Erreur dans le formulaire");
        }
        */
  };
  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  handleOnBlur = (event) => {
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "email":
        formErrors.email =
          value.length > 0 && emailVerif.test(value) ? "" : "Email invalide";
        break;
      case "password":
        formErrors.password =
          value.length > 0 && value.length < 6 ? "Minimum 6 caractères" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors }, () => console.log(this.state));
  };

  render() {
    return (
      <div id="login">
        <Form onSubmit={this.handleSubmit}>
          <h1>Connexion</h1>
          <span className="errorMessage">{this.state.formErrors.formOk}</span>
          <Form.Group
            controlId="Email"
            onChange={this.handleChange}
            onBlur={this.handleOnBlur}
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
            {this.state.formErrors.email.length > 0 && (
              <span className="errorMessage">
                {this.state.formErrors.email}
              </span>
            )}
          </Form.Group>

          <Form.Group
            controlId="Password"
            onChange={this.handleChange}
            onBlur={this.handleOnBlur}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
            {this.state.formErrors.password.length > 0 && (
              <span className="errorMessage">
                {this.state.formErrors.password}
              </span>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Se connecter
          </Button>
          <a href="/fgtPassword">Mot de passe oublié ?</a>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps, { getUser })(withRouter(Login));
