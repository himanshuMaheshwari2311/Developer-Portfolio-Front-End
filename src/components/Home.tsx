import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DashboardCard from './DashboardCard';
import { withRouter } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles(theme => ({
  gridRoot: {
    flexGrow:1,
  },
  gridContainer: {   
    width:`100%`,
  },

}));


const Home: React.FC<any> = () => {
  const classes = useStyles();
  return (  
    <div className={classes.gridRoot}>
     <Grid container className={classes.gridContainer} spacing={2}>
        <Grid item xs={12} sm={6} >
        <DashboardCard></DashboardCard>
        </Grid>
        <Grid item xs={12} sm={6} >
        <DashboardCard></DashboardCard>
        </Grid>
     </Grid>
     <Grid container className={classes.gridContainer} spacing={2}>
        <Grid item xs={12} sm={6} >
        <DashboardCard></DashboardCard>
        </Grid>
        <Grid item xs={12} sm={6} >
        <DashboardCard></DashboardCard>
        </Grid>
     </Grid>
    </div>  
  );

}

export default withRouter(Home);