import React, { Component } from 'react'
import './Contact.css';
import iphone from '../Assets/iphone.png';
import emailjs from 'emailjs-com';

export default class Contact extends Component {


    sendMail = (e) => {
        e.preventDefault();
        if (e.target) {
            emailjs.sendForm('service_wasb77q', 'template_pigum0k', e.target, 'user_292TkIUvz4FwLB8UD2Qhx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        }

        
    }

    render() {
        return (
            <div className='contact-main'>
                <div className='contact-left'>
                    <img className='iphone' src={iphone} />
                </div>
                <div className='contact-right'>
                    <form className='contact-form' onSubmit={this.sendMail}>
                        <h1 className='form-heading'>Get in touch</h1>
                        <div className='name-email'>
                            <input type='text' name='name' placeholder='Name' className='input-element' />
                            <input type='text' name='email' placeholder='Email' className='input-element' />
                        </div>
                        <input type='text' name='subject' placeholder='Subject' className='input-subject' />
                        <input type='text' name='message' placeholder='Message' className='input-message' />
                        <button className='btn'>Send Message</button>
                    </form>
                </div>
            </div>
        )
    }
}
