import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';
import { withRouter } from 'react-router-dom';

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
      color: theme.palette.secondary.main,
    },
    typography: {
      color: theme.palette.secondary.main,
    },
    toolBar: {
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.up('lg')]: {
        minHeight: '64px',
      },
      [theme.breakpoints.up('xs')]: {
        minHeight: '56px',
      },
      [theme.breakpoints.up('sm')]: {
        minHeight: '64px',
      },
      [theme.breakpoints.up('md')]: {
        minHeight: '64px',
      },
    }
  })
);

const Header: React.FC<any> = ({ user, setUser, open, setOpen }) => {

  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolBar} variant="dense">
          { user !== '' ?
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          : null}
          <Typography variant="h5" className={classes.typography}>
            Developer Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);