import React, { Component } from "react";
import { Card } from "react-bootstrap";
class ServiceCard extends Component {
  state = {};
  render() {
    return (
      <Card
        style={{ width: "14rem", height: "22rem" }}
        className="service-card px-0 mx-3 my-5"
      >
        <Card.Img
          variant="top"
          src={this.props.image}
          alt={this.props.imageAlt}
        />
        <Card.Body
          className="d-flex flex-column align-items-center justify-content-center
"
        >
          <Card.Img
            className="service-card-logo"
            variant="top"
            src={this.props.icon}
            alt={this.props.iconAlt}
          />
          <Card.Title className="mt-2 service-card-title">
            {this.props.cardTitle}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default ServiceCard;
