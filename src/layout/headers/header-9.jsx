import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import Email from "@svg/email";
import Search from "@svg/search";
import Menus from "./menus";
import logo from "@assets/img/logo/logo.svg";
import useSticky from "@hooks/use-sticky";
import SearchPopup from "./component/search-popup";
import OffCanvasMain from "@components/common/off-canvas";

const HeaderNine = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header__area header__transparent">
          <div
            className={`header__bottom-8 header__sticky header__sticky-black header__sticky-black-2 ${
              sticky ? "header-sticky" : ""
            }`}
            id="header-sticky"
          >
            <div className="container-fluid">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                    <div className="logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-8 col-lg-8 d-none d-lg-block">
                    <div className="main-menu main-menu-8 pl-95 main-menu-ff-space">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                    <div className="header__bottom-right-8 d-flex justify-content-end align-items-center">
                      <div className="header__info-8 mr-90 d-none d-xxl-block">
                        <ul>
                          <li>
                            <span>
                              <a href="mailto:hello@harry.com">
                                <Email />
                                hello@harry.com
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="header__action-8 d-none d-xl-block">
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
                              className="hamburger-btn-8 offcanvas-open-btn"
                            >
                              Menu
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="header__hamburger ml-50 d-xl-none">
                        <button
                          onClick={() => setIsOffCanvasOpen(true)}
                          type="button"
                          className="hamburger-btn offcanvas-open-btn"
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
       <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      {/* search modal end */}

      {/* full canvas area start */}
      <OffCanvasMain
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* full canvas area end */}
    </>
  );
};

export default HeaderNine;
