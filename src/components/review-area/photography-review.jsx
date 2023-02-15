import React from 'react';
import Image from 'next/image';
// internal
import shape_1 from '@assets/img/review/shape/vector-1.png';
import shape_2 from '@assets/img/review/shape/vector-2.png';
import shape_3 from '@assets/img/review/shape/vector-3.png';
import shape_4 from '@assets/img/review/shape/vector-4.png';
import shape_5 from '@assets/img/review/shape/vector-5.png';
import shape_6 from '@assets/img/review/shape/vector-6.png';
import shape_7 from '@assets/img/review/shape/vector-7.png';
import user_1 from '@assets/img/users/user-10.jpg';
import user_2 from '@assets/img/users/user-11.jpg';
import user_3 from '@assets/img/users/user-12.jpg';

const PhotographyReview = () => {
  return (
    <>
      <section className="review__area pt-120 pb-120 black-bg-5">
        <div className="review__inner pt-130 pb-135 p-relative">
          <div className="review__shape">
            <Image className="review__shape-1" src={shape_1} alt="shape" />
            <Image className="review__shape-2" src={shape_2} alt="shape" />
            <Image className="review__shape-3" src={shape_3} alt="shape" />
            <Image className="review__shape-4" src={shape_4} alt="shape" />
            <Image className="review__shape-5" src={shape_5} alt="shape" />
            <Image className="review__shape-6" src={shape_6} alt="shape" />
            <Image className="review__shape-7" src={shape_7} alt="shape" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="review__wrapper">
                  <div className="section__title-wrapper-3 mb-40">
                    <span className="section__title-pre-3">05 . CRAFTED WITH LOVE</span>
                    <h3 className="section__title-3 section__title-3-2">Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros erat.</h3>
                  </div>
                  <div className="review__person d-flex align-items-center">
                    <ul>
                      <li>
                        <span>
                          <Image src={user_1} alt="user" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <Image src={user_2} alt="user" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <Image src={user_3} alt="user" />
                        </span>
                      </li>
                      <li>
                        <span>20+</span>
                      </li>
                    </ul>
                    <p>our team <br /> community</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
                <div className="review__skill">
                  <div className="review__skill-score">
                    <p>Total  Skills Score <span>97%</span></p>
                  </div>
                  <div className="review__skill-item d-flex align-items-center justify-content-between mb-35">
                    <p>Portrait Photogrephy</p>
                    <p>12 Expert</p>
                  </div>
                  <div className="review__skill-item-sm d-flex align-items-center mb-10 ml-95">
                    <p>Our Team Activities</p>
                    <div className="review__skill-item-sm-bar"></div>
                  </div>
                  <div className="review__skill-item-xs d-flex align-items-center ml-80">
                    <p>Other Team Activities</p>
                    <div className="review__skill-item-xs-bar"></div>
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

export default PhotographyReview;