import React , {Component} from 'react'
import {Form, Button, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import {connect} from 'react-redux'
import {createUser} from '../actions/users'

const formValid = ({ formErrors, ...rest }) => {
    let valid = true

    Object.values(formErrors).forEach( val => {
        val.length > 0 && (valid = false)
    });

    Object.values(rest).forEach(val => {
        val == null && (valid = false)
    });

    return valid;

}

const emailVerif = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
class RegistrationForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            first_name: null,
            last_name: null,
            password: null,
            passwordCheck: null,
            email: null,
            is_staff: "0",
            username: "",
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                passwordCheck : ""
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if (formValid(this.state)) {
            
            const user = {
                last_name : this.state.last_name,
                first_name : this.state.first_name,
                is_staff : this.state.is_staff,
                email : this.state.email,
                password : this.state.password,
                username : this.state.email
            };
            this.props.createUser(user);
        }
        else {
            console.log("Erreur dans le formulaire");
        }
    }

    handleChange = (event) => {
        event.preventDefault();

        const { name, value} = event.target
        let formErrors = this.state.formErrors;

        if (name === "accountType") {
            this.setState({name:value});
        }
        else {
            switch (name) {
                case 'first_name':
                    formErrors.firstName = value.length < 3 && value.length > 0 
                    ? "minimum 3 caractères nécessaires"
                    : ""
                    break;
                case 'last_name':
                    formErrors.lastName = value.length < 3 && value.length > 0 
                    ? "minimum 6 caractères nécessaires"
                    : ""
                    break;
                case 'password':
                    formErrors.password = value.length < 4 && value.length > 0
                    ? "minimum 6 caractères nécessaires"
                    : ""
                    break;
                case 'passwordCheck':
                    formErrors.passwordCheck = value.length < 4 && value.length > 0 
                    ? "minimum 6 caractères"
                    : ""
                    break;
                case 'email':
                    formErrors.email = emailVerif.test(value) && value.length > 0 
                    ? ""
                    : "Email invalide"
                    break;
                default:        
                    break;
        }

        this.setState({formErrors, [name] : value} , () => console.log(this.state))
        }
    }


    render() { 
        return (  
            <div id="registration">
                <Form onSubmit={this.handleSubmit}>
                    <h1>Enregistrer un crew</h1>
                <Form.Row>
                    <Form.Group as={Col} onChange={this.handleChange}>
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control name="first_name" placeholder="Entrez le prénom"/>
                    {this.state.formErrors.firstName.length > 0 && (
                        <span className="errorMessage">{this.state.formErrors.firstName}</span>
                    )}
                    </Form.Group>
                    <Form.Group as={Col} onChange={this.handleChange}>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control name="last_name" placeholder="Entrez le nom" />
                    {this.state.formErrors.lastName.length > 0 && (
                        <span className="errorMessage">{this.state.formErrors.lastName}</span>
                    )}
                    </Form.Group>
                    
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} onChange={this.handleChange}>
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Entrez le mot de passe" />
                        {this.state.formErrors.password.length > 0 && (
                        <span className="errorMessage">{this.state.formErrors.password}</span>
                        )}
                    </Form.Group>

                    <Form.Group as={Col} onChange={this.handleChange}>
                        <Form.Label>Vérifier mot de passe</Form.Label>
                        <Form.Control name="passwordCheck" type="password" placeholder="Vérifier mot de passe" />
                        {this.state.formErrors.passwordCheck.length > 0 && (
                        <span className="errorMessage">{this.state.formErrors.passwordCheck}</span>
                        )}
                    </Form.Group>
                </Form.Row>

                <Form.Group onChange={this.handleChange}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Entrez le mail" />
                    {this.state.formErrors.email.length > 0 && (
                        <span className="errorMessage">{this.state.formErrors.email}</span>
                    )}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Type d'employé</Form.Label>
                    <Form.Control name='is_staff' as="select" onChange={this.handleChange}>
                        <option value="0">Employé</option>
                        <option value="1">Manager</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
                </Form>
            </div>
        );
    }
}

 
export default connect("", {createUser})(RegistrationForm);