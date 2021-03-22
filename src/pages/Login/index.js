
import React from 'react';
import {loginBG} from '../../assets';
import { Button, Gap, Input, Link } from '../../components';



const Login = () => {
    return (
        <div className="main-page">
            <div className="left">
            <img src={loginBG} alt="img" className="bg-image"/> 
            </div>
             
            <div className="right">
                <form className="form-group">
                    <h1 className="form-group--title">Login</h1>
                    <Input label="Email" placeholder="Email"/>
                    <Input label="Password" placeholder="Password" />
                    <Gap height="20px"/>
                    <Button title='Submit' type="submit"/>
                    <Gap height="15px"/>
                    <Link title="Register"/>
                </form>

            </div>          
        </div>
    )
}

export default Login
