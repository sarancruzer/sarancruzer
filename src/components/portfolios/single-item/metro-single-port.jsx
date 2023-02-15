import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// internal
import { ArrowRightTwo, PlayThree } from "@svg/index";
import VideoModal from "@components/common/modals/modal-video";
import useModal from "@hooks/use-modal";

const MetroSinglePort = ({ item }) => {
  const { img, category, title, subtitle, video, video_id } = item || {};
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="portfolio__metro-item tp-load-item pt-40 pb-40 p-relative z-index-1 mb-30"
      >
        <div
          className="portfolio__metro-thumb"
          style={{ backgroundImage: `url(${img.src})` }}
        >
          {video && (
            <div className="portfolio__grid-video">
              <a
                style={{ cursor: "pointer" }}
                onClick={() => setIsVideoOpen(true)}
                className="portfolio-play-btn popup-video"
              >
                <PlayThree />
              </a>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
            <div className="portfolio__metro-content">
              <div className="portfolio__metro-category">
                <span>
                  <a href="#">{category}</a>
                </span>
              </div>
              <h3 className="portfolio__metro-title">
                <Link href="/portfolio-details">{title}</Link>
              </h3>
              <p>{subtitle}</p>

              <div className="portfolio__metro-btn">
                <Link href="/portfolio-details" className="tp-btn-border">
                  Show Project
                  <span>
                    <ArrowRightTwo />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={video_id}
      />
      {/* video modal end */}
    </React.Fragment>
  );
};

export default MetroSinglePort;
