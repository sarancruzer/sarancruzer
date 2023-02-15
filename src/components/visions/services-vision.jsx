import React from "react";
import Image from "next/image";
// internal
import vision_img_1 from "@assets/img/vision/2/vision-1.jpg";
import vision_img_2 from "@assets/img/vision/2/vision-2.jpg";
import vision_img_3 from "@assets/img/vision/2/vision-3.jpg";
import vision_img_4 from "@assets/img/vision/2/vision-4.jpg";
import vision_img_5 from "@assets/img/vision/2/vision-5.jpg";
import { NavItem, TabItem } from "./politician-vision";
import {
  Analytics,
  MobileAppTwo,
  Optimized,
  PixelPerfect,
  Skill,
} from "@svg/index";

const ServicesVision = () => {
  return (
    <>
      <section className="vision__area vision__style-2 pt-110 pb-110 grey-bg-4">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-9 col-lg-10">
              <div className="tp-section-wrapper-2 mb-60">
                <span className="tp-section-subtitle-2">
                  Vision for the city
                </span>
                <h3 className="tp-section-title-2">
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
                    id="one"
                    icon={<MobileAppTwo />}
                    title="Mobile App"
                  />
                  <NavItem
                    delay=".3s"
                    active={true}
                    id="two"
                    icon={<Optimized />}
                    title="Speed Optimized"
                  />
                  <NavItem
                    delay=".5s"
                    id="three"
                    icon={<Skill />}
                    title="No Skills Needed"
                  />
                  <NavItem
                    delay=".7s"
                    id="four"
                    icon={<Analytics />}
                    title="Google Analytics"
                  />
                  <NavItem
                    delay=".9s"
                    id="five"
                    icon={<PixelPerfect />}
                    title="Pixel Perfect"
                  />
                </ul>
              </div>
            </div>

            <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-7">
              <div className="vision__tab-content pl-70">
                <div className="tab-content" id="visionTabContent">
                  <TabItem
                    id="one"
                    img={vision_img_1}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero."
                    lists={[
                      "1x Lorem ipsum dolor sit",
                      "Eiusmod incididunt ut labore et",
                    ]}
                  />
                  <TabItem
                    active={true}
                    id="two"
                    img={vision_img_2}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero."
                    lists={[
                      "1x Lorem ipsum dolor sit",
                      "Eiusmod incididunt ut labore et",
                    ]}
                  />
                  <TabItem
                    id="three"
                    img={vision_img_3}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero."
                    lists={[
                      "1x Lorem ipsum dolor sit",
                      "Eiusmod incididunt ut labore et",
                    ]}
                  />
                  <TabItem
                    id="four"
                    img={vision_img_4}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero."
                    lists={[
                      "1x Lorem ipsum dolor sit",
                      "Eiusmod incididunt ut labore et",
                    ]}
                  />
                  <TabItem
                    id="five"
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

export default ServicesVision;
