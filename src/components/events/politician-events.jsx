import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape from "@assets/img/event/10/event-shape-1.png";
import event_data from "@data/event-data";

// event_items
const event_items = event_data.filter((item) => item.home_politician);

const PoliticianEvents = () => {
  return (
    <>
      <section className="event__area pt-110 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-10 mb-60 text-center">
                <span className="section__title-pre-10">Campaign events</span>
                <h3 className="section__title-10">Upcoming city events</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="event__item-wrapper-10">
                {event_items.map((event, i) => {
                  const {
                    id,
                    date,
                    title,
                    event_thumb_subtitle,
                    event_thumb_title,
                    img,
                    location,
                    tag,
                  } = event;
                  return (
                    <div
                      key={id}
                      className="event__item-10 transition-3 d-md-flex align-items-center"
                    >
                      <div className="event__thumb-10 w-img mr-25">
                        <Link href="/event-details">
                          <Image src={img} alt="event img" />
                        </Link>
                        <div className="event__thumb-10-overlay">
                          <Image
                            className="event-thumb-shape"
                            src={shape}
                            alt="shape"
                          />
                          <h3>{event_thumb_title}</h3>
                          <span>{event_thumb_subtitle}</span>
                        </div>
                      </div>
                      <div className="event__item-10-inner d-lg-flex justify-content-between align-items-center">
                        <div className="event__content-10">
                          <div className="event__meta-10">
                            <span className="event-tag">
                              <a href="#">{tag}</a>
                            </span>
                            <span>
                              <i className="fa-light fa-clock"></i>
                              {date}
                            </span>
                          </div>
                          <h3 className="event__title-10">
                            <Link href="/event-details">{title}</Link>
                          </h3>
                          <p>{location}</p>
                        </div>
                        <div className="event__more-10 text-lg-end">
                          <Link href="/contact" className="tp-btn-border-9">
                            Book a Seat{" "}
                            <i className="fa-regular fa-chevron-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoliticianEvents;
