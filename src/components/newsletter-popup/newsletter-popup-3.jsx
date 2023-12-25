import React from "react";
import Link from "next/link";
// internal
import SocialLinks from "@components/social";
import {Email,Close} from "@svg/index";
import bg_img from '@assets/img/newsletter/newsletter-3.jpg';

const NewsletterPopupThree = () => {
  // handleSubmit
  const handleSubmit = e => {e.preventDefault()};
  return (
    <div className="newsletter__area newsletter__area-3 newsletter-demo">
      <div className="newsletter__wrapper newsletter__wrapper-3">
        <div className="newsletter__close newsletter__close-3">
          <button
            type="button"
            className="newsletter__close-btn newsletter__close-btn-3 newsletter-close-btn"
          >
            <Close />
          </button>
        </div>
        <div
          className="newsletter__thumb newsletter__thumb-3 include-bg"
          style={{backgroundImage:`url(${bg_img.src})`}}
        ></div>
        <span className="newsletter__title-pre">sarancruzer Discount</span>
        <h3 className="newsletter__title-3">Get 16% off</h3>
        <p>
          Subscribe now and receive a discount on <br /> your first order
        </p>

        <form onSubmit={handleSubmit}>
          <div className="newsletter__input newsletter__input-2 newsletter__input-3">
            <input type="email" placeholder="Your email address" />
            <button type="button">
              Submit{" "}
              <Email/>
            </button>
          </div>
        </form>
        <div className="newsletter__proposal">
          <p>
            <Link href="/register">Sign up</Link> for Exclusive Updates
          </p>
        </div>
        <div className="newsletter__social">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopupThree;
