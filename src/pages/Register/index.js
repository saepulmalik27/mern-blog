import React from 'react';
import './register.scss';
import {registerBG} from '../../assets';
import { Button, Gap, Input, Link } from '../../components';



const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
            <img src={registerBG} alt="img" className="bg-image"/> 
            </div>
             
            <div className="right">
                <form className="form-group">
                    <h1 className="form-group--title">Register</h1>
                    <Input label="Name" placeholder="Full Name" />
                    <Input label="Email" placeholder="Email"/>
                    <Input label="Password" placeholder="Password" />
                    <Gap height="20px"/>
                    <Button title='Submit' type="submit"/>
                    <Gap height="15px"/>
                    <Link title="Kembali Ke Login"/>
                </form>

            </div>          
        </div>
    )
}

export default Register
