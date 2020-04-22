import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Style = styled.h2`
  color: black;
`;

class PostDisplay extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <Card body>
          <Style />
          <h2>
            <Link
              maintainScrollPosition={true}
              to={{
                pathname: `/announcements/${post.id}`,
                state: { fromDashboard: false },
              }}
            >
              {post.titre}
            </Link>
          </h2>
        </Card>
      </div>
    );
  }
}

export default PostDisplay;
