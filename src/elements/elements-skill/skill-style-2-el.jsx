import React from "react";
// internal
import { SingleSkillBarItem } from "@components/portfolio-details/classic-details/skill-area";

const SkillStyleTwoEl = () => {
  return (
    <section className="skill__area pt-110 pb-85">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Skill Without Title</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="skill__bar">
              <SingleSkillBarItem
                delay=".8s"
                percentage="65"
              />
              <SingleSkillBarItem
                cls="is-blue"
                delay=".8s"
                percentage="90"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="skill__bar">
              <SingleSkillBarItem
                cls="is-brown"
                delay=".9s"
                percentage="70"
              />
              <SingleSkillBarItem
                cls="is-pink"
                delay="1s"
                percentage="85"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillStyleTwoEl;
