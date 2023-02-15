import { FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import JobSectionTitle from "@components/job-positions/job-section-title";
import JobThumbArea from "@components/job-positions/job-thumb-area";
import JobPositionArea from "@components/job-positions/job-position-area";

export default function Job() {
  return (
    <Wrapper>
      <SEO pageTitle={"Job"} />
      <Header
        top_bar={false}
        header_black={true}
        header_solid={true}
        commonOffCanvas={true}
      />
      <JobSectionTitle />
      <JobThumbArea />
      <JobPositionArea style_2={true} />
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
