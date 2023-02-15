import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper';
import Link from 'next/link';
// internal
import bg_1 from '@assets/img/blog/breadcrumb/blog-breadcrumb-slider-1.jpg';
import bg_2 from '@assets/img/blog/breadcrumb/blog-breadcrumb-slider-2.jpg';
import bg_3 from '@assets/img/blog/breadcrumb/blog-breadcrumb-slider-3.jpg';
import bg_4 from '@assets/img/blog/breadcrumb/blog-breadcrumb-slider-4.jpg';
import { CommentThree, DateTwo, EyeTwo } from '@svg/index';

const slider_data = [
  {
    id:1,
    bg:bg_1,
    tag:'Business',
    title:'Investment Trend Monitor: Top Trends in 2023',
    date:'October 24, 2022',
    comment:'35',
    watch:'234,5k'
  },
  {
    id:2,
    bg:bg_2,
    tag:'Creative',
    title:'Things Your Boss Needs To Know Agency Industry.',
    date:'October 26, 2022',
    comment:'40',
    watch:'180,2k'
  },
  {
    id:3,
    bg:bg_3,
    tag:'Agency',
    title:'The Reasons Why We Love The Agency Industry.',
    date:'November 15, 2022',
    comment:'25',
    watch:'150,3k'
  },
  {
    id:4,
    bg:bg_4,
    tag:'Latest',
    title:'Here What Industry Insiders Say About Agency.',
    date:'December 10, 2022',
    comment:'22',
    watch:'118,6k'
  },
]

// slider item
function SingleSliderItem({ bg, tag, title, date, comment, watch }) {
  return (
    <div className="blog__breadcrumb-item blog__breadcrumb-height blog__breadcrumb-overlay include-bg d-flex align-items-end" style={{backgroundImage:`url(${bg.src})`}}>
      <div className="container">
        <div className="col-xxl-8 col-xl-8 col-lg-10">
          <div className="blog__breadcrumb-thumb"></div>
          <div className="blog__breadcrumb-content">
            <div className="blog__breadcrumb-tag">
              <a href="#">{tag}</a>
            </div>
            <h3 className="blog__breadcrumb-title">
              <Link href="/blog-details">{title}</Link>
            </h3>
            <div className="blog__breadcrumb-meta">
              <span>
                <DateTwo />{date}
              </span>
              <span>
                <CommentThree />{comment}
              </span>
              <span>
                <EyeTwo />{watch}
              </span>
            </div>
            <div className="blog__breadcrumb-btn">
              <Link href="/blog-details" className="tp-btn-border-2">Continue Reading</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const SliderBreadcrumb = () => {
  return (
    <section className="blog__breadcrumb">
      <div className="blog__breadcrumb-slider p-relative">

        <Swiper
          className="blog__breadcrumb-slider-active swiper-container"
          loop={true}
          slidesPerView={1}
          effect='fade'
          modules={[Pagination,EffectFade]}
          spaceBetween={0}
          pagination={{
            el: ".blog-slider-dot-breadcrumb",
            clickable: true,
          }}
        >
          {slider_data.map((item) => (
            <SwiperSlide key={item.id}>
              <SingleSliderItem {...item} />
            </SwiperSlide>
          ))}
        <div className="blog-slider-dot-breadcrumb tp-swiper-dot"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderBreadcrumb;