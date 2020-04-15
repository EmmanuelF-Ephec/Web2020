import React, { Component } from "react";
import { NavigationBar } from "../components/NavigationBar";
import PostDisplay from "../components/PostDisplay";

let annonces = [
  {
    title: "Tess title 1",
    content: "Test content 1",
    date: "21-03-2020",
  },
  {
    title: "Tess title 2",
    content: "Test content 2",
    date: "11-02-2020",
  },
  {
    title: "Tess title 3",
    content: "Test content 3",
    date: "24-03-2020",
  },
];

class Announcements extends Component {
  state = {
    posts: annonces,
  };

  loadPosts() {
    this.setState({
      posts: annonces,
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <NavigationBar />
        <h1>Annonces</h1>
        {posts.length > 0 ? (
          posts.map((postItem, index) => {
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
