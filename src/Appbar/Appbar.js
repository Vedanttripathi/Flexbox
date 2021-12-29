import React, { Component } from 'react';
import './Appbar.css'
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

export default class Appbar extends Component {
    render() {
        return (
            <div className='appbar'>
                <div className='logo'>
                    <img className='logo_img' src={logo} alt='logo' />
                    <h2 className='logo_txt'>Flexbox</h2>
                </div>
                <div className='navbar'>
                    <Link to='/' className='nav-links' ><p>Home</p></Link>
                    <Link to='/about' className='nav-links' ><p>About</p></Link>
                    <Link to='/work' className='nav-links' ><p>Work</p></Link>
                    <Link to='/' className='nav-links' ><p>Team</p></Link>
                </div>
                <Link className='contact-link' to='/contact'>
                    <div className='contact'>
                        <div className='contact-btn'>
                            <p className='contact-btn-txt'>Contact us</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
