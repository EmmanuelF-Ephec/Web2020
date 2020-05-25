import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux'
import ProtectedRoute from './protectedRoute'

import Login from "./Pages/login";
import FgtPass from "./Pages/fgtPass";
import Home from "./Pages/home/home";
import Announcements from "./Pages/announcements";
import PostAdding from "./components/posts/PostAdding";
import PostDetail from "./components/posts/PostDetail";
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
            <ProtectedRoute path="/fgtPassword" component={FgtPass} />
            <ProtectedRoute path="/home" component={Home} />
            <ProtectedRoute path="/timeTables" component={TimeTables} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/modifyProfile" component={ModifyProfile} />
            <ProtectedRoute exact path="/ManageProfiles" component={ManageProfiles} />
            <ProtectedRoute exact path="/announcements" component={Announcements} />
            <ProtectedRoute exact path="/announcements/addPost" component={PostAdding} />
            <ProtectedRoute exact path="/announcements/:id" component={PostDetail} />
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
