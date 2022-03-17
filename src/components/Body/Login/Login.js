import React, { useRef, useEffect } from "react";
import GoogleLoginBtn from './GoogleLoginLogout/GoogleLogin/GoogleLoginBtn';
import { Link } from 'react-router-dom';
import './Login.scss'

const Login = ({ isOpenLogin, setIsOpenLogin }) => {

    const wrapperRef = useRef(null);
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsOpenLogin(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    useOutsideAlerter(wrapperRef);
    function handleClosedLogin() {
        setIsOpenLogin(false);
    }

    return (
        isOpenLogin && <div className='login'>
            <div className='login-wrapper flex-column' ref={wrapperRef}>
                <div className='login-closed' onClick={() => handleClosedLogin()}>
                    <i className='bx bx-x'></i>
                </div>
                <GoogleLoginBtn />
                <div className="or">Or</div>
                <div className="basic-login flex-column">
                    <input className="login-item" type='text' placeholder="User Name" />
                    <input className="login-item" type='password' placeholder="Password" />
                    <div className="login-item login-button">Login</div>
                </div>
                <div className="sign-up">
                    New user?
                    <span><Link onClick={() => handleClosedLogin()} to="/signup">Sign up!</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Login;