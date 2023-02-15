import React from "react";
// internal
import bg from "@assets/img/portfolio/breadcrumb/portfolio-breadcrumb-1.jpg";
import BreadcrumbList from "./breadcrumb-list";

const BreadcrumbTwo = () => {
  return (
    <section
      className="breadcrumb__area breadcrumb__style-3 breadcrumb__spacing-2 include-bg pt-200 pb-235 grey-bg-4"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-7">
            <div className="breadcrumb__content p-relative z-index-1">
              <BreadcrumbList
                title="Business"
                subtitle="Investment Trend Monitor: Top Trends in 2022"
              />
              <h3 className="breadcrumb__title">
                Making the world a more beautiful place.
              </h3>
              <p>
                We are here to help you create the best <br />
                project out there!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbTwo;
