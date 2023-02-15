import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import Menus from './menus';
import logo from '@assets/img/logo/logo.svg';
import useSticky from '@hooks/use-sticky';
import OffCanvasFive from '@components/common/off-canvas/off-canvas-5';

const HeaderFive = () => {
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header__area">
          <div className={`header__bottom header__bottom-3 header__border-3 header-box-plr-245 header__sticky header__sticky-black ${sticky ? 'header-sticky' : ''}`} id="header-sticky">
            <div className="container-fluid">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                    <div className="logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-8 col-lg-8 d-none d-lg-block">
                    <div className="main-menu main-menu-2 main-menu-3 main-menu-ff-space">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                    <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                      <div className="header__social d-none d-xl-block">
                        <ul>
                          <li>
                            <a href="http://twitter.com" target="_blank" rel="noreferrer">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="http://facebook.com" target="_blank" rel="noreferrer">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="header__btn d-none d-lg-block">
                        <Link href="/contact" className="tp-header-btn">contact</Link>
                      </div>
                      <div className="header__hamburger ml-50 d-lg-none">
                        <button onClick={() => setIsOffCanvasOpen(true)} type="button" className="hamburger-btn offcanvas-open-btn">
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

       {/* off canvas start */}
       <OffCanvasFive
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderFive;