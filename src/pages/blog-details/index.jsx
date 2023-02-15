import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import BreadcrumbSix from "@components/common/breadcrumb/breadcrumb-6";
import BlogDetailsArea from "@components/blogs/blog-details/blog-details-area";
import blog_data from "@data/blog-data";

export default function BlogDetails() {
  const single_blog = blog_data[2];
  return (
    <Wrapper>
      <SEO pageTitle={"Blog Details"} />
      <Header header_solid={true} commonOffCanvas={true} />
      <BreadcrumbSix
        {...single_blog}
      />
      <BlogDetailsArea blog={single_blog} />
      <Footer />
    </Wrapper>
  );
}
