import React, { Component } from 'react'
import './Footer.css'
import logo2 from '../Assets/invert_logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-left'>
                    <div className='logo-box'>
                        <img className='footer-logo' src={logo2} />
                        <h2>Flexbox</h2>
                    </div>
                    <p className='footer-left-txt'>Flexbox is a fast growing startup working tirelessly to make fast growing business like yours bloom.</p>
                    <div className='social-media-icons'>
                        <FontAwesomeIcon className='social-icons' icon={faFacebook} size="2x" />
                        <FontAwesomeIcon className='social-icons' icon={faInstagram} size="2x" />
                        <FontAwesomeIcon className='social-icons' icon={faTwitter} size="2x" />
                    </div>
                </div>
                <div className='footer-right'>
                    <h2>Quick Links</h2>
                    <div className='link-box'>
                        <Link to='/' className='footer-links' ><p>Home</p></Link>
                        <Link to='/work' className='footer-links' ><p>Work</p></Link>
                    </div>
                    <div className='link-box'>
                        <Link to='/about' className='footer-links' ><p>About</p></Link>
                        <Link to='/' className='footer-links' ><p>Team</p></Link>
                    </div>
                    <p style={{fontWeight: 'bold'}}>Made with ❤️ by Vedant Tripathi</p>
                </div>
            </div>
        )
    }
}
