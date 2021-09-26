import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import Main from './layouts/Main'
import Login from './layouts/Login'
import Users from './layouts/Users'

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={Users} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
