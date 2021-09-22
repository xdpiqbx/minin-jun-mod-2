import React from 'react';
import PostList from '../PostList';
import Post from '../Post';

const Posts = ({ match, history }) => {
  const postId = match.params.postId;
  const display = match.params.display;

  const posts = [
    { id: 1, label: 'post 1' },
    { id: 2, label: 'post 2' },
    { id: 3, label: 'post 3' }
  ];

  return (
    <>
      {postId ? (
        <>
          {display && <h2>{display}</h2>}
          <Post id={postId} posts={posts} history={history} />
        </>
      ) : (
        <PostList posts={posts} />
      )}
    </>
  );
};

export default Posts;
