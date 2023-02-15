import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import dynamic from "next/dynamic";
import Link from "next/link";
// internal
import { Plus, ArrowRightTwo, PlayThree } from "@svg/index";
import VideoModal from "@components/common/modals/modal-video";
import useModal from "@hooks/use-modal";
import ImageLightBox from "@components/common/modals/image-lightbox";

const ClassicSinglePortfolio = ({ item, images, index, tooltip_hover=false }) => {
  const { id, img, video, video_id, title, category } = item || {};
  const { isVideoOpen, setIsVideoOpen } = useModal();
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [open, setOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setOpen(true);
  };
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="portfolio__grid-item mb-40 wow fadeInUp"
      >
        <div
          className={`portfolio__grid-thumb w-img fix ${
            tooltip_hover ? "tp-img-reveal tp-img-reveal-item" : ""
          }`}
          data-tip
          data-for={tooltip_hover?id:''}
        >
          <Link href="/portfolio-details">
            <Image
              src={img}
              alt="img"
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
          <div className={`portfolio__grid-${video ? "video" : "popup"}`}>
            {!video && (
              <a
                style={{ cursor: "pointer" }}
                onClick={() => handleImagePopup(index)}
                className="popup-image"
              >
                <Plus />
              </a>
            )}
            {video && (
              <a
                style={{ cursor: "pointer" }}
                onClick={() => setIsVideoOpen(true)}
                className="portfolio-play-btn popup-video"
              >
                <PlayThree />
              </a>
            )}
          </div>
        </div>
        {!tooltip_hover && (
          <div className="portfolio__grid-content">
            <h3 className="portfolio__grid-title">
              <Link href="/portfolio-details">{title}</Link>
            </h3>
            <div className="portfolio__grid-bottom">
              <div className="portfolio__grid-category">
                <span>
                  <a href="#">{category}</a>
                </span>
              </div>
              <div className="portfolio__grid-show-project">
                <Link href="/portfolio-details" className="portfolio-link-btn">
                  Show project
                  <span>
                    <ArrowRightTwo />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
        {tooltip_hover && (
          <ReactTooltip id={id} type="light">
            <div className="portfolio__grid-content portfolio__hover-category">
              <h3 className="portfolio__grid-title">
                <Link href="/portfolio-details">{title}</Link>
              </h3>
              <span>
                <a href="#">{category}</a>
              </span>
            </div>
          </ReactTooltip>
        )}
      </motion.div>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={video_id}
      />
      {/* video modal end */}

      {/* image light box start */}
      <ImageLightBox
        images={images}
        open={open}
        setOpen={setOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      {/* image light box end */}
    </React.Fragment>
  );
};

export default dynamic(() => Promise.resolve(ClassicSinglePortfolio), {
  ssr: false,
});
