import React from "react";
import Image from "next/image";
// internal
import { instagram_items } from "@components/instagram/photography-instagram";

const GridInstagramEl = () => {
  return (
    <div className="instagram__grid pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Instagram Grid Style</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {instagram_items.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram__item w-img mb-30">
                <Image
                  src={item.img}
                  alt="instagram img"
                  style={{ width: "100%", height: "100%" }}
                />

                <div className="instagram__btn">
                  <a
                    href={item.link}
                    className="tp-instagram-btn popup-image"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridInstagramEl;
