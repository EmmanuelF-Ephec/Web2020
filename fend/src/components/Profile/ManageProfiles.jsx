import React, { Component, Fragment } from "react";
import NavigationBar from "../NavigationBar";
import RegistrationForm from "../../Pages/registration"
import {  Button, Table, Alert } from "react-bootstrap";
import { connect } from 'react-redux';
import {getUsers, deleteUser, showForm, showAlert} from '../../actions/users';
 const axios = require("axios").default;

class ManageProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
      messageAlert : ''
      }
    };

  componentDidMount() {
    this.props.getUsers();
  }

  showForm = (event) => {
    event.preventDefault();
    this.props.showAlert("");
    this.props.showForm(this.props.show);
  }

  onDelete = (idUtil) => {
    this.props.deleteUser(idUtil);
  }


  render() {
    return (
      
      <div>
        <NavigationBar />
        <Fragment>
          <h2>Utilisateurs</h2>
          {this.props.alertMessage === ""
          ? ""
          :  <Alert>{this.props.alertMessage}</Alert>}
          {this.props.show
          ? <RegistrationForm />
          : ""}
          <Table className="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>email</th>
                <th>Type</th>
                <th><Button variant="primary" onClick={this.showForm}>Créer utilisateur</Button></th>
              </tr>
            </thead>
            <tbody>
              { this.props.users.map(user => (
                <tr key={user.id}>
                  <td>{user.last_name}</td>
                  <td>{user.first_name}</td>
                  <td>{user.email}</td>
                  <td>{user.is_staff == false ?
                  "Employé"
                  : "Manager"}</td>
                  <td><Button variant='danger' onClick={() => this.onDelete(user.id)}>Supprimer</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users : state.userReducer.users,
  show : state.userReducer.show,
  alertMessage : state.userReducer.alertMessage
})

export default connect(mapStateToProps, { getUsers, deleteUser, showForm, showAlert })(ManageProfiles);
