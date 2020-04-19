import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, CardHeader, Grid, Grow, IconButton, makeStyles, Typography, Stepper, StepLabel, Step, StepContent, Button } from '@material-ui/core';
import React from 'react';
import HighChartPie from '../dashboard/charts/HighChartPie';
import HighChartComponent from '../dashboard/charts/HighChartComponent';

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        flexGrow: 1,
        flex: 1,
        padding: theme.spacing(0.5),
    },
    iconStyle: {
        fontSize: "48px",
    },
    gridContainer: {
        flex: 1,
    },
    card: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    cardHeader: {
        fontFamily: 'monospace',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    title: {
        fontFamily: 'monospace',
        fontSize: '28px',
    },
    subTitle: {
        fontFamily: 'monospace',
        fontSize: '12px',
    },
    profileImage: {
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/random)',
        backgroundColor: '#fff',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        maxWidth: '100px',
        maxHeight: '100px',
        marginTop: theme.spacing(2),
    },
    typewriter: {
        fontFamily: 'monospace',
        margin: '0 auto',
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

    actionsContainer: {
        marginBottom: theme.spacing(1),
    },
    resetContainer: {
        padding: theme.spacing(1),
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
}));

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`;
        case 1:
            return 'An ad group contains one or more ads which target a shared set of keywords.';
        case 2:
            return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
        default:
            return 'Unknown step';
    }
}

const Github: React.FC = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div className={classes.root}>
            <Grid container spacing={1} className={classes.gridContainer}>
                <Grow in={true} timeout={1000}>
                    <Grid item xs={12} md={9} sm={9} lg={9}>
                        <Card className={classes.card}>
                            <CardHeader action={
                                <IconButton>
                                    <FontAwesomeIcon icon={faGithub} className={classes.iconStyle} style={{ color: "#000" }} />
                                </IconButton>
                            }
                                title={'Github'}
                                subheader={'<some bio here>'}
                                classes=
                                {{
                                    title: classes.title,
                                    subheader: classes.subTitle
                                }}>
                            </CardHeader>
                            <CardContent>
                                <Grid container className={classes.gridContainer} spacing={3}>
                                    <Grow in={true} timeout={1000}>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Card>
                                                <HighChartPie />
                                            </Card>
                                        </Grid>
                                    </Grow>
                                    <Grow in={true} timeout={1000}>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Card>
                                                <HighChartComponent />
                                            </Card>
                                        </Grid>
                                    </Grow>
                                    <Grow in={true} timeout={1000}>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Card>
                                                <HighChartPie />
                                            </Card>
                                        </Grid>
                                    </Grow>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <Grid container className={classes.gridContainer} spacing={2}>
                                            <Grid item xs={6} md={3} sm={3} lg={3}>
                                                <Card className={classes.card}>
                                                    <CardHeader
                                                        title={'Github'}
                                                        subheader={'<some bio here>'}
                                                    >
                                                    </CardHeader>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6} md={3} sm={3} lg={3}>
                                                <Card className={classes.card}>
                                                    <CardHeader
                                                        title={'Github'}
                                                        subheader={'<some bio here>'}
                                                    >
                                                    </CardHeader>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6} md={3} sm={3} lg={3}>
                                                <Card className={classes.card}>
                                                    <CardHeader
                                                        title={'Github'}
                                                        subheader={'<some bio here>'}
                                                    >
                                                    </CardHeader>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6} md={3} sm={3} lg={3}>
                                                <Card className={classes.card}>
                                                    <CardHeader
                                                        title={'Github'}
                                                        subheader={'<some bio here>'}
                                                    >
                                                    </CardHeader>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6} md={3} sm={3} lg={3}>
                                                <Card className={classes.card}>
                                                    <CardHeader
                                                        title={'Github'}
                                                        subheader={'<some bio here>'}
                                                    >
                                                    </CardHeader>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6} md={3} sm={3} lg={3}>
                                                <Card className={classes.card}>
                                                    <CardHeader
                                                        title={'Github'}
                                                        subheader={'<some bio here>'}
                                                    >
                                                    </CardHeader>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6} md={3} sm={3} lg={3}>
                                                <Card className={classes.card}>
                                                    <CardHeader
                                                        title={'Github'}
                                                        subheader={'<some bio here>'}
                                                    >
                                                    </CardHeader>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6} md={3} sm={3} lg={3}>
                                                <Card className={classes.card}>
                                                    <CardHeader
                                                        title={'Github'}
                                                        subheader={'<some bio here>'}
                                                    >
                                                    </CardHeader>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grow>
                <Grow in={true} timeout={1000}>
                    <Grid item xs={12} md={3} sm={3} lg={3}>
                        <Card className={classes.card}>
                            <Grid container className={classes.gridContainer} spacing={1}>
                                <Grid item xs={12} md={8} sm={8} lg={8} direction='row' style={{maxHeight: '150px'}}>
                                    <Grow in={true} timeout={2000}>
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
                                <Grid item xs={12} md={4} sm={4} lg={4} className={classes.profileImage}>
                                </Grid>
                                <Grid item xs={12} md={12} sm={12} lg={12}>
                                    <Stepper activeStep={activeStep} orientation="vertical" style={{ backgroundColor:'#fff', marginTop: '-90px'}}>
                                        {steps.map((label, index) => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                                <StepContent>
                                                    <Typography>{getStepContent(index)}</Typography>
                                                    <div className={classes.actionsContainer}>
                                                        <div>
                                                            <Button
                                                                disabled={activeStep === 0}
                                                                onClick={handleBack}
                                                                className={classes.button}
                                                            >
                                                                Back
                                                            </Button>
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                onClick={handleNext}
                                                                className={classes.button}
                                                            >
                                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </StepContent>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </Grid>
                                <Grid item xs={12} md={12} sm={12} lg={12} direction='row'>
                                    {/* <Grow in={true} timeout={2000}>
                                    </Grow> */}
                                </Grid>
                                <Grid item xs={12} md={12} sm={12} lg={12} direction='row'>
                                    {/* <Grow in={true} timeout={2000}>
                                    </Grow> */}
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grow>
            </Grid>
        </div>
    );
}

export default Github;