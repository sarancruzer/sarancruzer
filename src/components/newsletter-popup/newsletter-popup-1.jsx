import React from "react";
// internal
import Close from "@svg/close";
import bg_img from '@assets/img/newsletter/newsletter-1.jpg';

const NewsletterPopupOne = () => {
  // handleSubmit
  const handleSubmit = e => {e.preventDefault()};
  return (
    <div className="newsletter__area newsletter-demo ">
      <div className="newsletter__wrapper">
        <div className="newsletter__close">
          <button
            type="button"
            className="newsletter__close-btn newsletter-close-btn"
          >
            <Close />
          </button>
        </div>
        <div
          className="newsletter__thumb include-bg"
          style={{backgroundImage:`url(${bg_img.src})`}}
        ></div>
        <h3 className="newsletter__title">
          Keep up with our daily and weekly newsletters
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="newsletter__input">
            <input type="email" placeholder="Email address" />
            <button type="submit">Sign Up</button>
          </div>
          <div className="newsletter__agree d-flex align-items-start mb-35">
            <input className="e-check-input" type="checkbox" id="n-agree" />
            <label className="e-check-label" htmlFor="n-agree">
              The city and town name generator uses a database of over five
              million names across more countries
            </label>
          </div>
          <div className="newsletter__option">
            <p>Please, don’t ask me again</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopupOne;
