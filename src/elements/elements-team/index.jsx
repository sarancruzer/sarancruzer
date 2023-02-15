import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import HomeTeams from "@components/teams/home-teams";
import TeamsArea from "@components/teams/teams-area";
import LawyerTeams from "@components/teams/lawyer-teams";
import CreativeTeam from "@components/teams/creative-team";
import ArchitectureTeams from "@components/teams/architecture-teams";
import PoliticianTeams from "@components/teams/politician-teams";

const ElementsTeamMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our team members" />
      {/* breadcrumb end */}

      {/* team slider style start */}
      <HomeTeams style_2={true} element_style={true} />
      {/* team slider style end */}

      <div className="tp-separator"></div>

      {/* team slider style start */}
      <TeamsArea element_style={true} />
      {/* team slider style end */}

      <div className="tp-separator"></div>

      {/* team slider style start */}
      <LawyerTeams element_style={true} />
      {/* team slider style end */}

      <div className="tp-separator"></div>

      {/* team slider style start */}
      <CreativeTeam element_style={true} />
      {/* team slider style end */}

      {/* team slider style start */}
      <ArchitectureTeams />
      {/* team slider style end */}

      {/* team slider style start */}
      <PoliticianTeams element_style={true} />
      {/* team slider style end */}
    </React.Fragment>
  );
};

export default ElementsTeamMain;
