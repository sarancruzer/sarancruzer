import React from "react";
import Image from "next/image";
// internal
import blog_data from "@data/blog-data";
import CommentArea from "../blog-details/comment-area";
import SingleMetaItem from "../blog-details/single-meta-item";
import SingleGridItem from "../single-blog/single-grid-item";
import author from "@assets/img/users/user-9.jpg";
import post_author_2 from "@assets/img/users/user-4.jpg";
import QuoteThree from "@svg/quote-3";
import PostShareWrapper from "../blog-details/post-share-wrapper";
import PostAuthor from "../blog-details/post-author";
import MoreNavigationTwo from "./more-navigation-2";
import blog_img from "@assets/img/blog/blog-big-3.jpg";
import blog_bg from "@assets/img/blog/blog-big-2.jpg";
import { SocialShare } from "@components/social";

// blog data
const blog_items = blog_data.filter((blog) => blog.blog_grid).slice(0, 3);

const BlogDetailsTwoArea = () => {
  return (
    <main>
      {/* <!-- postbox details area start --> */}
      <section className="postbox__area">
        <div className="postbox__wrapper postbox__style-2">
          <div className="postbox__top">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="postbox__category">
                    <a href="#">Business</a>
                  </div>
                  <h3 className="postbox__title">
                    Fashion and interior design are one and the same
                  </h3>

                  <div
                    className="postbox__thumb postbox__thumb-overlay m-img mb-55"
                    style={{ backgroundImage: `url(${blog_bg.src})` }}
                  ></div>
                  <div className="postbox__meta-wrapper d-flex align-items-center justify-content-center flex-wrap">
                    <div className="postbox__meta-item mb-30">
                      <div className="postbox__meta-author d-flex align-items-center">
                        <div className="postbox__meta-author-thumb">
                          <a href="#">
                            <Image src={author} alt="author" />
                          </a>
                        </div>
                        <div className="postbox__meta-content">
                          <span className="postbox__meta-type">Author</span>
                          <p className="postbox__meta-name">
                            <a href="#">Fig Nelson</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <SingleMetaItem
                      title="Published"
                      subtitle="April 24, 2022"
                    />
                    <SingleMetaItem
                      title="2 Comments"
                      subtitle={
                        <>
                          <a href="#tp-blog-details-comment">
                            Join the Conversation
                          </a>
                        </>
                      }
                    />
                    <SingleMetaItem title="View" subtitle="12,145 views" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="postbox__main-wrapper pt-75">
            <div className="container">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-1">
                  <div className="postbox__details-social d-flex flex-sm-column pt-5">
                    <SocialShare/>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-9 col-md-11">
                  <div className="postbox__details-content-wrapper">
                    <h3 className="postbox__details-title-2">Using a Query</h3>
                    <p>
                      One morning, when Gregor Samsa woke from troubled dreams,
                      he found himself transformed in his bed into a horrible
                      vermin. He lay on his armour-like back, and if he lifted
                      his head a little he could see his brown belly, slightly
                      domed and divided by arches into stiff sections. The
                      bedding was hardly able to cover it and seemed ready to
                      slide off any moment.
                    </p>

                    <div className="postbox__details-content">
                      <div className="row">
                        <div className="col-md-4">
                          <h5 className="postbox__details-title-3">
                            Explore the city and new places
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <p>
                            A collection of textile samples lay spread out on
                            the table - Samsa was a travelling salesman - and
                            above it there hung a picture that he had
                            recently...!
                          </p>
                        </div>
                      </div>
                    </div>
                    <p>
                      One morning, when Gregor Samsa woke from troubled dreams,
                      he found himself transformed in his bed into a horrible
                      vermin. He lay on his armour-like back, and if he lifted
                      his head a little he could see his brown belly, slightly
                      domed and divided by arches into stiff sections. The
                      bedding was hardly able to cover it and seemed ready to
                      slide off any moment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="postbox__img-2 m-img mt-45 mb-70">
                    <Image src={blog_img} alt="blog img" />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <div className="postbox__details-content-2 pb-120">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>

                    <div className="postbox__quote postbox__quote-style-2">
                      <blockquote>
                        <div className="postbox__quote-icon">
                          <span>
                            <QuoteThree />
                          </span>
                        </div>
                        <p>
                          “I try as much as possible to give you a great basic
                          product and what comes out, I feel, is really
                          amazing.”
                        </p>
                      </blockquote>
                    </div>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur, vel illum qui
                      dolorem eum fugiat quo voluptas nulla pariatur? At vero
                      eos et accusamus et iusto odio dignissimos ducimus qui
                      blanditiis dolorum fuga.
                    </p>

                    <div className="postbox__features postbox__features-2">
                      <ul>
                        <li>Get yourself comfortable.</li>
                        <li>Manage your workspace and organize your desk.</li>
                        <li>Keep In touch with your co-workers.</li>
                      </ul>
                    </div>
                    <p>
                      ed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>

                    <PostShareWrapper blog_details_2={true} />

                    <div className="postbox__author postbox__author-2 d-sm-flex align-items-start white-bg">
                      <PostAuthor author_img={post_author_2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="postbox__related grey-bg-7 pb-90 pt-95">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <h3 className="postbox__related-title">You may also like</h3>
                </div>
              </div>
              <div className="row">
                {blog_items.map((blog) => (
                  <div
                    key={blog.id}
                    className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                  >
                    <SingleGridItem {...blog} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="postbox__comment-wrapper postbox__comment-style-2 pt-90 pb-65">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  {/* comment area start */}
                  <CommentArea spacing="75" />
                  {/* comment area end */}
                </div>
              </div>
            </div>
          </div>
          {/* navigation start */}
          <MoreNavigationTwo />
          {/* navigation end */}
        </div>
      </section>
      {/* <!-- postbox details area end --> */}
    </main>
  );
};

export default BlogDetailsTwoArea;
