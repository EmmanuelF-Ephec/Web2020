import React, { Component } from "react";
import { NavigationBar } from "../NavigationBar";
import { Container, Jumbotron as Jumbo } from "react-bootstrap";
const axios = require("axios").default;

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: null,
      text: null,
      didLoad: false,
    };
  }
  componentDidMount() {
    let currentComponent = this;
    if (this.props.match) {
      const { id } = this.props.match.params;
      currentComponent.setState({
        id: id,
      });
      axios
        .get(`http://127.0.0.1:8000/api/annonces/${id}/`)
        .then(function (response) {
          // handle success
          console.log("rreussite");
          currentComponent.setState({
            title: response.data.titre,
            text: response.data.texteannonce,
            didLoad: true,
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }

  render() {
    const { title } = this.state;
    const { text } = this.state;
    const { didLoad } = this.state;

    return (
      <div>
        {didLoad === true ? (
          <div>
            <NavigationBar />
            <Jumbo fluid className="jumbo">
              <Container>
                <h1>{title}</h1>
              </Container>
            </Jumbo>
            <Container>{text}</Container>
          </div>
        ) : (
          <p> Rien de trouvé</p>
        )}
      </div>
    );
  }
}

export default PostDetail;
