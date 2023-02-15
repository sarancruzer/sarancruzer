import { FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import RegisterArea from "@components/login-register/register-area";

export default function Register() {
  return (
    <Wrapper>
      <SEO pageTitle={"Register"} />
      <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
      <RegisterArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
