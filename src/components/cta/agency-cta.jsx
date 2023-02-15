import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape_1 from "@assets/img/cta/5/cta-shape-1.png";
import shape_2 from "@assets/img/cta/5/cta-shape-2.png";
import shape_3 from "@assets/img/cta/5/cta-shape-3.png";
import shape_4 from "@assets/img/cta/5/cta-shape-4.png";
import shape_5 from "@assets/img/cta/5/cta-shape-5.png";
import shape_6 from "@assets/img/cta/5/cta-shape-6.png";
import shape_7 from "@assets/img/cta/5/cta-shape-7.png";
import shape_8 from "@assets/img/cta/5/cta-shape-8.png";
import shape_9 from "@assets/img/cta/5/cta-shape-9.png";
import shape_10 from "@assets/img/cta/5/cta-shape-10.png";

const AgencyCta = ({ element_style = false }) => {
  return (
    <>
      <section
        className={`cta__area p-relative z-index-1 ${
          element_style ? "pt-120 pb-140" : ""
        }`}
      >
        {!element_style && <div className=" cta__overlay-5"></div>}
        <div className="container">
          <div className="cta__inner-5" data-bg-color="blue-dark">
            <div className="cta__shape">
              <Image
                className="cta__shape-7 wow fadeInDown"
                data-wow-delay=".3s"
                data-wow-duration="1s"
                src={shape_1}
                alt="shape"
              />
              <Image
                className="cta__shape-8 wow fadeInDown"
                data-wow-delay=".5s"
                data-wow-duration="1s"
                src={shape_2}
                alt="shape"
              />
              <Image
                className="cta__shape-9 wow fadeInUp"
                data-wow-delay=".7s"
                data-wow-duration="1s"
                src={shape_3}
                alt="shape"
              />
              <Image
                className="cta__shape-10 wow fadeInUp"
                data-wow-delay=".9s"
                data-wow-duration="1s"
                src={shape_4}
                alt="shape"
              />
              <Image
                className="cta__shape-11 wow fadeInUp"
                data-wow-delay=".6s"
                data-wow-duration="1s"
                src={shape_5}
                alt="shape"
              />
              <Image
                className="cta__shape-12 wow fadeInUp"
                data-wow-delay=".7s"
                data-wow-duration="1s"
                src={shape_6}
                alt="shape"
              />
              <Image
                className="cta__shape-13 wow fadeInUp"
                data-wow-delay=".8s"
                data-wow-duration="1s"
                src={shape_7}
                alt="shape"
              />
              <Image
                className="cta__shape-14 wow fadeInUp"
                data-wow-delay=".9s"
                data-wow-duration="1s"
                src={shape_8}
                alt="shape"
              />
              <Image
                className="cta__shape-15 wow fadeInUp"
                data-wow-delay="1s"
                data-wow-duration="1s"
                src={shape_9}
                alt="shape"
              />
              <Image
                className="cta__shape-16 wow fadeInUp"
                data-wow-delay="1.1s"
                data-wow-duration="1s"
                src={shape_10}
                alt="shape"
              />
            </div>
            <div className="row align-items-center">
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="cta__content-5">
                  <span>Get to meet Your Next Agency</span>

                  <h3 className="cta__title-5">
                    Let’s talk about your next business challenge
                  </h3>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="cta__btn-5 text-lg-end">
                  <Link href="/contact" className="tp-btn-orange-2">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgencyCta;
