import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { withRouter } from 'react-router-dom';
import AboutUs from './AboutUs';
import Feature from './Feature';
import MainSection from './MainSection';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        flex: 1,
    },
    containerStyle: {
        display: 'flex',
        flex: 1,
        margin: 'auto',
        justifyContent: 'center',
    }
}));

const LandingPage: React.FC<any> = ({ setUser }) => {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <div className={classes.containerStyle}>
                <MainSection setUser={setUser} />
            </div>
            <div className={classes.containerStyle}>
                <Feature />
            </div>
            <div className={classes.containerStyle}>
                <AboutUs />
            </div>
        </div>
    );
}

export default withRouter(LandingPage);