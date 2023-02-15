import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import polity_ser_icon_1 from "@assets/img/features/10/features-1.png";
import polity_ser_icon_2 from "@assets/img/features/10/features-2.png";
import polity_ser_icon_3 from "@assets/img/features/10/features-3.png";

// service data
const service_items = [
  {
    delay: ".3s",
    icon: polity_ser_icon_1,
    sm_title: "Main Mission",
    title: "Core Principles",
    desc: "We are committed to restoring honesty, integrity, government. Explore our principles.",
  },
  {
    delay: ".5s",
    icon: polity_ser_icon_2,
    sm_title: "What We Do",
    title: "Political Program",
    desc: "We are committed to restoring honesty, integrity, government. Explore our principles.",
  },
  {
    delay: ".7s",
    icon: polity_ser_icon_3,
    sm_title: "Our Mission",
    title: "Our Members",
    desc: "We are committed to restoring honesty, integrity, government. Explore our principles.",
  },
];

// single service
function SingleService({ item }) {
  const { icon, sm_title, title, delay, desc } = item || {};
  return (
    <div
      className="features__item-10 transition-3 mb-30 wow fadeInUp"
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className="features__icon-10">
        <span>
          <Image src={icon} alt="icon" />
        </span>
      </div>
      <div className="features__content-10">
        <span>{sm_title}</span>
        <h3 className="features__title-10">{title}</h3>
        <p>{desc}</p>
        <div className="features__btn-10">
          <Link href="/service-details" className="tp-btn-border-9">
            Learn More <i className="fa-regular fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

// features items wrapper
export function PolityFeaturesItems() {
  return (
      <div className="row">
        {service_items.map((item, i) => (
          <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <SingleService item={item} />
          </div>
        ))}
      </div>
  );
}

const PoliticianFeature = () => {
  return (
    <>
      <section className="features__area pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-9 col-xl-10 col-lg-10">
              <div className="features__section-title-wrapper text-center mb-40">
                <h3 className="features__section-title">
                  A Canada that is healthier and safer, greener and more
                  competitive.
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="features__more-10 text-center">
                <Link href="/contact" className="tp-btn-7 tp-btn-7-sm">
                  Join Our Movement
                </Link>
              </div>
            </div>
          </div>
          {/* PolityFeaturesItems */}
          <div className="features__wrapper-10">
            <PolityFeaturesItems />
          </div>
          {/* PolityFeaturesItems */}
        </div>
      </section>
    </>
  );
};

export default PoliticianFeature;
