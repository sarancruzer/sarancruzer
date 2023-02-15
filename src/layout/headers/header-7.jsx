import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import logo from '@assets/img/logo/logo-black.svg';
import useSticky from '@hooks/use-sticky';
import Menus from './menus';
import OffCanvasSix from '@components/common/off-canvas/off-canvas-6';

const HeaderSeven = () => {
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header__area">
          <div className={`header__bottom-6 header__padding-6 header-box-plr-245 header__sticky header__sticky-white ${sticky ? 'header-sticky' : ''}`} id="header-sticky">
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
                  <div className="col-xxl-7 col-xl-8 col-lg-7 d-none d-lg-block">
                    <div className="main-menu main-menu-6">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-8 col-sm-7 col-4">
                    <div className="header__bottom-right-6 d-flex justify-content-end align-items-center pl-30">
                      <div className="header__btn-6 d-none d-sm-block">
                        <Link href="/contact" className="tp-btn-blue-2 tp-link-btn-3">
                          Contact Us
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                      <div className="header__hamburger ml-50 d-lg-none">
                        <button onClick={() => setIsOffCanvasOpen(true)} type="button" className="hamburger-btn hamburger-btn-black offcanvas-open-btn">
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

export default HeaderSeven;