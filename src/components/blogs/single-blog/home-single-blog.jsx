import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import TimeTwo from '@svg/time-2';

const HomeSingleBlog = ({blog}) => {
  return (
    <div className="blog__item white-bg transition-3 mb-30 wow fadeInUp"
      data-wow-delay={blog.delay} data-wow-duration="1s">
      <div className="row">
        <div className="col-xxl-5 col-xl-5">
          <div className="blog__thumb m-img fix">
            <div className="tp-thumb-overlay wow"></div>
            <Link href={`blog-details/${blog.id}`}>
              <Image src={blog.img} alt="blog img" />
            </Link>
          </div>
        </div>
        <div className="col-xxl-7 col-xl-7">
          <div className="blog__content">
            <div className="blog__tag">
              <a href="#">{blog.tag}</a>
            </div>
            <h3 className="blog__title">
              <Link href={`blog-details/${blog.id}`}>{blog.title}</Link>
            </h3>
            <div className="blog__meta">
              <span>
                <TimeTwo /> {' '}
                {blog.date}
              </span>
              <span>{blog.read} Read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSingleBlog;