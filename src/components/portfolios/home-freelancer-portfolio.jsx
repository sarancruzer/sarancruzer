import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import portfolio_data from "@data/portfolio-data";
// items 
const portfolio_items = portfolio_data.filter(item => item.home_freelancer);

const HomeFreelancerPortfolio = () => {
  return (
    <section className="portfolio__area pt-150 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper-2 text-center mb-40">
              <span className="section__title-pre-2">All Creative Works</span>
              <h3 className="section__title-2">Creative Works</h3>
              <p>Featured projects, which my best projects be choice to show</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            {portfolio_items.map((item, i) => (
              <div key={item.id} className={`portfolio__item-2 has-${item.bg_color} fix`}>
                <div className="portfolio__shape">
                  {item.shapes.map((s, i) => (
                    <Image
                      key={i}
                      className={`portfolio__shape-${s.id} wow fadeInDown`}
                      data-wow-delay="1.5s"
                      src={s.shape}
                      alt="shape"
                      style={{width:'auto',height:'auto'}}
                    />
                  ))}
                </div>
                {!item.diff && <div className="row">
                  <div className="col-xxl-5 col-xl-5 col-lg-6">
                    <div className="portfolio__content-2">
                      <div className="portfolio__icon-2">
                        <span>
                          {item.icon}
                        </span>
                      </div>
                      <div className="portfolio__tag-2">
                        {item.tags.map((t, i) => <a key={i} href="#">{t}</a>)}
                      </div>
                      <h3 className="portfolio__title-2">
                        {item.title}
                      </h3>
                      <div className="portfolio__btn-2">
                        <Link
                          href="portfolio-masonry"
                          className="tp-btn-white"
                        >
                          See Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-7 col-xl-7 col-lg-6">
                    <div className="portfolio__thumb-wrapper-2 p-relative">
                      <div className="portfolio__thumb-2">
                        {item.image.map((img, i) => (
                          <Image
                            key={i}
                            className={`portfolio-2-${img.id} wow fadeInRightPortfolio${img.id}`}
                            src={img.img}
                            alt="image"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>}
                {item.diff && <div className="row">
                  <div className="col-xxl-7 col-xl-7 col-lg-6">
                    <div className="portfolio__thumb-wrapper-2 p-relative">
                      <div className="portfolio__thumb-2 portfolio-thumb-2">
                        <div className="row">
                          <div className="col-md-5">
                            <Image
                              className={`portfolio-2-${item.image[0].id} 
                              wow fadeInRightPortfolio${item.image[0].id}`}
                              src={item.image[0].img}
                              alt="image"
                            />
                          </div>
                          <div className="col-md-5">
                            {item.image.slice(1, 3).map((img, i) => (
                              <Image
                                key={i}
                                className={`portfolio-2-${img.id} wow fadeInRightPortfolio${img.id}`}
                                src={img.img}
                                alt="image"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-6">
                    <div className="portfolio__content-2">
                      <div className="portfolio__icon-2">
                        <span>
                          {item.icon}
                        </span>
                      </div>
                      <div className="portfolio__tag-2">
                        {item.tags.map((t, i) => <a key={i} href="#">{t}</a>)}
                      </div>
                      <h3 className="portfolio__title-2">
                        {item.title}
                      </h3>
                      <div className="portfolio__btn-2">
                        <Link
                          href="portfolio-masonry"
                          className="tp-btn-white"
                        >
                          See Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFreelancerPortfolio;
