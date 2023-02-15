import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import Talk from '@svg/talk';
import Menus from './menus';
import logo_dark from '@assets/img/logo/logo-black-solid.svg';
import logo_light from '@assets/img/logo/logo.svg';
import OffCanvasSix from '@components/common/off-canvas/off-canvas-6';

const HeaderThirteen = () => {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header__area header__transparent">
          <div className="header__bottom-12">
            <div className="mega-menu-wrapper p-relative">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-8">
                    <div className="logo">
                      <Link href="/">
                        <Image className="logo-dark" src={logo_dark} alt="logo" />
                        <Image className="logo-light" src={logo_light} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-5 col-lg-4 d-none d-lg-block">
                    <div className="header__bottom-left-12 d-flex align-items-center">
                      <div className="header__info header__info-12 mr-20">
                        <ul>
                          <li>
                            <span>
                              <a href="mailto:contact@harry.com">Contact@harry.com</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="main-menu main-menu-12 d-none">
                        <nav id="mobile-menu-2">
                          <Menus />
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-8 col-sm-7 col-4">
                    <div className="header__bottom-right-8 d-flex justify-content-end align-items-center">
                      <div className="header__action-8 header__action-12">
                        <ul>
                          <li>
                            <button onClick={() => setIsOffCanvasOpen(true)} type="button" className="hamburger-btn-8 offcanvas-open-btn">Menu</button>
                          </li>
                        </ul>
                      </div>
                      <div className="header__btn-12 ml-70 d-none d-sm-block">
                        <Link href="/contact" className="header-btn-12 d-flex align-items-center">
                          Let’s talk
                          <div className="header-btn-12-icon">
                            <span>
                              <Talk/>
                            </span>
                          </div>
                        </Link>
                      </div>
                      <div className="header__hamburger ml-50 d-none">
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
      <OffCanvasSix
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderThirteen;