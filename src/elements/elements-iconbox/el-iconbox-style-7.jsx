import React from "react";
// internal
import { CommentTwo, Video } from "@svg/index";
import { SingleSupportItem } from "@components/supports/start-up-support";

const ElIconBoxStyleSeven = () => {
  return (
    <section className="support__area p-relative pt-110 pb-60 z-index-1">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Icon Box Style 5</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <SingleSupportItem icon={<CommentTwo />} title="No meetings" />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <SingleSupportItem icon={<Video />} title="24/7 support" />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <SingleSupportItem icon={<CommentTwo />} title="No meetings" />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <SingleSupportItem icon={<Video />} title="24/7 support" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElIconBoxStyleSeven;
