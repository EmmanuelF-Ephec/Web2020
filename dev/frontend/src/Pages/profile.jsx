import React, { Component } from "react";
import { NavigationBar } from "../components/NavigationBar";
const axios = require("axios").default;

class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let currentComponent = this;
    axios
      .get(
        `http://127.0.0.1:8000/api/http://127.0.0.1:8000/api/utilisateurs/1/`
      )
      .then(function (response) {
        console.log("reussite");
        currentComponent.setState({});
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}
export default profile;
