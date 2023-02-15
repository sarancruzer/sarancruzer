import { FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ForgotArea from "@components/login-register/forgot-area";

export default function Forgot() {
  return (
    <Wrapper>
      <SEO pageTitle={"Forgot"} />
      <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
      <ForgotArea />
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
