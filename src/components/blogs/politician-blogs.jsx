import Image from "next/image";
import React from "react";
import Link from "next/link";
// internal
import blog_data from "@data/blog-data";

// blog items
const blog_items = blog_data.filter((blog) => blog.home_politician);
const first_blog = blog_items.find((blog) => blog.p_blog_1);
const big_blog = blog_items.find((blog) => blog.p_blog_big);
const sm_blogs = blog_items.find((blog) => blog.sm_blogs).sm_blogs;

const PoliticianBlogs = () => {
  return (
    <>
      <section className="blog__area pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-10 text-center mb-45">
                <span className="section__title-pre-10">Our latest news</span>
                <h3 className="section__title-10">Latest news & articles</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div
                className="blog__item-10 white-bg transition-3 mb-30 fix wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <div className="blog__thumb-10 w-img fix">
                  <Link href="/blog-details">
                    <Image
                      src={first_blog.img}
                      alt="blog"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Link>
                </div>
                <div className="blog__content-10">
                  <div className="blog__content-10-top">
                    <div className="blog__meta-10-wrapper d-flex align-items-center">
                      <div className="blog__tag-10 mr-10">
                        <a href="#">{first_blog.tag}</a>
                      </div>
                      <div className="blog__meta-10">
                        <span>{first_blog.date}</span>
                      </div>
                    </div>
                    <h3 className="blog__title-10">
                      <Link href="/blog-details">
                        {first_blog.title}..!
                      </Link>
                    </h3>
                    <p>{first_blog.sm_desc}</p>
                  </div>
                  <div className="blog__content-10-bottom d-flex align-items-center">
                    <div className="blog__meta-author-10 d-flex align-items-center">
                      <div className="blog__meta-author-thumb-10">
                        <a href="#">
                          <Image src={first_blog.author_img} alt="user" />
                        </a>
                      </div>
                      <div className="blog__meta-author-content-10">
                        <span>
                          By<a href="#"> {first_blog.author_name}</a>
                        </span>
                      </div>
                    </div>
                    <div className="blog__meta-10 blog-meta-10-2">
                      <span>{first_blog.comments} Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-4 col-lg-6 order-last order-lg-2">
              <div
                className="blog__item-10 blog__item-10-overlay white-bg transition-3 mb-30 fix order-last wow fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration="1s"
              >
                <div
                  className="blog__thumb-10 m-img fix transition-3"
                  style={{ backgroundImage: `url(${big_blog.img.src})` }}
                ></div>
                <div className="blog__content-10">
                  <div className="blog__content-10-top">
                    <div className="blog__meta-10-wrapper d-flex align-items-center">
                      <div className="blog__tag-10 mr-10">
                        <a href="#">{big_blog.tag}</a>
                      </div>
                      <div className="blog__meta-10">
                        <span>{big_blog.date}</span>
                      </div>
                    </div>
                    <h3 className="blog__title-10">
                      <Link href="/blog-details">
                        {big_blog.title}..!
                      </Link>
                    </h3>
                  </div>
                  <div className="blog__content-10-bottom d-flex align-items-center">
                    <div className="blog__meta-author-10 d-flex align-items-center">
                      <div className="blog__meta-author-thumb-10">
                        <a href="#">
                          <Image src={big_blog.author_img} alt="blog" />
                        </a>
                      </div>
                      <div className="blog__meta-author-content-10">
                        <span>
                          By<a href="#">{big_blog.author_name}</a>
                        </span>
                      </div>
                    </div>
                    <div className="blog__meta-10 blog-meta-10-2">
                      <span>{big_blog.comments} Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-4 col-lg-12 col-md-6 order-lg-last">
              <div
                className="blog__item-10-wrapper d-lg-flex d-xl-block wow fadeInUp"
                data-wow-delay=".7s"
                data-wow-duration="1s"
              >
                {sm_blogs.map((blog, i) => {
                  const {
                    tag,
                    date,
                    title,
                    comments,
                    author_img,
                    author_name,
                  } = blog || {};
                  return (
                    <div
                      key={i}
                      className="blog__item-10 blog__item-10-sm white-bg transition-3 mb-30 fix"
                    >
                      <div className="blog__content-10">
                        <div className="blog__content-10-top">
                          <div className="blog__meta-10-wrapper d-flex align-items-center">
                            <div className="blog__tag-10 mr-10">
                              <a href="#">{tag}</a>
                            </div>
                            <div className="blog__meta-10">
                              <span>{date}</span>
                            </div>
                          </div>
                          <h3 className="blog__title-10">
                            <Link href="/blog-details">{title}</Link>
                          </h3>
                        </div>
                        <div className="blog__content-10-bottom d-flex align-items-center">
                          <div className="blog__meta-author-10 d-flex align-items-center">
                            <div className="blog__meta-author-thumb-10">
                              <a href="#">
                                <Image src={author_img} alt="image" />
                              </a>
                            </div>
                            <div className="blog__meta-author-content-10">
                              <span>
                                By<a href="#">{author_name}</a>
                              </span>
                            </div>
                          </div>
                          <div className="blog__meta-10 blog-meta-10-2">
                            <span>{comments} Comments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div
                className="blog__more-10 text-center mt-30 wow fadeInUp"
                data-wow-delay=".9s"
                data-wow-duration="1s"
              >
                <Link href="/blog-grid" className="tp-btn-border-9">
                  View More News <i className="fa-regular fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoliticianBlogs;
