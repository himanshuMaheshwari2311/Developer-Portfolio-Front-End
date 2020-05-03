import { Card, FormControl, Grid, Grow, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        flexGrow: 1,
        flex: 1,
    },
    gridContainer: {
        margin: "4px",
        flex: 1,
    },
    innerGridContainer: {
        flex: 1,
    },
    card: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    profileContent: {
        display: 'block',
        flexGrow: 1,
        flex: 1,
        flexDirection: 'row',
        padding: theme.spacing(2),
        alignContent: 'center',
        margin: 'auto',
    },
    typewriter: {
        fontFamily: 'monospace',
        margin: '0 auto',
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Profile: React.FC = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container spacing={2} className={classes.gridContainer}>
                <Grow in={true} timeout={1000}>
                    <Grid item xs={12} md={6} sm={6} lg={6}>
                        <Grid container spacing={1} className={classes.innerGridContainer}>
                            <Grid item xs={12} md={12} sm={12} lg={12}>
                                <Card className={classes.card}>
                                    <Grid container spacing={1} className={classes.innerGridContainer}>
                                        <Grid item xs={12} md={12} sm={12} lg={12}>
                                            <Grow in={true} timeout={500}>
                                                <div className={classes.profileContent}>
                                                    <div style={{ margin: 'auto' }}>
                                                        <Typography component="h5" variant="h5" style={{ fontSize: '24px' }} className={classes.typewriter}>
                                                            Himanshu Maheshwari
                                                </Typography>
                                                    </div>
                                                    <div style={{ width: 'auto' }}>
                                                        <Typography component="h6" variant="h6" style={{ fontSize: '14px' }} className={classes.typewriter}>
                                                            Analyst, Deutsche Bank
                                                </Typography>
                                                    </div>
                                                </div>
                                            </Grow>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={12} sm={12} lg={12}>
                                <Card className={classes.card} style={{height: '100%', display: 'flex'}}>
                                    <Grow in={true} timeout={1000}>
                                        <Grid container spacing={1} className={classes.innerGridContainer}>
                                            <form className={classes.form} noValidate autoComplete="off">
                                                <Grid item xs={12} md={6} sm={6} lg={6}>
                                                    <FormControl style={{ margin: '2px' }}>
                                                        <FormControl>
                                                            <InputLabel htmlFor="component-simple">Name</InputLabel>
                                                            <Input id="component-simple" />
                                                        </FormControl>
                                                    </FormControl>
                                                </Grid>
                                            </form>
                                        </Grid>
                                    </Grow>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grow>
                <Grow in={true} timeout={1000}>
                    <Grid item xs={12} md={6} sm={6} lg={6}>
                        <Card className={classes.card}>
                        </Card>
                    </Grid>
                </Grow>
            </Grid>
        </div >
    );
}

export default withRouter(Profile);
