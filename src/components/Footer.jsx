import React, { Component } from "react";
import "../assets/css/Footer.css";
import { Row, Col } from "react-bootstrap";
class Footer extends Component {
  state = {};
  render() {
    return (
      <Row className="footer mx-0">
        <Col />
        <Col>
          <ul>
            <li>team</li>
            <li>team</li>
            <li>team</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>team</li>
            <li>team</li>
            <li>team</li>
          </ul>
        </Col>
        <Col />
      </Row>
    );
  }
}

export default Footer;
