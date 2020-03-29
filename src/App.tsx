import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import classes from './App.module.css';
import Sidebar from './components/Sidebar';
import Header from './shared/Header';
import Home from './components/Home';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));



const App: React.FC = () => {

  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Router>
    <Header open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} ></Header>
    <div className={classes.mainContent} style={{ marginLeft: (open ? '240px' : '60px') }}>
    <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Home></Home>
    </main>
    
      <Switch>
        <Route exact path={["/", "home"]}>
        </Route>
      </Switch>
    </div>
    </Router>
  )
}

export default App;
