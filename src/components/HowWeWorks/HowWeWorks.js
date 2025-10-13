"use client";

import { howWeWorks } from "@/data/howWeWorks";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleHowWeWork from "./SingleHowWeWork";
import Link from "next/link";

const HowWeWorks = (props) => {
  const {
    data = howWeWorks,
    cta,
  } = props;
  const { tagline, title, works } = data;
  return (
    <section className="how-we-works">
      <Container>
        <Title title={title} tagline={tagline} className="text-center" />
        <Row>
          <Col xl={12}>
            <ul className="list-unstyled how-we-works__list-box">
              {works.map((work) => (
                <SingleHowWeWork work={work} key={work.id} />
              ))}
            </ul>
          </Col>
        </Row>
        {cta?.title && (
          <Row>
            <Col xl={12} className="text-center">
              <div className="how-we-works__cta">
                <Link href={cta?.link || "/contact"} className="thm-btn">
                  {cta?.title}
                </Link>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default HowWeWorks;
