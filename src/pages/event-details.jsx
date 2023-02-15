import { FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import EventDetailsArea from "@components/event-details/event-details-area";

export default function EventDetails() {
  return (
    <Wrapper>
      <SEO pageTitle={"Event Details"} />
      <Header
        top_bar={false}
        header_black={true}
        header_solid={true}
        commonOffCanvas={true}
      />
      <EventDetailsArea />
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
