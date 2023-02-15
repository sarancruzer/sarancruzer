import Image from "next/image";
import React from "react";
import history_img from "@assets/img/history/history-1.jpg";

const contents = {
  pre_title: "Out History",
  title: "We are top lawyers and history",
  history_thumb: history_img,
  history_bg: "/assets/img/history/history-2.jpg",
  awards: "76+",
  thumb_text: "Winning Awards",
  history_lists: [
    {
      delay: ".3s",
      year: "2007 - 2012",
      title: "Together We Build",
      text: "In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.",
      meta: "Family Law",
    },
    {
      delay: ".5s",
      year: "2012 - 2016",
      title: "Completed 1000 Cases",
      text: "In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.",
      meta: "Criminal Law",
    },
    {
      delay: ".7s",
      year: "2016 - 2018",
      title: "We Are Number One",
      text: "In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.",
      meta: "Business Law",
    },
    {
      delay: ".9",
      year: "2018 - 2022",
      title: "Intellectual Property",
      text: "In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.",
      meta: "Car Accident",
    },
  ],
};

const {
  pre_title,
  title,
  history_thumb,
  awards,
  history_bg,
  thumb_text,
  history_lists,
} = contents;

const LawyerHistory = () => {
  return (
    <>
      <section className="history__area pt-30 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="section__title-wrapper-4 mb-60">
                <span className="section__title-pre-4">{pre_title}</span>
                <h3 className="section__title-4">{title}</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="history__thumb-wrapper d-sm-flex pr-70">
                <div className="history__thumb">
                  <Image
                    src={history_thumb}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="history__thumb-right-wrapper">
                  <div
                    className="history__thumb-right p-relative include-bg"
                    style={{ backgroundImage: `url(${history_bg})` }}
                  >
                    {awards}
                  </div>
                  <div className="history-thumb-text">
                    <p>{thumb_text}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="history__list pl-65 pr-90">
                {history_lists.map((list, i) => {
                  const { delay, meta, text, title, year } = list;
                  return (
                    <div
                      key={i}
                      className="history__list-item d-flex align-items-start"
                    >
                      <div
                        className="history__year wow fadeInLeft"
                        data-wow-delay={delay}
                      >
                        <h5 className="history__year-title">{year}</h5>
                      </div>
                      <div className="history__list-content">
                        <div className="history__list-dot">
                          <span></span>
                        </div>
                        <div
                          className="history__list-content-inner wow fadeInRight"
                          data-wow-delay=".3s"
                        >
                          <h4 className="history__list-title">{title}</h4>
                          <p>{text}</p>
                          <div className="history__list-meta">
                            <span>{meta}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LawyerHistory;
