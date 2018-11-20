import React, { Component } from "react";
import "./NotFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="text-danger" id="notFound2">
            404
          </h1>
          <h1 class="display-4" id="notFound1">
            Page Not Found
          </h1>
          <p className="lead" id="notFound3">
            Sorry, that page does not exist
          </p>
        </div>
      </div>
    );
  }
}
