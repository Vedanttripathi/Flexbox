import React, { Component } from 'react'
import './About.css';
import img4 from '../Assets/img4.png';
import tomas from '../Assets/Tomas.png';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className='about-one'>
                    <div className='about-one-left'>
                        <img className='about-one-img' src={img4} alt='about-image' />
                    </div>
                    <div className='about-one-right'>
                        <div className='about-one-pill'>
                            <p className='about-one-pill-txt'>A business with a heart</p>
                        </div>
                        <h1 className='about-one-title'>We love a good story</h1>
                        <p className='about-one-txt'>And we love being part of creating them. Every member of our crew is a storyteller at heartand cares about digging up and telling the stories that matter most in the world today</p>
                    </div>
                </div>
                <div className='about-two'>
                    <div className='about-two-left'>
                        <div className='about-two-pill'>
                            <p className='about-two-pill-txt'>We fit all sizes</p>
                        </div>
                        <h1 className='about-two-title'>Whether you are just starting out or trying to hit the next big milestone as a brand, we’re here for you</h1>
                        <p className='about-two-txt'>We understand the wildely different needs of different sized brands. Our crew of creative folks, money-makers, planners & general caffeine addicts specialize in their functions and you can ask us fot as much or as little support as you need</p>
                    </div>
                    <div className='about-two-right'>
                        <img className='tomas' src={tomas} />
                    </div>
                </div>
                <div className='about-three'>
                    <h1 className='about-three-title'> Stop wasting time, and scale your business with us </h1>
                    <p className='about-three-txt'>Grow faster with a website that helps you convert more customers</p>
                    <Link to='/contact' className='about-three-pill'>
                        <p>Contact us</p>
                    </Link>
                </div>
            </div>
        )
    }
}
