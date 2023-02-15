import React from "react";
import Link from "next/link";
// internal
import Close from "@svg/close";
import bg_img from '@assets/img/newsletter/newsletter-2.jpg';

const NewsletterPopupTwo = () => {
   // handleSubmit
   const handleSubmit = e => {e.preventDefault()};
  return (
    <div className="newsletter__area newsletter__area-2 newsletter-demo">
      <div className="newsletter__wrapper newsletter__wrapper-2">
        <div className="newsletter__close">
          <button
            type="button"
            className="newsletter__close-btn newsletter__close-btn-2 newsletter-close-btn"
          >
            <Close />
          </button>
        </div>
        <div
          className="newsletter__thumb newsletter__thumb-2 include-bg"
          style={{backgroundImage:`url(${bg_img.src})`}}
        ></div>
        <h3 className="newsletter__title-2">
          Subscribe <br />
          Our newsletters
        </h3>
        <p>The city and town name generator uses.</p>

        <form onSubmit={handleSubmit}>
          <div className="newsletter__input newsletter__input-2 d-sm-flex align-items-center">
            <input type="email" placeholder="Email address" />
            <button type="button">Subscribe</button>
          </div>
          <div className="newsletter__agree newsletter__agree-2 d-flex align-items-start mb-35">
            <input className="e-check-input" type="checkbox" id="h-agree" />
            <label className="e-check-label" htmlFor="h-agree">
              I agree to the <Link href="/policy">Privacy Policy.</Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopupTwo;
