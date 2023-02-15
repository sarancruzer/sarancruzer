import React from 'react';
// internal
import {
  HighlightShapeEight,
} from "@svg/index";

const ElHeadingStyleOne = () => {
  return (
    <div className="section-wrapper pt-110 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__title-wrapper mb-25 text-center">
                <span className="section__title-pre is-center">
                  Center Title
                </span>
                <h3 className="section__title">
                  Title is{" "}
                  <span className="section__title-highlight">
                    centered
                    <HighlightShapeEight />
                  </span>
                </h3>
              </div>
            </div>
            <div className="tp-separator"></div>
            <div className="col-xl-12">
              <div className="section__title-wrapper pb-70 pt-60">
                <span className="section__title-pre">Left Align</span>
                <h3 className="section__title">
                  Left align{" "}
                  <span className="section__title-highlight">
                    section title
                    <HighlightShapeEight />
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="section__title-wrapper text-center purple-bg pt-50 pb-50">
                <span className="section__title-pre section__title-pre-1-2">
                  White Subtitle
                </span>
                <h3 className="section__title section__title-1-2">
                  <span className="section__title-highlight">
                  White {" "}
                    <HighlightShapeEight />
                  </span>
                  section Title
                </h3>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="section__title-wrapper-4 pt-70 pb-60">
                <span className="section__title-pre-4">Left Align</span>
                <h3 className="section__title-4">Left section title</h3>
              </div>
            </div>
            <div className="tp-separator"></div>
            <div className="col-xl-12">
              <div className="section__title-wrapper-4 text-center pt-70 pb-60">
                <span className="section__title-pre-4">Center Align</span>
                <h3 className="section__title-4">Center section title</h3>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="section__title-wrapper-4 text-center pt-70 pb-70 black-bg mb-50">
                <span className="section__title-pre-4 section__title-pre-4-white">
                  White subtitle
                </span>
                <h3 className="section__title-4 section__title-4-white">
                  White Section Title
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ElHeadingStyleOne;