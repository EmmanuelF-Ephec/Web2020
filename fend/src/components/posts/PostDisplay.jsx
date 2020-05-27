import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Card } from "react-bootstrap";
const axios = require("axios").default;

class PostDisplay extends Component {
  state = {
    first: null,
    last: null,
  };

  username = null;

  getUserName(user) {
    if (this.username) {
      return this.username;
    }
    let currentComponent = this;
    axios.get(user).then(function (response) {
      console.log(response)
      currentComponent.setState({
        first: response.data.first_name,
        last: response.data.last_name,
      });
    });
    this.username = (
      "Cette annonce a été publiée par " +
      this.state.first +
      " " +
      this.state.last
    );

    return this.username;
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
