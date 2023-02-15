import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import thumb_main from "@assets/img/about/4/about-img-1.png";
import thumb_shape from "@assets/img/about/4/about-shape-1.png";
import thumb_shape_logo from "@assets/img/about/4/about-shape-2.png";
import thumb_shape_icon from "@assets/img/about/4/about-shape-2-icon.png";
import Experience from "@svg/experience";
import PhoneTwo from "@svg/phone-2";

const content = {
  about_thumb: thumb_main,
  experience: 16,
  experience_text: (
    <>
      Yours of experience <br /> in this field.
    </>
  ),
  pre_title: "About Jake Weary",
  title: "We are a professional law firm located in Berlin, Germany.",
  text: "The city name generator uses real world names rather than an algorithm to assemble unusual names. plus you can select from many different countries to immediately flavor the resulting random town names to what you desire.",
  text_2:
    "How you use the city or town name is up to you. all results may be freely used in any work.",
  phone: "(602) 762 472 96",
};

const {
  about_thumb,
  experience,
  experience_text,
  pre_title,
  title,
  text,
  text_2,
  phone,
} = content;

const HomeLawyerAbout = () => {
  return (
    <>
      <section id="about" className="about__area grey-bg-8 pt-200 pb-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about__thumb-wrapper-4 p-relative">
                <div className="about__thumb-4">
                  <Image
                    className="about-thumb-main"
                    src={about_thumb}
                    alt="about thumb"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <Image
                    className="about__thumb-shape-1"
                    src={thumb_shape}
                    alt="shape"
                  />
                </div>
                <div className="about__experience-4 d-none d-sm-flex align-items-start">
                  <div className="about__experience-icon-4 mr-15">
                    <span>
                      <Experience />
                    </span>
                  </div>
                  <div className="about__experience-content-4">
                    <h4>
                      <span>{experience}</span>+
                    </h4>
                    <p>{experience_text}</p>
                  </div>
                </div>
                <div className="about__thumb-shape-2 p-relative">
                  <Image
                    className="about__thumb-shape-logo"
                    src={thumb_shape_logo}
                    alt="shape"
                  />
                  <Image
                    className="about__thumb-shape-logo-icon"
                    src={thumb_shape_icon}
                    alt="shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about__wrapper-4 pr-70">
                <div className="section__title-wrapper-4 pr-5 mb-15">
                  <span className="section__title-pre-4">{pre_title}</span>
                  <h3 className="section__title-4-2">{title}</h3>
                </div>
                <p>{text}</p>
                <p>{text_2}</p>
                <div className="about__btn-4 mt-45 d-sm-flex align-items-center">
                  <Link href="/contact" className="tp-btn-brown mr-30">
                    Schedule Constitution
                  </Link>
                  <div className="about__call d-flex align-items-center">
                    <div className="about__call-icon">
                      <span>
                        <PhoneTwo />
                      </span>
                    </div>
                    <div className="about__call-content">
                      <h4>Call us at</h4>
                      <p>
                        <a href="tel:602-762-472-96">+{phone}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeLawyerAbout;
