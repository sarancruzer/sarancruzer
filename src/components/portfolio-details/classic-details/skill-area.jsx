import React from "react";
import { MobileApp, Website } from "@svg/index";

// single bar item
export function SingleSkillBarItem({
  cls = "",
  icon,
  title,
  delay,
  percentage,
}) {
  return (
    <div className={`skill__bar-item ${cls}`}>
      {icon && title && (
        <h4 className="skill__bar-title">
          <span>{icon}</span> {title}
        </h4>
      )}
      <div className="skill__bar-progress">
        <div className="progress">
          <div
            className="progress-bar wow slideInLeft"
            data-wow-delay="0s"
            data-wow-duration={delay}
            role="progressbar"
            style={{ width: `${percentage}%` }}
            data-width={`${percentage}%`}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span>{percentage}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const SkillArea = () => {
  return (
    <section className="skill__area pt-100 pb-75">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="skill__wrapper-14 mb-40">
              <h3 className="skill-section-title">
                Manage your <br /> Project smart and easy
              </h3>
              <p>
                Perfectly designed elements and endless customization options.
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="skill__bar">
              <SingleSkillBarItem
                icon={<MobileApp />}
                title="Mobile App Design"
                delay=".8s"
                percentage="65"
              />
              <SingleSkillBarItem
                cls="is-blue"
                icon={<Website />}
                title="Website Design"
                delay=".8s"
                percentage="90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillArea;
