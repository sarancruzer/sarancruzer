import React from "react";
// internal
import { Articles, Install, Layout, Search } from "@svg/index";

// single item
function SingleFeatureItem({ icon, pre_title, title }) {
  return (
    <div className="help__features-item d-flex align-items-center">
      <div className="help__features-icon">
        <span>{icon}</span>
      </div>
      <div className="help__features-content">
        <p>{pre_title}</p>
        <h4 className="help__features-title">{title}</h4>
      </div>
    </div>
  );
}

const HelpCenterArea = () => {
  return (
    <section className="help__area grey-bg-4 pt-95 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="help__wrapper">
              <div className="help__content text-center mb-40">
                <h3 className="help__title">
                  Welcome! <br /> How can we Help?
                </h3>
                <p>Yes, this was built with HelpCenter.io.</p>
              </div>
              <div className="help__form">
                <form>
                  <div className="help__input-box">
                    <div className="help__input">
                      <span>
                        <Search />
                      </span>
                      <input type="text" placeholder="Search for articles..." />
                    </div>
                    <button type="submit" className="tp-btn">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div className="help__features d-flex flex-wrap justify-content-sm-center">
                <SingleFeatureItem
                  icon={<Install />}
                  pre_title="How to"
                  title="Install a theme"
                />
                <SingleFeatureItem
                  icon={<Layout />}
                  pre_title="How to"
                  title="Change layout"
                />
                <SingleFeatureItem
                  icon={<Articles />}
                  pre_title="How to"
                  title="Format articles"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenterArea;
