import React from "react";
// internal
import { AccordionItems } from "@components/faqs/home-faq";

const UnderlineFaq = () => {
  return (
    <section className="accordion__area pt-110 pb-85">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-30 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Underline Accordion</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="faq__wrapper tp-accordion">
              <AccordionItems parent_id="underline-accordion" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderlineFaq;
