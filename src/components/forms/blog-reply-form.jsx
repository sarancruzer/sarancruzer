import React from "react";

const BlogReplyForm = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
          <div className="postbox__comment-input">
            <input type="text" placeholder="Name*" />
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
          <div className="postbox__comment-input">
            <input type="email" placeholder="Email" />
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-12">
          <div className="postbox__comment-input">
            <input type="text" placeholder="Website" />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-input">
            <textarea placeholder="Your Comment Here..."></textarea>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-agree d-flex align-items-start mb-25">
            <input className="e-check-input" type="checkbox" id="e-agree" />
            <label className="e-check-label" htmlFor="e-agree">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-btn">
            <button type="submit" className="tp-btn">
              Submit Comment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BlogReplyForm;
