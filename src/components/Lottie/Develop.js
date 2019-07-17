import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./LottieFiles/developLottie.json";

class Develop extends Component {
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
        <h5 className="text-center">Developing</h5>
      </div>
    );
  }
}

export default Develop;
