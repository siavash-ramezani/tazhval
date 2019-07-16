import React, { Component } from "react";
import ServiceCard from "./ServiceCard";
import { Container, Row } from "react-bootstrap";
import graphicIcon from "../assets/images/graphic-icon.svg";
import graphicImage from "../assets/images/graphic-design.jpg";
import siteIcon from "../assets/images/internet-icon.svg";
import siteImage from "../assets/images/site-develop.jpg";
import appIcon from "../assets/images/mobile-app-icon.svg";
import appImage from "../assets/images/app-develop.jpg";
import uiIcon from "../assets/images/ux-icon.svg";
import uiImage from "../assets/images/ux-design.jpg";
import advertisingIcon from "../assets/images/advertising-icon.svg";
import advertisingImage from "../assets/images/advertising.jpg";

class ServiceCards extends Component {
  state = {
    services: [
      {
        id: 1,
        title: "Graphic Design",
        icon: graphicIcon,
        image: graphicImage,
        iconAlt: "grafic designing service icon",
        imageAlt: "grafic designing service image"
      },
      {
        id: 2,
        title: "Website Design & Development",
        icon: siteIcon,
        image: siteImage,
        iconAlt: "website designing and developing service icon",
        imageAlt: "website designing and developing service image"
      },
      {
        id: 3,
        title: "Application Design & Development",
        icon: appIcon,
        image: appImage,
        iconAlt: "application designing and developing service icon",
        imageAlt: "application designing and developing service image"
      },
      {
        id: 4,
        title: "UI/UX",
        icon: uiIcon,
        image: uiImage,
        iconAlt: "ui and ux service icon",
        imageAlt: "ux and ux service image"
      },
      {
        id: 5,
        title: "Advertising",
        icon: advertisingIcon,
        image: advertisingImage,
        iconAlt: "advertising service icon",
        imageAlt: "advertising service image"
      }
    ]
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-around my-5 mx-5">
          {this.state.services.map(item => (
            <ServiceCard
              key={item.id}
              cardTitle={item.title}
              icon={item.icon}
              image={item.image}
              iconAlt={item.iconAlt}
              imageAlt={item.imageAlt}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default ServiceCards;
