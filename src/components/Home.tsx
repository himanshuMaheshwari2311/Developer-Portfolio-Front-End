import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(150),
      height: theme.spacing(50),
    },
  },
  card: {
    boxShadow: '0 0 8px 0px rgba(0,0,0,0.87)',
    background: theme.palette.primary.main,
    '&:hover': {
      boxShadow: '0 0 10px 2px rgba(0,0,0,0.87)',
    },
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Card variant="outlined" className={classes.card}>
          
        </Card>

        <Card variant="outlined" className={classes.card} />
      </div>
      <div className={classes.root}>
        <Card variant="outlined" className={classes.card} />
        <Card variant="outlined" className={classes.card} />
      </div>
      <div></div>
    </div>
  );
}

export default withRouter(Home);