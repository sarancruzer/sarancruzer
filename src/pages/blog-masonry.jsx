import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import BreadcrumbFive from "@components/common/breadcrumb/breadcrumb-5";
import BlogMasonryArea from "@components/blogs/blog-masonry-area";


export default function BlogMasonry() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Masonry'} />
      <Header header_solid={true} commonOffCanvas={true} />
      <BreadcrumbFive title='Articles on Growth & Marketing' subtitle='Blog Masonry' />
      <BlogMasonryArea/>
      <Footer />
    </Wrapper>
  )
}

