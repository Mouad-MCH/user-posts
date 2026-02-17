import React from "react";

const Post = (props) => {
  return (
    <div className="post min-h-25">
      <h1>title post {props.num + 1}</h1>
      <hr/>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque commodi mollitia dolore, id voluptas fugiat. Perferendis nobis nam quae cumque?</p>
    </div>
  );
};

export default Post;
