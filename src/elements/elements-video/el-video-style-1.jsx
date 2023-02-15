import React from "react";
import Image from "next/image";
// internal
import about_img from "@assets/img/about/6/about-1.jpg";
import VideoModal from "@components/common/modals/modal-video";
import play_icon from "@assets/img/about/6/about-play-icon.png";
import useModal from "@hooks/use-modal";

const ElVideoStyleOne = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <section className="about__area pt-120 pb-120 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="about__video-wrapper">
                <div className="about__video-thumb">
                  <Image
                    src={about_img}
                    alt="about img"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div className="about__play">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsVideoOpen(true)}
                      className="about__play-btn popup-video tp-pulse-border"
                    >
                      <span className="video-play-bg"></span>
                      <Image src={play_icon} alt="play icon" />
                    </a>
                  </div>
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
        videoId={"z4dQmpf5PLM"}
      />
      {/* video modal end */}
    </>
  );
};

export default ElVideoStyleOne;
