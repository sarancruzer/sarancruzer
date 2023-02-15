import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderBreadcrumb from "@components/common/breadcrumb/slider-breadcrumb";
import BlogGridArea from "@components/blogs/blog-grid-area";


export default function BlogGrid() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Grid'} />
      <Header header_solid={true} commonOffCanvas={true} />
      <SliderBreadcrumb />
      <BlogGridArea/>
      <Footer />
    </Wrapper>
  )
}

