import React from "react";
import Image from "next/image";
// internal
import title_bag from "@assets/img/icon/section-title-bag.png";
import SingleJobItem from "./single-job-item";

const JobPositionArea = ({style_2=false}) => {
  return (
    <section className={`job__area pb-140 ${style_2?'':'pt-35'}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-wrapper-4 mb-50">
              <h3 className="tp-section-title-4">
                <Image src={title_bag} alt="title bag img" />
                Open Job Positions
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="job__item-wrapper">
              <SingleJobItem
                delay=".3s"
                title="UX & UI Designer"
                time="Full-Time"
                location="Hawthorne, CA, United states"
                tag="Design"
                date="10 Jun, 2022"
                vacancy="2"
              />

              <SingleJobItem
                delay=".5s"
                title="Javascript Developer"
                time="Full-Time"
                location="Hawthorne, CA, United states"
                tag="Developer"
                date="15 Jul, 2022"
                vacancy="5"
              />

              <SingleJobItem
                delay=".7s"
                title="Sales lead, Human Spaceflight"
                time="Full-Time"
                location="Hawthorne, CA, United states"
                tag="Sales"
                date="20 Aug, 2022"
                vacancy="1"
              />

              <SingleJobItem
                delay=".9s"
                title="WordPress Developer"
                time="Full-Time"
                location="Hawthorne, CA, United states"
                tag="Developer"
                date="01 Jan, 2022"
                vacancy="4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPositionArea;
