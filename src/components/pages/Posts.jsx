import React from 'react';
import PostList from '../PostList';
import Post from '../Post';
import queryString from 'query-string';
import _ from 'lodash';

const Posts = ({ match, location }) => {
  const postId = match.params.postId;
  const display = match.params.display;
  const search = queryString.parse(location.search);

  console.log(search); // ?sortBy=newest&count=1
  console.log(queryString.parse(search)); // {count: "1", sortBy: "newest"}

  const posts = [
    { id: 1, label: 'post 1' },
    { id: 2, label: 'post 2' },
    { id: 3, label: 'post 3' }
  ];
  const cropPosts = search
    ? _(posts).slice(0).take(search.count).value()
    : posts;

  console.log(cropPosts);

  return (
    <>
      {postId ? (
        <>
          {display && <h2>{display}</h2>}
          <Post id={postId} posts={posts} />
        </>
      ) : (
        <PostList posts={cropPosts} />
      )}
    </>
  );
};

export default Posts;
