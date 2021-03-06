import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import PostDisplay from "../components/posts/PostDisplay";
import { Button, Nav } from "react-bootstrap";
import { connect } from "react-redux"
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
    axios.get("/notices/").then(function (response) {
      currentComponent.setState({
        posts: response.data,
      })
      console.log(response.data);
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <NavigationBar />
        {this.props.user.is_staff
        ?
        <Button variant="outline-success">
          <Nav.Link href="/announcements/addPost">Ajouter une annonce</Nav.Link>
        </Button>
        : ""
        } 
        {posts.length > 0 ? (
          posts
            .sort(function (a, b) {
              return b.idannonces - a.idannonces;
            })
            .map((postItem) => {
              console.log(postItem)
              return <PostDisplay key={postItem.id} post={postItem} />;
            })
        ) : (
          <p>No posts</p>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user
  }
}

export default connect(mapStateToProps)(Announcements);
