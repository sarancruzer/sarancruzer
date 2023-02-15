import React from "react";
import Image from "next/image";
// internal
import BlogReplyForm from "@components/forms/blog-reply-form";
import user_1 from "@assets/img/users/user-17.jpg";
import user_2 from "@assets/img/users/user-18.jpg";
import user_3 from "@assets/img/users/user-19.jpg";

// single comment box
function SingleCommentBox({ user, date, name, desc }) {
  return (
    <div className="postbox__comment-box d-sm-flex align-items-start">
      <div className="postbox__comment-info">
        <div className="postbox__comment-avater">
          <Image src={user} alt="user" />
        </div>
      </div>
      <div className="postbox__comment-text ">
        <div className="postbox__comment-name">
          <span className="post-meta">{date}</span>
          <h5>
            <a href="#">{name}</a>
          </h5>
        </div>
        <p>{desc}</p>
        <div className="postbox__comment-reply">
          <a href="#">Reply</a>
        </div>
      </div>
    </div>
  );
}

const CommentArea = ({spacing='95'}) => {
  return (
    <React.Fragment>
      <div className={`postbox__comment mb-${spacing}`} id="tp-blog-details-comment">
        <h3 className="postbox__comment-title">Comments (2)</h3>
        <ul>
          <li>
            <SingleCommentBox
              user={user_1}
              date="July 14, 2022"
              name="Eleanor Fant"
              desc="One’s of the best template out of there. design, code quality, updates etc everything you needs guys, buy it you won’t regret it!"
            />

            <ul className="children">
              <li>
                <SingleCommentBox
                  user={user_2}
                  date="July 15, 2022"
                  name="Alexander Ljung"
                  desc="This theme is super awesome! But I had one small issue with link option in parallax portfolio. The other day!"
                />
              </li>
            </ul>
          </li>
          <li>
            <SingleCommentBox
              user={user_3}
              date="July 18, 2022"
              name="Shahnewaz Sakil"
              desc="His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked"
            />
          </li>
        </ul>
      </div>
      <div className="postbox__comment-form">
        <h3 className="postbox__comment-form-title">Leave A Reply</h3>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        {/* form start */}
        <BlogReplyForm />
        {/* form end */}
      </div>
    </React.Fragment>
  );
};

export default CommentArea;
