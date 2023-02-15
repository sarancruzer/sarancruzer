import React from 'react';
// internal
import { ShapeLine } from '@svg/index';
import blog_data from '@data/blog-data';
import HomeSingleBlog from './single-blog/home-single-blog';

const blog_items = blog_data.filter(blog => blog.home);

const HomeBlogs = () => {
  return (
    <>
      <section className="blog__area pt-50 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-8 col-sm-10">
              <div className="section__title-wrapper text-center mb-60">
                <h3 className="section__title">
                  Take a look at the latest {' '}
                  <span className="section__title-highlight">articles <ShapeLine/>
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {blog_items.map((blog) => (
            <div key={blog.id} className="col-xxl-6 col-xl-6 col-lg-6">
              <HomeSingleBlog blog={blog} />
            </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBlogs;