import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// internal
import team_data from "@data/team-data";
import PolitySingleTeam from "./single-team/polity-single-team";
import SectionWrapper from "@elements/section-wrapper";

// team_items
const team_items = team_data.filter((team) => team.home_politician);

const PoliticianTeams = ({ element_style = false }) => {
  const [loop,setLoop] = useState(false);
  useEffect(() => setLoop(true),[])
  return (
    <>
      <section className={`team__area ${element_style ? "pt-110" : ""} pb-100`}>
        <div className="container">
          {!element_style && (
            <div className="row">
              <div className="col-xxl-12">
                <div className="section__title-wrapper-10 text-center mb-45">
                  <span className="section__title-pre-10">Our team member</span>
                  <h3 className="section__title-10">Our expert volunteer</h3>
                </div>
              </div>
            </div>
          )}
          {element_style && (
            <SectionWrapper title="Our Team" subtitle="Team Overlay Slider" />
          )}
          <div className="row">
            <div className="col-xxl-12">
              <div className="team__slider-10">
                <Swiper
                  className="team__slider-active-10 swiper-container"
                  slidesPerView={4}
                  spaceBetween={30}
                  loop={loop}
                  pagination={{
                    el: ".team-slider-dot-10",
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  breakpoints={{
                    1200: {
                      slidesPerView: 4,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    576: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {team_items.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className="team__item-10 wow fadeInUp"
                      data-wow-delay={item.delay}
                      data-wow-duration="1s"
                    >
                      <PolitySingleTeam item={item} />
                    </SwiperSlide>
                  ))}
                  <div className="tp-swiper-dot tp-swiper-dot-2 team-slider-dot-10 text-center mt-50"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoliticianTeams;
