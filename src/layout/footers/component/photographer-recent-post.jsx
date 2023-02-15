import React from "react";
import Image from "next/image";
// internal
import blog_sm_img_1 from "@assets/img/blog/footer-sm/footer-sm-1.jpg";
import blog_sm_img_2 from "@assets/img/blog/footer-sm/footer-sm-2.jpg";
import Link from "next/link";

function SingleBlog({ src, title, date }) {
  return (
    <div className="footer__blog-item d-flex align-items-center">
      <div className="footer__blog-thumb">
        <Link href="/blog-details">
          <Image src={src} alt="image" />
        </Link>
      </div>
      <div className="footer__blog-content">
        <h3 className="footer__blog-title">
          <Link href="/blog-details">{title}</Link>
        </h3>
        <div className="footer__blog-meta">
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

const PhotographerRecentPost = () => {
  return (
    <div className="footer__blog">
      <SingleBlog
        src={blog_sm_img_1}
        title="Designers Who Changed the Web"
        date="July 26, 2022"
      />
      <SingleBlog
        src={blog_sm_img_2}
        title={
          <>
            The History <br /> Of Photographer.
          </>
        }
        date="April 14, 2022"
      />
    </div>
  );
};

export default PhotographerRecentPost;
