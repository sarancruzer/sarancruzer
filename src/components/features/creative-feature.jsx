import React from "react";
import Image from "next/image";
// internal
import shape_1 from "@assets/img/features/features-shape-1.png";
import shape_2 from "@assets/img/features/features-shape-2.png";
import shape_3 from "@assets/img/features/features-shape-3.png";
import shape_4 from "@assets/img/features/features-shape-4.png";
import shape_5 from "@assets/img/features/features-shape-5.png";
import { HighlightShapeFour } from "@svg/index";
import service_data from "@data/service-data";
import CreativeSingleFeature from "./single-feature/creative-single-feature";

// data
const service_items = service_data.filter((item) => item.home_creative);

const CreativeFeature = () => {
  return (
    <>
      <section className="features__area p-relative z-index-1 grey-bg-7 pt-110 pb-90">
        <div className="features__shape">
          <Image className="features__shape-1" src={shape_1} alt="shape" />
          <Image className="features__shape-2" src={shape_2} alt="shape" />
          <Image className="features__shape-3" src={shape_3} alt="shape" />
          <Image className="features__shape-4" src={shape_4} alt="shape" />
          <Image className="features__shape-5" src={shape_5} alt="shape" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-7">
              <div className="section__title-wrapper-6 mb-60 text-center">
                <h3 className="section__title-6">
                  Put the Spotlight on the Main{" "}
                  <span className="section__title-6-highlight">
                    {" "}
                    Features.
                    <HighlightShapeFour />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {service_items.map((service, i) => (
              <CreativeSingleFeature key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeFeature;
