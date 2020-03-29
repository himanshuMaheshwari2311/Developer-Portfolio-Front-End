import React from 'react'
import { withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
          },
          appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          },
          appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
          hide: {
            display: 'none',
          },

          menuButton: {
            marginRight: theme.spacing(2),
          },
          toolBar : { 
              backgroundColor: `#E89074`,           
              [theme.breakpoints.up('lg')]: {
                  minHeight : `64px`,
              }, 
              [theme.breakpoints.up('xs')]: {
                  minHeight : `56px`,
              } ,
              [theme.breakpoints.up('sm')]: {
                minHeight : `64px`,
            } ,   
              [theme.breakpoints.up('md')]: {
                  minHeight : `64px`,
              } ,
               
           }
    })
  );
  
const Header: React.FC<any> = (props) => {
  
     const classes = useStyles();
   
      return (
        <div className={classes.root}>
          <AppBar position="fixed"
           className={clsx(classes.appBar, {
            [classes.appBarShift]: props.open,
          })}
          >
            <Toolbar className={classes.toolBar} variant="dense">
              <IconButton 
              edge="start" 
              className={clsx(classes.menuButton, props.open && classes.hide)} 
              onClick={props.handleDrawerOpen}
              color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Developer Portfolio
              </Typography>
            </Toolbar>
          </AppBar>
          <Sidebar open={props.open} handleDrawerClose={props.handleDrawerClose}></Sidebar>

         
        </div>
      );
}

export default withRouter(Header);