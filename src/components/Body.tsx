import React from 'react'
import { Route, Switch } from 'react-router-dom'
import classes from '../App.module.css'
import Login from './Login'
import Sidebar from './Sidebar'

const Body: React.FC<any> = ({ user, setUser, open, setOpen }) => {
  return (
      <div className={classes.mainContent} style={{ marginLeft: (open ? '240px' : '60px') }}>
        <Switch>
          <Route exact path="/">
            <Sidebar open={open} setOpen={setOpen} user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
        </Switch>
      </div>
  )
}

export default Body;