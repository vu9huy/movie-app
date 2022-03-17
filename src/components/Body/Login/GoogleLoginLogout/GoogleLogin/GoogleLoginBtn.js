
import React, { useState } from 'react';
import { GoogleLogin, useGoogleLogin } from 'react-google-login';

import '../../GoogleLoginLogout/GoogleLoginLogout.scss';

import googleLogo from '../../../../../assets/images/google-logo.png'

const clientId = '614024383426-lu7g0gnvhp3h5t6af1lfdrnunim0s8bg.apps.googleusercontent.com'

const GoogleLoginBtn = () => {

    const onSuccess = (res) => {
        console.log(res.profileObj);
    }

    const onFailure = (res) => {
        console.log('login failed');
    }

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline'
    })

    return (
        // <div className='google-login login-item'>
        <div className='login-google-button ' onClick={signIn}>
            <img src={googleLogo} />
            <span>Sign in with Google</span>
        </div>
        // </div>
    );
}

export default GoogleLoginBtn;
