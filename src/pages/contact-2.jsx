import { FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ContactClassicArea from "@components/contacts/contact-classic";

export default function ContactTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={"Contact Two"} />
      <Header top_bar={false} header_solid={true} header_black={true} />
      <ContactClassicArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
