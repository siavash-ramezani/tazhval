import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./LottieFiles/orderLottie.json";

class Order extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <Lottie options={defaultOptions} height={200} width={200} />
        <h5 className="text-center">Accepting Your Order</h5>
      </div>
    );
  }
}

export default Order;
