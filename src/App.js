import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
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
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/AboutMe" component={AboutMe} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Works" component={Works} />
              <Route component={NotFound} />
            </Switch>

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
