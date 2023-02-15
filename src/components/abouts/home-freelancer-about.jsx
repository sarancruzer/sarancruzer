import React from 'react';
import Image from 'next/image';
// internal
import author_sign from '@assets/img/about/about-author-sign.png';
import FreelancerCounter from '@components/counters/freelancer-counter';

const HomeFreelancerAbout = () => {
  return (
    <>
      <section id="about" className="about__area pt-80 pb-120 grey-bg-7">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-2 text-center mb-40">
                <span className="section__title-pre-2">INTRODUCTION</span>
                <h3 className="section__title-2">about me</h3>
                <p>A brand today is all about how it makes your customers feel.</p>
              </div>
            </div>
          </div>
          {/* counter start */}
          <FreelancerCounter/>
          {/* counter end */}
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-8 col-lg-10">
              <div className="about__author-wrapper text-center wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                <div className="about__author-text">
                  <p>Im a UX Designer, Over the past 10+ years I’ve created well-crafted mobile and web apps by connecting Business goals with user needs.Currently Service and Interaction Designer UIUXer office. </p>
                </div>
                <div className="about__author-info">
                  <h3 className="about__author-title-2">Douglas Lyphe</h3>
                  <div className="about__author-sign">
                    <Image src={author_sign} alt="sign" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFreelancerAbout;