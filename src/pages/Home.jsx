import React, { Component } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container fluid="true" className="px-0">
          <Menu />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Home;
