# Модуль 2. Frontend

## 8. Маршрутизация (Урок)

## [React Router Dom - Quick Start](https://reactrouter.com/web/guides/quick-start)

---

Для клонирования этой ветки

```code
git clone https://github.com/xdpiqbx/minin-jun-mod-2.git -b 008-router-LESSON .
```

Тут использовались

```code
npx create-react-app .
npm i react-router-dom
npm i query-string
npm i lodash
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
props : {
  match: {
    path: '/posts/:postId',
    url: '/posts/123',
    isExact: true,
    params: { postId: '123' }
  }
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

---

## Query String

```js
props : {
  location: {
    pathname: '/posts',
    search: '?sortBy=newest&count=1',
    hash: ''
  }
}
```

[Query String](https://github.com/sindresorhus/query-string)

```js
import _ from 'lodash';
import queryString from 'query-string';
const search = queryString.parse(location.search);
const cropPosts = search ? _(posts).slice(0).take(search.count).value() : posts;
```

---

## Redirect

```jsx
<Route path="/dashboard" component={Dashboard} />
<Redirect from="/admin" to="/dashboard" />
<Redirect to="/404" />
```

---

## History

Пропс history по необходимости нужно пробрпсывать ниже

Хук useHistory импортировать прямо в нужном компоненте

history.push - это как кнопка НАЗАД

```js
const handleSave = () => {
  history.push('/posts');
};
```

history.replace - перекинет на нужную страницу и не сможет вернуть НАЗАД

```js
const handleSave = () => {
  history.replace('/posts');
};
```

---

## Hooks

Через хуки можно в дочерних компонентах сразу получить доступ к `History`, `Location` и `Match`

### useHistory

```js
import { useHistory } from 'react-router-dom';
const history = useHistory();
// и дальше по той же схеме что выше
```

### useParams

```js
import { useParams } from 'react-router-dom';
const params = useParams();
const { postId } = params;
// const postId = match.params.postId;
```

### useLocation

### useRouteMatch

---

## Вложенные пути

```jsx
import { Switch, Route, Link } from 'react-router-dom';
import Stats from '../Stats';
import Edit from '../Edit';

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard/edit">Edit</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/dashboard/edit" component={Edit} />
        <Route exact path="/dashboard" component={Stats} />
      </Switch>
    </div>
  );
};

export default Dashboard;
```
