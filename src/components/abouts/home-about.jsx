import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import aboutImg from "@assets/img/about/about-img-1.jpg";
import authorImg from "@assets/img/about/about-author-thumb.jpg";
import ShapeLine from "@svg/shape-line";
import CountUpContent from "@components/common/counter";

const about_contents = {
  about_img: aboutImg,
  thumb_text: "Expert",
  counter: 12,
  experience: (
    <>
      Years <br /> Experience
    </>
  ),
  pre_title: "Expert Guidance",
  title: "What they think",
  highlight_text: "about us",
  desc: "The city and town name generator uses a database of over five million names across more than 150 countries. If you are looking for a random city or town name to spark a location for a book, game, or a script, millions of possibilities are at your finger tips. How you use the city or town name is up to you.",
  author_img: authorImg,
  author_name: "Robert Fox.",
  author_link: "let’s talk about ideas",
};

const {
  about_img,
  author_img,
  author_link,
  author_name,
  counter,
  desc,
  experience,
  highlight_text,
  pre_title,
  thumb_text,
  title,
} = about_contents;

const HomeAbout = () => {
  return (
    <>
      <section id="tpabout" className="about__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about__thumb-wrapper ml-70 pr-100">
                <div className="about__thumb w-img">
                  <div className="tp-thumb-overlay wow"></div>
                  <Image
                    src={about_img}
                    style={{ width: "100%", height: "100%" }}
                    alt="about img"
                  />
                </div>
                <div className="about__thumb-text">
                  <h3 data-text="Expert">{thumb_text}</h3>
                </div>
                <div className="about__experience">
                  <h4>
                    <span className="counter">
                      <CountUpContent number={counter} add_style={false} />
                    </span>
                  </h4>
                  <p>{experience}</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div
                className="about__wrapper pr-95 wow fadeInUp"
                data-wow-delay=".7s"
                data-wow-duration="1s"
              >
                <div className="section__title-wrapper mb-25">
                  <span className="section__title-pre">{pre_title}</span>
                  <h3 className="section__title">
                    {title}{" "}
                    <span className="section__title-highlight">
                      {highlight_text}
                      <ShapeLine />
                    </span>
                  </h3>
                </div>

                <p>{desc}</p>

                <div className="about__author d-sm-flex align-items-center mb-40">
                  <div className="about__author-inner d-flex align-items-center">
                    <div className="about__author-thumb mr-10">
                      <Image src={author_img} alt="author" />
                    </div>
                    <div className="about__author-content d-sm-flex align-items-center">
                      <h3 className="about__author-title">
                        Hi, {"I'm"} <span>{author_name}</span>
                      </h3>
                    </div>
                  </div>
                  <div className="about__author-btn">
                    <span className="about-author-link">{author_link}</span>
                  </div>
                </div>
                <div className="about__btn">
                  <Link href="/about" className="tp-btn">
                    Discover Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
