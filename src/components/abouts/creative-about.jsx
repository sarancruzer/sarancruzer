import React from "react";
import Image from "next/image";
// internal
import shape_1 from "@assets/img/about/6/shape/about-shape-1.png";
import shape_2 from "@assets/img/about/6/shape/about-shape-2.png";
import shape_3 from "@assets/img/about/6/shape/about-shape-3.png";
import shape_4 from "@assets/img/about/6/shape/about-shape-4.png";
import about_img from "@assets/img/about/6/about-1.jpg";
import play_icon from "@assets/img/about/6/about-play-icon.png";
import {
  CreativeAboutIconOne,
  CreativeAboutIconThree,
  CreativeAboutIconTwo,
  HighlightShapeFour,
} from "@svg/index";
import useModal from "@hooks/use-modal";
import VideoModal from "@components/common/modals/modal-video";

export function AboutFeature({ delay, icon, title, color, subtitle }) {
  return (
    <div
      className="about__features-item d-flex align-items-start wow fadeInUp"
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className={`about__features-icon ${color}`}>
        <span>{icon}</span>
      </div>
      <div className="about__features-content">
        <h3 className="about__features-title">{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

const CreativeAbout = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <section className="about__area pt-110 pb-120 p-relative">
        <div className="about__shape">
          <Image className="about__shape-3" src={shape_1} alt="shape" />
          <Image className="about__shape-4" src={shape_2} alt="shape" />
          <Image className="about__shape-5" src={shape_3} alt="shape" />
          <Image className="about__shape-6" src={shape_4} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-7 col-lg-6">
              <div className="about__section-wrapper-6">
                <div className="section__title-wrapper-6 mb-125">
                  <h3 className="section__title-6">
                    Discover the Power of Creative{" "}
                    <span className="section__title-6-highlight">
                      {" "}
                      Freedom.
                      <HighlightShapeFour />
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 offset-xxl-1 col-xl-5 offset-xl-0 col-lg-5 offset-lg-1">
              <div className="section__title-wrapper-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit honcus
                  a turpis sit amet Donec nec elementum ipsum elementum.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-4">
              <div className="about__features">
                <AboutFeature
                  delay=".3s"
                  icon={<CreativeAboutIconOne />}
                  title="Leadership"
                  subtitle="Fully committed to the success company"
                />
                <AboutFeature
                  delay=".5s"
                  icon={<CreativeAboutIconTwo />}
                  color="yellow-color"
                  title="Responsibility"
                  subtitle="Employees will always be my top priority"
                />
                <AboutFeature
                  delay=".7s"
                  icon={<CreativeAboutIconThree />}
                  color="purple-color"
                  title="Flexibility"
                  subtitle="The ability to switch is an important skill"
                />
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-8">
              <div
                className="about__video-wrapper wow fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration="1s"
              >
                <div className="about__video-counter d-sm-flex align-items-center">
                  <div className="about__video-counter-item d-flex align-items-center">
                    <h4>
                      <span>16</span>
                    </h4>
                    <p>
                      Years <br /> Experinces
                    </p>
                  </div>
                  <div className="about__video-counter-item d-flex align-items-center">
                    <h4>
                      <span>250</span>
                    </h4>
                    <p>
                      Types of <br /> Courses
                    </p>
                  </div>
                </div>
                <div className="about__video-thumb">
                  <Image src={about_img} alt="image" style={{ width: '100%', height: '100%' }} />
                  <div className="about__play">
                    <a
                      style={{cursor:'pointer'}}
                      onClick={()=> setIsVideoOpen(true)}
                      className="about__play-btn popup-video tp-pulse-border"
                    >
                      <span className="video-play-bg"></span>
                      <Image src={play_icon} alt="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={'z4dQmpf5PLM'} />
      {/* video modal end */}
    </>
  );
};

export default CreativeAbout;
