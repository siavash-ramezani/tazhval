import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./LottieFiles/marketingLottie.json";

class Marketing extends Component {
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
        <h5 className="text-center">Marketing</h5>
      </div>
    );
  }
}

export default Marketing;
