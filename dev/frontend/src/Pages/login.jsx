import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';

class Login extends Component {
    state = {  }
    render() { 
        return (
            <div id="login">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <a href="/fgtPassword">Mot de passe oublié ?</a>
                </Form>
            </div>
          )
    }
}

export default Login;
