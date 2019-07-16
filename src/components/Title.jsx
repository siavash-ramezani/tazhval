import React, { Component } from "react";
import { Row } from "react-bootstrap";
class Title extends Component {
  state = {};
  render() {
    return (
      <Row className="align-items-center ml-5 my-5">
        <img
          src={require("../assets/images/title.png")}
          className="title-icon mx-2"
          alt="title icon"
        />
        <h2 className="title mx-2">{this.props.title}</h2>
      </Row>
    );
  }
}

export default Title;
