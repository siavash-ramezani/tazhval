import React, { Component } from "react";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import Slider from "../components/Slider";
import ServiceCards from "../components/ServiceCards";
import Title from "../components/Title";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container fluid="true" className="px-0">
          <Slider />
          <Title title="Our Services" />
          <ServiceCards />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Home;
