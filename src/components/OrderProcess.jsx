import React, { Component } from "react";
import { Row } from "react-bootstrap";

import plane1 from "../assets/images/plane1.svg";
import plane2 from "../assets/images/plane2.svg";
import plane3 from "../assets/images/plane3.svg";
import plane4 from "../assets/images/plane4.svg";
import plane5 from "../assets/images/plane5.svg";

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
              src={plane1}
              alt=""
              className="position-absolute plane first-plane"
            />
            <Order />
          </div>
          <div className="position-relative">
            <img
              src={plane2}
              alt=""
              className="position-absolute plane second-plane"
            />
            <Analitics />
          </div>
          <div className="position-relative">
            <img
              src={plane3}
              alt=""
              className="position-absolute plane plane3"
            />
            <Design />
          </div>
        </Row>
        <Row className="my-5 justify-content-around">
          <div className="position-relative">
            <img src={plane5} alt="" className="position-absolute plane4 " />
            <Marketing />
          </div>
          <div className="position-relative">
            <Develop />
            <img src={plane4} alt="" className="position-absolute plane4" />
          </div>
        </Row>
      </div>
    );
  }
}

export default OrderProcess;
