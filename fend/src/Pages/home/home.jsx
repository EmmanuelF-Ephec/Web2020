import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import  NavigationBar  from "../../components/NavigationBar";
import { Col, Row, Container , Card, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import './home.css'

class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastPost : {
        title: '',
        content: '',
        created_at: ''
      }
    };
  }

  componentDidMount() {
    const currentComponent = this;
      axios.get('/lastNotice/')
      .then(res => {
        console.log(res.data[0].title)
        currentComponent.setState({
          lastPost: {
          title: res.data[0].title,
          content: res.data[0].content,
          created_at: res.data[0].created_at  
          }
        })
        console.log(this.state)
      });
      console.log(this.props.user)
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.history.push('/announcements/addPost');
  }

  render() {
    return (
      <div className="home">
        <NavigationBar />
        <Container fluid>
          <Row>

            <Col sm={5} className="notices">
              <Card>
                <Card.Header className="titre">
                  Dernière annonce
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {this.state.lastPost.title}
                  </Card.Title>
                  <p>
                    {this.state.lastPost.content}
                  </p>
                  {this.props.user.is_staff == 1 
                  
                  ?
                  <Button variant="primary" onClick={this.handleClick}>
                    Ajouter une annonce
                  </Button>
                  : ""
                  }
                </Card.Body>
                <Card.Footer className="text-muted">
                  Crée le {this.state.lastPost.created_at}
                </Card.Footer>
              </Card>
              
            </Col>
            <Col sm={1} className="blank" >
              
            </Col>
            <Col sm={2} className="notif" >
              <h1>Notifications</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer
  }
}



export default withRouter(connect(mapStateToProps)(home));
