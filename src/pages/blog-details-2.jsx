import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import BlogDetailsTwoArea from "@components/blogs/blog-details-2/blog-details-2-area";


export default function BlogDetailsTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Details Two'} />
      <Header header_solid={true} commonOffCanvas={true} />
      <BlogDetailsTwoArea/>
      <Footer/>
    </Wrapper>
  )
}

