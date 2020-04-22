import React, { Component } from "react";
import { NavigationBar } from "../components/NavigationBar";
import PostDisplay from "../components/posts/PostDisplay";

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
        // handle success
        console.log("rreussite");
        currentComponent.setState({
          posts: response.data,
        });
        console.log(currentComponent.state.posts);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <NavigationBar />
        {posts.length > 0 ? (
          posts.map((postItem) => {
            return <PostDisplay post={postItem} />;
          })
        ) : (
          <p>No posts</p>
        )}
      </React.Fragment>
    );
  }
}

export default Announcements;
