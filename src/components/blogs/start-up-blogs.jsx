import React from 'react';
import Link from 'next/link';
// internal
import blog_data from '@data/blog-data';
import StartUpSingleBlog from './single-blog/start-up-single-blog';
import HighlightShapeThree from '@svg/highlight-shape-3';


const blog_items = blog_data.filter(blog => blog.home_start_up);

const StartUpBlogs = () => {
  return (
    <>
      <section className="blog__area blog__border-7 pb-115 pt-30">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8 col-md-7">
              <div className="blog__section-title-7">
                <div className="section__title-wrapper-7 mb-60">
                  <span className="section__title-pre-7">Resources</span>
                  <h3 className="section__title-7">Read our {" "}
                    <span className="section__title-7-highlight">
                      latest blogs
                      <HighlightShapeThree/>
                    </span>
                  </h3>
                  <p>Every now and then we’ll lay down some opinion or business insight.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="blog__btn-7 text-md-end mb-60">
                <Link href="/blog-grid-2" className="tp-btnr-border-2 tp-btn-shine-effect">View More News </Link>
              </div>
            </div>
          </div>
          <div className="row tp-gx-6">
            {blog_items.map((blog) => (
              <div key={blog.id} className="col-xxl-4 col-lg-4 col-md-6">
                <StartUpSingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StartUpBlogs;