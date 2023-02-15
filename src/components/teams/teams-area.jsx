import React from "react";
// internal
import team_data from "@data/team-data";
import HomeSingleTeam from "./single-team/home-single-team";
import SectionWrapper from "@elements/section-wrapper";

// teams_items
const teams_items = team_data.filter((team) => team.team_p);

const TeamsArea = ({ element_style = false }) => {
  return (
    <section className="team__area pt-100 pb-40">
      <div className="container">
        {element_style && (
          <SectionWrapper title="Our Team" subtitle="Team Grid Style" />
        )}
        <div className="row">
          {teams_items.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <HomeSingleTeam item={item} team_p={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsArea;
