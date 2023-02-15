import Image from "next/image";
import React from "react";
import Link from "next/link";
// internal
import shape_1 from "@assets/img/about/5/shape/about-shape-1.png";
import shape_2 from "@assets/img/about/5/shape/about-shape-2.png";
import mockup from "@assets/img/about/5/about-thumb-mockup.png";
import about_main from "@assets/img/about/5/about-thumb-1.jpg";
import VideoModal from "@components/common/modals/modal-video";
import useModal from "@hooks/use-modal";
import PlayThree from "@svg/play-3";

const HomeAgencyAbout = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <section className="about__area pt-120 pb-95 p-relative z-index-1">
        <div className="about__shape">
          <Image className="about__shape-1" src={shape_1} alt="shape" />
          <Image className="about__shape-2" src={shape_2} alt="shape" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div
                className="about__wrapper-5 pr-90 mb-10 wow fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration="1s"
              >
                <div className="section__title-wrapper-5 mb-35">
                  <span className="section__title-pre-5">
                    We are harry Agency
                  </span>
                  <h3 className="section__title-5">
                    Great digital <br /> Agency{" "}
                    <span className="has-light">since 1985</span>
                  </h3>
                </div>

                <p>
                  Since 1985 Reed has pioneered specialist recruitment, sourcing
                  knowledgeable, skilled professionals for jobs across the UK
                  looking finance.
                </p>

                <div className="about__btn-5">
                  <Link href="/about" className="tp-btn-blue">
                    More About Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div
                className="about__thumb-5 wow fadeInRight"
                data-wow-delay=".7s"
                data-wow-duration="1s"
              >
                <div className="about__thumb-mockup wow">
                  <Image
                    className="about-mockup-img"
                    src={mockup}
                    alt="image"
                  />
                  <Image
                    className="about-main-5"
                    src={about_main}
                    alt="image"
                  />
                  <a
                    onClick={() => setIsVideoOpen(true)}
                    className="about-play-btn tp-pulse-border popup-video"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="video-play-bg"></span>
                    <PlayThree width="17" height="17" />
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
        videoId={"Y9HJRpzIrfw"}
      />
      {/* video modal end */}
    </>
  );
};

export default HomeAgencyAbout;
