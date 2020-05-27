import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/card";
const axios = require("axios").default;

class PostDisplay extends Component {
  state = {
    first: null,
    last: null,
  };
  getUserName(user) {
    let currentComponent = this;
    axios.get(user).then(function (response) {
      currentComponent.setState({
        first: response.data.first_name,
        last: response.data.last_name,
      });
    });
    return (
      "Cette annonce a été publiée par " +
      this.state.first +
      " " +
      this.state.last
    );
  }
  render() {
    const { post } = this.props;
    return (
      <div>
        <Container>
          <Card>
            <Card.Header>{this.getUserName(post.user)}</Card.Header>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Button variant="success">
                <Link
                  to={{
                    pathname: `/announcements/${post.id}`,
                  }}
                >
                  Consulter l'annonce
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default PostDisplay;
