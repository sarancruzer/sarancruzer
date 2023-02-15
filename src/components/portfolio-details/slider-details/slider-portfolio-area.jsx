import React from "react";
import Link from "next/link";
// internal
import { ArrowRightTwo, AwardFive, Category, Client, Date } from "@svg/index";
import MetaItem from "../list-details/single-meta";

const SliderPortfolioArea = () => {
  return (
    <>
      <section className="portfolio__area pt-100 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="portfolio__details-wrapper-2">
                <div className="portfolio__details-content-2 mb-40">
                  <div className="portfolio__details-category">
                    <span>
                      <a href="#">Branding</a>
                    </span>
                  </div>
                  <h3 className="portfolio__details-title-2">
                    Coffee Original
                  </h3>
                  <p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine.When, while the lovely valley teems with vapour around
                    me, and the meridian sun strikes the upper surface of the
                    impenetrable foliage of my trees, and but a few stray gleams
                    steal into the inner sanctuary,
                  </p>
                </div>
                <div className="portfolio__details-task mb-45">
                  <h3 className="portfolio__details-title-sm">Task</h3>
                  <p>
                    Our main goal was to quis nostrud exercitation ullamco
                    laboris nisi ut aliquip commodo consequat. Climb leg rub
                    face on everything.!
                  </p>
                </div>
                <div className="portfolio__details-btn">
                  <Link href="/">
                    Visit Website
                    <span>
                      <ArrowRightTwo />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="portfolio__details-meta portfolio__details-meta-slider pl-100 pt-105 flex-wrap">
                <MetaItem
                  icon={<Client />}
                  title="Client:"
                  subtitle="Nature Planner"
                />
                <MetaItem
                  icon={<AwardFive />}
                  title="Awards:"
                  subtitle="First Place"
                />
                <MetaItem
                  icon={<Category />}
                  title="Category:"
                  subtitle="Portfolio"
                />
                <MetaItem
                  icon={<Date />}
                  title="Date:"
                  subtitle="October 3, 2021"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderPortfolioArea;
