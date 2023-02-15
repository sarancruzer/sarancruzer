import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import BreadcrumbFour from "@components/common/breadcrumb/breadcrumb-4";
import BlogPostboxArea from "@components/blogs/blog-postbox-area";


export default function Blogs() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blogs'} />
      <Header header_solid={true} commonOffCanvas={true} />
      <BreadcrumbFour title='Our Blog' subtitle='Blog' />
      <BlogPostboxArea/>
      <Footer/>
    </Wrapper>
  )
}

