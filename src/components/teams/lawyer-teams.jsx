import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import team_data from "@data/team-data";
import LawyerSingleTeam from "./single-team/lawyer-single-team";
import SectionWrapper from "@elements/section-wrapper";

// lawyers_teams
const lawyers_teams = team_data.filter((team) => team.home_lawyer);

const LawyerTeams = ({ element_style = false }) => {
  return (
    <>
      <section className="team__area pt-120 pb-80">
        <div className="container">
          {!element_style && (
            <div className="row align-items-end">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7">
                <div className="section__title-wrapper-4 mb-60">
                  <span className="section__title-pre-4">Team member</span>
                  <h3 className="section__title-4">
                    Meet our most talented attorneys
                  </h3>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5">
                <div className="team__more-4 mb-70 text-md-end">
                  <Link href="/team" className="tp-btn-border-brown">
                    See all Attorneys
                  </Link>
                </div>
              </div>
            </div>
          )}
          {element_style && (
            <SectionWrapper title="Our Team" subtitle="Team Overlay Style" />
          )}
          <div className="row">
            {lawyers_teams.map((item) => (
              <div
                key={item.id}
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6"
              >
                <LawyerSingleTeam item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LawyerTeams;
