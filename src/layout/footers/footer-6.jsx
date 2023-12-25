import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import SocialLinks from "@components/social";
import CopyrightText from "./component/copyright-text";
import logo from '@assets/img/logo/logo.svg';
import flag from '@assets/img/footer/footer-lang-flag-1.png';
import shape from '@assets/img/footer/footer-shape-3.png';

// widget
function SingleWidget({ col, col_2, title, contents }) {
  return (
    <div className={`col-xxl-${col} col-xl-${col} col-lg-3 col-md-6 col-sm-6`}>
      <div
        className={`footer__widget footer__widget-7 mb-50 footer-col-7-${col_2}`}
      >
        <h3 className="footer__widget-title-7">{title}</h3>

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

const FooterSix = ({style_2=false}) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <footer>
        <div
          className={`footer__area footer__style-${style_2?'blue':'green'} include-bg bg-luminosity`}
          data-bg-color={`footer-bg-${style_2?'blue':'green-dark'}`}
          style={{backgroundImage:`url(${shape.src})`}}
        >
          <div className="footer__top footer__top-7">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__widget footer__widget-7 mb-50 footer-col-7-1">
                    <div className="footer__logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>

                    <div className="footer__widget-content">
                      <div className="footer__info">
                        <p>
                          The home and elements needed to create beautiful
                          products.
                        </p>

                        <div className="footer__contact">
                          <div className="footer__contact-call">
                            <span>
                              <a href="tel:624-423-26-72">
                                <i className="fa-solid fa-phone"></i> +624 423
                                26 72
                              </a>
                            </span>
                          </div>
                          <div className="footer__contact-mail">
                            <span>
                              <a href="mailto:support@sarancruzer.com">
                                support@sarancruzer.com
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="footer__social">
                          <SocialLinks />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <SingleWidget
                  col="3"
                  col_2="2"
                  title="Quick Link"
                  contents={[
                    { url: "home-startup", title: "Home" },
                    { url: "about", title: "About" },
                    { url: "portfolio-2", title: "Portfolio" },
                    { url: "services", title: "Service" },
                    { url: "blog-grid", title: "News" },
                    { url: "contact", title: "Contact" },
                  ]}
                />
                <SingleWidget
                  col="2"
                  col_2="3"
                  title="Resources"
                  contents={[
                    { url: "job", title: "Careers" },
                    { url: "job", title: "Job Post" },
                    { url: "portfolio-2", title: "Case Studies" },
                    { url: "help", title: "Need Help" },
                    { url: "register", title: "Register" },
                    { url: "404", title: "Error 404" },
                  ]}
                />

                <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__widget footer__widget-7 mb-50 footer-col-7-4">
                    <h3 className="footer__widget-title-7">Newsletter</h3>

                    <div className="footer__widget-content">
                      <div className="footer__subscribe-7">
                        <p>
                          Subscribe our newsletter to get the latest news &
                          updates.
                        </p>
                        <form onSubmit={e => e.preventDefault()}>
                          <div className="footer__subscribe-input-7">
                            <input
                              type="email"
                              placeholder="email@example.com..."
                            />
                            <button type="submit">
                              <i className="fa-regular fa-arrow-up-right"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom-7">
            <div className="container">
              <div className="footer__bottom-inner-7">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="footer__link-7">
                      <Link href="/policy">Privacy Policy</Link>
                      <Link href="/terms">Terms of Use</Link>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="footer__copyright-7 text-sm-center">
                      <CopyrightText />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="footer__lang d-flex align-items-center justify-content-md-end">
                      <div className="footer__lang-img mr-15">
                        <Image
                          src={flag}
                          alt="flag"
                        />
                      </div>
                      <div className="footer__lang-wrapper">
                        <span
                          onClick={() => setIsShow(!isShow)}
                          className="footer__lang-selected-lang tp-lang-toggle-2"
                          id="tp-footer-lang-toggle"
                        >
                          English
                        </span>
                        <ul className={`footer__lang-list tp-lang-list-2 ${isShow?'tp-lang-list-open-2':''}`}>
                          <li>Spanish</li>
                          <li>Portugese</li>
                          <li>American</li>
                          <li>Canada</li>
                        </ul>
                      </div>
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

export default FooterSix;
