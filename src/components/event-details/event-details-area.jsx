import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import {
  Calender,
  CalenderBig,
  LiveStream,
  LocationFour,
  QuoteThree,
  Time,
} from "@svg/index";
import details_img from "@assets/img/event/details/event-details-1.jpg";
import speaker_1 from "@assets/img/users/user-10.jpg";
import speaker_2 from "@assets/img/users/user-9.jpg";

// event item
function EventItem({ speaker, name, title }) {
  return (
    <div className="event__speaker-item d-flex">
      <div className="event__speaker-thumb w-img">
        <Image src={speaker} alt="speaker" />
      </div>
      <div className="event__speaker-content">
        <h3 className="event__speaker-title">
          <Link href="/team-details">{name}</Link>
        </h3>
        <span className="event__speaker-designation">{title}</span>
      </div>
    </div>
  );
}

// single info item
function SingleInfoItem({ icon, title, subtitle }) {
  return (
    <div className="event__details-info-item d-flex align-items-start">
      <div className="event__details-info-icon">
        <span>{icon}</span>
      </div>
      <div className="event__details-info-content">
        <h4 className="event__details-info-title">{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

const EventDetailsArea = () => {
  return (
    <section className="event__details-area pt-120 pb-65">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="event__details-wrapper">
              <div className="event__details-content mb-50">
                <div className="event__details-tag mb-10">
                  <span>Conference</span>
                </div>
                <h3 className="event__details-title">UX Design Conference</h3>
                <div className="event__meta-wrapper event__details-meta mb-55 d-sm-flex flex-wrap align-items-center">
                  <div className="event__meta-item">
                    <span>
                      <Calender />
                      October 12, 2023
                    </span>
                    <span>
                      <Time />
                      11:00am - 12:00pm
                    </span>
                    <span>
                      <LiveStream />
                      Live Stream via Zoom
                    </span>
                  </div>
                </div>
                <div className="event__details-thumb m-img mb-60">
                  <Image
                    src={details_img}
                    alt="details img"
                    priority
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div className="event__details-inner">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="event__details-left pr-35">
                      <div className="event__details-about mb-50">
                        <h3 className="event__details-about-title">
                          Description Event
                        </h3>
                        <p>
                          The Big Oxmox advised her not to do so, because there
                          were thousands of bad Commas, wild Question Marks and
                          devious Semikoli, but the Little Blind Text didn’t
                          listen. She packed her seven versalia, put her initial
                          into the belt and made herself on the way. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod.
                        </p>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries vokalia and Consonantia, there live the
                          blind texts. Separated they live in Book marks grove
                          right at the coast of the Semantics, <br /> a large
                          language ocean.
                        </p>
                      </div>
                      <div className="event__details-quote text-center mb-50">
                        <div className="event__details-quote-icon">
                          <span>
                            <QuoteThree />
                          </span>
                        </div>
                        <p>
                          The Big Oxmox advised her not to do so, because there
                          were thousands of bad Commas
                        </p>
                      </div>
                      <div className="event__details-list mb-60">
                        <h3 className="event__details-list-title">
                          Key points of this Session
                        </h3>

                        <ul className="has-two-side">
                          <li>Luctus nam per dis lacus</li>
                          <li>Influencer Marketing</li>
                          <li>Penatibus hac quis torquent molestie</li>
                          <li>Search Marketing: SEO & PPC</li>
                          <li>Velit rhoncus dolor adipiscing</li>
                          <li>Share knowledge, ideas and skills</li>
                          <li>Aenean per Penatibus</li>
                          <li>Sales/Marketing Strategy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="event__sidebar mt-5 ml-50">
                      <div className="event__widget mb-40">
                        <h3 className="event__widget-title">About Speaker</h3>
                        <div className="event__widget-content">
                          <EventItem
                            speaker={speaker_1}
                            name="Fleece Marigold"
                            title="Host & Speaker"
                          />
                          <EventItem
                            speaker={speaker_2}
                            name="Max Conversion"
                            title="Speaker"
                          />
                        </div>
                      </div>
                      <div className="event__widget mb-20">
                        <h3 className="event__widget-title">Event Info</h3>
                        <div className="event__widget-content">
                          <div className="event__details-info">
                            <SingleInfoItem
                              icon={<CalenderBig />}
                              title="Date"
                              subtitle="October 12, 2023"
                            />
                            <SingleInfoItem
                              icon={<LocationFour />}
                              title="Venue"
                              subtitle="Jakarta Garden City Hall, Room C"
                            />
                            <SingleInfoItem
                              icon={<CalenderBig />}
                              title="Date"
                              subtitle="November 12, 2023"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="event__widget">
                        <div className="event__details-btn">
                          <Link href="/contact" className="tp-btn w-100">
                            Make an Appointment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsArea;
