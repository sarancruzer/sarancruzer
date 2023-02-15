import React from "react";
// internal
import {Email,Call} from "@svg/index";

const PhotographerAboutSelf = () => {
  return (
    <div className="about__self">
      <div className="about__self-des">
        <p>
          Hello, I’m <span>Douglas Lyphe</span> coffee addict &{" "}
          <span>passionate photographer</span> I’ve worked in the industry for{" "}
          <span>16 years</span> and can’t wait to jump on my next project. I
          started in my children’s room, got pro renowned digital agencies{" "}
          <span>apple co</span> and nork blue lebel.{" "}
        </p>
      </div>
      <div className="about__info d-sm-flex d-lg-block d-xl-flex align-items-center">
        <div className="about__info-item d-flex align-items-center mr-40 mb-55">
          <div className="about__info-icon mr-15">
            <span>
              <Email />
            </span>
          </div>
          <div className="about__info-content">
            <h4>Email us:</h4>
            <p>
              <a href="mailto:harry@photography.com">harry@photography.com</a>
            </p>
          </div>
        </div>
        <div className="about__info-item d-flex align-items-center mr-40 mb-55">
          <div className="about__info-icon mr-15">
            <span>
              <Call />
            </span>
          </div>
          <div className="about__info-content">
            <h4>Call us:</h4>
            <p>
              <a href="tel:964-742-44-763">+964 742 44 763</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerAboutSelf;
