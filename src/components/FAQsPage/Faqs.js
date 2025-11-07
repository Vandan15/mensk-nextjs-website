"use client";

import React, { useState } from "react";

const Faqs = ({ faqs = [], className = "", title = "Frequently Asked Questions" }) => {
  const [current, setCurrent] = useState(1);
  const faqsLength = faqs.length;

  return (
    <div className={className}>
      {title && (
        <div className="text-center mb-4">
          <h2 className="section-title">{title}</h2>
        </div>
      )}
      <div
        className="accrodion-grp faq-one-accrodion overflow-hidden"
      >
      {faqs.map(({ id, title, text }) => (
        <div
          key={id}
          className={`accrodion${id === current ? " active" : ""}${
            id === faqsLength ? " last-chiled" : ""
          }`}
        >
          <div onClick={() => setCurrent(id)} className="accrodion-title">
            <h4>{title}</h4>
          </div>
          <div
            className={`accrodion-content ${
              id === current ? "d-block" : "d-none"
            }`}
          >
            <div
              className={`inner animated${id === current ? " fadeInUp" : ""}`}
            >
              <p>{text}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Faqs;
