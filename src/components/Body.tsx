import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import LandingPage from './landing-page/LandingPage'
import Sidebar from './sidebar/Sidebar'
import Github from './github/Github'
import EditProfile from './account/EditProfile'
import Profile from './profile/Profile'

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

const Body: React.FC<any> = ({open, setOpen, userInfo, setUserInfo }) => {
  const styles = useStyles();
  return (
    
    <div className={styles.root} >
      {userInfo.userToken === '' ? null : <Sidebar open={open} setOpen={setOpen} />}
      <div className={clsx(styles.mainContent, {
        [styles.contentShift]: open,
      })} style={{ marginLeft: userInfo.userToken !== '' ? (open ? '240px' : '60px') : '0px' }}>
        <Switch>
          <Route exact path={["/", '/dashboard']}>
            {userInfo.userToken  !== '' ?
              <Dashboard />
              :
              <LandingPage  setUserInfo={setUserInfo} />
            }
          </Route>
          <Route exact path="/login">
            <LandingPage  setUserInfo={setUserInfo} />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/account">
            <EditProfile />
          </Route>
          <Route exact path="/github">
            <Github />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Body;