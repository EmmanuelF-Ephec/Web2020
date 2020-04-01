import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import LoginPage from "./pages/login";
import MainPage from "./pages/main";

class App extends Component {
  render () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route path="/main" component={MainPage}/>
      </Switch>
    </Router>
  )
}
}

export default App;
