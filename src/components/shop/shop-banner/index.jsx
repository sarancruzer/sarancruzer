import React from 'react';
import Link from 'next/link';
// internal
import banner from '@assets/img/banner/banner-1.jpg';
import { RightArrowThree } from '@svg/index';

const ShopBanner = () => {
  return (
    <section className="banner__area">
      <div className="container">
        <div className="banner__inner include-bg" style={{backgroundImage:`url(${banner.src})`}}>
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="banner__content">
                <span>Apple iPhone 12 Pro</span>
                <h3 className="banner__title">
                  <Link href="/product-details">The wait is on: iphon 12 max pro</Link>
                </h3>
                <p>Last call for up to <span>32%</span> off! </p>

                <div className="banner__btn">
                  <Link href="/product-details" className="tp-btn">
                    Buy Now
                    <RightArrowThree/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;