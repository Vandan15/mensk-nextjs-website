"use client";

import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";

const SingleNewsOne = ({ news = {} }) => {
  const { image, subtitle, title, date, comments, slug } = news;

  const blogUrl = `/blog/${slug}`;

  return (
    <div className="news-one__single">
      <div className="news-one__img">
        <Image src={typeof image === 'string' ? require(`@/images/blog/${image}`).default.src : image.src} alt={title} />
        <Link href={blogUrl}>
          <i className="fas fa-arrow-right" style={{
            fontSize: '18px',
            color: '#fff',
            backgroundColor: '#007bff',
            padding: '12px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            transition: 'all 0.3s ease'
          }}></i>
        </Link>
      </div>
      <div className="news-one__content">
        {subtitle&&<p className="news-one__sub-title">{subtitle}</p>}
        <h3 className="news-one__title">
          <Link href={blogUrl}>{title}</Link>
        </h3>
        <ul className="list-unstyled news-one__meta">
          <li>
            <Link href={blogUrl}>
              <i className="far fa-clock"></i> {date}
            </Link>
          </li>
          {/* <li>
            <span>/</span>
          </li>
          <li>
            <Link href={blogUrl}>
              <i className="far fa-comments"></i> {comments} Comments
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default SingleNewsOne;
