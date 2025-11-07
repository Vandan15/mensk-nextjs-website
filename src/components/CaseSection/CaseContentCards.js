"use client";

import React from "react";
import { Col, Row } from "react-bootstrap";

const CaseContentCards = ({
  title = "",
  text1 = "",
  text2 = "",
  text3 = "",
  text4 = "",
  points = [],
}) => {
  return (
    <div className="case-details__content">
      <Row>
        <Col xs={12}>
          <div className="case-details__content-left">
            <h3 className="case-details__content-title">{title}</h3>
            {text1 && <p className="case-details__content-text-1">{text1}</p>}
            {text2 && <p className="case-details__content-text-2">{text2}</p>}
            {text3 && <p className="case-details__content-text-3">{text3}</p>}
          </div>
        </Col>
        <Col>
          <div className="case-content-cards__container">
            <div className="case-content-cards__grid">
              {points.map((point, i) => (
                <div key={i} className="case-content-card">
                  <div className="case-content-card__icon">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="case-content-card__content">
                    <p>{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CaseContentCards;
