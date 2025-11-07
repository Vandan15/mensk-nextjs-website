"use client";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceDetailsRight from "./ServiceDetailsRight";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";

const ServiceDetails = ({ service = {} }) => {
  return (
    <section className="service-details">
      <Container>
        <Row>
          {/* <Col xl={4} lg={5}>
            <ServiceDetailsSidebar />
          </Col> */}
          <Col xl={12} lg={12}>
            <ServiceDetailsRight service={service} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetails;
