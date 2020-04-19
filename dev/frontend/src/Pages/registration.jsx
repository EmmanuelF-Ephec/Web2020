import React , {Component} from 'react'
import {Form, Button, Col} from 'react-bootstrap';


class RegistrationForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: null,
            name: null,
            password: null,
            passwordCheck: null,
            email: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }


    render() { 
        return (  
            <div id="registration">
                <Form onSubmit={this.handleSubmit}>
                    <h1>Enregistrer un crew</h1>
                <Form.Row>
                    <Form.Group as={Col} name="firstName">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control placeholder="Entrez le prénom"/>
                    </Form.Group>

                    <Form.Group as={Col} name="name">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control placeholder="Entrez le nom" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} name="password">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Entrez le mot de passe" />
                    </Form.Group>

                    <Form.Group as={Col} name="passwordCheck">
                        <Form.Label>Vérifier mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Vérifier mot de passe" />
                    </Form.Group>
                </Form.Row>

                <Form.Group  name="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Entrez le mail" />
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