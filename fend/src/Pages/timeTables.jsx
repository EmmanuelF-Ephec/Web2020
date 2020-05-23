import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import UploadTimeTables from "../components/timeTables/UploadTimeTables";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const axios = require("axios").default;

class timeTables extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  tester() {}
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div>
          <UploadTimeTables />
          <a href="http://127.0.0.1:8000/download/?path=/media/rapport_securite_groupe_7.pdf/">
            See
          </a>
          <p>\n</p>
          <Link
            to="../media/rapport_securite_groupe_7.pdf/"
            target="_blank"
            download
          >
            Download
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default timeTables;
