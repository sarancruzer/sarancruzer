import React from "react";
import Image from "next/image";
// internal
import shape_1 from "@assets/img/award/5/shape/award-shape-1.png";
import shape_2 from "@assets/img/award/5/shape/award-shape-2.png";
import title from "@assets/img/award/5/award-title.png";
import award_icon_1 from "@assets/img/award/5/award-1.png";
import award_icon_2 from "@assets/img/award/5/award-2.png";
import award_icon_3 from "@assets/img/award/5/award-3.png";

const award_data = [
  {
    delay: ".5s",
    icon: award_icon_1,
    title: "2 x Pencils",
    subtitle: "Best Branded Editorial Experience",
    bg: "",
  },
  {
    delay: ".7s",
    icon: award_icon_2,
    title: "Creative Review Annual",
    subtitle: "Best Branded Editorial Experience",
    bg: "award__brown",
  },
  {
    delay: ".9s",
    icon: award_icon_3,
    title: "Webby Award",
    subtitle: "Best Branded Editorial Experience",
    bg: "award__purple",
  },
];

const AgencyAward = ({ element_style = false }) => {
  return (
    <>
      <section
        className={`award__area p-relative z-index-1 ${
          element_style ? "pt-110 pb-90" : "pb-10"
        }`}
      >
        {!element_style && (
          <div className="award__shape">
            <Image className="award__shape-1" src={shape_1} alt="shape" />
            <Image className="award__shape-2" src={shape_2} alt="shape" />
          </div>
        )}
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              {!element_style && (
                <div className="award__stroke text-center">
                  <Image src={title} alt="title" />
                </div>
              )}
              {element_style && (
                <div className="tp-section-wrapper-3 mb-60 text-center">
                  <span className="tp-section-subtitle-3">
                    Minimal &amp; Clean Design
                  </span>
                  <h3 className="tp-section-title-3">Background Color Box</h3>
                </div>
              )}
            </div>
          </div>
          <div className="row gx-1">
            {award_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className={`award__item-5 ${item.bg} mb-30 wow fadeInUp`}
                  data-wow-delay={item.delay}
                  data-wow-duration="1s"
                >
                  <div className="award__icon-5">
                    <Image src={item.icon} alt="" />
                  </div>
                  <div className="award__content-5">
                    <h4 className="award__title-5">
                      <a href="#">{item.title}</a>
                    </h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AgencyAward;
