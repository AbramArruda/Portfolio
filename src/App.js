import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Works from "./Pages/Works";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + "/"}
                component={HomePage}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/AboutMe"}
                component={AboutMe}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/Contact"}
                component={Contact}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/Works"}
                component={Works}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
