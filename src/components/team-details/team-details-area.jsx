import React from "react";
import Image from "next/image";
// internal
import team_details_img from "@assets/img/team/details/team-details-1.jpg";
import shape_1 from "@assets/img/team/details/team-details-shape-1.png";
import shape_2 from "@assets/img/team/details/team-details-shape-2.png";
import shape_3 from "@assets/img/team/details/team-details-shape-3.png";
import shape_4 from "@assets/img/team/details/team-details-shape-4.png";
import { SocialShare } from "@components/social";

const TeamDetailsArea = () => {
  return (
    <section className="team__details-area pt-100 p-relative z-index-1">
      <div className="team__details-shape">
        <Image className="team__details-shape-1" src={shape_1} alt="shape" />
        <Image className="team__details-shape-2" src={shape_2} alt="shape" />
        <Image className="team__details-shape-3" src={shape_3} alt="shape" />
        <Image className="team__details-shape-4" src={shape_4} alt="shape" />
      </div>
      <div className="container">
        <div className="team__details-border">
          <div className="row">
            <div className="col-xl-5 col-md-6">
              <div
                className="team__details-thumb wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <Image src={team_details_img} alt="details img" />
              </div>
            </div>
            <div className="col-xl-7 col-md-6">
              <div
                className="team__details-content pt-40 pl-15 pr-50 wow fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration="1s"
              >
                <span className="team__details-subtitle">Founder-CO</span>
                <h3 className="team__details-title">Moira Baxter</h3>
                <div className="team__details-contact mb-10">
                  <div className="team__details-contact-item d-flex align-items-center">
                    <div className="team__details-contact-content">
                      <p>
                        <a href="mailto:hello@website.com">hello@website.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  vulputate pellentesque commodo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>

                <div className="team__details-social">
                  <SocialShare />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsArea;
