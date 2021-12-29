import React, { Component } from 'react'
import './Work.css';
import img2 from '../Assets/img2.png';
import img1 from '../Assets/img1.png';
import { Link } from 'react-router-dom';

export default class Work extends Component {
    render() {
        return (
            <div className='work'>
                <div className='work-one'>
                    <div className='work-one-left'>
                        <img className='work-one-img' src={img2} />
                    </div>
                    <div className='work-one-right'>
                        <div className='work-one-pill'>
                            <p className='work-one-pill-txt'>Build closer relationships with customers</p>
                        </div>
                        <h1 className='work-one-title'>We know exactly how important your customers are to you</h1>
                        <p className='work-one-txt'>As we work with you on strengthening your messaging and brand identity, we help you understand your customers even better. The message only works when it’s intended for the right recipient. We help you deep dive intowho your best customers are and why they connect with you through.</p>
                    </div>
                </div>
                <div className='work-two'>
                    <div className='work-two-left'>
                        <div className='work-two-pill'>
                            <p className='work-two-pill-txt'>A team with a mission</p>
                        </div>
                        <h1 className='work-two-title'>We tell powerful stories that matter to you and your customers (and us)</h1>
                        <p className='work-two-txt'>We'll work extensively with you to figure out your goals and where you want to take your brand, along with a plan to get there. We'll help you execute the plan and support your team wherever necessary. At the end, we share measurable outcomes and actionable learnings.</p>
                    </div>
                    <div className='work-two-right'>
                        <img className='work-two-img' src={img1} />
                    </div>
                </div>
                <div className='about-three'>
                    <h1 className='about-three-title'> We're all about the power of storytelling.</h1>
                    <p className='work-three-txt'>Stories that speak to who you are as a brand.</p>
                    <Link to='/contact' className='about-three-pill'>
                        <p>Contact us</p>
                    </Link>
                </div>                
            </div>
        )
    }
}
