import React, { Component } from "react";
import { Form, Button} from 'react-bootstrap'

class FgtPass extends Component {
    state = {  }
    render() { 
        return (
            <div id="fgtPass">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
          );
    }
}

export default FgtPass;
