import React from "react";
import Image from "next/image";
// internal
import BlogSidebar from "@components/common/sidebar/blog-sidebar";
import blog_data from "@data/blog-data";
import SingleGridItem from "../single-blog/single-grid-item";
import CommentArea from "./comment-area";
import { QuoteThree } from "@svg/index";
import blog_img from "@assets/img/blog/blog-big-1.jpg";
import author from "@assets/img/users/user-12.jpg";
import postbox_img from "@assets/img/blog/details/blog-details-1.jpg";
import PostNavigation from "./post-navigation";
import PostShareWrapper from "./post-share-wrapper";
import PostAuthor from "./post-author";
import SingleMetaItem from "./single-meta-item";


// blog data
const blog_items = blog_data.filter((blog) => blog.blog_grid).slice(0, 2);

const BlogDetailsArea = () => {
  return (
    <section className="postbox__area grey-bg-4 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="postbox__wrapper">
              <div className="postbox__top">
                <div className="postbox__thumb m-img mb-55">
                  <Image src={blog_img} alt="blog img" />
                </div>
              </div>
              <div className="postbox__main">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="postbox__main-wrapper">
                      <div className="postbox__meta-wrapper d-flex align-items-center flex-wrap">
                        <div className="postbox__meta-item mb-30">
                          <div className="postbox__meta-author d-flex align-items-center">
                            <div className="postbox__meta-author-thumb">
                              <a href="#">
                                <Image src={author} alt="author" />
                              </a>
                            </div>
                            <div className="postbox__meta-content">
                              <span className="postbox__meta-type">Author</span>
                              <p className="postbox__meta-name">Fig Nelson</p>
                            </div>
                          </div>
                        </div>
                        <SingleMetaItem
                          title="Published"
                          subtitle="April 24, 2022"
                        />
                        <SingleMetaItem
                          title="2 Comments"
                          subtitle="Join the Conversation"
                        />
                        <SingleMetaItem title="View" subtitle="12,145 views" />
                      </div>
                      <div className="postbox__details-content-wrapper">
                        <h3 className="postbox__details-title">
                          As influential as runways are, trends not solely{" "}
                          <br /> born them. There was a clear direction coming
                          their social media platform.
                        </h3>
                        <p>
                          One morning, when Gregor Samsa woke from troubled
                          dreams, he found himself transformed in his bed into a
                          horrible vermin. He lay on his armour-like back, and
                          if he lifted his head a little he could see his brown
                          belly, slightly domed and divided by arches into stiff
                          sections. The bedding was hardly able to cover it and
                          seemed ready to slide off any moment.
                        </p>
                        <p>
                          I should be incapable of drawing a single stroke at
                          the present moment; and yet I feel that never was a
                          greater artist than now.
                        </p>

                        <div className="postbox__img m-img mt-50 mb-45">
                          <Image src={postbox_img} alt="img" />
                          <h5 className="postbox__img-caption">
                            Image by <a href="#">@example01</a>
                          </h5>
                        </div>

                        <p>
                          His many legs, pitifully thin compared with the size
                          of the rest of him, waved about helplessly as he
                          looked. Whats happened to me? he thought. It was not a
                          dream. His room, a proper human room although a little
                          too small, lay peacefully between its four familiar
                          walls. A collection of textile samples lay spread out
                          on the table - Samsa was a travelling salesman - and
                          above it there hung a picture that he had recently cut
                          out of an illustrated magazine.
                        </p>

                        <div className="postbox__quote">
                          <blockquote>
                            <div className="postbox__quote-icon">
                              <span>
                                <QuoteThree />
                              </span>
                            </div>
                            <p>
                              “I try as much as possible to give you a great
                              basic product and what comes out, I feel, is
                              really amazing.”
                            </p>
                          </blockquote>
                        </div>

                        <div className="postbox__features">
                          <h4 className="postbox__features-title">
                            Learning from failure
                          </h4>
                          <p>
                            The European languages are members of the same
                            family. Their separate existence is a myth. For
                            science europe uses the same vocabulary.{" "}
                          </p>

                          <ul>
                            <li>Get yourself comfortable.</li>
                            <li>
                              Manage your workspace and organize your desk.
                            </li>
                            <li>Keep In touch with your co-workers.</li>
                          </ul>
                        </div>
                        <p>
                          The new common language will be more simple and
                          regular than the existing European languages. It will
                          be as simple as Occidental; in fact, it will be
                          Occidental. To an English person, it will seem like
                          simplified English, as a skeptical Cambridge friend of
                          mine told me what Occidental is. The European
                          languages are members of the same family.
                        </p>
                      </div>
                      {/* navigation start */}
                      {/* <PostNavigation /> */}
                      {/* navigation end */}

                      {/* share wrapper start */}
                      <PostShareWrapper />
                      {/* share wrapper end */}
                      {/* <div className="postbox__author d-sm-flex align-items-start white-bg mb-95">
                        <PostAuthor />
                      </div> */}

                      <div className="postbox__related mb-65">
                        <h3 className="postbox__related-title">
                          You may also like
                        </h3>

                        <div className="row">
                          {blog_items.map((blog) => (
                            <div
                              key={blog.id}
                              className="col-xl-6 col-lg-12 col-md-6"
                            >
                              <SingleGridItem {...blog} />
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* comments */}
                      <div className="postbox__comment-wrapper">
                        {/* comment area  start */}
                        <CommentArea />
                        {/* comment area  end */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <BlogSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;
