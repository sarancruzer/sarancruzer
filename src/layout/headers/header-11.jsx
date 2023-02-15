import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { Email, Phone, Search } from "@svg/index";
import SearchPopup from "./component/search-popup";
import Menus from "./menus";
import { HeaderSocial } from "@components/social";
import Languages from "./component/languages";
import logo_light from "@assets/img/logo/logo-red.svg";
import logo_dark from "@assets/img/logo/logo-red-black.svg";
import useSticky from "@hooks/use-sticky";
import OffCanvasSix from "@components/common/off-canvas/off-canvas-6";

const HeaderEleven = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header__area header__transparent">
          <div className="header__top-10 d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-10">
                  <div className="header__info header__info-10">
                    <ul>
                      <li>
                        <a href="mailto:info@educal.com">
                          <span>
                            <Email />
                          </span>
                          info@example.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:964-742-44-763">
                          <span>
                            <Phone />
                          </span>
                          +964 742 44 763
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2">
                  <div className="header__top-right d-flex justify-content-end align-items-center">
                    <div className="header__social-10">
                      <ul>
                        <HeaderSocial />
                      </ul>
                    </div>
                    <div className="header__lang header__lang-10 ml-20">
                      <Languages />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`header__bottom-10 header__sticky ${sticky ? "header-sticky" : ""}`} id="header-sticky">
            <div className="container">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                    <div className="logo">
                      <Link href="/">
                        <Image
                          className="logo-light"
                          src={logo_light}
                          alt="logo"
                        />
                        <Image
                          className="logo-dark"
                          src={logo_dark}
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-7 col-xl-8 col-lg-8 d-none d-lg-block">
                    <div className="main-menu main-menu-10 main-menu-ff-space">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                    <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                      <div className="header__action-10 d-none d-xl-block">
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
                        </ul>
                      </div>
                      <div className="header__hamburger ml-50 d-xl-none">
                        <button
                          onClick={() => setIsOffCanvasOpen(true)}
                          type="button"
                          className="hamburger-btn hamburger-btn-red offcanvas-open-btn"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                      <div className="header__btn-10 ml-30 d-none d-sm-block">
                        <Link href="/contact" className="tp-header-btn-3">
                          Donate
                        </Link>
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
      <OffCanvasSix
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderEleven;
