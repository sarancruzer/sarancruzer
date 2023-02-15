import React from "react";

// single item
function SingleFeatureItem({ num, title, subtitle }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="features__item-14 grey-bg-14 mb-60">
        <div className="features__icon-14">
          <span>{num}.</span>
        </div>
        <h3 className="features__title-14">{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

const FeaturesArea = () => {
  return (
    <section className="features__area pb-60">
      <div className="container">
        <div className="row">
          <SingleFeatureItem
            num="01"
            title="Idea & Concept"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh.!"
          />
          <SingleFeatureItem
            num="02"
            title="Development"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh.!"
          />
          <SingleFeatureItem
            num="03"
            title="Testing & Support"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh.!"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesArea;
