import React from "react";
import Image from "next/image";
import { DateTwo } from "@svg/index";
import Link from "next/link";

const SingleRecentPost = ({img,title,date}) => {
  return (
    <div className="rc__post d-flex align-items-center">
      <div className="rc__post-thumb">
        <Link href={`blog-details`}>
          <Image src={img} alt="rc image" />
        </Link>
      </div>
      <div className="rc__post-content">
        <h3 className="rc__post-title">
          <Link href={`blog-details`}>{title}</Link>
        </h3>
        <div className="rc__meta">
          <span>
            <DateTwo/>
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleRecentPost;
