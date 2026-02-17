import React from "react";

const Post = (props) => {
  return (
    <div className="post min-h-25">
      <h1>{props.post.title}</h1>
      <hr/>
      <p className='mt-2'>{props.post.body}</p>
    </div>
  );
};

export default Post;
