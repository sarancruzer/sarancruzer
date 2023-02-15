import React from "react";
import Link from "next/link";
// internal
import {NextArrowTwo,PrevArrowTwo} from "@svg/index";

const Pagination = ({url}) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={url} className="tp-pagination-prev prev page-numbers">
            <PrevArrowTwo />
            Prev
          </Link>
        </li>
        <li>
          <Link href={url}>1</Link>
        </li>
        <li>
          <span className="current">2</span>
        </li>
        <li>
          <Link href={url}>3</Link>
        </li>
        <li>
          <Link href={url} className="next page-numbers">
            Next
            <NextArrowTwo />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
