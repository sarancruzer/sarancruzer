import { FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import LoginArea from "@components/login-register/login-area";

export default function Login() {
  return (
    <Wrapper>
      <SEO pageTitle={"Login"} />
      <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
      <LoginArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
