import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import VideoModal from "@components/common/modals/modal-video";
import useModal from "@hooks/use-modal";

const CreativeSingleBlog = ({ blog }) => {
  const { img, icon, title, sm_text, tag, date, delay, author_name,video_id } = blog || {};
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
    <div
      className="blog__item-6 wow fadeInUp scene"
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className="blog__thumb-6">
        <Link href="/blog-details">
          <Image className="layer" src={img} alt="image" />
        </Link>
      </div>
      <div className="row">
        <div className="col-md-2 col-sm-6">
          <div className="blog__tag-6">
            <a href="#">
              {icon}
              {tag}
            </a>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <h3 className="blog__title-6">
            <Link href="/blog-details">{title}</Link>
          </h3>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="blog__content-6">
            <p>{sm_text}</p>

            <div className="blog__meta-6">
              <span>
                <a href="#">
                  <i className="fa-regular fa-user"></i> {author_name}
                </a>
              </span>
              <span>
                <i className="fa-regular fa-clock"></i> {date}
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-1 col-sm-6">
          <div className="blog__play text-lg-end mt-25">
            <a
              style={{cursor:'pointer'}}
              onClick={()=> setIsVideoOpen(true)}
              className="blog__play-btn popup-video"
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* video modal start */}
    <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
    {/* video modal end */}
    </>
  );
};

export default CreativeSingleBlog;
