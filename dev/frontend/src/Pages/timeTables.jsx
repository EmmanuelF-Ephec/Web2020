import React, { Component } from "react";
import { NavigationBar } from "../components/NavigationBar";
import { axios } from "axios";

class timeTables extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  test() {
    axios
      .get("http://127.0.0.1:8000/api/annonces/")
      .then(function (response) {
        // handle success
        console.log(response);
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
          <button onClick={this.test()}>Envoyer</button>
        </div>
      </React.Fragment>
    );
  }
}

export default timeTables;
