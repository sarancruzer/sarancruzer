import React from 'react';
import Image from 'next/image';
// shapes
import shape_1 from '@assets/img/cta/cta-shape-1.png';
import shape_2 from '@assets/img/cta/cta-shape-2.png';
import shape_3 from '@assets/img/cta/cta-shape-3.png';
import shape_4 from '@assets/img/cta/cta-shape-4.png';
import shape_5 from '@assets/img/cta/cta-shape-5.png';
import shape_6 from '@assets/img/cta/cta-man.png';

const FreelancerCta = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section className="cta__area z-index-1 p-relative fix">
      <div className="cta__shape">
        <Image className="cta__shape-1" src={shape_1} alt="shape" />
        <Image className="cta__shape-2" src={shape_2} alt="shape" />
        <Image className="cta__shape-3" src={shape_3} alt="shape" />
        <Image className="cta__shape-4" src={shape_4} alt="shape" />
        <Image className="cta__shape-5" src={shape_5} alt="shape" />
        <Image className="cta__shape-6" src={shape_6} alt="shape" />
      </div>
      <div className="container">
        <div className="cta__inner">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-5 col-lg-6">
              <div className="cta__content">
                <h3 className="cta__title">Subscribe <br /> to my Newsletter</h3>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="cta__form p-relative z-index-1">
                <form onSubmit={handleSubmit}>
                  <div className="cta__input">
                    <input type="email" placeholder="Your email here..." />
                    <button type="submit" className="tp-btn-green">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerCta;