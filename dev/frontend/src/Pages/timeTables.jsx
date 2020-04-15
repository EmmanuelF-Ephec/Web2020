import React, { Component } from "react";
import { NavigationBar } from "../components/NavigationBar";

class timeTables extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <h1>Horaires</h1>
      </React.Fragment>
    );
  }
}

export default timeTables;
