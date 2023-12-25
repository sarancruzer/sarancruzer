import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logo from "@assets/img/logo/logo.svg";
import SocialLinks from "@components/social";
import FooterBottom from "./component/footer-bottom";
import FooterWidget from "./component/footer-widget";

const widget = [
  {
    col: "2",
    title: "Quick Link",
    lists: [
      { link: "/", title: "Home" },
      { link: "about", title: "About" },
      { link: "services", title: "Service" },
      { link: "#", title: "Testimonials" },
      { link: "blog-grid", title: "News" },
      { link: "contact", title: "Contact" },
    ],
  },
  {
    col: "3",
    title: "Resources",
    lists: [
      { link: "job", title: "Careers" },
      { link: "job", title: "Job Post" },
      { link: "portfolio-details", title: "Case Studies" },
      { link: "help", title: "Help" },
      { link: "register", title: "Register" },
      { link: "404", title: "Error 404" },
    ],
  },
  {
    col: "4",
    title: "Downloads",
    app_content: true,
  },
];

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__area" data-bg-color="footer-bg">
          <div className="footer__top">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__widget mb-50 footer-col-1">
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
                {widget.map((item, i) => (
                  <div
                    key={i}
                    className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
                  >
                    <FooterWidget item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <FooterBottom inner="inner" copyright="copyright" link="link" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
