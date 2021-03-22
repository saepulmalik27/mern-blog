import React from 'react'
import { logo } from '../../../assets'
import './header.scss'
const Header = () => {
    return (
        <div className="header">
            <div className="logo-app">
            <img src={logo} alt="logo"/>
                    <p>Saepul Malik</p>
            </div>
            <div className="menu-item">
                logout
            </div>
        </div>
    )
}

export default Header
