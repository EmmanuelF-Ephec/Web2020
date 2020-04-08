import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/login";
import FgtPass from "./Pages/fgtPass";
import Home from "./Pages/home";
import Announcements from "./Pages/announcements";
import TimeTables from "./Pages/timeTables";
import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/fgtPassword" component={FgtPass} />
          <NavigationBar>
            <Route path="/home" component={Home} />
            <Route path="/timeTables" component={TimeTables} />
            <Route path="/announcements" component={Announcements} />
          </NavigationBar>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
