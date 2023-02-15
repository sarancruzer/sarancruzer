import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
// internal
import portfolio_grid_data from "./portfolio-grid-data";

// data
const categories = [
  "All",
  ...new Set(portfolio_grid_data.map((item) => item.category)),
];

const PortfolioGridCol = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [portfolioItems, setPortfolioItems] = useState(portfolio_grid_data);
  // handleCategoryItem
  const handleCategoryItem = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setPortfolioItems(portfolio_grid_data);
    } else {
      const categoryItems = portfolio_grid_data.filter(
        (item) => item.category === category
      );
      setPortfolioItems(categoryItems);
    }
  };
  return (
    <>
      <section className="portfolio__area pt-60 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="portfolio__masonary-btn-2 text-center mb-50">
                <div className="masonary-menu filter-button-group">
                  {categories.map((cate, i) => (
                    <button
                      key={i}
                      onClick={() => handleCategoryItem(cate)}
                      className={`${cate === activeCategory ? "active" : ""}`}
                    >
                      {cate}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <motion.div layout className="row gx-2 grid">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
              >
                <LayoutGroup>
                  <div
                    className="portfolio__item mb-8 fix transition-3 wow fadeInUp"
                    data-wow-delay=".3s"
                    data-wow-duration="1s"
                  >
                    <div
                      className="portfolio__thumb include-bg"
                      style={{ backgroundImage: `url(${item.img.src})` }}
                    ></div>
                    <div className="portfolio__content">
                      <div className="portfolio__tag">
                        <span>
                          <a href="#">{item.tag}</a>
                        </span>
                      </div>
                      <h3 className="portfolio__title">
                        <Link href="/portfolio-details">
                          {item.title}
                        </Link>
                      </h3>
                    </div>
                    <div className="portfolio__text">
                      <p>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </LayoutGroup>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioGridCol;
