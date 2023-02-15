import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import HighlightShapeThree from "@svg/highlight-shape-3";
import shape_1 from "@assets/img/support/support-shape-1.png";
import shape_2 from "@assets/img/support/support-shape-2.png";
import shape_3 from "@assets/img/support/support-shape-3.png";
import shape_4 from "@assets/img/support/support-shape-4.png";
import support_img from "@assets/img/support/support-img-1.jpg";
import { CommentTwo, Video } from "@svg/index";

// single support item
export function SingleSupportItem({ icon, title }) {
  return (
    <div className="support__item mb-55">
      <div className="support__icon">
        <span>{icon}</span>
      </div>
      <div className="support__content">
        <h3 className="support__title">{title}</h3>
        <p>
          Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          consequat.
        </p>
      </div>
    </div>
  );
}

const StartUpSupport = () => {
  return (
    <>
      <section className="support__area p-relative z-index-1 pt-160 pb-155">
        <div className="support__shape">
          <Image className="support__shape-4" src={shape_4} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6">
              <div className="support__wrapper pt-25">
                <div className="section__title-wrapper-7">
                  <span className="section__title-pre-7">Efficient</span>
                  <h3 className="section__title-7">
                    Straight
                    <span className="section__title-7-highlight">
                      to the point
                      <HighlightShapeThree />
                    </span>
                  </h3>
                </div>
                <p>
                  A startup is started by individual founders or entrepreneurs{" "}
                  <br /> to search for a repeatable{" "}
                </p>

                <div className="support__item-wrapper">
                  <div className="row">
                    <div className="col-sm-6">
                      <SingleSupportItem
                        icon={<CommentTwo />}
                        title="No meetings"
                      />
                    </div>
                    <div className="col-sm-6">
                      <SingleSupportItem
                        icon={<Video />}
                        title="24/7 support"
                      />
                    </div>
                  </div>
                </div>
                <div className="support__btn">
                  <Link
                    href="contact"
                    className="tp-btnr-2 mr-5 mb-15 tp-btn-shine-effect"
                  >
                    Get Started Now
                  </Link>
                  <Link
                    href="pricing"
                    className="tp-btnr-border-2 mb-15 tp-btn-shine-effect tp-link-btn-3"
                  >
                    Try For Free
                    <span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6">
              <div className="support__thumb-wrapper pl-100">
                <div className="support__shape">
                  <Image
                    className="support__shape-1"
                    src={shape_1}
                    alt="shape"
                    style={{ width: "300px", height: "auto" }}
                    priority
                  />
                  <Image
                    className="support__shape-2"
                    src={shape_2}
                    alt="shape"
                  />
                  <Image
                    className="support__shape-3"
                    src={shape_3}
                    alt="shape"
                  />
                </div>
                <div className="support__thumb">
                  <Image className="" src={support_img} alt="support img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartUpSupport;
