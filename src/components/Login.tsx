import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import { withRouter } from 'react-router-dom';


const Login: React.FC<any> = ({ setUser, history }) => {

    useEffect(() => {
        console.log("Super log :: ",localStorage.getItem("userId"))
        if (localStorage.getItem("userId") != null) {
            history.push("/");
        }
    })

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
            clientId="<your-client-id-here>"
            buttonText="Login"
            onSuccess={loginAction}
            onFailure={retryAction}
            cookiePolicy={'single_host_origin'}
        />
    );

}
export default withRouter(Login);