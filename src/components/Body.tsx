import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import Sidebar from './sidebar/Sidebar'
import Dashboard from './dashboard/Dashboard'
import Home from './Home'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ProfileIcons from './account/ProfileIcons'
import ProfileUsernames from './account/ProfileUsernames'

const useStyles = makeStyles(theme => ({
  root:{
    widht:'100%',
    height: '100%'
  },
  mainContent: {
    overflowX:'hidden',
    position: 'relative',
    display:'flex',
    [theme.breakpoints.down('xs')]: {
    marginTop : '54px',
    height: 'calc(100vh - 54px)'
    } ,
    [theme.breakpoints.up('sm')]: {
    marginTop : '64px',
    height: 'calc(100vh - 64px)'
    } , 
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -240,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Body: React.FC<any> = ({ user, setUser, open, setOpen }) => {
  const styles = useStyles();
  
  const userId = localStorage.getItem("userId");
  
  return (    
      <div className={styles.root} >
        {userId === null ? null : <Sidebar open={open} setOpen={setOpen} />}
        <div className={clsx(styles.mainContent,{
          [styles.contentShift]: open,
        })} style={{  marginLeft: user !== '' ? (open ? '240px' : '60px') : '0px' }}>
        <Switch>
          <Route exact path={["/", "/home", '/dashboard']}>
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/profile">
            <ProfileIcons />
          </Route>
          <Route exact path="/profileUsernames">
            <ProfileUsernames />
          </Route>
          <Route exact path="/account">
            <Home />
          </Route>
        </Switch>
        </div>
      </div>
  )
}

export default Body;