import React from "react";

// single
function SingleProcessArea({ num, title }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="features__item-14 grey-bg-14 mb-60">
        <div className="features__icon-14">
          <span>{num}.</span>
        </div>
        <h3 className="features__title-14">{title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh.!</p>
      </div>
    </div>
  );
}

const ElProcessArea = () => {
  return (
    <section className="features__area pt-140 pb-60">
      <div className="container">
        <div className="row">
          <SingleProcessArea num="01" title="Idea & Concept" />
          <SingleProcessArea num="02" title="Development" />
          <SingleProcessArea num="03" title="Testing & Support" />
        </div>
      </div>
    </section>
  );
};

export default ElProcessArea;
