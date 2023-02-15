import React from "react";
// internal
import service_data from "@data/service-data";
import SingleLawyerService from "./single-service/single-lawyer-service";

// items
const items = service_data.filter((ser) => ser.home_lawyer);

const contents = {
  pre_title: "Practice Areas",
  title: "The area where we practice our law",
  sm_text:
    "The city and town name generator uses a database of over five million names across modi tempora incidunt.",
  services: items,
};

const { pre_title, title, sm_text, services } = contents;

const ServicesLawyer = () => {
  return (
    <>
      <section className="servivces__area pt-110">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="section__title-wrapper-4 mb-60">
                <span className="section__title-pre-4">{pre_title}</span>
                <h3 className="section__title-4">{title}</h3>
              </div>
            </div>
            <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6 col-md-6">
              <div className="services__more-4 mb-65">
                <p>{sm_text}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((item) => (
              <SingleLawyerService key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesLawyer;
