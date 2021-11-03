import React from 'react';
import { useHistory, useLocation } from 'react-router';
import initializeAuthentication from '../../../firebase/Firebase.init';
import UseAuth from '../hook/UseAuth';
initializeAuthentication()
const Login = () => {
    const { user, GoogleSignIn, setIsLoading } = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handlegoogleLogin = () => {
        GoogleSignIn()
            .then(res => {
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false))


    }
    return (
        <div id="login" className="m-5 pt-5">
            <h2>Please Sign In</h2>
            <button onClick={handlegoogleLogin}>Google Sign in</button>
        </div>
    );
};

export default Login;