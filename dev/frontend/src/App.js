import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Pages/login";
import FgtPass from "./Pages/fgtPass";
import Home from "./Pages/home";
import Announcements from "./Pages/announcements";
import TimeTables from "./Pages/timeTables";
import PostDetail from "./components/posts/PostDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/fgtPassword" component={FgtPass} />
          <Route path="/home" component={Home} />
          <Route path="/timeTables" component={TimeTables} />
          <Route exact path="/announcements" component={Announcements} />
          <Route exact path="/announcements/:id" component={PostDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
