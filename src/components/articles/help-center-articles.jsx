import React from "react";
import Image from "next/image";
// internal
import article_1 from "@assets/img/articles/article-img-1.png";
import article_2 from "@assets/img/articles/article-img-2.png";
import article_3 from "@assets/img/articles/article-img-3.png";
import { Extensions } from "@svg/index";

// image style
const ImageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

// single article item
function SingleArticleItem({ delay, img, title, article, desc, sm }) {
  return (
    <div
      className={`articles__item
      ${
        sm ? "articles__item-sm" : ""
      } purple-bg p-relative z-index-1 mb-30 wow fadeInUp`}
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className="articles__thumb">
        <Image src={img} alt="image" style={ImageStyle} />
      </div>

      <div className="articles__content">
        <div className="articles__top d-flex align-items-center">
          <h3 className="articles__title">{title}</h3>
          <span className="articles__number">{article} Articles</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

const HelpCenterArticles = () => {
  return (
    <section className="articles__area pt-100 pb-100">
      <div className="container">
        <div className="row grid">
          <div className="col-xl-4 col-lg-4">
            <SingleArticleItem
              delay=".3s"
              img={article_1}
              title="Themes"
              article="12"
              desc="Everything about themes: built-in features, technical guides, and formatting options."
            />
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <SingleArticleItem
                  delay=".5s"
                  img={article_2}
                  title="Services"
                  article="8"
                  sm={true}
                  desc="Frequently asked questions about all our services for sarancruzer help center."
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <SingleArticleItem
                  delay=".7s"
                  img={article_3}
                  title="Extensions"
                  article="6"
                  sm={true}
                  desc="Everything about themes: built-in features, technical guides, and formatting options."
                />
              </div>
              <div className="col-lg-12">
                <div
                  className="articles__item articles__style-2 khaki-bg-2 p-relative z-index-1 mb-30 wow fadeInUp"
                  data-wow-delay=".9s"
                  data-wow-duration="1s"
                >
                  <div className="articles__icon">
                    <span>
                      <Extensions />
                    </span>
                  </div>

                  <div className="articles__content">
                    <div className="articles__top d-flex align-items-center">
                      <h3 className="articles__title">Extensions</h3>
                      <span className="articles__number">6 Articles</span>
                    </div>
                    <p>
                      Everything about themes: built-in features, technical
                      guides, and formatting options.
                    </p>
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

export default HelpCenterArticles;
