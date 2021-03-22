import React from 'react'
import { facebookIco, linkedinIco, instagramIco,twitterIco, logo } from '../../../assets'
import './footer.scss'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="logo-app">
                    <img src={logo} alt="logo"/>
                    <p>Saepul Malik</p>
                </div>
                <div className="logo-sosial-media">
                    <img src={facebookIco} alt="facebook-icon"/>
                    <img src={instagramIco} alt="instagram-icon"/>
                    <img src={linkedinIco} alt="linkedin-icon"/>
                    <img src={twitterIco} alt="twitter-icon"/>
                </div>
            </div>
            <div className="copyright">2020 Saepul Malik</div>
        </div>
    )
}

export default Footer
