import {FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import TeamBreadcrumb from "@components/common/breadcrumb/team-breadcrumb";
import TeamsArea from "@components/teams/teams-area";
import JobPositionArea from "@components/job-positions/job-position-area";



export default function Team() {
  return (
    <Wrapper>
      <SEO pageTitle={'Team'} />
      <Header top_bar={false} />
      <TeamBreadcrumb/>
      <TeamsArea/>
      <JobPositionArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  )
}

