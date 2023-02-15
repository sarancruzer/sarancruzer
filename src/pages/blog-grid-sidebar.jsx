import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderBreadcrumb from "@components/common/breadcrumb/slider-breadcrumb";
import BlogGridAreaTwo from "@components/blogs/blog-grid-area-2";
import blog_data from "@data/blog-data";

// blog items
const blog_items = blog_data
  .filter((blog) => blog.blog_grid)
  .filter((blog) => !blog.blog_quote)
  .slice(0, 6);

export default function BlogGridSidebar() {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog Grid"} />
      <Header header_solid={true} commonOffCanvas={true} />
      <SliderBreadcrumb />
      <BlogGridAreaTwo blog_items={blog_items} grid_sidebar={true} />
      <Footer />
    </Wrapper>
  );
}
