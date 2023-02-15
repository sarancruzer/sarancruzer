import React from "react";
import Link from "next/link";
// internal
import { ArrowRightTwo, PlayThree } from "@svg/index";
import VideoModal from "@components/common/modals/modal-video";
import useModal from "@hooks/use-modal";

const SliderSinglePort = ({ item }) => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <React.Fragment>
      <div
        className="portfolio__horizontal-thumb include-bg"
        style={{ backgroundImage: `url(${item.bg.src})` }}
      ></div>
      <div className="portfolio__horizontal-inner">
        <div className="portfolio__horizontal-social">
          <span>Follow Us</span>
          <a href="#">Fb.</a>
          <a href="#">Be.</a>
          <a href="#">Yt.</a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-10">
              <div className="portfolio__horizontal-wrapper d-md-flex align-items-start">
                <div className="portfolio__horizontal-video">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsVideoOpen(true)}
                    className="popup-video"
                  >
                    <PlayThree width="14" height="18" />
                  </a>
                </div>
                <div className="portfolio__horizontal-content">
                  <div className="portfolio__horizontal-meta">
                    <span>
                      <a href="#">{item.category}</a>
                    </span>
                    <span>
                      <a href="#">{item.date}</a>
                    </span>
                  </div>
                  <h3 className="portfolio__horizontal-title">
                    <Link href="/portfolio-details">{item.title}</Link>
                  </h3>
                  <p>{item.subtitle}</p>

                  <div className="portfolio__horizontal-btn">
                    <Link
                      href="portfolio-details"
                      className="tp-btn-border tp-link-btn"
                    >
                      Show Project
                      <span>
                        <ArrowRightTwo />
                        <ArrowRightTwo />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'ga3zVU00KhY'}
      />
      {/* video modal end */}
    </React.Fragment>
  );
};

export default SliderSinglePort;
