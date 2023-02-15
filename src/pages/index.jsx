import SEO from "@components/seo";
import { FooterEight, HeaderEight,Wrapper } from '@layout/index';
import PortfolioBanner from '@components/hero-banners/portfolio-banner';
import PortfolioAbout from '@components/abouts/portfolio-about';
import PortfolioFeature from '@components/features/portfolio-feature';
import PortfolioService from '@components/services/portfolio-service';
import HomePersonalPortfolioArea from '@components/portfolios/home-personal-portfolio';
import PortfolioSkills from '@components/skills/portfolio-skills';
import PortfolioAwards from '@components/awards/portfolio-awards';
import PortfolioTestimonial from '@components/testimonials/portfolio-testimonial';
import PortfolioBlogs from '@components/blogs/portfolio-blogs';
import PortfolioContact from '@components/contacts/portfolio-contact';

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Portfolio'} />
      <HeaderEight/>
      <PortfolioBanner/>
      <PortfolioAbout/>
      <PortfolioFeature/>
      <PortfolioService/>
      <HomePersonalPortfolioArea/>
      <PortfolioSkills/>
      <PortfolioAwards/>
      <PortfolioTestimonial/>
      <PortfolioBlogs/>
      <PortfolioContact/>
      <FooterEight/>
    </Wrapper>
  )
}
