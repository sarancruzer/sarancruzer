import React from "react";
// internal
import HighlightShapeFive from "@svg/highlight-shape-5";
import service_icon_1 from "@assets/img/icon/services/8/services-1.svg";
import service_icon_2 from "@assets/img/icon/services/8/services-2.svg";
import service_icon_3 from "@assets/img/icon/services/8/services-3.svg";
import service_icon_4 from "@assets/img/icon/services/8/services-4.svg";
import ArchitectureServiceItem from "./single-service/architecture-single-service";

// animated border services items
export function ArcAnimatedServicesItems({}) {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <ArchitectureServiceItem
          delay=".3s"
          icon={service_icon_1}
          title="Planning"
          subtitle="There are many variations of passages of lorem Ipsum available.!"
          project="350"
        />
      </div>
      <div className="col-lg-6 col-md-6">
        <ArchitectureServiceItem
          delay=".5s"
          icon={service_icon_2}
          title="Architecture"
          subtitle="There are many variations of passages of lorem Ipsum available.!"
          project="120"
        />
      </div>
      <div className="col-lg-6 col-md-6">
        <ArchitectureServiceItem
          delay=".7s"
          icon={service_icon_3}
          title="Design"
          subtitle="There are many variations of passages of lorem Ipsum available.!"
          project="240"
        />
      </div>
      <div className="col-lg-6 col-md-6">
        <ArchitectureServiceItem
          delay=".9s"
          icon={service_icon_4}
          title="Products"
          subtitle="There are many variations of passages of lorem Ipsum available.!"
          project="220"
        />
      </div>
    </div>
  );
}

const ArchitectureServices = () => {
  return (
    <>
      <section className="services__area pt-115 pb-105 black-bg-12">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-8 text-center mb-60">
                <span className="section__title-pre-8">Our Services</span>
                <h3 className="section__title-8">
                  Our featured{" "}
                  <span className="section__title-highlight-8">
                    services
                    <HighlightShapeFive />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/* ArcAnimatedServicesItems */}
          <ArcAnimatedServicesItems/>
          {/* ArcAnimatedServicesItems */}
        </div>
      </section>
    </>
  );
};

export default ArchitectureServices;
