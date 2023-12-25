import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import about_img from "@assets/img/about/8/about-img-1.jpg";
import bg from "@assets/img/about/8/about-img-2.jpg";
import { HighlightShapeFive, PhoneFive, Play } from "@svg/index";
import VideoModal from "@components/common/modals/modal-video";
import useModal from "@hooks/use-modal";

const ArchitectureAbout = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <section id="tpabout" className="about__area black-bg-12 pt-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6">
              <div className="about__thumb-wrapper-8 pr-100 pb-100 p-relative">
                <div
                  className="about__thumb-8 w-img wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration="1s"
                >
                  <Image src={about_img} alt="image" />
                </div>
                <div
                  className="about__thumb-8-right wow fadeInUp"
                  data-wow-delay=".6s"
                  data-wow-duration="1s"
                >
                  <div
                    className="about__thumb-bg include-bg"
                    style={{ backgroundImage: `url(${bg.src})` }}
                  >
                    25
                  </div>
                  <div className="about__thumb-8-right-content">
                    <p>
                      Years <br />
                      Experience
                    </p>
                  </div>
                  <div className="about__thumb-8-right-year">
                    <p>
                      Start in <br />
                      1982
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6">
              <div
                className="about__wrapper-8 pt-30 pl-70 wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <div className="section__title-wrapper-8 mb-15">
                  <span className="section__title-pre-8">sarancruzer Stido.</span>
                  <h3 className="section__title-8">
                    Influential <br /> and {' '}
                    <span className="section__title-highlight-8">
                      Impactful.
                      <HighlightShapeFive />
                    </span>
                  </h3>
                </div>
                <p className="about-wrapper-8-paragraph">
                  I would like to express my thanks for the work you done for me
                  over the past years!
                </p>
                <p>
                  Through a unique combination of engineering, construction and
                  design disciplines and expertise, Concor delivers world class
                  infrastructure solutions.
                </p>

                <div className="about__call-8 d-flex align-items-center mb-50">
                  <div className="about__call-icon-8 mr-20">
                    <span>
                      <PhoneFive />
                    </span>
                  </div>
                  <div className="about__call-content-8">
                    <h4>Hotline 24/7</h4>
                    <p>
                      <a href="tel:964-742-44-763">+964 742 44 763</a>
                    </p>
                  </div>
                </div>
                <div className="about__btn-8 d-block d-sm-flex align-items-center">
                  <Link href="/about" className="tp-btn-border-8 mb-20 mr-30">
                    More About Us
                  </Link>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsVideoOpen(true)}
                    className="about-play-btn-2 mb-20 popup-video"
                  >
                    <span>
                      <Play />
                    </span>
                    View our <br />
                    Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"K0D4uPmKkqY"}
      />
      {/* video modal end */}
    </>
  );
};

export default ArchitectureAbout;
