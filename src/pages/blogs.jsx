import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderBreadcrumb from "@components/common/breadcrumb/slider-breadcrumb";
import BlogListArea from "@components/blogs/blog-list-area";


export default function BlogListSidebar() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog List Sidebar'} />
      <Header header_solid={true} commonOffCanvas={true} />
      <SliderBreadcrumb />
      <BlogListArea/>
      <Footer />
    </Wrapper>
  )
}

