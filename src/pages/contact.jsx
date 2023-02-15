import { FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ContactArea from "@components/contacts/contact-area";

export default function Contact() {
  return (
    <Wrapper>
      <SEO pageTitle={"Contact"} />
      <Header top_bar={false} header_solid={true} />
      <ContactArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
