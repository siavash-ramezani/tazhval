import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../assets/css/index.css";
import Menu from "./Menu";

class Slider extends Component {
  state = {};
  render() {
    return (
      <div className="position-relative">
        <Menu />
        <div className="slider">
          <Container>
            <img
              src={require("../assets/images/slider-left-cubes.png")}
              className="slider-left"
              alt="slider photos"
            />
            <h2 className="m-4">Grow up your business</h2>
          </Container>
          <img
            src={require("../assets/images/logo.png")}
            className="main-logo"
            alt="tazhval logo"
          />
          <img
            src={require("../assets/images/slider-right-cubes.png")}
            className="slider-right"
            alt="slider photos"
          />
        </div>
      </div>
    );
  }
}

export default Slider;
