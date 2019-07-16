import React, { Component } from "react";
import "../assets/css/index.css";
import { Row, Col } from "react-bootstrap";
class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row className="footer mx-0">
          <Row className="w-100">
            <Col className="px-0 position-relative">
              <img
                src={require("../assets/images/footer-left.png")}
                className="footer-left"
                alt="footer photos"
              />
            </Col>
            <Col>
              <ul className="mt-5">
                <li className="my-3">team</li>
                <li className="my-3">team</li>
                <li className="my-3">team</li>
              </ul>
            </Col>
            <Col>
              <ul className="mt-5">
                <li className="my-3">team</li>
                <li className="my-3">team</li>
                <li className="my-3">team</li>
              </ul>
            </Col>
            <Col className="px-0 position-relative">
              <img
                src={require("../assets/images/footer-right.png")}
                className="footer-right"
                alt="footer photos"
              />
            </Col>
          </Row>
          <Row className="w-100 justify-content-center align-items-center">
            <img
              src={require("../assets/images/mail-icon.png")}
              className="mx-3 footer-icons"
              alt="mail icon"
            />
            <img
              src={require("../assets/images/instagram-icon.png")}
              className="mx-3 footer-icons"
              alt="instagram icon"
            />
            <img
              src={require("../assets/images/facebook-icon.png")}
              className="mx-3 footer-icons"
              alt="facebook icon"
            />
            <img
              src={require("../assets/images/linkedin-icon.png")}
              className="mx-3 footer-icons"
              alt="linkedin icon"
            />
          </Row>
        </Row>

        <Row className="copyright mx-0 justify-content-around align-items-center">
          <p>
            All rights reserved <span>&#0169;</span>
            Tazhval (2019)
          </p>

          <p>Designed by Tazhval Studio (Farnaz)</p>
        </Row>
      </React.Fragment>
    );
  }
}

export default Footer;
