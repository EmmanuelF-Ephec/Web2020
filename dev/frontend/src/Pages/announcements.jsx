import React, { Component } from "react";
import { NavigationBar } from "../components/NavigationBar";
import PostDisplay from "../components/posts/PostDisplay";
import { Button, Nav } from "react-bootstrap";
const axios = require("axios").default;

class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    let currentComponent = this;
    axios
      .get(`http://127.0.0.1:8000/api/annonces/`)
      .then(function (response) {
        console.log("rreussite");

        currentComponent.setState({
          posts: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <NavigationBar />
        <Button variant="outline-success">
          <Nav.Link href="/announcements/addPost">Ajouter une annonce</Nav.Link>
        </Button>
        {posts.length > 0 ? (
          posts
            .sort(function (a, b) {
              return b.idannonces - a.idannonces;
            })
            .map((postItem) => {
              return <PostDisplay key={postItem.idannonces} post={postItem} />;
            })
        ) : (
          <p>No posts</p>
        )}
      </React.Fragment>
    );
  }
}

export default Announcements;
