import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import Menus from "./menus";
import logo from "@assets/img/logo/logo-black.svg";
import { User, HeartThree, Cart, SearchTwo } from "@svg/index";
import useSticky from "@hooks/use-sticky";
import CartSidebar from "@components/common/sidebar/cart-sidebar";
import OffCanvasSix from "@components/common/off-canvas/off-canvas-6";

const HeaderTwelve = ({ style_2 = false }) => {
  const { sticky } = useSticky();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className={`header__area ${style_2 ? "" : "header__transparent"}`}>
          <div
            className={`header__bottom-13 header__padding-7 header__black-3 header__bottom-border-4 ${
              style_2 ? "header__bottom-13-white" : "grey-bg-17"
            } header__sticky ${sticky ? "header-sticky" : ""}`}
            id="header-sticky"
          >
            <div className="container-fluid">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-1 col-xl-2 col-lg-4 col-md-4 col-sm-5 col-8">
                    <div className="logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                    <div className="main-menu main-menu-13 pl-45 main-menu-ff-space">
                      <nav id="mobile-menu-3">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-3 col-lg-8 col-md-8 col-sm-7 col-4">
                    <div className="header__bottom-right-13 d-flex justify-content-end align-items-center pl-30">
                      <div className="header__search-13">
                        <form action="#">
                          <div className="header__search-input-13 d-none d-xxl-block">
                            <input
                              type="text"
                              placeholder="Search for products..."
                            />
                            <button type="submit">
                              <SearchTwo />
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="header__action-13 d-none d-md-block">
                        <ul>
                          <li className="d-xxl-none">
                            <a href="#">
                              <SearchTwo />
                            </a>
                          </li>
                          <li>
                            <Link href="/login">
                              <User />
                            </Link>
                          </li>
                          <li>
                            <Link href="/wishlist">
                              <HeartThree />
                              <span className="tp-item-count">7</span>
                            </Link>
                          </li>
                          <li>
                            <button
                              className="cartmini-open-btn"
                              onClick={() => setIsCartOpen(!isCartOpen)}
                            >
                              <Cart />
                              <span className="tp-item-count">3</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="header__hamburger ml-30 d-xl-none">
                        <button
                          onClick={() => setIsOffCanvasOpen(true)}
                          type="button"
                          className="hamburger-btn hamburger-btn-black offcanvas-open-btn"
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

      {/* cart mini area start */}
      <CartSidebar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      {/* cart mini area end */}

      {/* off canvas start */}
      <OffCanvasSix
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderTwelve;
