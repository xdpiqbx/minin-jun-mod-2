import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = ({ id, posts }) => {
  const history = useHistory();
  const getPostById = postId => {
    return posts.find(post => post.id.toString() === postId);
  };
  const post = getPostById(id);
  const handleSave = () => {
    history.replace('/posts');
  };
  return (
    <>
      <h2>{post ? post.label : `Post with id ${id} wasn't found`}</h2>
      <button
        onClick={() => {
          handleSave();
        }}
      >
        Save
      </button>
    </>
  );
};

export default Post;
