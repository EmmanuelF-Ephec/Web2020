import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux'

import Login from "./Pages/login";
import FgtPass from "./Pages/fgtPass";
import Home from "./Pages/home/home";
import Announcements from "./Pages/announcements";
import PostAdding from "./components/posts/PostAdding";
import PostDetail from "./components/posts/PostDetail";
import RegistrationForm from "./Pages/registration";
import TimeTables from "./Pages/timeTables";
import Profile from "./components/Profile/profile";
import ModifyProfile from "./components/Profile/ModifyProfile";
import ManageProfiles from "./components/Profile/ManageProfiles";


import * as actions from './actions/auth';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => <Login {...this.props}/>} />
            <Route path="/registration" component={RegistrationForm} />
            <Route path="/fgtPassword" component={FgtPass} />
            <Route path="/home" component={Home} />
            <Route path="/timeTables" component={TimeTables} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/modifyProfile/:id" component={ModifyProfile} />
            <Route exact path="/ManageProfiles" component={ManageProfiles} />
            <Route exact path="/announcements" component={Announcements} />
            <Route exact path="/announcements/addPost" component={PostAdding} />
            <Route exact path="/announcements/:id" component={PostDetail} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

    isAuthenticated: state.authReducer.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
