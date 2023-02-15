import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape from "@assets/img/shape/offcanvas-shape-3.png";
import logo from "@assets/img/logo/logo-black.svg";
import insta_img_1 from "@assets/img/instagram/offcanvas/instagram-1.png";
import insta_img_2 from "@assets/img/instagram/offcanvas/instagram-2.png";
import insta_img_3 from "@assets/img/instagram/offcanvas/instagram-3.png";
import insta_img_4 from "@assets/img/instagram/offcanvas/instagram-4.png";
import insta_img_5 from "@assets/img/instagram/offcanvas/instagram-5.png";
import insta_img_6 from "@assets/img/instagram/offcanvas/instagram-6.png";
import { Close, HighlightShapeNine } from "@svg/index";
import SocialLinks from "@components/social";
import MobileMenus from "./mobile-menus";

// single instagram
function SingleInstagram({ img }) {
  return (
    <div className="col-4">
      <div className="offcanvas__instagram-thumb w-img">
        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
          <Image
            src={img}
            alt="instagram img"
            style={{ width: "100%", height: "100%" }}
          />
        </a>
      </div>
    </div>
  );
}

const OffCanvasFour = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {
  return (
    <React.Fragment>
      <div
        className={`offcanvas__area offcanvas__area-5 ${
          isOffCanvasOpen ? "offcanvas-opened" : ""
        }`}
      >
        <div className="offcanvas__wrapper offcanvas__wrapper-5">
          <div className="offcanvas__shape">
            <Image className="offcanvas__shape-3" src={shape} alt="shape" />
          </div>
          <div className="offcanvas__close">
            <button
              onClick={() => setIsOffCanvasOpen(false)}
              className="offcanvas__close-btn offcanvas__close-btn-5 offcanvas-close-btn"
            >
              <Close />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="mobile-menu fix mb-40 menu-counter mean-container d-lg-none">
              <div className="mean-bar">
                {/* MobileMenus start*/}
                <MobileMenus />
                {/* MobileMenus end*/}
              </div>
            </div>
            <div className="offcanvas__menu offcanvas__menu-5 offcanvas__menu-ff-inter d-none d-lg-block">
              <nav>
                <ul>
                  <li>
                    <Link href="/home-agency">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/services">Service</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">Blog</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="offcanvas__btn-5 mb-60">
              <Link href="/register" className="tp-btn-offcanvas-blue">
                Register Now
              </Link>
            </div>
            <div className="offcanvas__instagram mb-55">
              <div className="offcanvas__instagram-top">
                <h4 className="offcanvas__instagram-title">
                  Instagram
                  <HighlightShapeNine />
                </h4>
              </div>
              <div className="offcanvas__instagram-wrapper">
                <div className="row gx-2 gy-2">
                  <SingleInstagram img={insta_img_1} />
                  <SingleInstagram img={insta_img_2} />
                  <SingleInstagram img={insta_img_3} />
                  <SingleInstagram img={insta_img_4} />
                  <SingleInstagram img={insta_img_5} />
                  <SingleInstagram img={insta_img_6} />
                </div>
              </div>
            </div>
            <div className="offcanvas__social-5 mb-20">
              <h3 className="offcanvas__social-title-5">Follow :</h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      {/* overlay */}
      <div
        onClick={() => setIsOffCanvasOpen(false)}
        className={`body-overlay ${isOffCanvasOpen ? "opened" : ""}`}
      ></div>
      {/* overlay */}
    </React.Fragment>
  );
};

export default OffCanvasFour;
