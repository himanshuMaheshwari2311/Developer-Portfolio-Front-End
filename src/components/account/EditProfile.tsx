/* eslint-disable no-unused-expressions */
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { withRouter, RouteComponentProps} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Avatar, Tooltip, Button } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PeopleIcon from '@material-ui/icons/People';
import avatar from './../../assets/avatar.jpg';

const useStyles = makeStyles(theme => ({
    formContainer : {
        backgroundColor: `#ffffff`,
        height: '100%',
        position: `relative`,
        boxShadow: `15px 35px 20px #777`,
        [theme.breakpoints.up('sm')]: {
            top: `2.5%`,
            bottom: `2.5%`,
            height: '95%',
        }, 
    },
    icon: {
        top:`10%`,
        position: `relative`,
        margin:`auto`,  
        width: 80,
        height: 80,  
        padding: theme.spacing(2),    
        [theme.breakpoints.up('sm')]: {
            width: 170,
            height: 170
        },      
    },
    userName: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(4),
        position: `relative`,
        fontWeight: `bolder`,
        textAlign: `center`,
        fontSize: `1.3rem`,
        fontFamily: `medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif`,
        [theme.breakpoints.up('sm')]: {
            fontSize: `2rem`,
            //padding: theme.spacing(2),
            marginTop: theme.spacing(8),
        },   

    },
    bio: {
        marginBottom: theme.spacing(4),
        position: `relative`,
        textAlign: `center`,
        fontSize: `0.8rem`,
        fontFamily: `medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif`,
        [theme.breakpoints.up('sm')]: {
            fontSize: `1rem`,
            marginBottom: theme.spacing(6),
        },   

    },
    emailContainer: {
        position: `relative`,
        margin:`auto`,
        display: `flex`,
        flexDirection: `row` ,
        justifyContent: `center`,
        
    },
    email: {
        fontSize: `1em`,
        [theme.breakpoints.up('sm')]: {
            fontSize: `1.5em`
        },     
    },
    worksAtContainer: {
        position: `relative`,
        margin:`auto`,
        display: `flex`,
        flexDirection: `row` ,
        justifyContent: `center`,
        
    },
    worksAt: {
        fontSize: `1em`,
        //fontFamily: `medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif`,
        [theme.breakpoints.up('sm')]: {
            fontSize: `1.5em`
        },     
    },
    editProfileContainer: {
        position: `relative`,
        margin:`auto`,
        display: `flex`,
        justifyContent: `center`,   
        padding: theme.spacing(2)
    },

}));
const EditProfile: React.FC<RouteComponentProps> =  ({ history })  =>  {
    const styles = useStyles(); 

    return (
        <React.Fragment>
        <CssBaseline />
        <Container  maxWidth="xs" className={styles.formContainer}>   
        <Tooltip title="Change your avatar" arrow>
        <Avatar className={styles.icon}
            alt="profilepicture" src={avatar} variant="circle" />
        </Tooltip>       
        <Typography variant="h2" className={styles.userName}>
           Himanshu Maheshwari
        </Typography> 
        <Typography variant="body1" className={styles.bio}>
          React Evangelist
        </Typography>  
        <div className={styles.emailContainer}>
          <MailIcon/>
          <Typography variant="h6" className={styles.email}>
           himanshumaheshwari@gmail.com
        </Typography> 
        </div>
        <div className={styles.worksAtContainer}>
          <PeopleIcon/>
          <Typography variant="h6" className={styles.worksAt}>
           Deutsche Bank
        </Typography> 
        </div>
        <div className={styles.editProfileContainer}>
        <Button variant="contained" color="primary" >
            Edit Profile
        </Button>
        </div>   
        </Container>
        </React.Fragment>
    );
    
}

export default withRouter(EditProfile);






