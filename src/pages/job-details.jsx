import { FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import JobDetailsArea from "@components/job-details/job-details-area";

export default function JobDetails() {
  return (
    <Wrapper>
      <SEO pageTitle={"Job Details"} />
      <Header
        top_bar={false}
        header_black={true}
        header_solid={true}
        commonOffCanvas={true}
      />
      <JobDetailsArea />
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
