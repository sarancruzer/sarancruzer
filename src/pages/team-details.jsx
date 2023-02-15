import { FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import TeamDetailsArea from "@components/team-details/team-details-area";
import TeamDetailsAbout from "@components/team-details/team-details-about";
import LawyerBlogs from "@components/blogs/lawyer-blogs";

export default function TeamDetails() {
  return (
    <Wrapper>
      <SEO pageTitle={"Team Details"} />
      <Header
        top_bar={false}
        header_black={true}
        header_solid={true}
        commonOffCanvas={true}
      />
      <TeamDetailsArea />
      <TeamDetailsAbout />
      <LawyerBlogs style_2={true} />
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
