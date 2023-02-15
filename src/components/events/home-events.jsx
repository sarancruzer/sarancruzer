import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import event_data from '@data/event-data';
import { ArrowRight, ShapeLine } from '@svg/index';

const event_items = event_data.filter(event => event.home);

const HomeEvents = () => {
  return (
    <>
      <section className="event__area grey-bg-4 pt-110 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-8">
              <div className="section__title-wrapper mb-50">
                <h3 className="section__title">
                  Event & {' '}
                  <span className="section__title-highlight">seminar
                    <ShapeLine /> {' '}
                  </span>
                  schedules for the year 2022/23.
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              {event_items.map((event) => {
                const { id, title, date, delay, speakers } = event;
                return <div key={id} className="event__item white-bg transition-3 wow fadeInUp"
                  data-wow-delay={delay} data-wow-duration="1s">
                  <div className="row align-items-center">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <h3 className="event__title">
                        <Link href="/event-details">{title}</Link>
                      </h3>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                      <div className="event__speaker">
                        <ul>
                          {speakers.map((speaker, i) => (
                            <li key={i}>
                              <Image src={speaker} alt="speaker" />
                            </li>
                          ))}
                        </ul>
                        <span>Speaker</span>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6">
                      <div className="event__meta">
                        <span>{date}</span>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                      <div className="event__more float-lg-end">
                        <Link href="/event-details" className="tp-btn-border-pink">
                          Buy Tickets <ArrowRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              })}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeEvents;