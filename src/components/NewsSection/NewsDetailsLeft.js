"use client";

import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";

const NewsDetailsLeft = ({ news = {} }) => {
  const {
    image,
    imageAlt,
    subtitle,
    date,
    title,
    content,
    excerpt,
    tags = [],
    categories = [],
    author,
    slug,
  } = news;


  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return null;
  }

  return (
    <div className="news-details__left">
      {/* {image && (
        <div className="news-details__img">
          <Image src={image} alt={imageAlt || title} />
        </div>
      )} */}
      <div className="news-details__content">
        {(subtitle || (categories && categories.length > 0)) && (
          <p className="news-details__sub-title">
            {subtitle || categories[0]?.name}
          </p>
        )}
        <ul className="list-unstyled news-details__meta">
          <li>
            <i className="far fa-clock"></i> {formatDate(date)}
          </li>
          {author && author.name && (
            <>
              <li>
                <span>/</span>
              </li>
              <li>
                <i className="far fa-user"></i> {author.name}
              </li>
            </>
          )}
        </ul>
        <h3 className="news-details__title">{title}</h3>
        {content && (
          <div
            className="news-details__content-html"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
      {/* {tags && tags.length > 0 && (
        <div className="news-details__bottom">
          <p className="news-details__tags">
            <span>Tags</span>
            {tags.map((tag, i) => (
              <Link href={`/blog?tag=${tag.slug}`} key={i}>
                {tag.name}
              </Link>
            ))}
          </p>
        </div>
      )} */}
    </div>
  );
};

export default NewsDetailsLeft;
