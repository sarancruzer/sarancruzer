import React from "react";
import Image from "next/image";
// internal
import title_icon from '@assets/img/about/about-me-title-icon.png';
import {ArrowRightThree} from "@svg/index";

const AboutMeInfo = () => {
  return (
    <section className="about__me-info pb-90 pt-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-3">
            <span className="about__me-info-subtitle">ABOUT ME</span>
          </div>
          <div className="col-xl-8 col-lg-9">
            <div
              className="about__me-info-content wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <h4 className="about__me-info-title">
                Hi, I am brian wilson!{" "}
                <Image src={title_icon} alt="title icon" />
              </h4>
              <p>
                I am a UX designer, prototyper, and a part-time 3D artist. I am
                currently a Working at Fraxos, working remotely from Boston. If
                you are a creative in Boston, say hi! I love words that start
                with people, process, problem solving, paper sketches,
                prototyping, polished design, pixel-perfect products, design
                system, UI animation
              </p>

              <p>
                I’m a writer and designer working in New York City. primarily
                designs book jackets, working for Creative techs since 2000.
              </p>

              <div className="about__me-info-bottom d-sm-flex align-items-center mt-40">
                <div className="about__me-info-btn mr-30">
                  <a
                    rel="noreferrer"
                    href="https://weblearnbd.net/wp/bioxlab/wp-content/uploads/2022/09/demo-cv.pdf"
                    target="_blank"
                    className="tp-btn"
                  >
                    Download CV
                    <ArrowRightThree/>
                  </a>
                </div>
                <div className="about__me-info-social">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i> Facebook
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i> Twitter
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeInfo;
