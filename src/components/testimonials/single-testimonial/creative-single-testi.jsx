import React from "react";
import Image from "next/image";

const CreativeSingleTesti = ({item}) => {
  const {id, desc, designation, name, ratings, user} = item || {};
  return (
    <React.Fragment>
      <div className="testimonial__rating testimonial__rating-6">
        {ratings.map((r, i) => (
          <a href="#" key={i}>
            <i className="fa-solid fa-star"></i>
          </a>
        ))}
      </div>
      <div className="testimonial__content-6">
        <p>{desc}</p>
      </div>
      <div className="testimonial__avater-6 d-flex align-items-center">
        <div className="testimonial__avater-thumb-6">
          <Image src={user} alt="image" />
        </div>
        <div className="testimonial__avater-info-6">
          <h3 className="testimonial__avater-title-6">{name}</h3>
          <span className="testimonial__avater-designation-6">
            {designation}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreativeSingleTesti;
