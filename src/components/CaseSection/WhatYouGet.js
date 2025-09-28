"use client";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";

const WhatYouGet = (props) => {
  const { tagline, title, text, points } = props;
  return (
    <section className="why-choose-one py-3">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="why-choose-one__right ms-0">
              {title && (
                <Title title={title} tagline={tagline} className="text-left" />
              )}
              {text && <p className="why-choose-one__text">{text}</p>}
              <ul className="list-unstyled why-choose-one__points">
                {points.map((point, i) => (
                  <li key={i}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{point.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatYouGet;
