
import React from 'react';
import './Footer.scss';

import logo from '../../assets/images/logo-2.png';

function Footer() {
    return (
        <div className='footer background'>
            <div className='footer-container flex-column'>
                <div className='footer-logo brand flex-row'>
                    <div className='logo'>
                        <img src={logo} />
                    </div>
                    <p >Vetflix</p>
                </div>
                <div className='footer-wrapper flex-row'>
                    <div className='footer-item '>
                        <ul>
                            <li><a href=''>FAQ</a></li>
                            <li><a href=''>Investor Relations</a></li>
                            <li><a href=''>Privacy</a></li>
                            <li><a href=''>Speed Test</a></li>
                        </ul>
                    </div>
                    <div className='footer-item'>
                        <ul>
                            <li><a href=''>Help Center</a></li>
                            <li><a href=''>Jobs</a></li>
                            <li><a href=''>Cookie Preferences</a></li>
                            <li><a href=''>Legal Notices</a></li>
                        </ul>
                    </div>
                    <div className='footer-item'>
                        <ul>
                            <li><a href=''>Account</a></li>
                            <li><a href=''>Ways to Watch</a></li>
                            <li><a href=''>Corporate Information</a></li>
                        </ul>
                    </div>
                    <div className='footer-item'>
                        <ul>
                            <li><a href=''>Media Center</a></li>
                            <li><a href=''>Terms of Use</a></li>
                            <li><a href=''>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;