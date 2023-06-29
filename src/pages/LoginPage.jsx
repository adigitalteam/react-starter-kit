import React from 'react';
import './LoginPage.css';
import LoginForm from "./LoginForm";
import {useStore} from "../services/store";
import {get} from "lodash"; // Import style file

const LoginPage = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const loginPrepare = useStore(state => get(state, 'loginPrepare', false));

    var loginBackgroundImageClasses = "login-background-image ";

    if(loginPrepare){
        loginBackgroundImageClasses = "login-background-image login-in-animate";
    }else{
        loginBackgroundImageClasses = "login-background-image login-out-animate";
    }


    return (
        <div className="login-container">
            <div className={loginBackgroundImageClasses}>
            </div>
            <div className="login-form-container">
                <div className={"login-top-block"}>
                <img src={"./public/logotype.png"} className={"logo-login"}/>
                <span className={"logo-login-text"}>Digital</span>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
