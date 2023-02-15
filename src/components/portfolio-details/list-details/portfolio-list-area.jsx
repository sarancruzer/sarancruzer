import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import img_1 from "@assets/img/portfolio/list/portfolio-list-1.jpg";
import img_2 from "@assets/img/portfolio/list/portfolio-list-2.jpg";
import img_3 from "@assets/img/portfolio/list/portfolio-list-3.jpg";
import img_4 from "@assets/img/portfolio/list/portfolio-list-4.jpg";
import { AwardFive, Category, Client, Date } from "@svg/index";
import MetaItem from "./single-meta";
import { SocialShare } from "@components/social";


const PortfolioListArea = () => {
  return (
    <>
      <section className="portfolio__area pt-100 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="portfolio__details-img-list">
                <div className="portfolio__details-img-list-box mb-10">
                  <Image src={img_1} alt="list img" />
                  <div className="portfolio__details-img-list-social d-flex flex-column">
                    <SocialShare/>
                  </div>
                </div>
                <div className="portfolio__details-img-list-box mb-10">
                  <Image src={img_2} alt="list img" />
                </div>
                <div className="portfolio__details-img-list-box mb-10">
                  <Image src={img_3} alt="list img" />
                </div>
                <div className="portfolio__details-img-list-box mb-10">
                  <Image src={img_4} alt="list img" />
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="portfolio__details-info-wrapper">
                <div className="portfolio__details-info-content">
                  <h3 className="portfolio__details-info-box-title">
                    Project Details
                  </h3>
                  <p>
                    We’ve created a unique visual system and strategy across the
                    wide existing spectrum of visible mobile applications and
                    found yourself in a wide, straggling with wainscots.
                  </p>
                </div>
                <div className="portfolio__details-meta flex-wrap mb-40">
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
                <div className="portfolio__details-info-btn">
                  <Link href="/" className="tp-btn w-100">
                    Visit Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioListArea;
