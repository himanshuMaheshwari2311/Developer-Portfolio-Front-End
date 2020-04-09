import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, makeStyles, Card, CardHeader, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    iconStyle: {
        fontSize: "36px",
    },
    gridContainer: {
        margin: "5px",
    },
    cardStyle: {
        background: "#fff",
    },
    cardCategory: {
        color: theme.palette.primary.main,
        margin: "0",
        fontSize: "12px",
        marginTop: "0",
        paddingTop: "10px",
        marginBottom: "0"
    },
}));

const LandingPage: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={12} sm={12} md={12}>
                    
                </Grid>
            </Grid>
        </div>
    );
}

export default withRouter(LandingPage);