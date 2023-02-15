import React from "react";
// internal
import { MobileApp } from "@svg/index";
import { SingleSkillBarItem } from "@components/portfolio-details/classic-details/skill-area";

const SkillStyleThreeEl = () => {
  return (
    <section className="skill__area pt-110 pb-85">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Skill Classic Style</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="skill__bar skill__style-3">
              <SingleSkillBarItem
                icon={<MobileApp />}
                title="Mobile App Design"
                delay=".8s"
                percentage="65"
              />
              <SingleSkillBarItem
                cls="is-pink"
                icon={
                  <>
                    <i className="fa-light fa-globe"></i>
                  </>
                }
                title="Website Design"
                delay=".8s"
                percentage="90"
              />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="skill__bar skill__style-3">
              <SingleSkillBarItem
                cls="is-blue"
                icon={
                  <>
                    <i className="fa-regular fa-video"></i>{" "}
                  </>
                }
                title="Video Editing"
                delay=".9s"
                percentage="55"
              />
              <SingleSkillBarItem
                cls="is-brown"
                icon={
                  <>
                    <i className="fa-light fa-sparkles"></i>
                  </>
                }
                title="SEO Expert "
                delay="1s"
                percentage="90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillStyleThreeEl;
