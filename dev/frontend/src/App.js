import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import LoginPage from "./pages/login";

class App extends Component {
  render () {
  return (
    <Router>
      <Route path="/" component={LoginPage}/>
    </Router>
  )
}
}

export default App;
