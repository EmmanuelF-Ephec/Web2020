import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import UploadTimeTables from "../components/timeTables/UploadTimeTables";
import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./home/home.css";
const axios = require("axios").default;

class timeTables extends Component {
  state = {
    schedules: null,
  };
  constructor(props) {
    super(props);
    this.state = { schedules: "" };
  }
  componentDidMount() {
    let currentComponent = this;
    axios.get("/schedule/").then(function (response) {
      currentComponent.setState({
        schedules: response.data,
      });
    });
  }

  showSchedules(schedule) {
    const url = "http://127.0.0.1:8000" + schedule.url + "/";
    return (
      <div>
        <p>
          <b>{schedule.name}</b>
        </p>
        <Button variant="outline-primary">
          <a href={url}>Voir l'horaire</a>
        </Button>
        <Button variant="outline-success">
          <a href={url} download="thisfile">
            Telecharger
          </a>
        </Button>
        {this.props.user.is_staff ? (
          <Button
            variant="outline-danger"
            onClick={() => {
              this.deleteTable(schedule.id);
            }}
          >
            Supprimer l'horaire
          </Button>
        ) : (
          ""
        )}
      </div>
    );
  }

  deleteTable(id) {
    axios.delete(`/schedule/${id}/`);
    window.location.reload(false);
  }
  render() {
    const { schedules } = this.state;
    return (
      <React.Fragment>
        <NavigationBar />
        <div>{this.props.user.is_staff ? <UploadTimeTables /> : ""}</div>
        <div>
          <ListGroup>
            {schedules.length > 0 ? (
              schedules.map((scheduleItem) => {
                return (
                  <ListGroup.Item key={scheduleItem.id}>
                    {this.showSchedules(scheduleItem)}
                  </ListGroup.Item>
                );
              })
            ) : (
              <p>Pas d'horaires</p>
            )}
          </ListGroup>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.authReducer.user };
};

export default connect(mapStateToProps)(timeTables);
