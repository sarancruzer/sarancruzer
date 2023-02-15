import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import dynamic from "next/dynamic";
// internal
import { CommentThree, DateTwo, QuoteTwo, UserTwo } from "@svg/index";
import VideoModal from "@components/common/modals/modal-video";
import useModal from "@hooks/use-modal";
import Link from "next/link";

// image style
const image_style = {
  width: "100%",
  height: "100%",
};

const SingleBlogPostbox = ({ blog }) => {
  const {
    id,
    video,
    blog_quote,
    blog_audio,
    blog_slider,
    img,
    title,
    desc,
    comments,
    date,
    author_name,
    audio_url,
    slider_images,
    video_id,
  } = blog || {};
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <React.Fragment>
      <article
        className={`postbox__item format-${video ? "video" : blog_quote ? "quote" : blog_audio ? "audio" : "image"
          } mb-50 transition-3`}
      >
        {!video && !blog_quote && !blog_audio && !blog_slider && (
          <div className="postbox__thumb w-img">
            <Link href={`blog-details/${id}`}>
              <Image src={img} alt="blog img" style={image_style} />
            </Link>
          </div>
        )}
        {video && (
          <div className="postbox__thumb postbox__video w-img p-relative">
            <Link href={`blog-details/${id}`}>
              <Image src={img} alt="blog img" style={image_style} />
            </Link>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setIsVideoOpen(true)}
              className="play-btn pulse-btn popup-video"
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
        )}
        {blog_quote && (
          <div className="postbox__quote postbox__quote-style-3">
            <div className="blog__grid-quote mb-30">
              <div className="blog__grid-quote-icon">
                <span>
                  <QuoteTwo />
                </span>
              </div>
              <div className="blog__grid-quote-content">
                <span>Social distancing</span>
                <p>{desc}...</p>
                <cite>Shahnewaz Sakil</cite>
              </div>
            </div>
          </div>
        )}
        {blog_audio && (
          <div className="postbox__thumb postbox__audio w-img p-relative">
            <iframe allow="autoplay" src={audio_url}></iframe>
          </div>
        )}
        {blog_slider && (
          <Swiper
            className="postbox__thumb postbox__slider swiper-container w-img p-relative"
            slidesPerView={1}
            spaceBetween={0}
            modules={[Navigation]}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            // Navigation arrows
            navigation={{
              nextEl: ".postbox-slider-button-next",
              prevEl: ".postbox-slider-button-prev",
            }}
          >
            {slider_images.map((img, i) => (
              <SwiperSlide key={i} className="postbox__slider-item">
                <Image src={img} alt="slider img" style={image_style} />
              </SwiperSlide>
            ))}
            <div className="postbox__nav">
              <button className="postbox-slider-button-next">
                <i className="fa-regular fa-angle-right"></i>
              </button>
              <button className="postbox-slider-button-prev">
                <i className="fa-regular fa-angle-left"></i>
              </button>
            </div>
          </Swiper>
        )}
        {!blog_quote && (
          <div className="postbox__content">
            <div className="postbox__meta">
              <span>
                <a href="#">
                  <UserTwo />
                  {author_name}
                </a>
              </span>
              <span>
                <DateTwo />
                {date}
              </span>
              <span>
                <CommentThree />
                {comments}
              </span>
            </div>
            <h3 className="postbox__title">
              <Link href={`blog-details/${id}`}>{title}</Link>
            </h3>
            <div className="postbox__text">
              <p>{desc}...</p>
            </div>
            <div className="postbox__read-more">
              <Link href={`blog-details/${id}`} className="tp-btn">
                read more
              </Link>
            </div>
          </div>
        )}
      </article>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={video_id}
      />
      {/* video modal end */}
    </React.Fragment>
  );
};

export default dynamic(() => Promise.resolve(SingleBlogPostbox), {
  ssr: false,
});
