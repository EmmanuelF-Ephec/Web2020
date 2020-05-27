import React, { Component } from "react";
import axios, { post } from "axios";
import { Form, Button } from "react-bootstrap";

class UploadTimeTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      name: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    console.log(this.state.name);
    this.fileUpload(this.state.file).then((response) => {
      console.log(this.state.name);
      axios.post("/schedule/", {
        name: this.state.name,
        url: response.data,
      });
      console.log(response.data);
    });
    window.location.reload(false);
  }
  onChange(e) {
    if (e.target.name == "name") {
      this.setState({
        name: e.target.value,
      });
    }
    if (null != e.target.files) {
      this.setState({
        file: e.target.files[0],
      });
    }
  }

  fileUpload(file) {
    const url = "http://127.0.0.1:8000/upload/";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  }

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <h1>Ajoutez les horaires ici!</h1>
        <input
          name="name"
          type="text"
          onChange={this.onChange}
          placeholder="Nom de l'horaire ici"
        />
        <p></p>
        <input type="file" onChange={this.onChange} />
        <Button type="submit">Upload</Button>
        <p></p>
      </Form>
    );
  }
}
export default UploadTimeTables;
