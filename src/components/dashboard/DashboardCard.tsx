import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  
  root: {
    textAlign: 'center',
    padding: theme.spacing(2),
    width: '100%',
    height: '100%',
    margin: theme.spacing(2),
    borderRadius: theme.spacing(2), // 16px
    transition: '0.8s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      //paddingTop: theme.spacing(2),
    },
  },
}));

const DashboardCard: React.FC<any> = (props) => {
  const classes = useStyles();
  console.log(props.backgroundImage)

  return (
    <Card className={classes.root}>
      
    </Card>

  );

}

export default DashboardCard;