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
