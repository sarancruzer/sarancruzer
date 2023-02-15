import React from 'react';
// internal
import portfolio_data from '@data/portfolio-data';
import ShapeLine from '@svg/shape-line';
import HomeSinglePort from './single-item/home-single-port';

const portfolio_items = portfolio_data.filter(item => item.home);

const HomePortfolio = () => {
  return (
    <>
      <section className="portfolio__area black-bg pt-110 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-7">
              <div className="section__title-wrapper mb-60">
                <h3 className="section__title section__title-white">
                  Some recent {' '}
                  <span className="section__title-highlight">
                    works
                    <ShapeLine /> {' '}
                  </span>
                  we really proud of
                </h3>
              </div>
            </div>
          </div>
          <div className="row gx-2">
            {portfolio_items.map((item) => (
              <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <HomeSinglePort item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePortfolio;