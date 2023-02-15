import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// internal
import masonry_data from "@components/portfolios/portfolio-page-com/portfolio-masonry/masonry-data";
import MasonrySinglePort from "@components/portfolios/single-item/masonry-single-port";

// masonry_data
const masonry_items = masonry_data.slice(0, 8);

const ElGallerySeven = () => {
  return (
    <section className="portfolio__area pb-90 pt-20 p-relative fix">
      <div className="container-fluid tp-gx-20">
        <div className="row tp-gx-20">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">Minimal & Clean Design</span>
              <h3 className="tp-section-title-3">Gallery Masonary hover</h3>
            </div>
          </div>
        </div>
        <div className="tp-gx-20 grid">
          <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 3, 992: 4 }}>
            <Masonry gutter="20px">
              {masonry_items.map((item, i) => (
                <MasonrySinglePort key={i} item={item} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export default ElGallerySeven;
