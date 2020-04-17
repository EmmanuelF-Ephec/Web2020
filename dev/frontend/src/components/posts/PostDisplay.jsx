import React, { Component } from "react";
import styled from "styled-components";

const Style = styled.a`
  color: black;
`;

class PostDisplay extends Component {
  state = {};

  render() {
    const { post } = this.props;
    return (
      <div className={this.props.postClass}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    );
  }
}

export default PostDisplay;
