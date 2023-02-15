import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsTestimonialMain from "@elements/elements-testimonial";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Testimonial"} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsTestimonialMain />
      <Footer />
    </Wrapper>
  );
}
