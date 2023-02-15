import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderBreadcrumb from "@components/common/breadcrumb/slider-breadcrumb";
import BlogGridAreaTwo from "@components/blogs/blog-grid-area-2";
import blog_data from "@data/blog-data";


// blog items
const blog_items = blog_data.filter((blog) => blog.blog_grid).slice(1, 7);

export default function BlogGridTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Grid Two'} />
      <Header header_solid={true} commonOffCanvas={true} />
      <SliderBreadcrumb />
      <BlogGridAreaTwo blog_items={blog_items} />
      <Footer />
    </Wrapper>
  )
}

