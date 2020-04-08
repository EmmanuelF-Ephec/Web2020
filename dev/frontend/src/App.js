import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./Pages/login";
import FgtPass from "./Pages/fgtPass";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/fgtPassword" component={FgtPass}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
