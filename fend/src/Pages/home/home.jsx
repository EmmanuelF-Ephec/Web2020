import React, { Component } from "react";
import { NavigationBar } from "../../components/NavigationBar";
import { Col, Row, Container } from 'react-bootstrap'
import './home.css'

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPost : []
    };
  }
  render() {
    return (
      <div className="home">
        <NavigationBar />
        <Container>
          <Row>
            <Col sm={5} className="notices">
              <h1>Dernière annonces</h1>
            </Col>
            <Col sm={1} className="blank">
              
            </Col>
            <Col sm={2} className="notif">
              <h1>Notifications</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}




export default home;
