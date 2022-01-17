import React, {Fragment, useEffect, useState} from 'react'
import Iframe from 'react-iframe'

import { useAlert } from 'react-alert'

const Contact = () => {
    const [name, setName] = useState('Name*')
    const [phone, setPhone] = useState('Phone*')
    const [email, setEmail] = useState('Email*')
    const [message, setMessage] = useState('Comment*')

    //const alert = useAlert()

    const submitHandler = (evt) => {
        evt.preventDefault()
        setName('')
        setPhone('')
        setEmail('')
        setMessage('Please, this feature is not yet implemented. Thanks!')
        //alert.success('This is feature is not yet ok. Thanks!')
        console.log('This is feature is not yet ok. Thanks!')
    }

    return (
        <div className="main-container">
            <section className="iq-contact wrapper">
                <div className="container-fluid h-100">
                    <div className="row row-eq-height h-100">
                        <div className="col-md-3 purple-bg">
                            <div className="iq-objects">
                                <span className="iq-objects-01">
                                    <img className="img-fluid" src="images/01.png" alt="drive"/>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-9 main-content align-self-center">
                            <div id="boxscroll" className="inner-box">
                                <div className="iq-plr-40">
                                    <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-title iq-mb-15">
                                            <small>My Contact</small>
                                        <h1 className="display-4 iq-tw-8 iq-font-purple">Contact Me</h1>
                                    </div>
                                    </div> 
                                    <div className="col-md-4">
                                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181602!2d144.95373631539215!3d-37.8172139797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1497005461921"
                                        id="myId"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"
                                        allowFullScreen
                                    />
                                    </div>  
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h3 className="title iq-tw-8 text-uppercase iq-mt-0">Get in Touch</h3>
                                                <ul className="contact-info">
                                                    <li><i className="ti-location-pin"></i> <p>Yaoundé Jouvence Cameroon</p> </li>
                                                    <li><i className="ti-marker-alt"></i> <p>georgesngandeu@gmail.com </p></li>
                                                    <li><i className="ti-mobile"></i> <p>(237) 696-668-110 </p></li>
                                                    <li><i className="ti-mobile"></i> <p>(237) 652-565-866 </p></li>
                                                </ul>
                                            </div>
                                        </div>
                                    <div className="iq-get-in">
                                    <div id="formmessage">Success/Error Message Goes Here</div>
                                    <form className="form-horizontal" id="contactform" onSubmit={submitHandler}>
                                        <div className="contact-form row">
                                            <div className="section-field col-md-4">
                                                <input 
                                                    id="name"
                                                    type="text"
                                                    value={name}
                                                    onChange={(evt) => setName(evt.target.value) }
                                                />
                                            </div>
                                            <div className="section-field col-md-4">
                                                <input 
                                                    type="email"
                                                    value={email}
                                                    onChange={(evt) => setEmail(evt.target.value) }
                                                />
                                            </div>
                                            <div className="section-field col-md-4">
                                                <input 
                                                    type="text"
                                                    value={phone}
                                                    onChange={(evt) => setPhone(evt.target.value) }
                                                />
                                            </div>
                                            <div className="section-field textarea col-md-12">
                                                <textarea 
                                                    className="input-message"
                                                    rows="5"
                                                    value={message}
                                                    onChange={(evt) => setMessage(evt.target.value) }
                                                ></textarea>
                                            </div>
                                            <div className="col-md-12">
                                                <input type="hidden" name="action" value="sendEmail" />
                                            <button id="submit" name="submit" type="submit" value="Send" className="button iq-mt-30">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
