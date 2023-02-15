import React from "react";
// internal
import { CommentTwo, Knowledge, VideoPlayer } from "@svg/index";

// single support item
function SingleSupportItem({ delay, icon, title }) {
  return (
    <div
      className="support__item-2 d-flex align-items-center mb-10 wow fadeInUp"
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className="support__icon-2 mr-15">
        <span>{icon}</span>
      </div>
      <div className="support__content-2">
        <h3 className="support__title-2">{title}</h3>
      </div>
    </div>
  );
}

export function SupportItems() {
  return (
    <div className="support__wrapper-2 d-flex flex-wrap align-items-center justify-content-center">
      <SingleSupportItem
        delay=".3s"
        icon={<Knowledge />}
        title="Knowledge Base"
      />
      <SingleSupportItem
        delay=".5s"
        icon={<VideoPlayer />}
        title="Video Tutorials"
      />
      <SingleSupportItem
        delay=".7s"
        icon={<CommentTwo />}
        title="Support Forum"
      />
    </div>
  );
}

const ServicesSupportArea = () => {
  return (
    <section className="support__area pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-11">
            <div className="tp-section-wrapper-2 tp-section-wrapper-2-sm mb-60 text-center">
              <h3 className="tp-section-title-2">
                Stay connected we Appreciate your feedback.
              </h3>
              <p>
                You’ll have everything you’ll need inside a powerful back-end.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            {/* SupportItems */}
            <SupportItems/>
            {/* SupportItems */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSupportArea;
