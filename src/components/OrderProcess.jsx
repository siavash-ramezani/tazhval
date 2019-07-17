import React, { Component } from "react";
import { Row } from "react-bootstrap";

import plane from "../assets/images/plane.svg";
import Order from "./Lottie/Order";
import Analitics from "./Lottie/Analitics";
import Design from "./Lottie/Design";
import Develop from "./Lottie/Develop";
import Marketing from "./Lottie/Marketing";

class OrderProcess extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row className="my-5 justify-content-around">
          <div className="position-relative">
            <img
              src={plane}
              alt=""
              className="position-absolute plane first-plane"
            />
            <Order />
          </div>
          <Analitics />
          <Design />
        </Row>
        <Row className="my-5 justify-content-around">
          <Develop />
          <Marketing />
        </Row>
      </div>
    );
  }
}

export default OrderProcess;
