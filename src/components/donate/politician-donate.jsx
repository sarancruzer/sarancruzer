import React from "react";
import Link from "next/link";

const PoliticianDonate = () => {
  // handleSubmit
  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <>
      <section className="donate__area">
        <div className="container">
          <div className="donate__inner grey-bg-4">
            <div className="row">
              <div className="col-xxl-12">
                <div className="donate__wrapper">
                  <div className="donate__content mb-45 text-center">
                    <h3 className="donate__title">
                      Get involved with contribution, make yourself proud!
                    </h3>
                    <p>Donate today to support lower taxes for middle class</p>
                  </div>
                  <div className="donate__form">
                    <form onSubmit={handleSubmit}>
                      <div className="donate__form-inner d-lg-flex align-items-center justify-content-center">
                        <div className="donate__ammount-wrapper d-flex flex-wrap align-items-center mr-20">
                          <div className="donate__ammount">
                            <button type="submit">$10</button>
                          </div>
                          <div className="donate__ammount">
                            <button type="submit">$15</button>
                          </div>
                          <div className="donate__ammount">
                            <button type="submit">$20</button>
                          </div>
                          <div className="donate__ammount">
                            <button type="submit">$25</button>
                          </div>
                          <div className="donate__ammount">
                            <button type="submit">$30</button>
                          </div>
                          <div className="donate__ammount donate__ammount-more">
                            <button type="button" id="donate_more">
                              More
                            </button>
                          </div>
                        </div>
                        <div className="donate__more mb-10">
                          <Link href="/contact" className="tp-btn-7">
                            Donate Now
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoliticianDonate;
