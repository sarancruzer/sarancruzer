import React from "react";
import Link from "next/link";
// internal
import { HighlightShapeFour } from "@svg/index";
import team_data from "@data/team-data";
import CreativeSingleTeam from "./single-team/creative-single-team";
import SectionWrapper from "@elements/section-wrapper";

// data
const team_items = team_data.filter((item) => item.home_creative);

const CreativeTeam = ({ element_style = false }) => {
  return (
    <>
      <section className="team__area pt-110 pb-125">
        <div className="container">
          {!element_style && (
            <div className="row justify-content-center">
              <div className="col-xxl-8 col-xl-9 col-lg-10">
                <div className="section__title-wrapper-6 mb-60 text-center">
                  <h3 className="section__title-6">
                    We Have More Than 20+ Years Practical{" "}
                    <span className="section__title-6-highlight">
                      {" "}
                      Experience.
                      <HighlightShapeFour />
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          )}
          {element_style && (
            <SectionWrapper title="Our Team" subtitle="Team Grid Style" />
          )}
          <div className="row">
            {team_items.map((team) => (
              <div
                key={team.id}
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
              >
                <CreativeSingleTeam team={team} />
              </div>
            ))}
          </div>
          {!element_style && (
            <div className="row">
              <div className="col-xxl-12">
                <div className="team__more-6 mt-25 text-center">
                  <Link href="/team" className="tp-btn-border-5 tp-link-btn-3">
                    View all Team Member
                    <span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CreativeTeam;
