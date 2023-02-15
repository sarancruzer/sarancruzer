import React, { useState } from "react";
import Image from "next/image";
// internal
import user_1 from "@assets/img/users/user-1.jpg";
import user_2 from "@assets/img/users/user-2.jpg";
import user_3 from "@assets/img/users/user-3.jpg";
import feature_thumb_1 from "@assets/img/features/9/features-1.jpg";
import feature_thumb_2 from "@assets/img/features/9/features-2.jpg";
import feature_thumb_3 from "@assets/img/features/9/features-3.jpg";
import feature_thumb_4 from "@assets/img/features/9/features-4.jpg";

// feature content
const feature_contents = [
  { id: 1, subtitle: "Strategy", title: "Concept" },
  { id: 2, subtitle: "Analysis", title: "Research" },
  { id: 3, subtitle: "Development", title: "Design" },
  { id: 4, subtitle: "Prototyping", title: "Animation" },
];

const feature_thumbs = [
  { ref: "features-img-1", img: feature_thumb_1 },
  { ref: "features-img-2", img: feature_thumb_2 },
  { ref: "features-img-3", img: feature_thumb_3 },
  { ref: "features-img-4", img: feature_thumb_4 },
];

const PortfolioFeature = () => {
  const [serviceActive, setServiceActive] = useState("features-img-2");
  // handleServiceActive
  const handleServiceActive = (id) => {
    setServiceActive(`features-img-${id}`);
  };

  return (
    <>
      <section className="features__area pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="features__wrapper-9 mr-30">
                {feature_contents.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleServiceActive(item.id)}
                    className={`features__content-9 features-item-content ${
                      serviceActive === `features-img-${item.id}`
                        ? "active"
                        : ""
                    }`}
                    rel="features-img-1"
                  >
                    <span>{item.subtitle}</span>
                    <h3 className="features__title-9">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-6 d-none d-md-block">
              <div className="features__thumb-wrapper-9 pl-20">
                <div id="features-item-thumb" className={serviceActive}>
                  {feature_thumbs.map((item, i) => (
                    <div
                      key={i}
                      className={`features__thumb-9 transition-3 ${item.ref} ${
                        serviceActive === item.ref ? "active" : ""
                      }`}
                    >
                      <Image src={item.img} alt="image" />
                      <div className="features__thumb-9-content">
                        <p>
                          “I design beautifully simple things,and i love what i
                          do.”
                        </p>

                        <div className="features-users">
                          <Image src={user_1} alt="user" />
                          <Image src={user_2} alt="user" />
                          <Image src={user_3} alt="user" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioFeature;
