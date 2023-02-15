import React from "react";
import Image from "next/image";
// internal
import VideoModal from "@components/common/modals/modal-video";
import video_bg from "@assets/img/video/video-bg-2.png";
import dot_one from "@assets/img/video/video-dot-1.png";
import dot_two from "@assets/img/video/video-dot-2.png";
import PlayThree from "@svg/play-3";
import useModal from "@hooks/use-modal";

const ServiceThreeVideoArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <React.Fragment>
      <section className="video__area p-relative z-index-1 video__bg video__pt-183 video__pb-223">
        <div
          className="video__bg-shape include-bg"
          style={{ backgroundImage: `url(${video_bg.src})` }}
        ></div>
        <div className="video__shape">
          <Image className="video__shape-1" src={dot_one} alt="dot" />
          <Image className="video__shape-2" src={dot_two} alt="dot" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="video__content-2 text-center">
                <div className="video__play-2">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsVideoOpen(true)}
                    className="popup-video video__play-btn video__play-btn-2 tp-pulse-border"
                  >
                    <span className="video-play-bg"></span>
                    <PlayThree />
                  </a>
                </div>
                <span>We are here for you.</span>
                <h3 className="video__title-2">
                  Service we offer is specifically designed to meet your needs.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* video modal start */}
          <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"7JU5XAjKXnw"}
      />
      {/* video modal end */}
    </React.Fragment>
  );
};

export default ServiceThreeVideoArea;
