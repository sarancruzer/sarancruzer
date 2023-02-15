import React from "react";
// internal
import {
  HighlightShapeFour,
  HighlightShapeTwo,
  HighlightShapeFive,
} from "@svg/index";

const ElHeadingStyleSix = () => {
  return (
    <React.Fragment>
      <div className="section-wrapper pt-110 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-8 col-lg-10">
              <div className="section__title-wrapper-6 mb-60 text-center">
                <h3 className="section__title-6">
                  Center Align {" "}
                  <span className="section__title-6-highlight">
                    Section {' '}
                    <HighlightShapeFour />
                  </span>
                  {" "}Title.
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-6 section__title-wrapper-6-white text-center blue-bg-5 pt-110 pb-110 mb-60">
                <h3 className="section__title-6">
                  Section Title with{" "}
                  <span className="section__title-6-highlight">
                    White Color. {" "}
                    <HighlightShapeFour />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-wrapper pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-8 col-lg-9">
              <div className="section__title-wrapper-7 text-center mb-60">
                <span className="section__title-pre-7">Center Align</span>
                <h3 className="section__title-7">
                  Center {" "}
                  <span className="section__title-7-highlight">
                    Section {" "}
                    <HighlightShapeTwo />
                  </span>
                  {" "}title
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-7 col-xl-8 col-lg-9">
              <div className="section__title-wrapper-7 mb-60">
                <span className="section__title-pre-7">Left Align</span>
                <h3 className="section__title-7">
                  Left {" "}
                  <span className="section__title-7-highlight">
                    Section {" "}
                    <HighlightShapeTwo />
                  </span>
                  {" "}title
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-wrapper black-bg-12 pt-110 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__title-wrapper-8 mb-15 mb-90">
                <span className="section__title-pre-8">Left Align</span>
                <h3 className="section__title-8">
                  Left Align {" "}
                  <span className="section__title-highlight-8">
                    Section {" "}
                    <HighlightShapeFive />
                  </span>
                  {" "}Title
                </h3>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="section__title-wrapper-8 text-center mb-60">
                <span className="section__title-pre-8">Center Align</span>
                <h3 className="section__title-8">
                  Centered{" "}
                  <span className="section__title-highlight-8">
                    Section {" "}
                    <HighlightShapeFive />
                  </span>
                  {" "}Title
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-wrapper pt-110 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__title-wrapper-10 mb-60">
                <span className="section__title-pre-10">Left Align</span>
                <h3 className="section__title-10">Left Section Title</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="section__title-wrapper-10 text-center mb-60">
                <span className="section__title-pre-10">Center Align</span>
                <h3 className="section__title-10">Center Section Title</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ElHeadingStyleSix;
