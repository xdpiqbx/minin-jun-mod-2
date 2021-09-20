import NavBar from '../components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Dashboard from '../components/pages/Dashboard';
import Posts from '../components/pages/Posts';
import Stats from '../components/Stats';

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route
          path="/dashboard"
          render={props => {
            return true && <Dashboard isAdmin={false} {...props} />;
          }}
        />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  );
}

export default App;
