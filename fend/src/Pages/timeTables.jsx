import React, { Component } from "react";
import  NavigationBar from "../components/NavigationBar";

const axios = require("axios").default;

class timeTables extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/annonces/2/")
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data.texteannonce);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div>
          <h1>Horaires</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default timeTables;
