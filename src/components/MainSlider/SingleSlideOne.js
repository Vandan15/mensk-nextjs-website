"use client";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";

const SingleSlideOne = ({ slider = {}, showShape = false }) => {
  const { bg, title, subtitle, href } = slider;

  return (
    <>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${
            require(`@/images/backgrounds/${bg}`).default.src
          })`,
        }}
      ></div>

      {showShape && (
        <>
          <div className="main-slider-shape-1"></div>
          <div className="main-slider-shape-2"></div>
          <div className="main-slider-shape-3"></div>
        </>
      )}

      <Container>
        <Row>
          <Col xl={showShape ? 7 : 12}>
            <div className="main-slider__content">
              <h2>
                <TextSplit text={title} />
              </h2>
              <p className="text-description">{subtitle}</p>
              <Link href={href} className="thm-btn">
              Claim Your Free UAE Strategy Session
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleSlideOne;
