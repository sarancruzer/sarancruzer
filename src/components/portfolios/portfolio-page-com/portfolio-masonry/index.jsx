import { useState } from "react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { LayoutGroup, motion } from "framer-motion";
// internal
import shape_1 from "@assets/img/portfolio/masonary/shape/circle-1.png";
import shape_2 from "@assets/img/portfolio/masonary/shape/polygon-green.png";
import shape_3 from "@assets/img/portfolio/masonary/shape/polygon-pink.png";
import shape_4 from "@assets/img/portfolio/masonary/shape/polygon-yellow.png";
// data
import masonry_data from "./masonry-data";
import LoadMoreBtn from "@components/load-more-btn";
import MasonrySinglePort from "@components/portfolios/single-item/masonry-single-port";

// categories
const categories = [
  "All",
  ...new Set(masonry_data.map((item) => item.category)),
];

// single img
function SingleShape({ num, img }) {
  return <Image className={`portfolio__shape-${num}`} src={img} alt="shape" />;
}

// perView
const perView = 8;

export function PortfolioMasonryArea() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [portfolioItems, setPortfolioItems] = useState(masonry_data);
  const [next, setNext] = useState(perView);
  // images
  const images = portfolioItems.map((item) => item.img.src);
  // handleCategoryItem
  const handleCategoryItem = (category) => {
    setActiveCategory(category);
    setNext(perView);
    if (category === "All") {
      setPortfolioItems(masonry_data);
    } else {
      const categoryItems = masonry_data.filter(
        (item) => item.category === category
      );
      setPortfolioItems(categoryItems);
    }
  };
  //   handleLoadMore
  const handleLoadMore = () => {
    setNext((value) => value + 4);
  };

  return (
    <section className="portfolio__area pb-75 pt-110 p-relative fix">
      <div className="portfolio__shape">
        <SingleShape num="20" img={shape_1} />
        <SingleShape num="21" img={shape_2} />
        <SingleShape num="22" img={shape_3} />
        <SingleShape num="23" img={shape_4} />
      </div>
      <div className="container-fluid tp-gx-20">
        <div className="row">
          <div className="col-xl-12">
            <div className="portfolio__section-title-wrapper text-center mb-90">
              <span className="portfolio__section-title-pre">
                CHECK OUT OUR LATEST WORK
              </span>
              <h3 className="portfolio__section-title">Portfolio Masonry</h3>
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
                        ? masonry_data.length
                        : masonry_data.filter((item) => item.category === cate)
                            .length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <motion.div layout className="tp-gx-20 grid tp-portfolio-load-more">
          <LayoutGroup>
          <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 3, 992: 4 }}>
            <Masonry gutter="20px">
              {portfolioItems.slice(0, next).map((item, i) => (
                <MasonrySinglePort key={i} item={item} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
          </LayoutGroup>
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
  );
}
