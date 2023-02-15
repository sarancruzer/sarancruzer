import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
// internal
import shape from '../../../public/assets/img/shape/footer-shape-1.png';
import logo from '../../../public/assets/img/logo/logo-black.svg';
import SocialLinks from '../../components/social';

const FooterThree = () => {
  return (
    <>
      <footer>
        <div className="footer__area">
          <div className="footer__top-2 p-relative">
            <div className="footer__shape">
              <Image className="footer__shape-1" src={shape} alt="shape" />
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-12 col-sm-6">
                  <div className="footer__widget footer-col-2-1">
                    <div className="footer__logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>

                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="footer__widget footer-col-2-2">
                    <ul id="footer-list-inline">
                      <li><Link href="/home-freelancer">Home</Link></li>
                      <li><Link href="/portfolio-masonry">Projects</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-8">
                  <div className="footer__widget footer-col-2-3">
                    <ul id="footer-list-inline-2">
                      <li><Link href="/policy">Privacy Policy</Link></li>
                      <li><Link href="/help">Help Center</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4">
                  <div className="footer__widget footer-col-2-4">
                    <div className="footer__hello">
                      <Link href="/contact-2">Say Ciao! 👋</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="footer__bottom-inner-2">
                <div className="row align-items-center">
                  <div className="col-sm-6">
                    <div className="footer__copyright-2">
                      <p>Copyright © {new Date().getFullYear()} by <Link href="/">HARRY</Link>. 
                      All Rights Reserved.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="footer__social-2 text-sm-end">
                      <SocialLinks />
                    </div>
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

export default FooterThree;