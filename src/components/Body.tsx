import React from 'react'
import { Route, Switch } from 'react-router-dom'
import classes from '../App.module.css'
import Login from './Login'
import Sidebar from './Sidebar'
import Home from './Home'
import Profile from './Profile'
import Dashboard from './Dashboard'

const Body: React.FC<any> = ({ user, setUser, open, setOpen }) => {
  
  const userId = localStorage.getItem("userId");
  
  return (
      <div className={classes.mainContent} style={{ marginLeft: user !== '' ? (open ? '240px' : '60px') : '0px' }}>
        {userId === null ? null : <Sidebar open={open} setOpen={setOpen} />}
        <Switch>
          <Route exact path={["/", "/home", '/dashboard']}>
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/account">
            <Home />
          </Route>
        </Switch>
      </div>
  )
}

export default Body;