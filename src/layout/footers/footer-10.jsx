import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { EmailFour, LocationFour, PhoneFive } from "@svg/index";
import inst_img_1 from "@assets/img/instagram/footer/insta-1.jpg";
import inst_img_2 from "@assets/img/instagram/footer/insta-2.jpg";
import inst_img_3 from "@assets/img/instagram/footer/insta-3.jpg";
import inst_img_4 from "@assets/img/instagram/footer/insta-4.jpg";
import inst_img_5 from "@assets/img/instagram/footer/insta-5.jpg";
import inst_img_6 from "@assets/img/instagram/footer/insta-6.jpg";
import logo from "@assets/img/logo/logo-red.svg";
import SocialLinks from "@components/social";
import CopyrightText from "./component/copyright-text";
import ImageLightBox from "@components/common/modals/image-lightbox";

// instagram images
const images = [
  inst_img_1.src,
  inst_img_2.src,
  inst_img_3.src,
  inst_img_4.src,
  inst_img_5.src,
  inst_img_6.src,
];

// instagram single item
function SingleInstagram({ img, index }) {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setOpen(true);
  };
  return (
    <>
      <li className="zoom-instagram-widget__item">
        <a
          className="popup-image"
          style={{ cursor: "pointer" }}
          onClick={() => handleImagePopup(index)}
        >
          <Image src={img} alt="image" />
        </a>
      </li>
      {/* image light box start */}
      <ImageLightBox
        images={images}
        open={open}
        setOpen={setOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      {/* image light box end */}
    </>
  );
}

// footer info item
function FooterInfoItem({ icon, title, link, linkText, target = "" }) {
  return (
    <div className="footer__info-item-8 d-flex align-items-start">
      <div className="footer__info-icon-8 mr-20">
        <span>{icon}</span>
      </div>
      <div className="footer__info-text-8">
        <h4>{title}</h4>
        <a href={link} target={target ? "_blank" : ""} rel="noreferrer">
          {linkText}
        </a>
      </div>
    </div>
  );
}

const FooterTen = () => {
  return (
    <>
      <footer>
        <div className="footer__area" data-bg-color="footer-bg-black-4">
          <div className="footer__top">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__widget footer__widget-10 mb-50 footer-col-10-1">
                    <div className="footer__logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__info">
                        <p>
                          Lorem ipsum is simply dolor sit ametcn sectetur
                          adipiscing elit. Phasellus vehic sagittis <br />{" "}
                          euismod.
                        </p>
                        <div className="footer__social-10">
                          <SocialLinks />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__widget footer__widget-10 mb-50 footer-col-10-2">
                    <h3 className="footer__widget-title">Contact Us</h3>
                    <div className="footer__widget-content">
                      <div className="footer__info footer__info-10">
                        <FooterInfoItem
                          icon={<EmailFour />}
                          title="Email us:"
                          link="mailto:Contact@sarancruzer.com"
                          linkText="Contact@sarancruzer.com"
                        />
                        <FooterInfoItem
                          icon={<PhoneFive />}
                          title="Call us:"
                          link="tel:964-742-44-763"
                          linkText="+964 742 44 763"
                        />
                        <FooterInfoItem
                          icon={<LocationFour />}
                          title="Address:"
                          link="https://www.google.com/maps/place/Orville+St,+La+Presa,+CA+91977,+USA/@32.7092048,-117.0082772,17z/data=!3m1!4b1!4m5!3m4!1s0x80d9508a9aec8cd1:0x72d1ac1c9527b705!8m2!3d32.7092003!4d-117.0060885"
                          linkText={
                            <>
                              4200, lorem street, <br /> chicago, IL, 55
                            </>
                          }
                          target="_blank"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__widget footer__widget-10 mb-50 footer-col-10-3">
                    <h3 className="footer__widget-title">Quick Link</h3>

                    <div className="footer__widget-content">
                      <ul>
                        <li>
                          <Link href="/about">History</Link>
                        </li>
                        <li>
                          <Link href="/team">Leadership</Link>
                        </li>
                        <li>
                          <Link href="/event-details">Events</Link>
                        </li>
                        <li>
                          <Link href="/home-politician">Donations</Link>
                        </li>
                        <li>
                          <Link href="/home-politician">Press & Media</Link>
                        </li>
                        <li>
                          <Link href="/terms">Teams</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__widget footer__widget-10 mb-50 footer-col-10-4">
                    <h3 className="footer__widget-title">Photo Gallery</h3>

                    <div className="footer__widget-content">
                      <ul className="zoom-instagram-widget__items">
                        <SingleInstagram img={inst_img_1} index={0} />
                        <SingleInstagram img={inst_img_2} index={1} />
                        <SingleInstagram img={inst_img_3} index={2} />
                        <SingleInstagram img={inst_img_4} index={3} />
                        <SingleInstagram img={inst_img_5} index={4} />
                        <SingleInstagram img={inst_img_6} index={5} />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom-10 footer__bottom-line">
            <div className="container">
              <div className="footer__bottom-inner-10">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer__copyright-10">
                      <CopyrightText />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer__link-10 text-md-end">
                      <Link href="/policy">Privacy</Link>
                      <Link href="/terms">Terms</Link>
                      <Link href="/about">About Us</Link>
                      <Link href="/help">Support</Link>
                      <Link href="/faq">FAQ</Link>
                      <Link href="/blog">Blog</Link>
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

export default FooterTen;
