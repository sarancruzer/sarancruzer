import React from "react";
import { AccordionItems } from "@components/faqs/home-faq";

const BorderAccordion = () => {
  return (
    <section className="accordion__area faq__style-3 pt-110 pb-105">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-65 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Bordered Accordion</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="faq__tab-content tp-accordion">
              <AccordionItems parent_id="border-accordion" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BorderAccordion;
