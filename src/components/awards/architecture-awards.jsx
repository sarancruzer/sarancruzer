import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import award_icon_1 from "@assets/img/award/8/award-1.png";
import award_icon_2 from "@assets/img/award/8/award-2.png";
import award_icon_3 from "@assets/img/award/8/award-3.png";
import award_icon_4 from "@assets/img/award/8/award-4.png";
import HighlightShapeSix from "@svg/highlight-shape-6";

// single award
function SingleAward({ delay, icon, year, title, subtitle }) {
  return (
    <div
      className="award__item-8 transition-3 wow fadeInUp"
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className="row align-items-center">
        <div className="col-xl-2 col-lg-2 col-md-2">
          <div className="award__year text-md-center pb-30 pl-10">
            <span>{year}</span>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2">
          <div className="award__icon-8 pl-15">
            <span>
              <Image src={icon} alt="icon" />
            </span>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5">
          <div className="award__content-8">
            <h3 className="award__title-8">{title}</h3>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3">
          <div className="award__btn-8 text-md-center">
            <Link href="/portfolio-details-list" className="tp-link-btn-3">
              See Projects
              <span>
                <i className="fa-regular fa-chevron-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const ArchitectureAwards = () => {
  return (
    <>
      <section className="award__area pt-130 pb-95 black-bg-13">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-8 text-center mb-60">
                <span className="section__title-pre-8">
                  International Awards
                </span>
                <h3 className="section__title-8">
                  <span className="section__title-highlight-8">
                    Awards
                   <HighlightShapeSix/>
                  </span>
                  & Achievements
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <SingleAward
                delay=".3s"
                icon={award_icon_1}
                year="2022"
                title="Red dot design Award"
                subtitle="Daniel Villa, Romania"
              />
              <SingleAward
                delay=".5s"
                icon={award_icon_2}
                year="2021"
                title="AAG winner 2021"
                subtitle="Canbin wood in Forest"
              />
              <SingleAward
                delay=".7s"
                icon={award_icon_3}
                year="2020"
                title="BUILD architecture Awards"
                subtitle="Architect Thiago Alcantara"
              />
              <SingleAward
                delay=".9s"
                icon={award_icon_4}
                year="2018"
                title="Art of year 2018"
                subtitle="Daniel Villa, Romania"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArchitectureAwards;
