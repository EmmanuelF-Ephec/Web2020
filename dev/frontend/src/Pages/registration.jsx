import React , {Component} from 'react'
import {Form, Button, Col} from 'react-bootstrap';
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
                password: ""
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
        
        console.log(event.target.name);

        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3 && value.length > 0 
                ? "minimum 3 caractères nécessaires"
                : ""
                break;
            case 'lastName':
                formErrors.lastName = value.length < 3 && value.length > 0 
                ? "minimum 3 caractères nécessaires"
                : ""
                break;
            case 'password':
                formErrors.password = value.length < 6 && value.length > 0
                ? "minimum 3 caractères nécessaires"
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
                    </Form.Group>

                    <Form.Group as={Col} onChange={this.handleChange}>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control name="lastName" placeholder="Entrez le nom" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} onChange={this.handleChange}>
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Entrez le mot de passe" />
                    </Form.Group>

                    <Form.Group as={Col} onChange={this.handleChange}>
                        <Form.Label>Vérifier mot de passe</Form.Label>
                        <Form.Control name="passwordCheck" type="password" placeholder="Vérifier mot de passe" />
                    </Form.Group>
                </Form.Row>

                <Form.Group onChange={this.handleChange}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Entrez le mail" />
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