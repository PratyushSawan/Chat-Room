import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Login.css';
import logo from './pratyushTitle.png';

function Login() {
    const [{}, dispatch]= useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) =>{
            dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src={logo}
                    alt="Login__Logo"
                />
                <div className="login__text">
                    <h1>Sign in to Join the Community</h1>
                </div>
                <Button onClick={signIn}>
                    signIn With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
