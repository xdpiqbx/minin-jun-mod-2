# Модуль 2. Frontend

## 8. Маршрутизация (Урок)

---

Для клонирования этой ветки

```code
git clone https://github.com/xdpiqbx/minin-jun-mod-2.git -b 008-router-LESSON .
```

Тут использовались

```code
npx create-react-app .
npm i react-router-dom
```

```jsx
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  );
};
```

```jsx
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  );
}
```

```jsx
//....
<Route
  path="/dashboard"
  render={props => {
    return true && <Dashboard isAdmin={false} {...props} />;
  }}
/>
//....
```

```jsx
//....
<Route
  path="/posts/:postId"
  render={props => <Post posts={posts} {...props} />}
/>
<Route
  path="/posts"
  render={props => <PostList posts={posts} {...props} />}
/>
//....
```

```js
  match: {
    path: '/posts/:postId',
    url: '/posts/123',
    isExact: true,
    params: { postId: '123' }
  }
```

```jsx
const Post = ({ match, posts }) => {
  const { postId } = match.params;
  const getPostById = id => {...};
  const post = getPostById(postId);
  return <h2>{post.label}</h2>;
};
export default Post;
```

```jsx
//....
<Route path="/posts/:postId?/:display?" component={Posts} />
//....
```

```jsx
import React from 'react';
import PostList from '../PostList';
import Post from '../Post';

const Posts = ({ match }) => {
  const postId = match.params.postId;
  const display = match.params.display;
  const posts = [ ... ];
  return (
    <>
      {postId ? (
        <>
          {display && <h2>{display}</h2>}
          <Post id={postId} posts={posts} />
        </>
      ) : (
        <PostList posts={posts} />
      )}
    </>
  );
};

export default Posts;
```

Start from => 8. Query параметры

## [React Router Dom - Quick Start](https://reactrouter.com/web/guides/quick-start)
