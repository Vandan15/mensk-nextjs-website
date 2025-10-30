"use client";

import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";

const SingleNewsOne = ({ news = {} }) => {
  const { image, imageAlt, subtitle, title, date, comments, slug, excerpt, categories } = news;

  const blogUrl = `/blog/${slug}`;

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Get image source
  const getImageSrc = () => {
    if (typeof image === 'string') {
      // If it's a URL, use it directly
      if (image.startsWith('http')) {
        return image;
      }
      // Otherwise, try to require it from local images
      try {
        return require(`@/images/blog/${image}`).default.src;
      } catch (e) {
        return image;
      }
    }
    return image?.src || image;
  };

  return (
    <div className="news-one__single">
      <div className="news-one__img">
        <Image src={getImageSrc()} alt={imageAlt || title} />
        <Link href={blogUrl}>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <div className="news-one__content">
        {/* {(subtitle || (categories && categories.length > 0)) && (
          <p className="news-one__sub-title">
            {subtitle || categories[0]?.name}
          </p>
        )} */}
        <h3 className="news-one__title">
          <Link href={blogUrl}>{title}</Link>
        </h3>
        <ul className="list-unstyled news-one__meta">
          <li>
            <Link href={blogUrl}>
              <i className="far fa-clock"></i> {formatDate(date)}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleNewsOne;
