import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProfileIcons from './account/ProfileIcons'
import ProfileUsernames from './account/ProfileUsernames'
import Dashboard from './dashboard/Dashboard'
import LandingPage from './landing-page/LandingPage'
import Sidebar from './sidebar/Sidebar'
import Home from './Home'
import EditProfile from './account/EditProfile'

const useStyles = makeStyles(theme => ({
  root: {
    widht: '100%',
    height: '100%'
  },
  mainContent: {
    overflowX: 'hidden',
    position: 'relative',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      marginTop: '54px',
      height: 'calc(100vh - 54px)'
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '54px',
      height: 'calc(100vh - 54px)'
    },
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
      <div className={clsx(styles.mainContent, {
        [styles.contentShift]: open,
      })} style={{ marginLeft: user !== '' ? (open ? '240px' : '60px') : '0px' }}>
        <Switch>
          <Route exact path={["/", '/dashboard']}>
            {userId !== null ?
              <Dashboard />
              :
              <LandingPage setUser={setUser}/>
            }
          </Route>
          <Route exact path="/login">
            <LandingPage/>
          </Route>
          <Route exact path="/profile">
            <EditProfile />
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