"use client";

import React, { useState } from "react";
import { Image } from "react-bootstrap";

const SingleTeamOne = ({ team = {} }) => {
  const { name, title, image, socials, description } = team;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="team-one__single"
      style={{ cursor: 'pointer', position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="team-one__img">
        <Image src={require(`@/images/team/${image}`).default.src} alt="" />
        <div className="team-one__content">
          <h3 className="team-one__name">{name}</h3>
          <p className="team-one__title">{title}</p>
        </div>
        {isHovered && (
          <div className="team-one__description" style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            padding: '15px',
            transform: 'translateY(0)',
            transition: 'all 0.3s ease',
            zIndex: 10
          }}>
            <p style={{
              display: '-webkit-box',
              // WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: '14px',
              margin: '0',
              lineHeight: '1.4'
            }}>
              {description}
            </p>
          </div>
        )}
        <ul className="list-unstyled team-one__social">
          {socials.map(({ id, href, icon }) => (
            <li key={id}>
              <a href={href} target="_blank">
                <i className={icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleTeamOne;
