import React from "react";
import Link from "next/link";
// internal
import { LocationThree, Time } from "@svg/index";

const SingleJobItem = ({
  delay,
  title,
  time,
  location,
  tag,
  date,
  vacancy,
}) => {
  return (
    <div
      className="job__item transition-3 wow fadeInUp"
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-7 col-md-9">
          <div className="job__content">
            <h3 className="job__title">
              <Link href="/job-details">{title}</Link>
            </h3>

            <div className="job__meta-wrapper d-sm-flex flex-wrap align-items-center">
              <div className="job__meta-item">
                <span>
                  <Time />
                  {time}
                </span>
                <span>
                  <LocationThree />
                  {location}
                </span>
              </div>
              <div className="job__tag">
                <span>{tag}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
          <div className="job__vacancies">
            <span>{date}</span>
            <p>No of vacancies: {vacancy}</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
          <div className="job__btn text-xl-end">
            <Link href="/job-details" className="tp-btn-border">
              Apply
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJobItem;
