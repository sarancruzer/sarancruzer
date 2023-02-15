import React from "react";

const PortfolioAbout = () => {
  return (
    <>
      <section className="about__area about__space-145">
        <div
          className="about__inner-9 black-bg wow fadeInUp"
          data-wow-delay=".3s"
          data-wow-duration="1s"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-10 col-xl-10 col-lg-11 col-md-10">
                <div className="about__wrapper-9">
                  <span className="about-subtitle">ABOUT ME</span>
                  <h3 className="about-title">
                    My name is <span>Saravanan Nandhan</span>, I’m a <span>Full stack developer</span>{" "}
                    based in <span>Chennai, India</span> and this is a{" "}
                    <span>selection</span> of my personal and{" "}
                    <span>professional</span> work.
                  </h3>

                  <p>
                    Over the past 8 years, {"I've"} worked with a diverse range of
                    clients, from startups to fortune 500 companies. I love
                    crafting interfaces that delight users and help businesses
                    grow. lorem ipsum dolor sit amet, consectet adipiscing
                    spendisse iperdiet.
                  </p>

                  <div className="about__btn-9">
                    <a
                      href="https://weblearnbd.net/wp/bioxlab/wp-content/uploads/2022/09/demo-cv.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="tp-btn-5 tp-btn-5-white"
                    >
                      Download CV
                    </a>
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

export default PortfolioAbout;
