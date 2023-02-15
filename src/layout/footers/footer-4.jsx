import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import SocialLinks from '@components/social';
import {Call, Email, LocationTwo, Opening} from '@svg/index';
import logo from '@assets/img/logo/logo.svg';
import logo_black from '@assets/img/logo/logo-black.svg';
import CopyrightText from './component/copyright-text';

const FooterFour = ({style_2=false}) => {
  return (
    <>
      <footer>
        <div className={`footer__area ${style_2?'footer__style-3':''}`} 
        data-bg-color={`footer-bg-${style_2?'grey-4':'black'}`}>
          <div className="footer__top footer__top-5">
            <div className="container">
              <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6">
                  <div className="footer__widget footer__widget-5 mb-50 footer-col-5-1">
                    <div className="footer__logo">
                      <Link href="/">
                        <Image src={style_2 ? logo_black : logo} alt="logo" />
                      </Link>
                    </div>

                    <div className="footer__widget-content">
                      <div className="footer__info">
                        <p>We help our clients succeed by creating brand identities, experiences, and print materials. </p>

                        <div className="footer__opening d-flex align-items-start">
                          <div className="footer__opening-icon mr-15">
                            <span>
                              <Opening/>
                            </span>
                          </div>
                          <div className="footer__opening-content">
                            <h4>Opening Hours</h4>
                            <p>Mon – Sat 8:00 – 17:30 Sunday – CLOSED</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-7 col-md-6 ">
                  <div className="footer__widget footer__widget-5 mb-50 footer-col-5-2">
                    <h3 className="footer__widget-title">Company</h3>

                    <div className="footer__widget-content">
                      <ul id="footer-float-link">
                        <li><Link href="/home-agency">Home</Link></li>
                        <li><Link href="/portfolio-masonry">Digital design</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/portfolio-metro">Branding</Link></li>
                        <li><Link href="/portfolio-masonry">Portfoilo</Link></li>
                        <li><Link href="/portfolio-gallery">App development</Link></li>
                        <li><Link href="/elements-testimonial">Testimonials</Link></li>
                        <li><Link href="/portfolio-details-list">Optimization</Link></li>
                        <li><Link href="/blog-grid">News</Link></li>
                        <li><Link href="/portfolio-2">Photography</Link></li>
                        <li><Link href="/contact">Get in touch</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div className="footer__widget footer__widget-5 mb-50 footer-col-5-3">
                    <h3 className="footer__widget-title">Get in Touch</h3>

                    <div className="footer__widget-content">
                      <div className="footer__info">
                        <div className="footer__info-item d-flex align-items-start">
                          <div className="footer__info-icon mr-20">
                            <span>
                              <Call/>
                            </span>
                          </div>
                          <div className="footer__info-text">
                            <h4>Call us:</h4>
                            <a href="tel:012-345-6789">+964 742 44 763</a>
                          </div>
                        </div>
                        <div className="footer__info-item d-flex align-items-start">
                          <div className="footer__info-icon mr-20">
                            <span>
                              <Email/>
                            </span>
                          </div>
                          <div className="footer__info-text">
                            <h4>Email us:</h4>
                            <a href="mailto:support@gmail.com">harry@agency.com</a>
                          </div>
                        </div>
                        <div className="footer__info-item d-flex align-items-start">
                          <div className="footer__info-icon mr-20">
                            <span>
                              <LocationTwo/>
                            </span>
                          </div>
                          <div className="footer__info-text">
                            <h4>Office:</h4>
                            <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Orville+St,+La+Presa,+CA+91977,+USA/@32.7092048,-117.0082772,17z/data=!3m1!4b1!4m5!3m4!1s0x80d9508a9aec8cd1:0x72d1ac1c9527b705!8m2!3d32.7092003!4d-117.0060885">Orville Road Apt. California, UK</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="footer__copyright-5">
                    <CopyrightText/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer__social-5 text-sm-end">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;