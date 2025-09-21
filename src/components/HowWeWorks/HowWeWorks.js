"use client";

import { howWeWorks } from "@/data/howWeWorks";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleHowWeWork from "./SingleHowWeWork";
import Link from "next/link";

const { tagline, title, works } = howWeWorks;

const HowWeWorks = () => {
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
        <Row>
          <Col xl={12} className="text-center">
            <div className="how-we-works__cta">
              <Link href="/contact" className="thm-btn">
                Start Your Strategic Assessment
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowWeWorks;
