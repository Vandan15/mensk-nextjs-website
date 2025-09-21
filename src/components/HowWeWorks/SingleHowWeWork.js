import React from "react";
import { Image } from "react-bootstrap";

const SingleHowWeWork = ({ work = {} }) => {
  const { image, title, points } = work;

  return (
    <li className="how-we-works__single animated fadeInUp">
      <div className="how-we-works__icon-box">
        <div className="how-we-works__image">
          <Image src={image.src} alt={title} />
          <div className="how-we-works__count"></div>
        </div>
      </div>
      <h3 className="how-we-works__title">{title}</h3>
      <ul className="how-we-works__points">
        {points && points.map((point, index) => (
          <li key={index} className="how-we-works__point">
            <div className="how-we-works__point-icon">
              <i className="fa fa-check"></i>
            </div>
            <span className="how-we-works__point-text">{point}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SingleHowWeWork;
