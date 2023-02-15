import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import SocialLinks from "@components/social";
import CopyrightText from "./component/copyright-text";
import footer_shape from "@assets/img/footer/footer-shape-1.png";
import logo from "@assets/img/logo/logo.svg";
import PhotographerRecentPost from "./component/photographer-recent-post";
import Email from "@svg/email";

// widget
function SingleWidget({ col, col_2, title, contents }) {
  return (
    <div className={`col-xxl-2 col-xl-2 col-lg-3 col-md-${col} col-sm-6`}>
      <div
        className={`footer__widget footer__widget-3 mb-50 footer-col-3-${col_2}`}
      >
        <h3 className="footer__widget-title">{title}</h3>
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

const FooterFive = ({ style_2 }) => {
  return (
    <>
      <footer>
        <div
          className={`footer__area ${style_2 ? "footer__style-2" : ""}`}
          data-bg-color={style_2 ? "footer-bg-blue" : "footer-bg-dark"}
        >
          <div className={`footer__top ${style_2 ? "" : "footer__top-3"}`}>
            <div className="footer__shape">
              <Image className="footer__shape-3" src={footer_shape} alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8">
                  <div className="footer__widget footer__widget-3 mb-50 footer-col-3-1">
                    <div className="footer__logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>

                    <div className="footer__widget-content">
                      <div className="footer__subscribe">
                        <h3 className="footer__subscribe-title">
                          Let’s talk about your project.
                        </h3>
                        <form onSubmit={e => e.preventDefault()}>
                          <div className="footer__subscribe-box-3">
                            <div className="footer__subscribe-input-3">
                              <input
                                type="email"
                                placeholder="Join my newsletter..."
                              />
                              <Email />
                            </div>
                            <button className="footer-sub-btn-3" type="submit">
                              <i className="fa-regular fa-arrow-up-right"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <SingleWidget
                  col="4"
                  col_2="2"
                  title="Navigation"
                  contents={[
                    { url: "home-photographer", title: "Home" },
                    { url: "about", title: "About" },
                    { url: "portfolio-2", title: "Portfolio" },
                    { url: "services", title: "Services" },
                    { url: "pricing", title: "Pricing" },
                  ]}
                />
                <SingleWidget
                  col="6"
                  col_2="3"
                  title="Pages"
                  contents={[
                    { url: "blog-grid", title: "Blog" },
                    { url: "portfolio-2", title: "Projects" },
                    { url: "faq", title: "Faqs" },
                    { url: "contact-2", title: "Contact" },
                  ]}
                />
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="footer__widget footer__widget-3 mb-50 footer-col-3-4">
                    <h3 className="footer__widget-title">
                      {style_2 ? "Contact" : "Recent Post"}
                    </h3>
                    {!style_2 && (
                      <div className="footer__widget-content">
                        <PhotographerRecentPost />
                      </div>
                    )}
                    {style_2 && (
                      <div className="footer__widget-content">
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
                              <a href="mailto:support@harry.com">
                                support@harry.com
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="footer__social">
                          <SocialLinks />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!style_2 && (
            <div className="footer__bottom-3">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-sm-6">
                    <div className="footer__copyright-3">
                      <CopyrightText />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="footer__social-3 text-sm-end">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {style_2 && (
            <div className="footer__bottom">
              <div className="container">
                <div className="footer__bottom-inner">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="footer__copyright">
                        <CopyrightText />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="footer__link text-sm-end">
                        <Link href="/policy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Use</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </footer>
    </>
  );
};

export default FooterFive;
