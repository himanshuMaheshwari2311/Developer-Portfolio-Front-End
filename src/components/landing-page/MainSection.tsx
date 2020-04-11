import React from 'react';
import { Grid, Grow, CssBaseline, makeStyles, Typography } from '@material-ui/core';
import Login from '../Login';

const useStyles = makeStyles((theme) => ({
    root: {
        height: `calc(100vh-54px)`,
    },
    image: {
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#fff',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignItems: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    typewriter: {
        fontFamily: 'monospace',
        color: '#fff',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        margin: '0 auto',
        letterSpacing: '.15em',
    },
}));


const MainSection: React.FC<any> = ({setUser}) => {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={12} md={12} className={classes.image} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className={classes.paper}>
                    <Grow in={true} timeout={1000}>
                        <Typography component="h2" variant="h2" style={{ color: '#rgba(255,255,255,0.87)' }} className={classes.typewriter}>
                            Developer Portfolio
                        </Typography>
                    </Grow>
                    <br />
                    <Grow in={true} timeout={2000}>
                        <Typography component="h4" variant="h4" style={{ color: '#rgba(255,255,255,0.87)' }} className={classes.typewriter}>
                            Start building your lucrative Developer profile
                        </Typography>
                    </Grow>
                    <Grow in={true} timeout={3000}>
                        <div style={{ alignItems: 'center', marginTop: '50px' }}>
                            <Login setUser={setUser} />
                        </div>
                    </Grow>
                </div>
            </Grid>
        </Grid>
    );
}

export default MainSection;