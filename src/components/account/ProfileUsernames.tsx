import { Avatar, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import github from './../../assets/github.svg';
import linkedin from './../../assets/linkedin.svg';
import medium from './../../assets/medium.png';
import stackoverflow from './../../assets/stackoverflow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createStyles, makeStyles, withStyles, Theme, useTheme } from '@material-ui/core/styles'
import { faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles( (theme: Theme) => 
createStyles({
    root: {
        backgroundColor: '#ccccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
    iconButton: {
        color: theme.palette.secondary.main,
        fontSize: "22px",
    }
}));

function ColorlibStepIcon(props: any) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;


    const icons: any = {
        1: <FontAwesomeIcon icon={faGithub} className={classes.iconButton}/>,
        2: <FontAwesomeIcon icon={faLinkedin} className={classes.iconButton}/>,
        3: <FontAwesomeIcon icon={faStackOverflow} className={classes.iconButton} />,
        4: <FontAwesomeIcon icon={faMedium} className={classes.iconButton} />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        align: `center`
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    usernameContainer: {
        minHeight: `70%`,
        width: `50%`,
        margin: `auto`,
        padding: theme.spacing(4),
        display: `flex`,
        flexDirection: 'column',
        justifyContent: `center`,
        alignItems: `center`
    },
    icons: {
        [theme.breakpoints.up('xs')]: {
            width: 200,
            height: 200,
            margin: theme.spacing(7),
        },
        [theme.breakpoints.down('sm')]: {
            width: 120,
            height: 120,
            margin: theme.spacing(2),
        }
    },
    buttons: {
        display: `flex`,
        flexDirection: `row`,
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        padding: theme.spacing(4)
    }
}));

function getSteps(profilesSelected: any) {
    const profilesArray = [
        { name: 'Github', imagePath: github },
        { name: 'Linkedin', imagePath: linkedin },
        { name: 'Medium', imagePath: medium },
        { name: 'Stackoverflow', imagePath: stackoverflow }
    ];
    profilesSelected = profilesSelected.map((profileSelected: any) => {
        let obj = profilesArray.find(o => o.name === profileSelected)
        return obj;
    });
    return profilesSelected;
}

function ProfileUsernames(props: any) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [username, setValue] = React.useState('');
    const [usernames, setUsernames] = React.useState([{}] as any);
    const classes = useStyles();
    const profilesSelected = props.history.location.state.profilesSelected
    const steps = getSteps(profilesSelected);

    const handleNext = (event: any) => {
        /* network call to verify whether the entered url is coreeect or not, if correct*/
        setUsernames((prevUsernames: any[]) => [...prevUsernames, { "profile": steps[activeStep].name, "username": username }]);
        if(activeStep !== steps.length)
            setActiveStep((prevActiveStep) => prevActiveStep + 1)        
        setValue('');
    };

    useEffect(() => {
        if (activeStep === steps.length) {
            props.history.push({
                pathname: '/',
            })
        }
    }, [usernames])
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    if (activeStep < steps.length) {
        return (
            <div className={classes.root}>
                <div>
                    <div className={classes.usernameContainer}>
                        <Avatar
                            alt="github" data-attr="github" variant="circle"
                            src={steps[activeStep].imagePath}
                            className={classes.icons} />
                        <TextField style={{ margin: `20px` }}
                            id="input-with-icon-textfield"
                            fullWidth
                            value={username}
                            placeholder={`Enter your ${steps[activeStep].name} username`}
                            onChange={(e) => setValue(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <div className="buttons">
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                        </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={username === ''}
                                onClick={handleNext}
                                className={classes.button}>
                                {activeStep === steps.length - 1 ? 'Build Portfolio' : 'Next'}
                            </Button>
                        </div>
                    </div>
                </div>
                <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                    {steps.map((label: any) => (
                        <Step key={label.name}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label.name}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
        );
    } else {
        return null;
    }
}

export default withRouter(ProfileUsernames);