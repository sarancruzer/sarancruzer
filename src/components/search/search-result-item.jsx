import React from "react";
// internal
import blog_data from "@data/blog-data";
import Pagination from "@ui/Pagination";
import SingleSearchItem from "./single-search-item";

// blog items
const blog_items = blog_data
  .filter((blog) => blog.blog_grid)
  .filter((blog) => !blog.blog_quote)
  .slice(0, 6);

const SearchResultItem = () => {
  return (
    <section className="search__result-item-area pt-100 pb-120">
      <div className="container">
        <div className="row">
          {blog_items.map((item, i) => (
            <div key={i} className="col-md-6">
              <SingleSearchItem {...item} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-pagination tp-pagination-style-2 mt-20">
              <Pagination url="blog" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResultItem;
