import React from "react";
// internal
import { HighlightShapeFive } from "@svg/index";
import { ArcAnimatedServicesItems } from "@components/services/architecture-services";

const ElIconBoxStyleEight = () => {
  return (
    <section className="services__area pt-115 pb-90 black-bg-12">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper-8 text-center mb-60">
              <span className="section__title-pre-8">Animated Border</span>
              <h3 className="section__title-8">
                <span className="section__title-highlight-8">
                  Animated
                  <HighlightShapeFive />
                </span>{" "}
                Border Style
              </h3>
            </div>
          </div>
        </div>
        <ArcAnimatedServicesItems />
      </div>
    </section>
  );
};

export default ElIconBoxStyleEight;
