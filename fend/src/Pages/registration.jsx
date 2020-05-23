import React , {Component} from 'react'
import {Form, Button, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import {connect} from 'react-redux'
import {createUser} from '../actions/users'

const emailVerif = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
class RegistrationForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            first_name: "",
            last_name: "",
            password: "",
            passwordCheck: "",
            email: "",
            is_staff: "0",
            username: "",
            formErrors: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                passwordCheck : ""
            },
            formValid: {
                first_name: false,
                last_name: false,
                email: false,
                password: false,
                passwordCheck: false
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const formValid= this.state.formValid;
        const fields = this.state;
        const formErrors = this.state.formErrors;

        if (formValid.first_name && formValid.last_name && formValid.email && formValid.password && formValid.passwordCheck){
            
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
            console.log("la")
           if (fields.first_name === "") {
               formErrors.first_name = "Entrez une valeur correcte";
               console.log("a")
           }
           if (fields.last_name === "") {
               formErrors.last_name = "Entrez une valeur correcte";
               console.log("b");
           }
           if (fields.email === "") {
            formErrors.email = "Entrez une valeur correcte";
            }
            if (fields.password === "") {
                formErrors.password = "Entrez une valeur correcte";
            }
            if (fields.passwordCheck === "") {
                formErrors.passwordCheck = "Entrez une valeur correcte";
            }
            this.setState({...formErrors});
        }
    }

    handleChange = (event) => {
        event.preventDefault();

        const { name, value} = event.target
        let formErrors = this.state.formErrors;
        let formValid = this.state.formValid;

        if (name === "accountType") {
            this.setState({name:value});
        }
        else {
            switch (name) {
                case "first_name":
                    if(value.length > 0) {
                        formValid.first_name = true;
                        formErrors.first_name = "";
                    }
                    else {
                        formValid.first_name = false;
                    }
                    break;
                case "last_name" :
                    if (value.length > 0 ) {
                        formValid.last_name = true;
                        formErrors.last_name = "";
                    }
                    else {
                        formValid.last_name = false;
                    }
                case 'password':
                    if(value.length > 0 && value.length >= 4) {
                        formErrors.password = "";
                        formValid.password = true;
                    }
                    else {
                        formErrors.password = "Minimum 4 caractères";
                        formValid.password = false;
                    }
                    break;
                case 'passwordCheck':
                    if (value === this.state.password) {
                        formErrors.passwordCheck = "";
                        formValid.passwordCheck = true;
                    }
                    else {
                        formErrors.passwordCheck = "Les mots de passe ne correspondent pas"
                        formValid.passwordCheck = false;
                    }
                    break;
                case 'email':
                    if (value.length > 0 && emailVerif.test(value)) {
                        formErrors.email = "";
                        formValid.email = true;
                    }
                    else {
                        formErrors.email = "Email invalide";
                        formValid.email = false;
                    }
                    break;
                default:        
                    break;
        }

        this.setState({formErrors, [name] : value})
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
                    {this.state.formErrors.first_name.length > 0 && (
                        <span className="errorMessage">{this.state.formErrors.first_name}</span>
                    )}
                    </Form.Group>
                    <Form.Group as={Col} onChange={this.handleChange}>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control name="last_name" placeholder="Entrez le nom" />
                    {this.state.formErrors.last_name.length > 0 && (
                        <span className="errorMessage">{this.state.formErrors.last_name}</span>
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