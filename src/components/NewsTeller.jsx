import React, { Component } from "react";
import { Row, Form, InputGroup, Button } from "react-bootstrap";
import envelop from "../assets/images/envelop-icon.png";
import mobile from "../assets/images/mobile-icon.png";

class NewsTeller extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Form className="newsteller-form">
            <InputGroup>
              <InputGroup.Prepend className="form-icon">
                <InputGroup.Text id="inputGroupPrepend">
                  <img src={envelop} alt="" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="email"
                placeholder="Email adress"
                aria-describedby="inputGroupPrepend"
                required
                className="input-text"
              />
            </InputGroup>
            <Button className="btn" variant="success" type="submit">
              Subscribe
            </Button>
          </Form>
        </Row>
        <Row className="justify-content-center">
          <Form className="newsteller-form">
            <InputGroup>
              <InputGroup.Prepend className="form-icon">
                <InputGroup.Text id="inputGroupPrepend">
                  <img src={mobile} alt="" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="number"
                placeholder="Phone number"
                aria-describedby="inputGroupPrepend"
                required
                className="input-text"
              />
            </InputGroup>
            <Button className="btn" variant="success" type="submit">
              Subscribe
            </Button>
          </Form>
        </Row>
      </React.Fragment>
    );
  }
}

export default NewsTeller;
