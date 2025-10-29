"use client";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsDetailsLeft from "./NewsDetailsLeft";

const NewsDetailsPage = ({ blogDetails }) => {
  if (!blogDetails) {
    return (
      <section className="news-details">
        <Container>
          <Row>
            <Col xl={12} lg={12}>
              <div className="text-center py-5">
                <h2>Blog post not found</h2>
                <p>The requested blog post could not be found.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className="news-details">
      <Container>
        <Row>
          <Col xl={12} lg={12}>
            <NewsDetailsLeft news={blogDetails} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsDetailsPage;
