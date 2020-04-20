import React , {Component} from 'react'
import {Form, Button, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';

const formValid = formErrors => {
    let valid = true

    Object.values(formErrors).forEach( val => {
        val.length > 0 && (valid = false)
    });

    return valid;

}

const emailVerif = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
class RegistrationForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: null,
            lastName: null,
            password: null,
            passwordCheck: null,
            email: null,
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

        if (formValid(this.state.formErrors)) {
            console.log(
                this.state.firstName, 
                this.state.lastName , 
                this.state.password,
                this.state.email
            )
        }
        else {
            console.log("Erreur dans le formulaire");
        }

        axios.post('http://127.0.0.1:8000/api/utilisateurs', 
            
        )
    }

    handleChange = (event) => {
        event.preventDefault();
  
        const { name, value} = event.target
        let formErrors = this.state.formErrors;
        

        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3 && value.length > 0 
                ? "minimum 3 caractères nécessaires"
                : ""
                break;
            case 'lastName':
                formErrors.lastName = value.length < 3 && value.length > 0 
                ? "minimum 6 caractères nécessaires"
                : ""
                break;
            case 'password':
                formErrors.password = value.length < 6 && value.length > 0
                ? "minimum 6 caractères nécessaires"
                : ""
                break;
            case 'passwordCheck':
                formErrors.passwordCheck = value.length < 6 && value.length > 0 
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


    render() { 
        return (  
            <div id="registration">
                <Form onSubmit={this.handleSubmit}>
                    <h1>Enregistrer un crew</h1>
                <Form.Row>
                    <Form.Group as={Col} onChange={this.handleChange}>
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control name="firstName" placeholder="Entrez le prénom"/>
                    {this.state.formErrors.firstName.length > 0 && (
                        <span className="errorMessage">{this.state.formErrors.firstName}</span>
                    )}
                    </Form.Group>
                    <Form.Group as={Col} onChange={this.handleChange}>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control name="lastName" placeholder="Entrez le nom" />
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

                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
                </Form>
            </div>
        );
    }
}
 
export default RegistrationForm;