import React from 'react';

const Post = ({ id, posts }) => {
  const getPostById = postId => {
    return posts.find(post => post.id.toString() === postId);
  };
  const post = getPostById(id);
  return <h2>{post ? post.label : `Post with id ${id} wasn't found`}</h2>;
};

export default Post;
