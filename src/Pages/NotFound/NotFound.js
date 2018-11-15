import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">
            <span class="text-danger">404</span> Page Not Found
          </h1>
          <p className="lead">Sorry, that page does not exist</p>
        </div>
      </div>
    );
  }
}
