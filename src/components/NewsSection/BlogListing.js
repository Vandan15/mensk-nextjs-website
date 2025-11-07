"use client";

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleNewsOne from "./SingleNewsOne";
import BlogPagination from "./BlogPagination";

const BlogListing = ({ initialPosts, pageInfo, className = "news-page", hideTitle = false }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [currentPageInfo, setCurrentPageInfo] = useState(pageInfo);
  const [loading, setLoading] = useState(false);

  const loadMorePosts = async (cursor) => {
    setLoading(true);
    try {
      const response = await fetch('/api/blog/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ after: cursor }),
      });

      const data = await response.json();
      setPosts([...posts, ...data.posts]);
      setCurrentPageInfo(data.pageInfo);
    } catch (error) {
      console.error('Error loading more posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={className}>
      <Container>
        {!hideTitle && (
          <Title
            title="Latest Insights & Articles"
            tagline="Our Blog"
            className="text-center"
          />
        )}
        <Row>
          {posts.map((post, index) => (
            <Col
              xl={4}
              lg={6}
              md={6}
              key={post.id}
              className="animated fadeInUp"
            >
              <SingleNewsOne news={post} />
            </Col>
          ))}
        </Row>
        {currentPageInfo.hasNextPage && (
          <Row>
            <Col xl={12} className="text-center">
              <button
                className="thm-btn"
                onClick={() => loadMorePosts(currentPageInfo.endCursor)}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default BlogListing;
