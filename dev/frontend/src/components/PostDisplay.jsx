import React, { Component } from "react";

class PostDisplay extends Component {
  state = {};

  render() {
    const { post } = this.props;
    return (
      <div>
        <a href="/announcements">{post.title}</a>
        <p>{post.content}</p>
      </div>
    );
  }
}

export default PostDisplay;
