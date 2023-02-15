import React from "react";
import Image from "next/image";
// internal
import vision_img_1 from "@assets/img/vision/vision-1.jpg";
import vision_img_2 from "@assets/img/vision/vision-2.jpg";
import vision_img_3 from "@assets/img/vision/vision-3.jpg";
import vision_img_4 from "@assets/img/vision/vision-4.jpg";
import vision_img_5 from "@assets/img/vision/vision-5.jpg";
import {
  Bulb,
  CorrectIcon,
  Education,
  HousingLand,
  SocialLaw,
} from "@svg/index";

// nav item
export function NavItem({ delay, id, active = false, icon, title }) {
  return (
    <li
      className="nav-item wow fadeInUp"
      role="presentation"
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <button
        className={`nav-link ${active ? "active" : ""}`}
        id={`${id}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#${id}`}
        type="button"
        role="tab"
        aria-controls={id}
        aria-selected={active ? "true" : "false"}
        tabIndex="-1"
      >
        <span>{icon}</span>
        {title}
      </button>
    </li>
  );
}

// tab item
export function TabItem({ active = false, id, img, desc, lists }) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
    >
      <div className="vision__item">
        <div className="vision__thumb m-img mb-30">
          <Image
            src={img}
            alt="image"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="vision__content">
          <p>{desc}</p>
          <div className="vision__list">
            <ul>
              {lists.map((l, i) => (
                <li key={i}>
                  <span>
                    <CorrectIcon />
                  </span>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// PoliticianVision area

const PoliticianVision = () => {
  return (
    <>
      <section className="vision__area pt-110 pb-110 grey-bg-4">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-9 col-lg-10">
              <div className="section__title-wrapper-10 mb-60">
                <span className="section__title-pre-10">
                  Vision for the city
                </span>
                <h3 className="section__title-10">
                  Our various types of services especially for you
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-5">
              <div className="vision__tab tp-tab">
                <ul
                  className="nav nav-tabs flex-column"
                  id="visionTab"
                  role="tablist"
                >
                  <NavItem
                    delay=".1s"
                    id="environment"
                    icon={<Bulb />}
                    title="Environment"
                  />
                  <NavItem
                    delay=".3s"
                    active={true}
                    id="crime"
                    icon={<Bulb />}
                    title="Policing & crime"
                  />
                  <NavItem
                    delay=".5s"
                    id="land"
                    icon={<HousingLand />}
                    title="Housing & land"
                  />
                  <NavItem
                    delay=".7s"
                    id="education"
                    icon={<Education />}
                    title="Education"
                  />
                  <NavItem
                    delay=".9s"
                    id="law"
                    icon={<SocialLaw />}
                    title="Social & Law"
                  />
                </ul>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-7">
              <div className="vision__tab-content pl-70">
                <div className="tab-content" id="visionTabContent">
                  <TabItem
                    id="environment"
                    img={vision_img_1}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero."
                    lists={[
                      "1x Lorem ipsum dolor sit",
                      "Eiusmod incididunt ut labore et",
                    ]}
                  />
                  <TabItem
                    active={true}
                    id="crime"
                    img={vision_img_2}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero."
                    lists={[
                      "1x Lorem ipsum dolor sit",
                      "Eiusmod incididunt ut labore et",
                    ]}
                  />
                  <TabItem
                    id="land"
                    img={vision_img_3}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero."
                    lists={[
                      "1x Lorem ipsum dolor sit",
                      "Eiusmod incididunt ut labore et",
                    ]}
                  />
                  <TabItem
                    id="education"
                    img={vision_img_4}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero."
                    lists={[
                      "1x Lorem ipsum dolor sit",
                      "Eiusmod incididunt ut labore et",
                    ]}
                  />
                  <TabItem
                    id="law"
                    img={vision_img_5}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero."
                    lists={[
                      "1x Lorem ipsum dolor sit",
                      "Eiusmod incididunt ut labore et",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoliticianVision;
