import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape from "@assets/img/footer/footer-shape-4.png";
import logo from "@assets/img/logo/logo.svg";
import SocialLinks from "@components/social";
import CopyrightText from "./component/copyright-text";
import {EmailFour,PhoneFive} from "@svg/index";

// single widget
function SingleWidget({ col, col_2, col_3, title, contents }) {
  return (
    <div className={`col-xxl-${col} col-xl-${col} col-lg-4 col-sm-${col_2}`}>
      <div
        className={`footer__widget footer__widget-8 mb-50 footer-col-8-${col_3}`}
      >
        <h3 className="footer__widget-title-8">{title}</h3>
        <div className="footer__widget-content">
          <ul>
            {contents.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const FooterNine = () => {
  return (
    <>
      <footer>
        <div className="footer__area" data-bg-color="footer-bg-black-3">
          <div className="footer__top footer__top-8">
            <div className="footer__shape">
              <Image className="footer__shape-4" src={shape} alt="shape" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-sm-6">
                  <div className="footer__widget footer__widget-8 mb-50 footer-col-8-1">
                    <div className="footer__logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__info-8">
                        <p>
                          Through a unique combination of engineering expertise.
                        </p>
                        <div className="footer__info-item-8 d-flex align-items-start">
                          <div className="footer__info-icon-8 mr-20">
                            <span>
                              <EmailFour />
                            </span>
                          </div>
                          <div className="footer__info-text-8">
                            <h4>Email us:</h4>
                            <a href="mailto:contact@harry.com">
                              Contact@harry.com
                            </a>
                          </div>
                        </div>
                        <div className="footer__info-item-8 d-flex align-items-start">
                          <div className="footer__info-icon-8 mr-20">
                            <span>
                              <PhoneFive />
                            </span>
                          </div>
                          <div className="footer__info-text-8">
                            <h4>Call us:</h4>
                            <a href="tel:012-345-6789">+624 423 26 72</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <SingleWidget
                  col="3"
                  col_2="6"
                  col_3="2"
                  title="Navigation"
                  contents={[
                    { url: "home-architecture", title: "Home" },
                    { url: "about", title: "About" },
                    { url: "portfolio-2", title: "Projects" },
                    { url: "services-2", title: "Services" },
                    { url: "blog-grid", title: "Blog" },
                    { url: "contact", title: "Contact" },
                  ]}
                />
                <SingleWidget
                  col="2"
                  col_2="5"
                  col_3="3"
                  title="Services"
                  contents={[
                    { url: "services", title: "Interior" },
                    { url: "services", title: "Planning" },
                    { url: "services", title: "Decoration" },
                    { url: "services", title: "Materials" },
                    { url: "services", title: "Construction" },
                  ]}
                />

                <div className="col-xxl-4 col-xl-4 col-lg-5 col-sm-7">
                  <div className="footer__widget footer__widget-8 mb-50 footer-col-8-4">
                    <h3 className="footer__widget-title-8">Newsletter</h3>

                    <div className="footer__widget-content">
                      <div className="footer__subscribe-8">
                        <p>
                          Register now to get latest updates Promotion & Coupons
                        </p>
                        <form action="#">
                          <div className="footer__subscribe-input-8">
                            <input type="email" placeholder="Your email" />
                            <button type="submit">Subscribe</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom-8">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="footer__copyright-8">
                    <CopyrightText />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer__social-8 text-sm-end">
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

export default FooterNine;
