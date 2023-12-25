import { FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import PolicyArea from "@components/terms-policy/policy-area";

export default function Policy() {
  return (
    <Wrapper>
      <SEO pageTitle={"Policy"} />
      <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
      <SectionArea
        title="Privacy Policy"
        subtitle={
          <>
            Your privacy is important to us. It is sarancruzer’s policy to respect
            your privacy regarding <br /> any information we may collect from
            you across our website, https:// sarancruzer.com, <br /> and other sites
            we own and operate.
          </>
        }
      />
      <PolicyArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
