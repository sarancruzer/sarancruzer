import React from "react";
import Link from "next/link";
// internal
import { CloseTwo } from "@svg/index";
import SocialLinks from "@components/social";
import MobileMenus from "./mobile-menus";

const OffCanvasMain = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {

  return (
    <React.Fragment>
      <div
        className={`offcanvas__full ${
          isOffCanvasOpen ? "offcanvas-full-opened" : ""
        }`}
      >
        <div className="offcanvas__full-wrapper d-flex flex-column justify-content-between">
          <div className="offcanvas__full-inner">
            <div className="offcanvas__close">
              <button
                onClick={() => setIsOffCanvasOpen(false)}
                className="offcanvas__full-close-btn offcanvas-close-btn"
              >
                <CloseTwo />
              </button>
            </div>
            <div className="offcanvas__full-content">
              {/* main menu start */}
              <div className="mobile-menu fix mb-40 menu-counter d-md-none mean-container">
                <div className="mean-bar">
                  {/* MobileMenus start*/}
                  <MobileMenus/>
                  {/* MobileMenus end*/}
                </div>
              </div>

              {/* main menu end */}
              <div className="offcanvas__full-menu menu-counter d-none d-md-block">
                <nav>
                  <ul>
                    <li className="has-dropdown">
                      <Link href="/">Home</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/">Main Home</Link>
                        </li>
                        <li>
                          <Link href="/home-portfolio">Personal Portfolio</Link>
                        </li>
                        <li>
                          <Link href="/home-freelancer">Freelancer</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/services">Service</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/services">Classic Style</Link>
                        </li>
                        <li>
                          <Link href="/services-2">Creative Agency</Link>
                        </li>
                        <li>
                          <Link href="/services-3">UI Service</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/blog-grid">Blog</Link>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/portfolio">Portfolio</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/portfolio">Classic Style</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-metro">Metro Style</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-slider">Classic Slider</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="offcanvas__full-footer">
            <div className="row align-items-center">
              <div className="col-xl-3">
                <div className="offcanvas__full-link">
                  <Link href="/policy">Privacy Policy</Link>
                  <Link href="/terms">Use of terms</Link>
                </div>
              </div>
              <div className="col-xl-9 order-first order-xl-last">
                <div className="offcanvas__full-right d-lg-flex justify-content-xl-end align-items-center">
                  <div className="offcanvas__info d-flex flex-wrap justify-content-lg-end align-items-center">
                    <div className="offcanvas__info-item">
                      <h4 className="offcanvas__info-item-title">
                        Information
                      </h4>
                      <p>
                        <a href="tel:964-742-44-763">+964 742 44 763</a>
                      </p>
                      <p>
                        <a href="mailto:support@harry.com">support@harry.com</a>
                      </p>
                    </div>
                    <div className="offcanvas__info-item">
                      <h4 className="offcanvas__info-item-title">Address</h4>
                      <p>
                        <a
                          rel="noreferrer"
                          href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723"
                          target="_blank"
                        >
                          32 East Trusel Court <br /> North Tonawanda, NY 14120
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="offcanvas__full-social offcanvas__social-3">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OffCanvasMain;
