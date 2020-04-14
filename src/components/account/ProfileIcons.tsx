/* eslint-disable no-unused-expressions */

import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import React from 'react';
import github from './../../assets/github.svg';
import linkedin from './../../assets/linkedin.svg';
import medium from './../../assets/medium.png';
import stackoverflow from './../../assets/stackoverflow.png';
import { withRouter, RouteComponentProps} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root:{
        display: 'block',
        minWidth: '100%',
        position: 'inherit',
    },
    iconsContainer: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',   
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'row',
            padding: theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    icons: {
        [theme.breakpoints.up('xs')]: {
            width: 200,
            height: 200,
            margin: theme.spacing(5), 
        },
        [theme.breakpoints.down('sm')]: {
            width: 140,
            height: 140,
            margin: theme.spacing(2), 
        },
        
        
    },

    iconsSelected: {
        [theme.breakpoints.up('xs')]: {
            width: 200,
            height: 200,
            margin: theme.spacing(5), 
        },
        [theme.breakpoints.down('sm')]: {
            width: 120,
            height: 120,
            margin: theme.spacing(2), 
        },     
        filter: 'blur(1px)', 
        border: '10px solid white',
        borderRadius: '50%',

        outline: 'none',
        color: '#c0392b'
    },

    title:{  
        marginTop: `8%`,
        fontSize: '1.1rem',
        textAlign: 'center',
        whiteSpace: 'inherit',
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(10), 
            marginTop: `0%`,
            fontSize: '1.7rem',
        },  
       
    },
    button: {
        float: 'right',
        padding: theme.spacing(4),
        marginRight: '50px',

    }

}));

const ProfileIcons: React.FC<RouteComponentProps> =  ({ history })  =>  {
    const styles = useStyles(); 
    const [profilesSelected, setSelectedProfiles] = React.useState([] as any) ;   

    const clickProfileIcons = (event: any) =>{
        let newProfileSelected = event.target.alt;
         setSelectedProfiles((prevProfilesSelected : any[] )=> {
             if(prevProfilesSelected.includes(newProfileSelected))
                return prevProfilesSelected.filter( profilesClicked  => profilesClicked !== newProfileSelected)
              else if(!prevProfilesSelected.includes(newProfileSelected))
                return [...prevProfilesSelected, newProfileSelected]
        })
    }   
    return (
        <div className={styles.root}>
                <Typography variant="h6" noWrap className={styles.title}> 
                <strong> Select profiles to create your portfolio</strong>
                </Typography>
                <div className={styles.iconsContainer}>
                    <Avatar
                    onClick={clickProfileIcons} 
                    alt="Github"  variant="circle"
                    src={github} 
                    className = { profilesSelected.includes("Github") ? styles.iconsSelected :  styles.icons }  />

                    <Avatar 
                    onClick={clickProfileIcons}
                    alt="Linkedin"  variant="circle" 
                    src={linkedin} 
                    className = { profilesSelected.includes("Linkedin") ? styles.iconsSelected :  styles.icons } />

                    <Avatar
                    onClick={clickProfileIcons} 
                    alt="Medium" variant="circle"
                    src={medium} 
                    className = { profilesSelected.includes("Medium") ? styles.iconsSelected :  styles.icons }  /> 

                    <Avatar 
                    onClick={clickProfileIcons} 
                    alt="Stackoverflow" variant="circle"
                    src={stackoverflow} 
                    className = { profilesSelected.includes("Stackoverflow") ? styles.iconsSelected :  styles.icons }  /> 
                </div>

                <Button
                    variant="contained" 
                    className={styles.button}
                    disabled={profilesSelected.length === 0} 
                    onClick={() => { 
                    history.push({
                        pathname: '/profileUsernames',
                        state: { profilesSelected: profilesSelected}
                    });
                    }} 
                color="primary">
                Build Portfolio
            </Button>
        </div>         
    );

    
}

export default withRouter(ProfileIcons);
