import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape from "@assets/img/testimonial/3/testimonial-shape-1.png";
import user_1 from "@assets/img/users/user-10.jpg";
import user_2 from "@assets/img/users/user-9.jpg";
import user_3 from "@assets/img/users/user-8.jpg";

// single testimonial
function SingleTestimonial({
  spacing = "",
  delay,
  user,
  name,
  designation,
  title,
  desc,
}) {
  return (
    <div
      className={`testimonial__item-3 ${spacing} wow fadeInUp`}
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className="testimonial__avater-3 mb-35 d-sm-flex align-items-center">
        <div className="testimonial__avater-thumb-3">
          <Image src={user} alt="user" />
        </div>
        <div className="tesimonial__avater-info-3">
          <h4 className="testimonial__avater-title-3">{name}</h4>
          <span className="testimonial__avater-designation-3">
            {designation}
          </span>
        </div>
      </div>
      <div className="testimonial__content-3">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

// PhotographyTestimonial area
const PhotographyTestimonial = ({ element_style = false }) => {
  return (
    <>
      <section
        className={`testimonial__area p-relative z-index-1 black-bg-5 ${
          element_style ? "pt-120 pb-90" : "pt-60 pb-90"
        }`}
      >
        <div className="testimoinal__shape">
          <Image className="testimonial__shape-1" src={shape} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6">
              <div className="tesimonial__wrapper-3">
                <div className="section__title-wrapper-3 mb-50">
                  <span className="section__title-pre-3">06 . testimonial</span>
                  <h3 className="section__title-3 has-gradient">
                    Client <span>Testimonials</span>
                  </h3>
                </div>
                <div className="testimonial__btn-3 mb-95">
                  <Link href="/contact-2" className="tp-btn-border-4">
                    Contact me
                  </Link>
                </div>
                {/* single testimonial */}
                <SingleTestimonial
                  delay=".3s"
                  user={user_1}
                  name="Douglas Lyphe"
                  designation="Director at Kickstarter."
                  title="“Working with Photo X was amazing”"
                  desc="Lorem ipsum dolor sit amet consectetu adipiscing drakom consectetur fermentum a eget amet amet pellentesque dolor rhoncus quis aenean turpis iaculis"
                />
                {/* single testimonial */}
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6">
              <div className="testimonial__item-wrapper-3">
                {/* single testimonial */}
                <SingleTestimonial
                  spacing="mb-30"
                  delay=".5s"
                  user={user_2}
                  name="Karen Hills"
                  designation="Fashion Designer"
                  title="“The services is awesome”"
                  desc="Lorem ipsum dolor sit amet consectetu adipiscing drakom consectetur fermentum a eget amet amet pellentesque dolor rhoncus quis aenean turpis iaculis"
                />
                {/* single testimonial */}

                {/* single testimonial */}
                <SingleTestimonial
                  delay=".7s"
                  user={user_3}
                  name="Jake Weary"
                  designation="Fashion Designer"
                  title="“Im very happy to work with them”"
                  desc="Lorem ipsum dolor sit amet consectetu adipiscing drakom consectetur fermentum a eget amet amet pellentesque dolor rhoncus quis aenean turpis iaculis"
                />
                {/* single testimonial */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotographyTestimonial;
