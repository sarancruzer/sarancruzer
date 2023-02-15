import React, { useState } from "react";
import Image from "next/image";
import { LayoutGroup, motion } from "framer-motion";
// internal
import shape_1 from "@assets/img/portfolio/grid/shape/circle-1.png";
import shape_2 from "@assets/img/portfolio/grid/shape/circle-2.png";
import shape_3 from "@assets/img/portfolio/grid/shape/circle-sm.png";
import shape_4 from "@assets/img/portfolio/grid/shape/polygon-yellow.png";
import shape_5 from "@assets/img/portfolio/grid/shape/polygon-pink.png";
import shape_6 from "@assets/img/portfolio/grid/shape/polygon-green.png";
import shape_7 from "@assets/img/portfolio/grid/shape/polygon-green-2.png";
import portfolio_classic_data from "./portfolio-data";
import { LoadMore } from "@svg/index";
import ClassicSinglePortfolio from "@components/portfolios/single-item/classic-single-portfolio";
import LoadMoreBtn from "@components/load-more-btn";

// data
const categories = [
  "All",
  ...new Set(portfolio_classic_data.map((item) => item.category)),
];

// single img
function SingleShape({ num, img }) {
  return <Image className={`portfolio__shape-${num}`} src={img} alt="shape" />;
}

const perView = 6;

const PortfolioClassic = ({ tooltip_hover }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [portfolioItems, setPortfolioItems] = useState(portfolio_classic_data);
  const [next, setNext] = useState(perView);
  // images
  const images = portfolioItems.map((item) => item.img.src);
  // handleCategoryItem
  const handleCategoryItem = (category) => {
    setActiveCategory(category);
    setNext(perView);
    if (category === "All") {
      setPortfolioItems(portfolio_classic_data);
    } else {
      const categoryItems = portfolio_classic_data.filter(
        (item) => item.category === category
      );
      setPortfolioItems(categoryItems);
    }
  };
  //   handleLoadMore
  const handleLoadMore = () => {
    setNext((value) => value + 3);
  };
  return (
    <>
      <section className="portfolio__area pt-110 pb-75 p-relative fix">
        <div className="portfolio__shape">
          <SingleShape num="13" img={shape_1} />
          <SingleShape num="14" img={shape_2} />
          <SingleShape num="15" img={shape_3} />
          <SingleShape num="16" img={shape_4} />
          <SingleShape num="17" img={shape_5} />
          <SingleShape num="18" img={shape_6} />
          <SingleShape num="19" img={shape_7} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="portfolio__section-title-wrapper text-center mb-90">
                <span className="portfolio__section-title-pre">
                  CHECK OUT OUR LATEST WORK
                </span>
                <h3 className="portfolio__section-title">Portfolio Classic</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="portfolio__masonary-btn text-center mb-40">
                <div className="masonary-menu filter-button-group">
                  {categories.map((cate, i) => (
                    <button
                      onClick={() => handleCategoryItem(cate)}
                      key={i}
                      className={`${cate === activeCategory ? "active" : ""}`}
                    >
                      {cate}

                      <span>
                        {cate === "All"
                          ? portfolio_classic_data.length
                          : portfolio_classic_data.filter(
                            (item) => item.category === cate
                          ).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div layout className="row tp-gx-4 grid tp-portfolio-load-more">
            {portfolioItems.slice(0, next).map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 tp-portfolio">
                <LayoutGroup>
                  <ClassicSinglePortfolio
                    item={item}
                    images={images}
                    index={i}
                    tooltip_hover={tooltip_hover}
                  />
                </LayoutGroup>
              </div>
            ))}
          </motion.div>

          {next < portfolioItems.length && (
            <div className="row">
              <div className="col-xxl-12">
                <LoadMoreBtn handleLoadMore={handleLoadMore} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PortfolioClassic;
