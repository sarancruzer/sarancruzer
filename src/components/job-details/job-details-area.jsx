import React, { useState } from "react";
import Image from "next/image";
// internal
import { Briefcase, LocationThree, Time, UserTwo } from "@svg/index";
import details_img from "@assets/img/job/details/job-details-1.jpg";
import JobDetailsForm from "@components/forms/job-details-form";

const JobDetailsArea = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="job__details-area pt-120 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="job__details-wrapper">
              <div className="job__details-content mb-50">
                <div className="job__details-tag mb-10">
                  <span>Trainee</span>
                </div>
                <h3 className="job__details-title">
                  Javascript Developer (Full-Time)
                </h3>
                <div className="job__meta-wrapper job__details-meta mb-60 d-sm-flex flex-wrap align-items-center">
                  <div className="job__meta-item">
                    <span>
                      <Time />
                      Full-Time
                    </span>
                    <span>
                      <LocationThree />
                      Hawthorne, CA, United states
                    </span>
                    <span>
                      <UserTwo />
                      No. of Vacancies: 2
                    </span>
                    <span>
                      <Briefcase />
                      Experience: Fresher
                    </span>
                  </div>
                  <div className="job__tag">
                    <span>Design </span>
                  </div>
                </div>
                <div className="job__details-thumb m-img mb-60">
                  <Image
                    src={details_img}
                    alt="details img"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p>
                  We’re a collective of thinkers and tinkerers—designers,
                  engineers, writers, and strategists building the platform to
                  change the way apps are built. Our work is inspired by a
                  shared belief that app creation should be simple, accessible,
                  and enjoyable to everyone on the planet.
                </p>
              </div>
              <div className="job__details-about mb-35">
                <h3 className="job__details-about-title">About the role</h3>
                <p>
                  Erat eleifend lacus mattis at porttitor at mauris vel
                  pharetra. Consequat, dictum et magna augue. Risus maecenas
                  morbi ante scelerisque consequat. Id mi porttitor dui platea
                  mauris. Accumsan, consequat feugiat at vitae laoreet pulvinar
                  volutpat.A place where each of us can do our best work, and
                  feel good about it. As Peter Drucker famously said, culture
                  “eats strategy for breakfast,” so we do our best to maintain a
                  healthy work environment that is conducive to business.
                </p>
              </div>
              <div className="job__details-list-wrapper">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="job__details-list mb-60">
                      <h3 className="job__details-list-title">
                        Career Benefits
                      </h3>
                      <ul>
                        <li>Experiences in docker development techniques.</li>
                        <li>
                          Since we are an agile team, you will learn and
                          practice Agile.
                        </li>
                        <li>Experiences in docker development techniques.</li>
                        <li>Opportunities to expand your knowledge.</li>
                        <li>
                          A Certificate will be provided after completion.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="job__details-list mb-60">
                      <h3 className="job__details-list-title">
                        Offer Great Benefits.
                      </h3>

                      <ul>
                        <li>Company-wide 401(k) plan</li>
                        <li>Life & disability insurance offered</li>
                        <li>Ompetitive compensation—salary, bonus, equity</li>
                        <li>
                          Medical, dental, and vision; flex spending account
                        </li>
                        <li>Flexible paid time off & sick leave</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job__details-list mb-40">
                <h3 className="job__details-list-title-2">
                  Educational Requirements
                </h3>

                <ul>
                  <li>
                    Experiences in competitive programming will get priority
                    access.
                  </li>
                  <li>
                    Bachelor of Science (BSc) in Computer Science & Engineering
                    or equivalent field.
                  </li>
                  <li>
                    A good profile with StackOverflow and Hackathon will get
                    priority access
                  </li>
                </ul>
              </div>
              <div className="job__details-info-wrapper">
                <div className="job__details-info">
                  <h3 className="job__details-info-title">Salary range: –</h3>
                  <p>
                    <span>$80k to $100k</span> (Based on your experience).
                  </p>
                </div>
                <div className="job__details-info">
                  <h3 className="job__details-info-title">Working days</h3>
                  <p>
                    Weekly 05 days. Sunday To Thursday.{" "}
                    <span>09 AM to 06 PM</span>.(Launch Break 01 Hour)
                  </p>
                </div>
              </div>
              <div className="job__details-deadline">
                <p>
                  Application Deadline: <span>October 24, 2022</span>
                </p>
              </div>
              <div className="job__details-cv">
                <p>Please, upload your CV in PDF format.</p>
              </div>
              <div className="job__details-btn">
                <button
                  onClick={() => setShowForm(!showForm)}
                  type="button"
                  className="tp-btn job-form-open-btn"
                >
                  Apply for this position
                </button>
              </div>
              {showForm && (
                <div className="job__form job-apply-form mt-40">
                  <h3 className="job__form-title">Personal Details</h3>
                  {/* form start */}
                  <JobDetailsForm />
                  {/* form end */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetailsArea;
