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
        padding: theme.spacing(3),
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'row'
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
            width: 120,
            height: 120,
           // margin: theme.spacing(2), 
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
       // border: '1px solid #c0392b',
        color: '#c0392b'
    },

    title:{
        align: 'center',
        fontSize: '1.7em',
        display: 'block',
        textAlign: 'center',
        padding: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(10), 
        },  
        fontWeight: 'bolder',
        whiteSpace: 'inherit'
    },
    button: {
        float: 'right',
        padding: theme.spacing(4),
        marginRight: '50px',

    }

}));

 const  ProfileIcons =() =>  {
    const styles = useStyles();  
    let [profilesSelected, setSelectedProfiles] = React.useState([] as any) ;    
    // let profileObject =[
    //    {"url" :  github, "iconName": "Github"},
    //    {"url" :  linkedin, "iconName": "Linkedin"},
    //    {"url" :  medium, "iconName": "Medium"},
    //    {"url" :  stackoverflow, "iconName": "Stackoverflow"},
    // ];

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
                 Select the profiles you want to add in your portfolio!
                 </Typography>
                
                {/* <h1> Select the profiles you want to add in your portfolio!</h1> */}
                 <div className={styles.iconsContainer}>
                     <Avatar
                      onClick={clickProfileIcons} 
                      alt="github" data-attr="github" variant="circle"
                      src={github} 
                      className = { profilesSelected.includes("github") ? styles.iconsSelected :  styles.icons }  />
    
                     <Avatar 
                      onClick={clickProfileIcons}
                      alt="linkedin" data-attr="linkedin" variant="circle" 
                      src={linkedin} 
                      className = { profilesSelected.includes("linkedin") ? styles.iconsSelected :  styles.icons } />

                     <Avatar
                      onClick={clickProfileIcons} 
                      alt="medium" data-attr="medium" variant="circle"
                      src={medium} 
                      className = { profilesSelected.includes("medium") ? styles.iconsSelected :  styles.icons }  /> 

                     <Avatar 
                     onClick={clickProfileIcons} 
                     alt="stackoverflow" data-attr="stackoverflow" variant="circle"
                      src={stackoverflow} 
                      className = { profilesSelected.includes("stackoverflow") ? styles.iconsSelected :  styles.icons }  /> 
                 </div>

                 <Button variant="contained" className={styles.button} color="primary">
                    Build Portfolio
                </Button>
            </div>         
        );

    
}

export default ProfileIcons;
