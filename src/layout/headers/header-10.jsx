import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { Search, Email } from "@svg/index";
import Menus from "./menus";
import SearchPopup from "./component/search-popup";
import logo_dark from "@assets/img/logo/logo-black-solid.svg";
import logo_light from "@assets/img/logo/logo.svg";
import OffCanvasFive from "@components/common/off-canvas/off-canvas-5";

const HeaderTen = ({active}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header__area header__transparent">
          <div className={`header__bottom-11 header__white ${active?'header__white-slider slider-pagination-11-white':''}`}>
            <div className="mega-menu-wrapper p-relative">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                    <div className="logo">
                      <Link href="/">
                        <Image
                          className="logo-dark"
                          src={logo_dark}
                          alt="logo"
                        />
                        <Image
                          className="logo-light"
                          src={logo_light}
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-8 col-lg-8 d-none d-lg-block">
                    <div className="main-menu main-menu-11 main-menu-ff-syne">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                    <div className="header__bottom-right-8 d-flex justify-content-end align-items-center">
                      <div className="header__info-8 header__info-11 mr-90 d-none d-xxl-block">
                        <ul>
                          <li>
                            <span>
                              <a href="mailto:hello@sarancruzer.com">
                                <span>
                                  <Email />
                                </span>
                                hello@sarancruzer.com
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="header__action-8 header__action-11 d-none d-xl-block">
                        <ul>
                          <li>
                            <a
                              style={{ cursor: "pointer" }}
                              className="search-open-btn"
                              onClick={() => setIsSearchOpen(true)}
                            >
                              <Search />
                            </a>
                          </li>
                          <li>
                            <button
                              onClick={() => setIsOffCanvasOpen(true)}
                              type="button"
                              className="hamburger-btn hamburger-btn-text  offcanvas-open-btn"
                              data-menu-text="menu"
                            >
                              <span></span>
                              <span></span>
                              <span></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="header__hamburger ml-50 d-xl-none">
                        <button
                          onClick={() => setIsOffCanvasOpen(true)}
                          type="button"
                          className="hamburger-btn hamburger-btn-text  offcanvas-open-btn"
                          data-menu-text="menu"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* search modal start */}
      <SearchPopup
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      {/* search modal end */}

      {/* off canvas start */}
      <OffCanvasFive
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderTen;
