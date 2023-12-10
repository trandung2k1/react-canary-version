import React from 'react';
import { getPost } from '../App';
const Post = ({ id }) => {
  const rs = getPost(id);
  rs.then((rs) => console.log(rs));
  return <div>Post</div>;
};

export default Post;
