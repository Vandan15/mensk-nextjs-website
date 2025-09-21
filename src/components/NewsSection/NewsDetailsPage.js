"use client";

import { getBlogDetails, getBlogDetailsBySlug } from "@/data/newsSection";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsDetailsLeft from "./NewsDetailsLeft";

const NewsDetailsPage = ({ blogId, blogSlug }) => {
  let blogDetails;

  if (blogId) {
    blogDetails = getBlogDetails(parseInt(blogId));
  } else if (blogSlug) {
    blogDetails = getBlogDetailsBySlug(blogSlug);
  } else {
    blogDetails = getBlogDetails(1);
  }

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
          {/* <Col xl={4} lg={5}>
            <div>Sidebar content can be added here</div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default NewsDetailsPage;
