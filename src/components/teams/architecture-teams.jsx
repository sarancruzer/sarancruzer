import React from "react";
// internal
import bg from "@assets/img/team/8/team-bg-1.png";
import HighlightShapeSix from "@svg/highlight-shape-6";
import team_data from "@data/team-data";
import SingleTeamArch from "./single-team/single-team-arch";

// team items
const team_items = team_data.filter((item) => item.home_architecture);

const ArchitectureTeams = () => {
  return (
    <>
      <section className="team__area team__border p-relative black-bg-12 pt-110 pb-100">
        <div
          className="team__bg-8"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-8 text-center mb-70">
                <span className="section__title-pre-8">Meet Our Team</span>
                <h3 className="section__title-8">
                  Professional &{" "}
                  <span className="section__title-highlight-8">
                    Friendly
                    <HighlightShapeSix />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {team_items.map((item) => (
              <div
                key={item.id}
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-6"
              >
                <SingleTeamArch team={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArchitectureTeams;
