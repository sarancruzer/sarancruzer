import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import HomeTestimonial from "@components/testimonials/home-testimonial";
import LawyerTestimonial from "@components/testimonials/lawyer-testimonial";
import PhotographyTestimonial from "@components/testimonials/photography-testimonial";
import FreelancerTestimonial from "@components/testimonials/freelancer-testimonial";
import PortfolioTestimonial from "@components/testimonials/portfolio-testimonial";
import AgencyTestimonial from "@components/testimonials/agency-testimonial";
import CreativeTestimonial from "@components/testimonials/creative-testimonial";
import StartUpTestimonial from "@components/testimonials/start-up-testimonial";
import ArchitectureTestimonial from "@components/testimonials/architecture-testimonial";
import PoliticianTestimonial from "@components/testimonials/politician-testimonial";
import AboutMeTestimonial from "@components/testimonials/about-me-testimonial";
import ServiceThreeTestimonial from "@components/testimonials/service-3-testimonial";
import PricingTestimonial from "@components/testimonials/pricing-testimonial";


const ElementsTestimonialMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our testimonials" />
      {/* breadcrumb end */}

      {/* testimonial one start */}
      <HomeTestimonial element_style={true} />
      {/* testimonial one end */}

      {/* testimonial two start */}
      <LawyerTestimonial/>
      {/* testimonial two end */}

      {/* testimonial three start */}
      <PhotographyTestimonial element_style={true} />
      {/* testimonial three end */}

      {/* testimonial four start */}
      <FreelancerTestimonial element_style={true} />
      {/* testimonial four end */}

      <div className="tp-separator"></div>

      {/* testimonial five start */}
      <PortfolioTestimonial/>
      {/* testimonial five end */}

      {/* testimonial six start */}
      <AgencyTestimonial/>
      {/* testimonial six end */}

      {/* testimonial seven start */}
      <CreativeTestimonial/>
      {/* testimonial seven end */}

      {/* testimonial eight start */}
      <StartUpTestimonial/>
      {/* testimonial eight end */}

      {/* testimonial nine start */}
      <ArchitectureTestimonial/>
      {/* testimonial nine end */}

      {/* testimonial ten start */}
      <PoliticianTestimonial element_style={true} />
      {/* testimonial ten end */}

      {/* testimonial eleven start */}
      <AboutMeTestimonial />
      {/* testimonial eleven end */}

      <div className="tp-separator"></div>

      {/* testimonial twelve start */}
      <ServiceThreeTestimonial />
      {/* testimonial twelve end */}

      {/* testimonial thirteen start */}
      <PricingTestimonial />
      {/* testimonial thirteen end */}
      
    </React.Fragment>
  );
};

export default ElementsTestimonialMain;
