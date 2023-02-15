import React from "react";
// internal
import { PlayThree } from "@svg/index";
import bg from "@assets/img/portfolio/breadcrumb/portfolio-breadcrumb-2.jpg";
import BreadcrumbList from "./breadcrumb-list";
import VideoModal from "../modals/modal-video";
import useModal from "@hooks/use-modal";

const BreadcrumbThree = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <section
        className="breadcrumb__area breadcrumb__style-4 breadcrumb__spacing include-bg grey-bg-4"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-9">
              <div className="breadcrumb__content p-relative z-index-1">
                <div className="breadcrumb__video mb-30">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsVideoOpen(true)}
                    className="breadcrumb__video-btn popup-video"
                  >
                    <PlayThree width="14" height="18" />
                  </a>
                </div>
                <BreadcrumbList
                  title="Business"
                  subtitle="Investment Trend Monitor: Top Trends in 2022"
                />
                <h3 className="breadcrumb__title">
                  Keep it Minimal, yet Expressive
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
        videoId={"LA4hnu1OM7k"}
      />
      {/* video modal end */}
    </>
  );
};

export default BreadcrumbThree;
