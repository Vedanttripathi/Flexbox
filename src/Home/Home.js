import React, { Component } from 'react'
import './Home.css';
import img9 from '../Assets/img9.jpg';
import steve from '../Assets/Steve_Jobs.png';

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='home-one'>
                    <div className='home-one-left'>
                        <img className='img-9' src={img9} />
                    </div>
                    <div className='home-one-right'>
                        <div className='home-one-pill'>
                            <p className='home-one-pill-txt'>Small boxes with powerful ideas</p>
                        </div>
                        <h1 className='home-one-title'>Struggling to stand out in a crowd</h1>
                        <p className='home-one-txt'>We help your brand keep up. Flexbox is an India based digital startup with an eye for small brands with big potential.</p>
                    </div>
                </div>
                <div className='home-two'>
                    <div className='home-two-left'>
                            <div className='home-two-pill'>
                                <p className='home-two-pill-txt'>We’re young, dynamic team</p>
                            </div>
                            <h1 className='home-two-title'>And here’s what we do.</h1>
                            <p className='home-two-txt'>We are a small goroup of individuals and we know to play to our strengths even as we push the boundaries of what we can create.</p>
                    </div>
                    <div className='home-two-right'>
                        <img className='steve' src={steve} />
                    </div>
                </div>
                <div className='home-three'>
                    <div className='home-three-pill'>
                        <p>Innovate - Invent - Inspire.</p>
                    </div>
                    <h1 className='home-three-title'>Your brand is a powerful story.</h1>
                    <p className='home-three-txt'>And we know just how to tell it. Flexbox is a startup chasing ideas and the bigger picture. We work with your brand strategy and focus on your online presence</p>
                </div>          
            </div>
        )
    }
}
