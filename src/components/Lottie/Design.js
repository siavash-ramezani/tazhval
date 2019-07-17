import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./LottieFiles/designingLottie.json";

class Design extends Component {
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
        <h5 className="text-center">UI/UX And Graphic Design</h5>
      </div>
    );
  }
}

export default Design;
