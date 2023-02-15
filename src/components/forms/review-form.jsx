import React from "react";

const ReviewForm = () => {
  return (
    <form>
      <div className="product-review-form-rating  mb-25">
        <h3 className="rate-title">Rate this product:</h3>
        <div className="product-review-rating-wrapper d-flex">
          <span>
            <i className="icon_star"></i>
          </span>
          <span>
            <i className="icon_star"></i>
          </span>
          <span>
            <i className="icon_star"></i>
          </span>
          <span>
            <i className="icon_star"></i>
          </span>
          <span>
            <i className="icon_star_alt"></i>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="product-review-input is-textarea">
            <textarea placeholder="Your Review Here..."></textarea>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product-review-input">
            <input type="text" placeholder="Name*" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product-review-input">
            <input type="email" placeholder="Email*" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="product-review-agree d-flex align-items-start mb-25">
            <input type="checkbox" id="p-agree" />
            <label htmlFor="p-agree">
              Save my name, email, and website in this browser for the next time
              I comment
            </label>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="product-review-btn">
            <button className="tp-btn" type="submit">
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
