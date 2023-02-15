import React from "react";
// internal
import {
  CreativeAboutIconOne,
  CreativeAboutIconThree,
  CreativeAboutIconTwo,
} from "@svg/index";
import { AboutFeature } from "@components/abouts/creative-about";

const ElIconBoxStyleFour = () => {
  return (
    <section className="about__area pt-110 pb-120 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">List Icon Box</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
            <div className="about__features">
              <AboutFeature
                delay=".3s"
                icon={<CreativeAboutIconOne />}
                title="Leadership"
                subtitle="Fully committed to the success company"
              />
              <AboutFeature
                delay=".5s"
                icon={<CreativeAboutIconTwo />}
                color="yellow-color"
                title="Responsibility"
                subtitle="Employees will always be my top priority"
              />
              <AboutFeature
                delay=".7s"
                icon={<CreativeAboutIconThree />}
                color="purple-color"
                title="Flexibility"
                subtitle="The ability to switch is an important skill"
              />
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
            <div className="about__features">
              <AboutFeature
                delay=".3s"
                icon={<CreativeAboutIconOne />}
                title="Leadership"
                subtitle="Fully committed to the success company"
              />
              <AboutFeature
                delay=".5s"
                icon={<CreativeAboutIconTwo />}
                color="yellow-color"
                title="Responsibility"
                subtitle="Employees will always be my top priority"
              />
              <AboutFeature
                delay=".7s"
                icon={<CreativeAboutIconThree />}
                color="purple-color"
                title="Flexibility"
                subtitle="The ability to switch is an important skill"
              />
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
            <div className="about__features">
              <AboutFeature
                delay=".3s"
                icon={<CreativeAboutIconOne />}
                title="Leadership"
                subtitle="Fully committed to the success company"
              />
              <AboutFeature
                delay=".5s"
                icon={<CreativeAboutIconTwo />}
                color="yellow-color"
                title="Responsibility"
                subtitle="Employees will always be my top priority"
              />
              <AboutFeature
                delay=".7s"
                icon={<CreativeAboutIconThree />}
                color="purple-color"
                title="Flexibility"
                subtitle="The ability to switch is an important skill"
              />
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
            <div className="about__features">
              <AboutFeature
                delay=".3s"
                icon={<CreativeAboutIconOne />}
                title="Leadership"
                subtitle="Fully committed to the success company"
              />
              <AboutFeature
                delay=".5s"
                icon={<CreativeAboutIconTwo />}
                color="yellow-color"
                title="Responsibility"
                subtitle="Employees will always be my top priority"
              />
              <AboutFeature
                delay=".7s"
                icon={<CreativeAboutIconThree />}
                color="purple-color"
                title="Flexibility"
                subtitle="The ability to switch is an important skill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElIconBoxStyleFour;
