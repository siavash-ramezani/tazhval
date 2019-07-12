import React, { Component } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import Slider from "../components/Slider";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container fluid="true" className="px-0">
          <Slider />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Home;
