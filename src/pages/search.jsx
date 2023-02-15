import {FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import SearchArea from "@components/search/search-area";
import SearchResultItem from "@components/search/search-result-item";


export default function Search() {
  return (
    <Wrapper>
      <SEO pageTitle={'Search'} />
      <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
      <SearchArea/>
      <SearchResultItem/>
      <FooterSix style_2={true} />
    </Wrapper>
  )
}

