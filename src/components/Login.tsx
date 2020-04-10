import { makeStyles } from '@material-ui/core';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    googleSignInButton: {
        backgroundColor: 'transparent !important',
        fontSize: '0.975rem !important',
        minWidth: '64px !important',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
        lineHeight: '1.75 !important',
        borderRadius: '4px !important',
        letterSpacing: '0.02857em !important',
        textTransform: 'uppercase',
        color: '#fff !important',
        '&:hover': {
            backgroundColor: 'transparent !important',
        }
    },
}));

const Login: React.FC<any> = ({ setUser, history }) => {
    const classes = useStyles();

    const loginAction = (response: any) => {
        try {
            const userAuth = {
                name: response.profileObj.name,
                email: response.profileObj.email,
                imageUrl: response.profileObj.imageUrl,
                token: response.googleId
            }

            localStorage.setItem("userId", userAuth.token);
            setUser(userAuth.token);
            history.push("/");

        } catch (error) {
            console.log(error);
            history.push("/login");
        }
    }

    const retryAction = (response: any) => {
        console.log(response);
        history.push("/login");

    }

    return (
        <GoogleLogin
            clientId="865958668201-3upung40a7uuidhh47hp34v91rggsgl8.apps.googleusercontent.com"
            buttonText="Login"
            icon = {false}
            onSuccess={loginAction}
            onFailure={retryAction}
            cookiePolicy={'single_host_origin'}
            className={classes.googleSignInButton}
        />
    );

}
export default withRouter(Login);