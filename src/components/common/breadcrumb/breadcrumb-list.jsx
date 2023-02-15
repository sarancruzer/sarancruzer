import React from "react";

const BreadcrumbList = ({ title, subtitle }) => {
  return (
    <div className="breadcrumb__list">
      <span>
        <a href="#">Home</a>
      </span>
      <span className="dvdr">
        <i className="fa-solid fa-circle-small"></i>
      </span>
      <span>
        <a href="#">{title}</a>
      </span>
      <span className="dvdr">
        <i className="fa-solid fa-circle-small"></i>
      </span>
      <span>{subtitle}</span>
    </div>
  );
};

export default BreadcrumbList;
